const express = require("express");
const authMiddleware = require("../authMiddleware");
const pantryRouter = express();

pantryRouter.use(authMiddleware);

pantryRouter.get("/pantry", (req, res) => {
    let userId = req.UserId;

    let inventory;
    // perform query on db to get inventory

    res.send(inventory);
})

pantryRouter.post("/pantry", (req, res) => {
    let userId = req.query.id;
    let ingredients = [...req.query.ingredients];
    // enter on db
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

module.exports = pantryRouter;