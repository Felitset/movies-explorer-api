const express = require('express');
const mongoose = require('mongoose');

// const { celebrate, Joi, errors } = require('celebrate');

const { requestLogger, errorLogger } = require('./middlewares/logger');

const PORT = 3000;

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/usermoviesdb');

app.use(express.json());

// app.use(auth);
app.use('/users', require('./routes/user'));
app.use('/movies', require('./routes/movie'));

// app.use('*', error);

app.use(errorLogger);

app.use(requestLogger);

// app.use(errors());

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  res
    .status(statusCode)
    .send({
      message: statusCode === 500
        ? 'На сервере произошла ошибка'
        : message,
    });
  next();
});

app.listen(PORT);
