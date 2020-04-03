const inputValidator = require('../utils/inputValidationRegister');
const userService = require('../services/userService');

const register = (request, response) => {
  const { username, password } = request.body;
  if (inputValidator(username, password)) {
    response.status(401).send({ message: inputValidator.message });
  }
  userService
    .register(username, password)
    .then(data => response.status(200).json(data))
    .catch(error => response.status(409).json({ message: error.message }));
};

module.exports = register;
