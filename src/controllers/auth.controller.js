const authService = require('../services/auth.service');

const register = async (req, res, next) => {
    try {
        const user = await authService.register(req.body);
        res.status(201).json({ success: true, data: user });
    } catch (err) {
        next(err);
    }
};

const login = async (req, res, next) => {
    try {
        const data = await authService.login(req.body);
        res.status(200).json({ success: true, data });
    } catch (err) {
        next(err);
    }
};

module.exports = { register, login };
