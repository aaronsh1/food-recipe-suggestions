const { Sequelize } = require('sequelize');
const { Models } = require('./models');

let sequelize = undefined;
let modelDefinitions = undefined;

const getModelDefinitions = () => {
  if (!sequelize) {
    return null;
  }

  if (!modelDefinitions) {
    modelDefinitions = {};
    Object.entries(Models).forEach(([name, model]) => {
      modelDefinitions[name] = sequelize.define(name, model);
    });
  }

  return modelDefinitions;
};

const initialize = async () => {
  sequelize = new Sequelize('food', 'root', 'root', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
  });

  await sequelize.authenticate();
}

const sync = async () => {
  const defs = Object.entries(modelDefinitions).map(([name, model]) => {
    return model;
  });

  return await Promise.all(defs.map(model => {
    return new Promise(async () => {
      await model.sync();
    });
  }));
};

const close = async () => {
  await sequelize.close();
}

module.exports = {
  initialize,
  sync,
  close,
};