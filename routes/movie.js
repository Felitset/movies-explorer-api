const router = require('express').Router();
const { postNewMovieValidator, deleteMovieFromListValidator } = require('../validators/joi-validation');

const {
  getAllSavedMovies,
  postMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/', getAllSavedMovies);
router.post('/', postNewMovieValidator, postMovie);
router.delete('/:movieId', deleteMovieFromListValidator, deleteMovie);

module.exports = router;
