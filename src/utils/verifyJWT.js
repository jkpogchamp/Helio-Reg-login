const jwt = require('jsonwebtoken');

require('dotenv').config({ path: __dirname + '../../.env' });

const verifyJWT = bearerToken =>
  new Promise((resolve, reject) => {
    if (!bearerToken) {
      reject(new Error('No token provided'));
    }
    const token = bearerToken.split(' ')[1];
    jwt.verify(token, process.env.JWT_KEY, (error, decoded) => {
      if (error) {
        reject(new Error('Token is invalid'));
      }
      resolve(decoded);
    });
  });

module.exports = verifyJWT;