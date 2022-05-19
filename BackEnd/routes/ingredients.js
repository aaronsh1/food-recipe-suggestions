const express = require("express");
const ingredientRouter = express();
const { ModelNames, create, findByPk, findAll } = require("../database/datasource");
const { Op } = require("sequelize");

ingredientRouter.post('/ingredient', async (req, res) => {
  try {
    const data = req.body;
    const record = await create(ModelNames.Ingredient, data);
    res.send(record);

  } catch (err) {
    res.status(500).send(err);
  }
});

ingredientRouter.get('/ingredient/all', async (req, res) => {
  try {
    const ingredients = await findAll(ModelNames.Ingredient);
    const data = ingredients.map(item => item.dataValues);
    res.send(data);

  } catch (err) {
    res.status(500).send(err);
  }
});

ingredientRouter.get('/ingredient', async (req, res) => {
  try {
    const id = req.query.id;
    const record = await findByPk(ModelNames.Ingredient, id);

    if (!record) {
      res.status(404).send('Ingredient not found');
      return;
    }

    res.send(record);

  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = ingredientRouter;