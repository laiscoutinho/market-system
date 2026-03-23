// DOCS: busca com os itens e produtos dentro, cria dentro de uma transação e filtra por período para o relatório.
const { Op } = require('sequelize');
const Sale = require('../models/sale.model');
const SaleItem = require('../models/saleItem.model');
const Product = require('../models/product.model');


const findAll = () => Sale.findAll({
    include: { 
        model: SaleItem, as: 'saleItems', 
        include: { 
            model: Product, 
            as: 'product' 
        } 
    },
});

const findById = (id) => Sale.findByPk(id, {
    include: { 
        model: SaleItem, 
        as: 'saleItems', 
        include: { 
            model: Product, 
            as: 'product' 
        } 
    },
});

const findByPeriod = (startDate, endDate) => Sale.findAll({
    where: { 
        date: { [Op.between]: [startDate, endDate] } },
    include: { 
        model: SaleItem, 
        as: 'saleItems', 
        include: { 
            model: Product, 
            as: 'product' 
        } 
    },
});

// recebe options para suportar transação vinda do service
const create = (data, options) => Sale.create(data, options);


module.exports = { findAll, findById, create, findByPeriod };
