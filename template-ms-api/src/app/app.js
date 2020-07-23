const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const ValidaToken = require('../app/auth/ValidaToken')

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(ValidaToken.validarTokenRequest)
app.use(process.env.BASE_URL, routes);

module.exports = app;