const verifyJWT = require('../utils/verifyJWT');

const homeController = (request, response) => {
  const bearerToken = request.headers.authorization;
  verifyJWT(bearerToken)
    .then(decoded => {
      response
        .status(200)
        .sendFile(path.resolve(__dirname + '/../../views/home/home.html'));
    })
    .catch(error => response.status(401).send({ message: error.message }));
};

module.exports = homeController;
