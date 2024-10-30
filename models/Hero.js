"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hero.hasMany(models.HeroImages, {
        foreignKey: "heroId",
      });
      Hero.belongsToMany(models.SuperPower, {
        through: "heroes_to_superpowers",
        foreignKey: "heroId",
      });
    }
  }
  Hero.init(
    {
      nickname: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      realName: {
        field: "real_name",
        type: DataTypes.STRING,
      },
      originDescription: {
        field: "origin_description",
        type: DataTypes.TEXT,
      },
      catchPhrase: {
        field: "catch_phrase",
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Hero",
      tableName: "heroes",
      underscored: true,
    },
  );
  return Hero;
};
