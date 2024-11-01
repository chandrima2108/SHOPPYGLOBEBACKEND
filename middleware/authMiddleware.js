const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  console.log('Received Token:', token);
  if (!token) {
    console.log('No token provided, authorization denied.');
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, 'shoppyglobe_secret_key_2024');
    req.user = decoded;
    console.log('Token is valid. User info:', req.user);
    next();
  } catch (error) {
    console.log('Token is not valid:', error.message);
    res.status(401).json({ message: 'Token is not valid' });
  }
};