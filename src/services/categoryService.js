const Category = require('../models/Category');

const create = async ({ name }) => {
    const exists = await Category.findOne({ where: { name } });
    if (exists) throw new Error('Categoria já existe');
    return await Category.create({ name });
};

const findAll = async () => {
    return await Category.findAll();
};

module.exports = { create, findAll };
