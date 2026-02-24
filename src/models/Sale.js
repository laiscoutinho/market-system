const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

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
});

Sale.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Sale, { foreignKey: 'userId' });

module.exports = Sale;
