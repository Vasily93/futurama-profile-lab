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

  .get('/profile/:id', (req, res) => {
    res.send(profiles[req.params.id]);
  })

  // .patch('/profile/:id', (req, res) => {
  //   res.send()
  // })

  .delete('/profile/:id', (req, res) => {
    const deleted = profiles. splice(req.params.id, 1);
    res.send(deleted[0]);
  })