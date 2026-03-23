const { z } = require('zod');

const registerSchema = z.object({
    name: z
        .string({ required_error: 'Nome é obrigatório' })
        .min(3, 'Nome deve ter no mínimo 3 caracteres')
        .max(100, 'Nome deve ter no máximo 100 caracteres'),
    email: z
        .string({ required_error: 'Email é obrigatório' })
        .email('Email inválido'),
    password: z
        .string({ required_error: 'Senha é obrigatória' })
        .min(6, 'Senha deve ter no mínimo 6 caracteres'),
        role: z.enum(['ADMIN', 'VENDEDOR'], {
        required_error: 'Role é obrigatória',
        invalid_type_error: 'Role deve ser ADMIN ou VENDEDOR',
    }),
});

const loginSchema = z.object({
    email: z
        .string({ required_error: 'Email é obrigatório' })
        .email('Email inválido'),
    password: z
        .string({ required_error: 'Senha é obrigatória' })
        .min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

module.exports = { registerSchema, loginSchema };
