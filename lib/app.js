const express = require('express');
const app = express();
const futuramaRoutes = require('../routes/futurama.routes');

app.use(futuramaRoutes);

module.exports = app;
