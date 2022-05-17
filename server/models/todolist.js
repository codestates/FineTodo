'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TODO extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  user.init(
    {
      id: DataTypes.INTEGER,
      summary: DataTypes.STRING,
      time: DataTypes.STRING,
      detail: DataTypes.STRING,
      supply: DataTypes.STRING,
      location: DataTypes.STRING,
      friend: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'todo'
    }
  );
  return TODO;
};
