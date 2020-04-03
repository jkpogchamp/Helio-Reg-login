const connection = require('./connecttodb');
const token = require('../utils/createJWT');

const register = (email, password) =>
  new Promise((resolve, reject) => {
    connection.query(
      'SELECT * FROM users WHERE email=?',
      [email],
      (error, rows) => {
        if (error) {
          reject(error);
        } else if (rows[0]) {
          reject(new Error('User already exists with this email'));
        } else {
          connection.query(
            'INSERT INTO users(email, password) VALUES(?,?)',
            [email, password],
            error => {
              if (error) {
                reject(error);
              } else {
                resolve({ message: 'Registration was succesful' });
              }
            }
          );
        }
      }
    );
  });

  const login = (email, password) =>
  new Promise((resolve, reject) => {
    connection.query(
      'SELECT * FROM users WHERE email=?',
      [email],
      (err, rows) => {
        if (err) {
          reject(err);
        } else if (!rows[0]) {
          reject(new Error('E-mail or password is incorrect.'));
        } else if (rows[0].password !== password) {
          reject(new Error('E-mail or password is incorrect.'));
        } else {
          const userId = rows[0].id;
          resolve(token(userId, email));
        }
      }
    );
  });

module.exports = { register, login };
