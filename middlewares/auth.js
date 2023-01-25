const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/401-unauthorized');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    const err = new UnauthorizedError('Необходима авторизация');
    return next(err);
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (e) {
    const err = new UnauthorizedError('Неверный токен');
    return next(err);
  }

  req.user = payload;
  return next();
};
