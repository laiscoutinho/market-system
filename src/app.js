const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger.config');
const errorMiddleware = require('./middlewares/error.middleware');

const authRoute = require('./routes/auth.route');
const categoryRoute = require('./routes/category.route');
const productRoute = require('./routes/product.route');
const saleRoute = require('./routes/sale.route');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/auth', authRoute);
app.use('/categories', categoryRoute);
app.use('/products', productRoute);
app.use('/sales', saleRoute);

app.use(errorMiddleware);

module.exports = app;
