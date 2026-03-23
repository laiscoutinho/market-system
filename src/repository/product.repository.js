// DOCS: busca com a categoria incluída dentro, cria, atualiza e remove produto
const Product = require('../models/product.model');
const Category = require('../models/category.model');


const findAll = () => Product.findAll({ include: { model: Category, as: 'category' } });

const findById = (id) => Product.findByPk(id);

const create = (data) => Product.create(data);

const update = (id, data, options) => Product.update(data, { where: { id }, ...options });

const remove = (id) => Product.destroy({ where: { id } });


module.exports = { findAll, findById, create, update, remove };
