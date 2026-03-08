const authService = require('../services/authService');
const { success, error } = require('../middlewares/response');

const register = async (req, res) => {
    try {
        const user = await authService.register(req.body);
        success(res, user, 201);
    } catch (err) {
        error(res, err.message);
    }
};

const login = async (req, res) => {
    try {
        const data = await authService.login(req.body);
        success(res, data);
    } catch (err) {
        error(res, err.message, 401);
    }
};

module.exports = { register, login };
