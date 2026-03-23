const sequelize = require('../config/database.config');
const saleRepository = require('../repository/sale.repository');
const productRepository = require('../repository/product.repository');
const SaleItem = require('../models/saleItem.model');
const AppError = require('../utils/app.error');

const create = async ({ items, userId }) => {
    const t = await sequelize.transaction();

    try {
        let total = 0;

        // valida estoque e calcula total antes de criar qualquer registro
        for (const item of items) {
            const product = await productRepository.findById(item.productId);
            if (!product) throw new AppError(`Produto ${item.productId} não encontrado`, 404);
            if (product.stock < item.quantity) throw new AppError(`Estoque insuficiente para ${product.name}`, 400);
            total += product.price * item.quantity;
        }

        const sale = await saleRepository.create({ total, userId, date: new Date() }, { transaction: t });

        // cria os itens e desconta o estoque de cada produto
        for (const item of items) {
            const product = await productRepository.findById(item.productId);

            await SaleItem.create({
                saleId: sale.id,
                productId: item.productId,
                quantity: item.quantity,
                unitPrice: product.price,
            }, { transaction: t });

            await productRepository.update(
                item.productId,
                { stock: product.stock - item.quantity },
                { transaction: t }
            );
        }

        await t.commit();
        return saleRepository.findById(sale.id);
    } catch (err) {
        await t.rollback();
        throw err;
    }
};

const findAll = async () => {
    return saleRepository.findAll();
};

const report = async ({ startDate, endDate }) => {
    return saleRepository.findByPeriod(startDate, endDate);
};

module.exports = { create, findAll, report };
