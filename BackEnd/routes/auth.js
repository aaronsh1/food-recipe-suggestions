const express = require("express");
const authRouter = express.Router();
const { sign } = require('../jwt/jwt');
const { ModelNames, findOne, create } = require('../database/datasource');
const crypto = require('crypto');

authRouter.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const queryResult = await findOne(ModelNames.User, {
    where: {
      Username: username,
    }
  });

  const data = queryResult.dataValues;
  const hashPassword = crypto.createHash('sha256').update(password + data.Salt).digest("hex")

  if (data.Password !== hashPassword) {
    res.status(401).send({
      message: 'Incorrect password',
    });
    return;
  }

  const token = sign({
    UserId: data.UserId,
    username,
  }, {
    audience: 'user',
    issuer: 'food-recipe-suggestions-be',
    subject: req.body.username,
  });

  res.send({
    token,
  });
});

authRouter.post('/register', async (req, res) => {
  const {
    username,
    email,
    password,
  } = req.body;

  const salt = crypto.createHash('sha256').update(String(Math.random())).digest('hex');
  const passwordHash = crypto.createHash('sha256').update(password + salt).digest("hex")

  const record = await create(ModelNames.User, {
    Username: username,
    Password: passwordHash,
    Salt: salt,
    Email: email,
  });

  res.send({
    UserId: record.UserId,
    Username: record.Username,
  });
});

module.exports = authRouter;