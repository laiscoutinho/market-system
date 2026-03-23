/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Autenticação de usuários
 *
 * /auth/register:
 *   post:
 *     summary: Cadastrar usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, password, role]
 *             properties:
 *               name:
 *                 type: string
 *                 example: João Silva
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *               password:
 *                 type: string
 *                 example: senha123
 *               role:
 *                 type: string
 *                 enum: [ADMIN, VENDEDOR]
 *                 example: VENDEDOR
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Erro de validação
 *
 * /auth/login:
 *   post:
 *     summary: Login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *               password:
 *                 type: string
 *                 example: senha123
 *     responses:
 *       200:
 *         description: Token JWT gerado com sucesso
 *       401:
 *         description: Credenciais inválidas
 */
