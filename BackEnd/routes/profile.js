const express = require("express");
const profileRouter = express.Router();
const { ModelNames, findByPk, update} = require("../database/datasource");
const { Op, Model } = require("sequelize");
const crypto = require('crypto');


const authMiddleware = require('../authMiddleware');

profileRouter.get("/profile",authMiddleware , async (req, res) => {

    try {
    const id = req.UserId;

    const user = await findByPk(ModelNames.User, id);

    res.send(user);
    }
catch(err) {
    console.log(err);
    res.status(500).send(err);
}
});

profileRouter.post("/profile/", (req, res) => {
    try {
    let userId = req.user.id;
    let Email = [...req.Email];
    

    res.send("ok");
}catch(err) {
    res.status(500).send(err);
}
})

profileRouter.put("/profile", authMiddleware, async (req, res) => {

    try {
    let userId = req.UserId;

    const user = await findByPk(ModelNames.User, userId);
    const {newPassword, currentPassword} = req.body;

    const hashPassword = crypto.createHash('sha256').update(currentPassword + user.Salt).digest("hex");

    if (hashPassword !== user.Password)
    {
        res.status(401).send("Incorrect Password");
        return;
    }


    const salt = crypto.createHash('sha256').update(String(Math.random())).digest('hex');
    const passwordHash = crypto.createHash('sha256').update(newPassword + salt).digest("hex");


    const data = await update(ModelNames.User,{Salt: salt, Password: passwordHash},{
        where: {
            UserId:  userId
        }
    });
    
    res.send("ok");
}catch(err) {
    console.log(err);
    res.status(500).send(err);
}
})

module.exports = profileRouter;