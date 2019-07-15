const reqest = require('superagent');
const getRandomQuote = (count, character) => {
  return reqest
    .get(`futuramaapi.herokuapp.com/api/characters/${character}/${count}`)
    .then(res => res.body);
};

module.exports = {
  getRandomQuote
};