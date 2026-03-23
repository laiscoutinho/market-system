const productService = require('../services/product.service');

const create = async (req, res, next) => {
    try {
        const product = await productService.create(req.body);
        res.status(201).json({ success: true, data: product });
    } catch (err) {
        next(err);
    }
};

const findAll = async (req, res, next) => {
    try {
        const products = await productService.findAll();
        res.status(200).json({ success: true, data: products });
    } catch (err) {
        next(err);
    }
};

const update = async (req, res, next) => {
    try {
        const product = await productService.update(req.params.id, req.body);
        res.status(200).json({ success: true, data: product });
    } catch (err) {
        next(err);
    }
};

const remove = async (req, res, next) => {
    try {
        const result = await productService.remove(req.params.id);
        res.status(200).json({ success: true, data: result });
    } catch (err) {
        next(err);
    }
};

module.exports = { create, findAll, update, remove };
