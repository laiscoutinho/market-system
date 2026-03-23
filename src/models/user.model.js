const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.config');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('ADMIN', 'VENDEDOR'),
        allowNull: false,           // faz com que nao chegue Null no banco
        defaultValue: 'VENDEDOR',   // valor padrão para novos usuários, nao preciso passar no create necessariamente
    },
}, {
    tableName: 'users',             // nome que quero no banco
    modelName: 'User',              // identificador pro Sequelize encontrar esse model
});

module.exports = User;
