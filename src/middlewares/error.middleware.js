const AppError = require('../utils/app.error');

// captura todos os erros da aplicação e retorna uma resposta padronizada
const errorMiddleware = (err, req, res, next) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({ success: false, message: err.message });
    }

    console.error(err);
    res.status(500).json({ success: false, message: 'Erro interno do servidor' });
};

module.exports = errorMiddleware;
