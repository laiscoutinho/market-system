const authService = require('../services/authService');

const register = async (req, res) => {
    try {
        const user = await authService.register(req.body);
        res.status(201).json(user);
    } catch (err) {
       res.status(400).json({ error: err.message });
    }
};

const login = async (req, res) => {
    try {
        const data = await authService.login(req.body);
        res.json(data);
    } catch (err) {
        res.status(401).json({ error: err.message });
    }
};

module.exports = { register, login };
