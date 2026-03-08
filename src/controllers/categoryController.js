const categoryService = require('../services/categoryService');
const { success, error } = require('../middlewares/response');

const create = async (req, res) => {
    try {
        const category = await categoryService.create(req.body);
        success(res, category, 201);
    } catch (err) {
        error(res, err.message);
    }
};

const findAll = async (req, res) => {
    try {
        const categories = await categoryService.findAll();
        success(res, categories);
    } catch (err) {
        error(res, err.message, 500);
    }
};

module.exports = { create, findAll };
