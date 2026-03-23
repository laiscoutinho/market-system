const { Router } = require('express');
const saleController = require('../controllers/sale.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');
const validateMiddleware = require('../middlewares/validate.middleware');
const { createSaleSchema, reportSchema } = require('../validations/sale.validation');

const router = Router();

router.post('/', authMiddleware, validateMiddleware(createSaleSchema), saleController.create);
router.get('/', authMiddleware, saleController.findAll);
router.get('/report', authMiddleware, roleMiddleware('ADMIN'), validateMiddleware(reportSchema, 'query'), saleController.report);

module.exports = router;
