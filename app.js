const express = require('express');
const fs = require('fs');
const app = express();
const morgan = require('morgan'); // it show the information about the request

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// 1) MIDDLEWARES

app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next(); //it is necessery to call it
});

// 2) ROUTE HANDELERS

app.use('/api/v1/tours', tourRouter); //use tourRouter to point to this url
app.use('/api/v1/users', userRouter); //use userouter to point to this url

module.exports = app;
