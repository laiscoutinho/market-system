const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.config');

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    tableName: 'categories',
    modelName: 'Category',
});

module.exports = Category;
