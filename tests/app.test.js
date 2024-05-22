const request = require('supertest');
const { app, server } = require('../index');

describe('GET /', () => {
  it('responds with Hello World!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Hello World!');
  });
  
  afterAll(async () => {
    // Закриваємо сервер після завершення всіх тестів
    await server.close();
  });
});
