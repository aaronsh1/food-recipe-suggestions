const express = require("express");
const recipeRouter = express();
const authMiddleware = require("../authMiddleware");
const { ModelNames, findAll, create, findByPk } = require("../database/datasource");
const { Op } = require("sequelize");

//req body:
/*
{
  IngredientIds: []
}
*/
recipeRouter.post('/recipe/search', async (req, res) => {
  try {
    const { IngredientIds } = req.body;

    const recipeIds = (await findAll(ModelNames.RecipeIngredients, {
      where: {
        IngredientId: {
          [Op.in]: IngredientIds, //TODO: Proper search algorithm
        }
      }
    })).map(item => item.dataValues.RecipeId);

    const recipes = (await findAll(ModelNames.Recipe, {
      where: {
        RecipeId: {
          [Op.in]: recipeIds,
        },
      },
    })).map(item => item.dataValues);

    res.send(recipes);

  } catch (err) {
    res.status(500).send(err);
  }
});

recipeRouter.get('/recipe/all', async (req, res) => {
  try {
    const recipes = await findAll(ModelNames.Recipe);
    const data = recipes.map(item => item.dataValues);
    res.send(data);

  } catch (err) {
    res.status(500).send(err);
  }
});

recipeRouter.get('/recipe', async (req, res) => {
  try {
    const id = req.query.id;
    const recipe = await findByPk(ModelNames.Recipe, id);

    if (!recipe) {
      res.status(404).send('Recipe not found');
      return;
    }

    res.send(recipe);

  } catch (err) {
    res.status(500).send(err);
  }
});

recipeRouter.post('/recipe', authMiddleware, async (req, res) => {
  try {
    const data = req.body;
    const record = await create(ModelNames.Recipe, data);
    res.send(record);

  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = recipeRouter;