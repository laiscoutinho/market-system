const categoryService = require('../services/category.service');

const create = async (req, res, next) => {
    try {
        const category = await categoryService.create(req.body);
        res.status(201).json({ success: true, data: category });
    } catch (err) {
        next(err);
    }
};

const findAll = async (req, res, next) => {
    try {
        const categories = await categoryService.findAll();
        res.status(200).json({ success: true, data: categories });
    } catch (err) {
        next(err);
    }
};

module.exports = { create, findAll };
