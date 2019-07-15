const { Router } = require('express');
// const { getRandomQuote } = require('../services/futurama.api');

const profile = [];

module.exports = Router()
  .post('/profile', (req, res) => {
    const {
      name,
      character
    } = req.body;

    profile.push({ name, character });
    res.send({
      name,
      character
    });
  })

  // .get('/profile', (req, res) => {
  //   getRandomQuote(1, 'bender')
  //     .then(quote => res.send(quote));
  // });

   