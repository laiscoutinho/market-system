const Sale = require('../models/Sale');
const SaleItem = require('../models/SaleItem');
const Product = require('../models/Product');
const sequelize = require('../config/database');

const create = async ({ items, userId }) => {
    const t = await sequelize.transaction();
    try {
        let total = 0;

        for (const item of items) {
            const product = await Product.findByPk(item.productId, { transaction: t });
            if (!product) throw new Error(`Produto ${item.productId} não encontrado`);
            if (product.stock < item.quantity) throw new Error(`Estoque insuficiente para ${product.name}`);
            total += product.price * item.quantity;
        }

        const sale = await Sale.create({ total, userId }, { transaction: t });

        for (const item of items) {
            const product = await Product.findByPk(item.productId, { transaction: t });
            await SaleItem.create({
                saleId: sale.id,
                productId: item.productId,
                quantity: item.quantity,
                unitPrice: product.price,
            }, { transaction: t });

            await product.update(
                { stock: product.stock - item.quantity },
                { transaction: t }
            );
        }

        await t.commit();
        return sale;
    } catch (err) {
        await t.rollback();
        throw err;
    }
};

const findAll = async () => {
    return await Sale.findAll({ include: [{ model: SaleItem, include: [Product] }] });
};

const report = async ({ startDate, endDate }) => {
    const { Op } = require('sequelize');
    return await Sale.findAll({
        where: {
            date: { [Op.between]: [startDate, endDate] },
        },
        include: [{ model: SaleItem, include: [Product] }],
    });
};

module.exports = { create, findAll, report };
