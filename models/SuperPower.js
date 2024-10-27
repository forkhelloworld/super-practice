'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SuperPower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SuperPower.belongsToMany(models.Hero, {
        through:"hero_to_powers",
        foreignKey: "powerId"
      })
    }
  }
  SuperPower.init({
    name: {
      type:DataTypes.STRING,
      allowNull: true,
      validate: {
        notEmpty:true
      }
    }
  }, {
    sequelize,
    modelName: 'SuperPower',
    tableName: "super_power",
    underscored:true
  });
  return SuperPower;
};