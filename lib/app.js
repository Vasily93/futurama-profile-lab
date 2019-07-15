const express = require('express');
const app = express();
// const futuramaRoutes = require('../routes/futurama.routes');
const profile = require('../routes/profile.routes');


app.use(express.json());

app.use(profile);

// app.use(futuramaRoutes);

module.exports = app;
