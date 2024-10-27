'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HeroImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      HeroImages.belongsTo(models.Hero, {foreignKey: "heroId"})
    }
  }
  HeroImages.init({
    imagePath: {
      type:DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'HeroImages',
    tableName: "hero_images",
    underscored:true
  });
  return HeroImages;
};