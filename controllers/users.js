// const User = require('../models/user');

const getCurrentUser = (req, res) => {
  res.status(200).json({ message: 'current user' });
};

const updateProfileInfo = (req, res) => {
  res.status(200).json({ message: 'profile info updated' });
};

const login = (req, res) => {
  res.status(200).json({ message: 'logged in' });
};

const createUser = (req, res) => {
  res.status(200).json({ message: 'created User' });
};

module.exports = {
  getCurrentUser,
  updateProfileInfo,
  login,
  createUser,
};
