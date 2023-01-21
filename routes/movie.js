const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const urlRegex = require('../consts/url-regex');

const {
  getAllSavedMovies,
  postMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/', getAllSavedMovies);
router.post('/', celebrate({
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
    // movieId: Joi.string().hex().length(24).required(),
  }),
}), postMovie);
router.delete('/:movieId', celebrate({
  params: { movieId: Joi.string().hex().length(24).required() },
}), deleteMovie);

module.exports = router;
