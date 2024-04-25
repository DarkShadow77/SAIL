const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const userRoute = require('./routers/userRoute');

const expressApp = (app) => {
  app.use(express.json());
  app.use(cors()); // Cross Origin platform service
  app.use(morgan('tiny'));

  app.use('/api', userRoute);
  return app;
};

module.exports = expressApp;