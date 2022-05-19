const express = require("express");
const pantryRouter = express();
const authMiddleware = require("../authMiddleware");
const { ModelNames, findAll, bulkCreate, destroy } = require("../database/datasource");
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
    
    await bulkCreate(ModelNames.Pantry, ingredients.map(
        item => ({UserId: userId, IngredientId: item})
    ));

    res.send("ok");
})

pantryRouter.delete("/pantry", (req, res) => {
    let userId = req.query.id;
    let ingredientsToDelete = [...req.query.ingredients];

    if(ingredientsToDelete.length == 1) {
        deleteIngredient(userId, ingredientsToDelete[0])
    } else {
        ingredientsToDelete.forEach(ingredient => deleteIngredient(userId, ingredient))
    }
    
    res.send("ok");
})


const deleteIngredient = (userId, ingredientId) => {
    await destroy(ModelNames.pantry, {
        where:{
            [Op.and]: [
                {UserId: userId},
                {IngredientId: ingredientId}
            ]
        }
    })
}
module.exports = pantryRouter;
