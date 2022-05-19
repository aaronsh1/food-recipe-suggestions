const express = require("express");
const ingredientRouter = express();
const { ModelNames } = require("../database/datasource");
const { Op } = require("sequelize");

ingredientRouter.post('/ingredient', (req, res) => {

});

ingredientRouter.get('/ingredient', (req, res) => {

});

module.exports = ingredientRouter;