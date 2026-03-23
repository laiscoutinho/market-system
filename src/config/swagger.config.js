const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Market System API',
            version: '1.0.0',
            description: 'API de gestão de supermercado - produtos, estoque e vendas',
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },security: [{ bearerAuth: [] }],
            },
        },
        security: [{ bearerAuth: [] }],
    },
    apis: ['./src/docs/*.swagger.js'],
};

module.exports = swaggerJsdoc(options);
