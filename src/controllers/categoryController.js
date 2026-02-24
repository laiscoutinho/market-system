const categoryService = require('../services/categoryService');

const create = async (req, res) => {
    try {
        const category = await categoryService.create(req.body);
        res.status(201).json(category);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const findAll = async (req, res) => {
    try {
        const categories = await categoryService.findAll();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { create, findAll };
