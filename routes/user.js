const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getCurrentUser,
  updateProfileInfo,
} = require('../controllers/users');

router.get('/me', getCurrentUser);
router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
  }),
}), updateProfileInfo);

module.exports = router;
