const inputValidator = require('../utils/inputValidationLogin');
const userService = require('../services/userService');

const loginController = (request, response) => {
  const { email, password } = request.body;
  if (inputValidator(email, password)) {
    response.status(400).send(inputValues.message);
  }
  userService
    .login(email, password)
    .then(token => response.status(200).json(token))
    .catch(error => response.status(401).json({ message: error.message }));
};

module.exports = loginController;