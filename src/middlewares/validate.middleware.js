const { ZodError } = require('zod');

// recebe um schema Zod e valida o req.body antes de chegar no controller
const validateMiddleware = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
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
