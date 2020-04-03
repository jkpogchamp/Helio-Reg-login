const inputValidator = require('../utils/inputValidationRegister');
const userService = require('../services/userService');

const register = (request, response) => {
  const { email, password } = request.body;
  if (inputValidator(email, password)) {
    response.status(401).send({ message: inputValidator.message });
  }
  userService
    .register(email, password)
    .then(data => response.status(200).json(data))
    .catch(error => response.status(409).json({ message: error.message }));
};

module.exports = register;
