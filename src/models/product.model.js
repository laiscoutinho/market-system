const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.config');
const Category = require('./category.model');

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'products',
    modelName: 'Product',
});

Product.belongsTo(
    Category, 
    { foreignKey: 'categoryId', as: 'category' }
);

Category.hasMany(
    Product, 
    { foreignKey: 'categoryId', as: 'products' }
);

module.exports = Product;
