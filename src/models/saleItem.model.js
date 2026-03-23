const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.config');
const Sale = require('./sale.model');
const Product = require('./product.model');

const SaleItem = sequelize.define('SaleItem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    unitPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    saleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'sale_items',
    modelName: 'SaleItem',
});

// belongsTo: permite buscar este item já com os dados do model relacionado
// ex: ao usar findAll no SaleItem, posso incluir os dados da Sale e do Product junto usando o alias definido no 'as'
SaleItem.belongsTo(
    Sale, { foreignKey: 'saleId', as: 'sale' }
);
SaleItem.belongsTo(
    Product, { foreignKey: 'productId', as: 'product' }
);

// hasMany: permite buscar o model relacionado já com todos os seus itens dentro
// ex: ao buscar uma Sale ou Product, posso incluir todos os SaleItems relacionados usando o alias definido no 'as'
Sale.hasMany(
    SaleItem, { foreignKey: 'saleId', as: 'saleItems' }
);
Product.hasMany(
    SaleItem, { foreignKey: 'productId', as: 'saleItems' }
);

module.exports = SaleItem;
