/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Gerenciamento de produtos
 *
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
 *             required: [name, price, stock, categoryId]
 *             properties:
 *               name:
 *                 type: string
 *                 example: Arroz Integral
 *               price:
 *                 type: number
 *                 example: 8.99
 *               stock:
 *                 type: integer
 *                 example: 100
 *               categoryId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *       400:
 *         description: Erro de validação
 *       401:
 *         description: Token não fornecido
 *       403:
 *         description: Acesso negado
 *
 *   get:
 *     summary: Listar produtos
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de produtos retornada com sucesso
 *       401:
 *         description: Token não fornecido
 *
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
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Arroz Integral 5kg
 *               price:
 *                 type: number
 *                 example: 12.99
 *               stock:
 *                 type: integer
 *                 example: 50
 *               categoryId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 *       400:
 *         description: Erro de validação
 *       401:
 *         description: Token não fornecido
 *       403:
 *         description: Acesso negado
 *       404:
 *         description: Produto não encontrado
 *
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
 *         example: 1
 *     responses:
 *       200:
 *         description: Produto removido com sucesso
 *       401:
 *         description: Token não fornecido
 *       403:
 *         description: Acesso negado
 *       404:
 *         description: Produto não encontrado
 */
