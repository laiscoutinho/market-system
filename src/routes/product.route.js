const { Router } = require('express');
const productController = require('../controllers/product.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');
const validateMiddleware = require('../middlewares/validate.middleware');
const { createProductSchema, updateProductSchema } = require('../validations/product.validation');

const router = Router();

router.post('/', authMiddleware, roleMiddleware('ADMIN'), validateMiddleware(createProductSchema), productController.create);
router.get('/', authMiddleware, productController.findAll);
router.put('/:id', authMiddleware, roleMiddleware('ADMIN'), validateMiddleware(updateProductSchema), productController.update);
router.delete('/:id', authMiddleware, roleMiddleware('ADMIN'), productController.remove);

module.exports = router;
