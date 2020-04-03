require('dotenv').config({ path: __dirname + '/.env' });

const PORT = process.env.SERVER_PORT;
const express = require('express');

const app = express();

app.use(express.static('./views'));
app.use(express.json());

const router = require('./src/routes/index');

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

module.exports = app;