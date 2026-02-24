const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');

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
 */
router.post('/', authenticate, authorize('ADMIN'), categoryController.create);

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Listar categorias
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 */
router.get('/', authenticate, categoryController.findAll);

module.exports = router;
