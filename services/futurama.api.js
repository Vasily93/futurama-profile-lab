const reqest = require('superagent');
const getRandomQuote = random => {
  return reqest
    .get(`http://futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(res => res.body);
};

module.exports = {
  getRandomQuote
};