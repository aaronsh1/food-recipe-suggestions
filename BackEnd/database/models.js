const { DataTypes } = require('sequelize');

const ModelNames = {
  User: 'User',
  Pantry: 'Pantry',
  Ingredient: 'Ingredient',
  RecipeIngredients: 'RecipeIngredients',
  UserFavourite: 'UserFavourite',
  Recipe: 'Recipe',
}

//TODO: Define getters and setters on relevant fields
//https://sequelize.org/docs/v6/core-concepts/getters-setters-virtuals/
//TODO: Validation
//https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
const Models = {
  User: {
    UserId: {
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

  Ingredient: {
    IngredientId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    IngredientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Category: {
      type: DataTypes.INTEGER,
    },
    Image: {
      type: DataTypes.STRING,
    },
  },

  Pantry: {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'UserId',
      },
    },
    IngredientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Ingredients',
        key: 'IngredientId',
      },
    },
  },

  Recipe: {
    RecipeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
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

  RecipeIngredients: {
    RecipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'recipeIngredientIndex',
      references: {
        model: 'Recipes',
        key: 'RecipeId',
      },
    },
    IngredientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'recipeIngredientIndex',
      references: {
        model: 'Ingredients',
        key: 'IngredientId',
      },
    },
  },

  UserFavourite: {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'userFavIndex',
      references: {
        model: 'Users',
        key: 'UserId'
      }
    },

    RecipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'userFavIndex',
      references: {
        model: 'Recipes',
        key: 'RecipeId'
      }
    },

    Timestamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
  },
}

module.exports = {
  Models,
  ModelNames,
};