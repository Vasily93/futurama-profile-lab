const { Router } = require('express');
const futuramaRoutes = require('../routes/futurama.routes');
const futuramaQuote = require('../lib/middleweare/quote.middleware');

const profiles = [];

module.exports = Router()
  .post('/profile', futuramaQuote, (req, res) => {
    const {
      name,
      character,
    } = req.body;
    
    profiles.push({ name, character, quote:req.quote });
    res.send({
      name,
      character,
      quote:req.quote
    });
  })

  .get('/profile', (req, res) => {
    res.send(profiles);
  })

  .get('/profile/:id', (req, res) => {
    res.send(profiles[req.params.id]);
  })

  .patch('/profile/:id', (req, res) => {
    const {
      name,
      character
    } = req.body;

    const newProfile = {
      name,
      character
    };

    profiles[req.params.id] = newProfile;
    res.send(newProfile);
  })

  .delete('/profile/:id', (req, res) => {
    const deleted = profiles. splice(req.params.id, 1);
    res.send(deleted[0]);
  });