const { ZodError } = require('zod');

// source define de onde validar: 'body' para POST/PUT, 'query' para GET com query params
const validateMiddleware = (schema, source = 'body') => (req, res, next) => {
    try {
        schema.parse(req[source]);
        next();
    } catch (err) {
        if (err instanceof ZodError) {
            const errors = {};
            err.errors.forEach((e) => {
                const field = e.path.join('.');
                errors[field] = e.message;
            });
            return res.status(400).json({ success: false, message: 'Erro de validação', errors });
        }
        next(err);
    }
};

module.exports = validateMiddleware;
