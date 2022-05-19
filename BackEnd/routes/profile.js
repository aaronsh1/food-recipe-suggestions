const express = require("express");
const profileRouter = express.Router();
const { ModelNames, findAll, create } = require("../database/datasource");
const { Op, Model } = require("sequelize");

const authMiddleware = require('../authMiddleware');

profileRouter.use(authMiddleware);

profileRouter.get("/profile", async (req, res) => {

    try {
    let userId = req.UserId;

    let user = (await findAll(ModelNames.User, {
        where: {
            UserId: userId
        }
    })).map(item => item.dataValues);


    res.send(user);
    }
catch(err) {
    res.status(500).send(err);
}
});

profileRouter.post("/profile", (req, res) => {
    try {
    let userId = req.query.id;
    let ingredients = [...req.query.ingredients];
    

    res.send("ok");
}catch(err) {
    res.status(500).send(err);
}
})

profileRouter.put("/profile", (req, res) => {

    try {
    let userId = req.query.id;
    let ingredientsToAdd = [...req.query.ingredients];

    // add ingredients to db
    res.send("ok");
}catch(err) {
    res.status(500).send(err);
}
})

profileRouter.delete("/profile", (req, res) => {
    try {
    let userId = req.query.id;
    let ingredientsToDelete = [...req.query.ingredients];

    // delete relevant ingredients from db
    res.send("ok");
}catch(err) {
    res.status(500).send(err);
}
})

module.exports = profileRouter;