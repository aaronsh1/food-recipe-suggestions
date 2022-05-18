const { Sequelize } = require('sequelize');
const { Models } = require('./models');

let sequelize = undefined;

const initialize = async () => {
  sequelize = new Sequelize('', 'admin', 'awegGo74543oawt3iZ', {
    host: 'food-website-instance-1.cszopbtc5jh8.us-east-1.rds.amazonaws.com',
    port: 3306,
    dialect: 'mysql',
  });

  await sequelize.authenticate();
}

const sync = async () => {
  const defs = Object.entries(Models).map(([name, model]) => {
    sequelize.define(name, model);
  });

  await Promise.all(defs.map(model => {
    return () => {
      await model.sync();
    };
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