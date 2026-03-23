const AppError = require('../utils/app.error');

// recebe as roles permitidas e verifica se o usuário autenticado tem permissão
const roleMiddleware = (...roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return next(new AppError('Acesso negado', 403));
    }
    next();
};

module.exports = roleMiddleware;
