const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');
const { categoryValidator } = require('../middlewares/validators');
const validate = require('../middlewares/validate');

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Criar categoria
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Categoria criada
 *       400:
 *         description: Erro de validação
 *       401:
 *         description: Token não fornecido
 *       403:
 *         description: Acesso negado
 */
router.post('/', authenticate, authorize('ADMIN'), categoryValidator, validate, categoryController.create);

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Listar categorias
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de categorias
 *       401:
 *         description: Token não fornecido
 */
router.get('/', authenticate, categoryController.findAll);

module.exports = router;
