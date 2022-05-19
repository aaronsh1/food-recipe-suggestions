const express = require("express");
const publicRouter = express.Router();

publicRouter.get('/public/images/*', (req, res) => {
  res.sendFile(appRoot + req.url);
});

publicRouter.get('/bundle.js', (req, res) => {
  res.sendFile(appRoot + '/public/bundle.js');
});

publicRouter.get('/*', (req, res) => {
  res.sendFile(appRoot + '/public/index.html');
});

module.exports = publicRouter;