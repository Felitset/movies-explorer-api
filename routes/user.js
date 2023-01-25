const router = require('express').Router();
const { updateUserInfoValidator } = require('../validators/joi-validation');
const {
  getCurrentUser,
  updateProfileInfo,
} = require('../controllers/users');

router.get('/me', getCurrentUser);
router.patch('/me', updateUserInfoValidator, updateProfileInfo);

module.exports = router;
