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
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'userFavIndex',
      references: {
        model: User,
        key: 'UserId'
      }
    },

    RecipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'userFavIndex',
      references: {
        model: Recipe,
        key: 'RecipeId'
      }
    },

    Timestamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
  },

  Recipe: {
    RecipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },

    RecipeName: {
      type: DataTypes.STRING,
      allowNull: true
    },

    Description: {
      type: DataTypes.STRING,
      allowNull: true
    },

    Method: {
      type: DataTypes.STRING,
      allowNull: true
    },

    Image: {
      type: DataTypes.STRING,
      allowNull: true
    },

    Author: {
      type: DataTypes.STRING,
      allowNull: true
    },
  },
}

module.exports = {
  Models,
};