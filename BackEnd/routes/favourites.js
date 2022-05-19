const express = require("express");
const favouritesRouter = express.Router();
const { ModelNames, findAll, create } = require("../database/datasource");
const { Op, Model } = require("sequelize");

const authMiddleware = require('../authMiddleware');

favouritesRouter.use(authMiddleware);

favouritesRouter.get("/favourites", async (req, res) => {
    let userId = req.UserId;

    let recipeIds = (await findAll(ModelNames.UserFavourite, {
        where: {
            UserId: userId
        }
    })).map(item => item.dataValues);

    let favourites = (await findAll(ModelNames.Recipe, {
        where: {
            RecipeId: {
                [Op.in]: recipeIds.map(
                    item => item.RecipeId
                )
            }
        }
    })).map(item => item.dataValues);

    res.send(favourites);;
});

favouritesRouter.post("/favourites", (req, res) => {
    let userId = req.query.id;
    let ingredients = [...req.query.ingredients];
    

    res.send("ok");
})

favouritesRouter.put("/favourites", (req, res) => {
    let userId = req.query.id;
    let ingredientsToAdd = [...req.query.ingredients];

    // add ingredients to db
    res.send("ok");
})

favouritesRouter.delete("/favourites", (req, res) => {
    let userId = req.query.id;
    let ingredientsToDelete = [...req.query.ingredients];

    // delete relevant ingredients from db
    res.send("ok");
})

module.exports = favouritesRouter;