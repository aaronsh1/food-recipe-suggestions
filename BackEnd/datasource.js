const { Sequelize } = require('sequelize');

let sequelize = undefined;

const initialize = async () => {
  sequelize = new Sequelize('', 'admin', 'awegGo74543oawt3iZ', {
    host: 'food-website-instance-1.cszopbtc5jh8.us-east-1.rds.amazonaws.com',
    port: 3306,
    dialect: 'mysql',
  });

  await sequelize.authenticate();
}

const close = async () => {
  await sequelize.close();
}

initialize()
.then(() => {
  console.log('connected');

  close()
  .then(() => {
    console.log('closed');
  });
})
.catch(error => {
  console.error(error);
});

module.exports = {
  initialize,
  close,
};