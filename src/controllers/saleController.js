const saleService = require('../services/saleService');
const { success, error } = require('../middlewares/response');

const create = async (req, res) => {
    try {
        const sale = await saleService.create({ ...req.body, userId: req.user.id });
        success(res, sale, 201);
    } catch (err) {
        error(res, err.message);
    }
};

const findAll = async (req, res) => {
    try {
        const sales = await saleService.findAll();
        success(res, sales);
    } catch (err) {
        error(res, err.message, 500);
    }
};

const report = async (req, res) => {
    try {
        const { startDate, endDate } = req.query;
        if (!startDate || !endDate) return error(res, 'Informe startDate e endDate');
        const sales = await saleService.report({ startDate, endDate });
        success(res, sales);
    } catch (err) {
        error(res, err.message, 500);
    }
};

module.exports = { create, findAll, report };
