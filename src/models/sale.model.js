const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.config');
const User = require('./user.model');

const Sale = sequelize.define('Sale', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'sales',
    modelName: 'Sale',
});

Sale.belongsTo(
    User, 
    { foreignKey: 'userId', as: 'user' }
);

User.hasMany(
    Sale, 
    { foreignKey: 'userId', as: 'sales' }
);

module.exports = Sale;
