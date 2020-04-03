const jwt = require('jsonwebtoken');

require('dotenv').config({ path: __dirname + '../../.env' });

const createToken = (userIdValue, userEmailValue) => {
  const payload = { userId: userIdValue, userEmail: userEmailValue };
  const token = jwt.sign(
    payload,
    process.env.JWT_KEY,
    { expiresIn: '1d' },
    { algorithm: 'HS256' }
  );
  return { status: 'ok', jwt: `Bearer: ${token}` };
};

module.exports = createToken;