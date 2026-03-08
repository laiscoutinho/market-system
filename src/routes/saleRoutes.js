const express = require('express');
const router = express.Router();
const saleController = require('../controllers/saleController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');
const { saleValidator } = require('../middlewares/validators');
const validate = require('../middlewares/validate');

/**
 * @swagger
 * /sales:
 *   post:
 *     summary: Registrar venda
 *     tags: [Sales]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: integer
 *                     quantity:
 *                       type: integer
 *     responses:
 *       201:
 *         description: Venda registrada
 *       400:
 *         description: Estoque insuficiente
 *       401:
 *         description: Token não fornecido
 */
router.post('/', authenticate, saleValidator, validate, saleController.create);

/**
 * @swagger
 * /sales:
 *   get:
 *     summary: Listar vendas
 *     tags: [Sales]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de vendas
 *       401:
 *         description: Token não fornecido
 */
router.get('/', authenticate, saleController.findAll);

/**
 * @swagger
 * /sales/report:
 *   get:
 *     summary: Relatório de vendas por período
 *     tags: [Sales]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: startDate
 *         required: true
 *         schema:
 *           type: string
 *         example: "2025-01-01"
 *       - in: query
 *         name: endDate
 *         required: true
 *         schema:
 *           type: string
 *         example: "2025-12-31"
 *     responses:
 *       200:
 *         description: Relatório gerado
 *       400:
 *         description: Informe startDate e endDate
 *       401:
 *         description: Token não fornecido
 *       403:
 *         description: Acesso negado
 */
router.get('/report', authenticate, authorize('ADMIN'), saleController.report);

module.exports = router;
