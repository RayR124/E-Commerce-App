// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    //id
    id: {
      type: DataTypes.INT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //product
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //price
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      }
    },
    //qty in stock
    stock: {
      type: DataTypes.INT,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isDecimal: true,
      }
    },
    //category_id
    category_id: {
      type: DataTypes.INT,
      references: {
        model: "category",
        key: "id",
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
