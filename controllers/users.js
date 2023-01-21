// const User = require('../models/user');

const getCurrentUser = (req, res) => {
  res.status(200).json({ message: 'current user' });
};

const updateProfileInfo = (req, res) => {
  res.status(200).json({ message: 'profile info updated' });
};

module.exports = {
  getCurrentUser,
  updateProfileInfo,
};
