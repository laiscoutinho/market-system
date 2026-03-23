/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Gerenciamento de categorias
 *
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
 *             required: [name]
 *             properties:
 *               name:
 *                 type: string
 *                 example: Laticínios
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso
 *       400:
 *         description: Erro de validação
 *       401:
 *         description: Token não fornecido
 *       403:
 *         description: Acesso negado
 *
 *   get:
 *     summary: Listar categorias
 *     tags: [Categories]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de categorias retornada com sucesso
 *       401:
 *         description: Token não fornecido
 */
