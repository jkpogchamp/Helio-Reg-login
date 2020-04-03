const inputValidation = (email, password) => {
  if (!email && !password) {
    return new Error('All fileds are required.');
  } else if (!email) {
    return new Error('Username is required.');
  } else if (!password) {
    return new Error('Password is required.');
  }
  return false;
};

module.exports = inputValidation;