const { DataTypes } = require('sequelize');

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

  Pantry: {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: this.Models.User,
        key: 'UserId',
      },
    },
    IngredientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: this.Models.Ingredient,
        key: 'IngredientId',
      },
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

  RecipeIngredients: {
    RecipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'recipeIngredientIndex',
      references: {
        model: this.Models.Recipe,
        key: 'RecipeId',
      },
    },
    IngredientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'recipeIngredientIndex',
      references: {
        model: this.Models.Ingredient,
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