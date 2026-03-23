const { z } = require('zod');

const createCategorySchema = z.object({
    name: z
        .string({ required_error: 'Nome é obrigatório' })
        .min(2, 'Nome deve ter no mínimo 2 caracteres')
        .max(80, 'Nome deve ter no máximo 80 caracteres'),
});

module.exports = { createCategorySchema };
