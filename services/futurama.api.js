const reqest = require('superagent');
const getRandomQuote = (count, name) => {
  return reqest
    .get(`futuramaapi.herokuapp.com/api/characters/${name}/${count}`)
    .then(res => res.body);
};

module.exports = {
  getRandomQuote
};