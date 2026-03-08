const express = require('express');
const cors = require('cors');
const { apiReference } = require('@scalar/express-api-reference');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const saleRoutes = require('./routes/saleRoutes');

require('dotenv').config({ quiet: true });

const app = express();
app.use(cors());
app.use(express.json());

app.get('/docs-json', (req, res) => res.json(swaggerSpec));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/auth', authRoutes);
app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);
app.use('/sales', saleRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'O Market System API funcionando!' });
});

module.exports = app;
