const productService = require('../services/productService');

const create = async (req, res) => {
    try {
        const product = await productService.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const findAll = async (req, res) => {
    try {
        const products = await productService.findAll();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const update = async (req, res) => {
    try {
        const product = await productService.update(req.params.id, req.body);
        res.json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const remove = async (req, res) => {
    try {
        const result = await productService.remove(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = { create, findAll, update, remove };
