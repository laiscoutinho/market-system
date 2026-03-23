const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../repository/user.repository');
const AppError = require('../utils/app.error');

const register = async ({ name, email, password, role }) => {
    const exists = await userRepository.findByEmail(email);
    if (exists) throw new AppError('Email já cadastrado', 400);

    const hashed = await bcrypt.hash(password, 10);
    const user = await userRepository.create({ name, email, password: hashed, role });

    return { 
        id: user.id, 
        name: user.name, 
        email: user.email, 
        role: user.role 
    };
};

const login = async ({ email, password }) => {
    const user = await userRepository.findByEmail(email);
    if (!user) throw new AppError('Credenciais inválidas', 401);

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new AppError('Credenciais inválidas', 401);

    const token = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '8h' }
    );

    return { 
        token, 
        user: { 
            id: user.id, 
            name: user.name, 
            role: user.role 
        } 
    };
};

module.exports = { register, login };
