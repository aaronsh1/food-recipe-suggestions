const path = require('path');
global.appRoot = path.resolve(__dirname);

const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const database = require('./database/datasource')
const dotenv = require('dotenv');

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const pantryRouter = require('./routes/pantry');
const recipeRouter = require('./routes/recipes');
const ingredientRouter = require('./routes/ingredients');
const publicRouter = require('./routes/public');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', authRouter);
app.use('/api', pantryRouter);
app.use('/api', recipeRouter);
app.use('/api', ingredientRouter);
app.use('/', publicRouter); //Must always be bottom-most router

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

database.initialize()
.then(() => {

  database.sync()
  .then(() => {
    console.log('Database connected and synced');
  })
  .catch(error => {
    throw error;
  });
})
.catch(error => {
  throw error;
});

module.exports = app;
