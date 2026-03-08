const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');
const { productValidator } = require('../middlewares/validators');
const validate = require('../middlewares/validate');

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Cadastrar produto
 *     tags: [Products]
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
 *               price:
 *                 type: number
 *               stock:
 *                 type: integer
 *               categoryId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Produto criado
 *       400:
 *         description: Erro de validação
 *       401:
 *         description: Token não fornecido
 *       403:
 *         description: Acesso negado
 */
router.post('/', authenticate, authorize('ADMIN'), productValidator, validate, productController.create);

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Listar produtos
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de produtos
 *       401:
 *         description: Token não fornecido
 */
router.get('/', authenticate, productController.findAll);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Atualizar produto
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Produto atualizado
 *       400:
 *         description: Produto não encontrado
 *       401:
 *         description: Token não fornecido
 *       403:
 *         description: Acesso negado
 */
router.put('/:id', authenticate, authorize('ADMIN'), productController.update);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Remover produto
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto removido
 *       400:
 *         description: Produto não encontrado
 *       401:
 *         description: Token não fornecido
 *       403:
 *         description: Acesso negado
 */
router.delete('/:id', authenticate, authorize('ADMIN'), productController.remove);

module.exports = router;
