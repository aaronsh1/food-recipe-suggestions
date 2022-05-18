const { DataTypes } = require('sequelize');

const Models = {
  User: {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Salt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  Pantry: {
    User: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Ingredient: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },

  Ingredient: {

  },

  RecipeIngredients: {

  },

  UserFavourite: {

  },

  Recipe: {

  },
}

module.exports = {
  Models,
};