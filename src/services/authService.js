const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async ({ name, email, password, role }) => {
    const exists = await User.findOne({ where: { email } });
    if (exists) throw new Error('Email já cadastrado');

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, role });

    return { id: user.id, name: user.name, email: user.email, role: user.role };
};

const login = async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('Usuário não encontrado');

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error('Senha incorreta');

    const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '8h' }
    );

    return { token, user: { id: user.id, name: user.name, role: user.role } };
};

module.exports = { register, login };
