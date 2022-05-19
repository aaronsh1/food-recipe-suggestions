const express = require("express");
const pantryRouter = express();
const authMiddleware = require("../authMiddleware");
const { ModelNames, findAll, bulkCreate, destroy } = require("../database/datasource");
const { Op } = require("sequelize");

pantryRouter.use(authMiddleware);

pantryRouter.get("/pantry", async (req, res) => {
    let userId = req.UserId;

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

    res.send(pantry);
})

pantryRouter.post("/pantry", async (req, res) => {
    let userId = req.UserId;
    let ingredients = [...req.query.ingredients];

    await bulkCreate(ModelNames.Pantry, ingredients.map(
        item => ({UserId: userId, IngredientId: item})
    ));

    res.send("ok");
})

pantryRouter.delete("/pantry", async (req, res) => {
    let userId = req.UserId;
    let ingredientsToDelete = [...req.query.ingredients];

    if(ingredientsToDelete.length == 1) {
        await deleteIngredient(userId, ingredientsToDelete[0])
    } else {
        ingredientsToDelete.forEach(ingredient => deleteIngredient(userId, ingredient))
    }

    res.send("ok");
})


const deleteIngredient = async (userId, ingredientId) => {
    await destroy(ModelNames.Pantry, {
        where:{
            [Op.and]: [
                {UserId: userId},
                {IngredientId: ingredientId}
            ]
        }
    })
}
module.exports = pantryRouter;
