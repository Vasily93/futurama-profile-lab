const reqest = require('superagent');
const getRandomQuote = count => {
  return reqest
    .get(`http://futuramaapi.herokuapp.com/api/quotes/${count}`)
    .then(res => res.body);
};

module.exports = {
  getRandomQuote
};