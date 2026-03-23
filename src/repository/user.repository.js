// DOCS: busca por email, por id e criação de usuário
const User = require('../models/user.model');


const findByEmail = (email) => User.findOne({ where: { email } });

const findById = (id) => User.findByPk(id);

const create = (data) => User.create(data);


module.exports = { findByEmail, findById, create };
