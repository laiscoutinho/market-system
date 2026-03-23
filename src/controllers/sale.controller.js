const saleService = require('../services/sale.service');

const create = async (req, res, next) => {
    try {
        const sale = await saleService.create({ ...req.body, userId: req.user.id });
        res.status(201).json({ success: true, data: sale });
    } catch (err) {
        next(err);
    }
};

const findAll = async (req, res, next) => {
    try {
        const sales = await saleService.findAll();
        res.status(200).json({ success: true, data: sales });
    } catch (err) {
        next(err);
    }
};

const report = async (req, res, next) => {
    try {
        const sales = await saleService.report(req.query);
        res.status(200).json({ success: true, data: sales });
    } catch (err) {
        next(err);
    }
};

module.exports = { create, findAll, report };
