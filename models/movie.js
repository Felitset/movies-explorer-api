const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: [validator.isURL, 'Некорректная ссылка на аватар'],
  },
  trailerLink: {
    type: String,
    required: true,
    validate: [validator.isURL, 'Некорректная ссылка на аватар'],
  },
  thumbnail: {
    type: String,
    required: true,
    validate: [validator.isURL, 'Некорректная ссылка на аватар'],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  // movieId: {
  //   movie id from responce from MovieExplorer server
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  // },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

const movie = mongoose.model('movie', movieSchema);

module.exports = movie;
