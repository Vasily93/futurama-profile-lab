const { getRandomQuote } = require('../../services/futurama.api');

module.exports = (req, res, next) => {
  getRandomQuote(1, req.body.character)
  .then(quote => {
    req.quote = quote[0];
    next();
  })
}