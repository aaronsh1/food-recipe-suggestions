const express = require("express");
const pantryRouter = express.Router();
const { ModelNames, findAll } = require("../database/datasource");
const { Op } = require("sequelize");


pantryRouter.get("/pantry", async (req, res) => {
    let userId = req.query.id;
    
    let ingredientIds = (await findAll(ModelNames.Pantry, {
        where: {
            UserId: userId
        }
    })).dataValues;

    let pantry = findAll(ModelNames.Ingredient, {
        where: {
            IngredientId: {
                [Op.in]: ingredientIds.map(
                    item => item.IngredientId
                )
            }
        }
    }).dataValues;

    res.send("ok");
})

pantryRouter.post("/pantry", (req, res) => {
    let userId = req.query.id;
    let ingredients = [...req.query.ingredients];
    

    res.send("ok");
})

pantryRouter.put("/pantry", (req, res) => {
    let userId = req.query.id;
    let ingredientsToAdd = [...req.query.ingredients];

    // add ingredients to db
    res.send("ok");
})

pantryRouter.delete("/pantry", (req, res) => {
    let userId = req.query.id;
    let ingredientsToDelete = [...req.query.ingredients];

    // delete relevant ingredients from db
    res.send("ok");
})