const inputValidator = (email, password) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email && !password) {
    return new Error('Username and password are required.');
  } else if (!email) {
    return new Error('Username is required');
  } else if (!re.test.email) {
    return new Error('Not a valid E-mail adress');
  } else if (!password) {
    return new Error('Password is required');
  } else if (password.length < 8) {
    return new Error('Password should be at least 8 characters');
  }
  return false;
};
module.exports = inputValidator;
