const request = require('supertest');
const app = require('../lib/app');

describe('profile and api routes', () => {
  it('can create a profile with POST', () => {
    return request(app)
    .post('/profile')
    .send({ name: 'vasily', character: 'bender' })
    .then(res => {
      expect(res.body).toEqual({
        name: 'vasily',
        character: 'bender'
      });
    });
  });
});