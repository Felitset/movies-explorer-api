// const Movie = require('../models/movie');

const getAllSavedMovies = (req, res) => {
  res.status(200).json({ message: 'return all saved movies' });
};

const postMovie = (req, res) => {
  res.status(200).json({ message: 'movie posted' });
};

const deleteMovie = (req, res) => {
  res.status(200).json({ message: 'movie deleted' });
};

module.exports = {
  getAllSavedMovies,
  postMovie,
  deleteMovie,
};
