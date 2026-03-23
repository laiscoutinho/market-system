/**
 * @swagger
 * tags:
 *   name: Sales
 *   description: Gerenciamento de vendas
 *
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
 *             required: [items]
 *             properties:
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required: [productId, quantity]
 *                   properties:
 *                     productId:
 *                       type: integer
 *                       example: 1
 *                     quantity:
 *                       type: integer
 *                       example: 3
 *     responses:
 *       201:
 *         description: Venda registrada com sucesso
 *       400:
 *         description: Erro de validação ou estoque insuficiente
 *       401:
 *         description: Token não fornecido
 *
 *   get:
 *     summary: Listar vendas
 *     tags: [Sales]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de vendas retornada com sucesso
 *       401:
 *         description: Token não fornecido
 *
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
 *         description: Relatório gerado com sucesso
 *       400:
 *         description: Erro de validação
 *       401:
 *         description: Token não fornecido
 *       403:
 *         description: Acesso negado
 */
