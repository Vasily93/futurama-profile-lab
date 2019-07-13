const { Router } = require('express');
const { getRandomQuote } = require('../services/futurama.api');

module.exports = Router()
  .get('/random', (req, res) => {
    getRandomQuote(1)
      .then(quote => res.send(quote));
  });