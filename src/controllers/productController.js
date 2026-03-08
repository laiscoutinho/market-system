const productService = require('../services/productService');
const { success, error } = require('../middlewares/response');

const create = async (req, res) => {
    try {
        const product = await productService.create(req.body);
        success(res, product, 201);
    } catch (err) {
        error(res, err.message);
    }
};

const findAll = async (req, res) => {
    try {
        const products = await productService.findAll();
        success(res, products);
    } catch (err) {
        error(res, err.message, 500);
    }
};

const update = async (req, res) => {
    try {
        const product = await productService.update(req.params.id, req.body);
        success(res, product);
    } catch (err) {
        error(res, err.message);
    }
};

const remove = async (req, res) => {
    try {
        const result = await productService.remove(req.params.id);
        success(res, result);
    } catch (err) {
        error(res, err.message);
    }
};

module.exports = { create, findAll, update, remove };
