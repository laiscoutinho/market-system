const jwt = require('jsonwebtoken');
const AppError = require('../utils/app.error');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return next(new AppError('Token não fornecido', 401));

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch {
        next(new AppError('Token inválido', 401));
    }
};

module.exports = authMiddleware;
