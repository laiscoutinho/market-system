const { z } = require('zod');

const saleItemSchema = z.object({
    productId: z
        .number({ required_error: 'ProductId é obrigatório', invalid_type_error: 'ProductId deve ser um número' })
        .int('ProductId deve ser um número inteiro')
        .positive('ProductId inválido'),
    quantity: z
        .number({ required_error: 'Quantidade é obrigatória', invalid_type_error: 'Quantidade deve ser um número' })
        .int('Quantidade deve ser um número inteiro')
        .min(1, 'Quantidade deve ser no mínimo 1'),
});

const createSaleSchema = z.object({
    items: z
        .array(saleItemSchema, { required_error: 'Itens são obrigatórios' })
        .min(1, 'Informe ao menos um item'),
});

const reportSchema = z.object({
    startDate: z
        .string({ required_error: 'Data inicial é obrigatória' })
        .regex(/^\d{4}-\d{2}-\d{2}$/, 'startDate deve estar no formato YYYY-MM-DD'),
    endDate: z
        .string({ required_error: 'Data final é obrigatória' })
        .regex(/^\d{4}-\d{2}-\d{2}$/, 'endDate deve estar no formato YYYY-MM-DD'),
});

module.exports = { createSaleSchema, reportSchema };
