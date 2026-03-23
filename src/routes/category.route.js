const { Router } = require('express');
const categoryController = require('../controllers/category.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');
const validateMiddleware = require('../middlewares/validate.middleware');
const { createCategorySchema } = require('../validations/category.validation');

const router = Router();

router.post('/', authMiddleware, roleMiddleware('ADMIN'), validateMiddleware(createCategorySchema), categoryController.create);
router.get('/', authMiddleware, categoryController.findAll);

module.exports = router;
