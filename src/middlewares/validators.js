const { body } = require('express-validator');

const registerValidator = [
    body('name').notEmpty().withMessage('Nome é obrigatório'),
    body('email').isEmail().withMessage('Email inválido'),
    body('password').isLength({ min: 6 }).withMessage('Senha deve ter no mínimo 6 caracteres'),
    body('role').isIn(['ADMIN', 'VENDEDOR']).withMessage('Role inválida'),
];

const loginValidator = [
    body('email').isEmail().withMessage('Email inválido'),
    body('password').notEmpty().withMessage('Senha é obrigatória'),
];

const categoryValidator = [
    body('name').notEmpty().withMessage('Nome é obrigatório'),
];

const productValidator = [
    body('name').notEmpty().withMessage('Nome é obrigatório'),
    body('price').isFloat({ min: 0 }).withMessage('Preço inválido'),
    body('stock').isInt({ min: 0 }).withMessage('Estoque inválido'),
    body('categoryId').isInt().withMessage('Categoria inválida'),
];

const saleValidator = [
    body('items').isArray({ min: 1 }).withMessage('Informe ao menos um item'),
    body('items.*.productId').isInt().withMessage('ProductId inválido'),
    body('items.*.quantity').isInt({ min: 1 }).withMessage('Quantidade deve ser maior que zero'),
];

module.exports = { registerValidator, loginValidator, categoryValidator, productValidator, saleValidator };
