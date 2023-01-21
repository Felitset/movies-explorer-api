const Movie = require('../models/movie');

const BadRequestError = require('../errors/400-bad-request');
const AccessError = require('../errors/403-forbidden');
const NotFoundError = require('../errors/404-not-found');

const getAllSavedMovies = (req, res, next) => Movie
  .find({})
  .then((movies) => {
    res.json(movies);
  })
  .catch(next);

const postMovie = async (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    // movieId,
    nameRU,
    nameEN,
  } = req.body;
  const owner = req.user._id;
  const movie = await Movie
    .create({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      // movieId,
      nameRU,
      nameEN,
      owner,
    })
    .catch((err) => {
      if (err.name === 'ValidatonError') {
        next(new BadRequestError('Error DB validation'));
      } else {
        next(err);
      }
    });
  return Movie.findById(movie._id)
    .then((newmovie) => {
      res.json(newmovie);
    })
    .catch(next);
};

const deleteMovie = (req, res, next) => {
  const { movieId } = req.params;
  Movie
    .findById(movieId)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError('Карточка не существует');
      }
      if (movie.owner.toString() !== req.user._id) {
        throw new AccessError('Невозможно удалить не свою карточку');
      }
      return movie.deleteOne();
    })
    .then(() => {
      res.status(200).json({ message: 'Card deleted successfuly' });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('WrongData'));
      } else {
        next(err);
      }
    });
};

module.exports = {
  getAllSavedMovies,
  postMovie,
  deleteMovie,
};
