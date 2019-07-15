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
        character: 'bender',
        quote: expect.any(Object)
      });
    });
  });

  it('can GET a list of profiles', () => {
    return request(app)
      .get('/profile')
      .then(res => {
        expect(res.body).toEqual([{
          name: 'vasily',
          character: 'bender',
          quote:expect.any(Object)
        }]);
      });
  });

  it('can GET profile by id', () => {
    return request(app)
      .get('/profile/0')
      .then(res => {
        expect(res.body).toEqual({
          name: 'vasily',
          character: 'bender',
          quote: expect.any(Object)
        })
      });
  });

  it('can PATCTH a profile', () => {
    const newProfile = { name: 'vasily', character:'fry'};
    return request(app)
      .patch('/profile/0')
      .send(newProfile)
      .then(res => {
        expect(res.body).toEqual({ name: 'vasily', character: 'fry' });
    });
  });

  it('can delete a profile by id', () => {
    return request(app)
    .delete('/profile/0')
    .then(res => {
      expect(res.body).toEqual({ name: 'vasily', character: 'fry'});
    });
  });
});