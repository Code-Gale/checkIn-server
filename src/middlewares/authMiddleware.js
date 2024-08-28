const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.userId = decoded.userId;
    next();
  });
};