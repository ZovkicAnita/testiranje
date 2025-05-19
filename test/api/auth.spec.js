const request = require('supertest');
const app = require('../../backend/index'); // putanja do backend servera

describe('API /api/login', () => {
  test('Login s ispravnim podacima vraća token', async () => {
    const response = await request(app)
      .post('/api/login')
      .send({ username: 'admin', password: 'adminPass' });

    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeDefined();
  });

  test('Login s pogrešnim podacima vraća 401', async () => {
    const response = await request(app)
      .post('/api/login')
      .send({ username: 'admin', password: 'pogresna' });

    expect(response.statusCode).toBe(401);
  });
});
