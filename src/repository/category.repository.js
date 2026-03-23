// DOCS: busca por nome para checar duplicata, busca todas e criação de categoria
const Category = require('../models/category.model');


const findAll = () => Category.findAll();

const findById = (id) => Category.findByPk(id);

const findByName = (name) => Category.findOne({ where: { name } });

const create = (data) => Category.create(data);


module.exports = { findAll, findById, findByName, create };
