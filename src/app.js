const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

require('dotenv').config({ quiet: true });

const app = express();

app.use(cors());
app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/', (req, res) => {
    res.json({ message: 'O Market System API funcionando!' });
});

module.exports = app;
