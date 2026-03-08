const Product = require('../models/Product');
const Category = require('../models/Category');

const create = async ({ name, price, stock, categoryId }) => {
    const category = await Category.findByPk(categoryId);
    if (!category) throw new Error('Categoria não encontrada');
    return await Product.create({ name, price, stock, categoryId });
};

const findAll = async () => {
    return await Product.findAll({ include: Category });
};

const update = async (id, data) => {
    const product = await Product.findByPk(id);
    if (!product) throw new Error('Produto não encontrado');
    return await product.update(data);
};

const remove = async (id) => {
    const product = await Product.findByPk(id);
    if (!product) throw new Error('Produto não encontrado');
    await product.destroy();
    return { message: 'Produto removido' };
};

module.exports = { create, findAll, update, remove };
