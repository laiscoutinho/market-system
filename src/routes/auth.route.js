const { Router } = require('express');
const authController = require('../controllers/auth.controller');
const validateMiddleware = require('../middlewares/validate.middleware');
const { registerSchema, loginSchema } = require('../validations/auth.validation');

const router = Router();

router.post('/register', validateMiddleware(registerSchema), authController.register);
router.post('/login', validateMiddleware(loginSchema), authController.login);

module.exports = router;
