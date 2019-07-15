const express = require('express');
const app = express();
const futuramaRoutes = require('../routes/futurama.routes');

app.use(express.json());

app.use(futuramaRoutes);

module.exports = app;
