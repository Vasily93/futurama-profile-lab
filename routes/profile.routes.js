const { Router } = require('express');

const profiles = [];

module.exports = Router()
  .post('/profile', (req, res) => {
    const {
      name,
      character
    } = req.body;

    profiles.push({ name, character });
    res.send({
      name,
      character
    });
  })

  .get('/profile', (req, res) => {
    res.send(profiles);
  })

