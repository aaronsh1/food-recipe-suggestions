const express = require("express");
const pantryRouter = express();
const authMiddleware = require("../authMiddleware");
const { ModelNames, findAll, bulkCreate, destroy } = require("../database/datasource");
const { Op } = require("sequelize");

pantryRouter.use(authMiddleware);

pantryRouter.get("/pantry", async (req, res) => {

    try{
        let userId = req.UserId;

        let ingredientIds = (await findAll(ModelNames.Pantry, {
            where: {
                UserId: userId
            }
        })).map(
            item => item.dataValues
        );
    
        let pantry = (await findAll(ModelNames.Ingredient, {
            where: {
                IngredientId: {
                    [Op.in]: ingredientIds.map(
                        item => item.IngredientId
                    )
                }
            }
        })).map(
            item => item.dataValues
        );
    
        res.send(pantry);
    } catch(err) {
        res.status(500).send(err);
    }


})

pantryRouter.post("/pantry", async (req, res) => {
    try{
        console.log("starting post");
        let userId = req.UserId;
        let ingredients = [...req.body.Ingredients];
        console.log(ingredients);
    
        const data = await bulkCreate(ModelNames.Pantry, ingredients.map(
            item => ({UserId: userId, IngredientId: item})
        ));

        console.log("DONE");
        res.send(data);
    }catch(err) {
        console.log(err);
        res.status(500).send(err);
    }

})

pantryRouter.delete("/pantry", async (req, res) => {
    try{
        let userId = req.UserId;
        let ingredientsToDelete = [...req.body.IngredientId];
    
        if(ingredientsToDelete.length == 1) {
            await deleteIngredient(userId, ingredientsToDelete[0])
        } else {
            ingredientsToDelete.forEach(ingredient => deleteIngredient(userId, ingredient))
        }
    
        res.send();
    }catch(err) {
        res.status(500).send(err);
    }

})


const deleteIngredient = async (userId, ingredientId) => {
    const data = await destroy(ModelNames.Pantry, {
        where:{
            [Op.and]: [
                {UserId: userId},
                {IngredientId: ingredientId}
            ]
        }
    })

    return data;
}
module.exports = pantryRouter;
