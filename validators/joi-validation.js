const { celebrate, Joi } = require('celebrate');
const urlRegex = require('../consts/url-regex');

module.exports.signInSystemValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

module.exports.createNewUserValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().required().min(2).max(30),
  }),
});

module.exports.updateUserInfoValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

module.exports.postNewMovieValidator = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.string().required(),
    year: Joi.string().required().length(4),
    description: Joi.string().required(),
    image: Joi.string().uri().regex(urlRegex).required(),
    trailerLink: Joi.string().uri().regex(urlRegex).required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().uri().regex(urlRegex).required(),
    movieId: Joi.string().required(),
  }),
});

module.exports.deleteMovieFromListValidator = celebrate({
  params: { movieId: Joi.string().hex().length(24).required() },
});
