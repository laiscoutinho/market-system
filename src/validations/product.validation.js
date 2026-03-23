const { z } = require('zod');

const createProductSchema = z.object({
    name: z
        .string({ required_error: 'Nome é obrigatório' })
        .min(2, 'Nome deve ter no mínimo 2 caracteres')
        .max(120, 'Nome deve ter no máximo 120 caracteres'),
    price: z
        .number({ required_error: 'Preço é obrigatório', invalid_type_error: 'Preço deve ser um número' })
        .positive('Preço deve ser maior que zero'),
    stock: z
        .number({ required_error: 'Estoque é obrigatório', invalid_type_error: 'Estoque deve ser um número' })
        .int('Estoque deve ser um número inteiro')
        .min(0, 'Estoque não pode ser negativo'),
    categoryId: z
        .number({ required_error: 'Categoria é obrigatória', invalid_type_error: 'CategoryId deve ser um número' })
        .int('CategoryId deve ser um número inteiro')
        .positive('CategoryId inválido'),
});

const updateProductSchema = createProductSchema.partial();

module.exports = { createProductSchema, updateProductSchema };
