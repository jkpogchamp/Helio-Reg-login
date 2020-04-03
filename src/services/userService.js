const connection = require('./connecttodb');

const register = (email, password) =>
  new Promise((resolve, reject) => {
    connection.query(
      'SELECT * FROM users WHERE email=?',
      [username],
      (error, rows) => {
        if (error) {
          reject(error);
        } else if (rows[0]) {
          reject(new Error('User already exists with this email'));
        } else {
          connection.query(
            'INSERT INTO users(email, password) VALUES(?,?)',
            [username, password],
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

module.exports = { register };
