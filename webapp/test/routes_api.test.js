import request from 'supertest';
import app from '../src/app.js';

describe('POST /api/course/1/info', () => {
  it('should return json', async () => {
    await request(app).post('/api/course/1/info').expect(200);
  });
});

describe('POST /api/catelog/list', () => {
  it('should return json', async () => {
    await request(app)
      .post('/api/catelog/list')
      .expect(200);
  });
});

describe('POST /api/words/list', () => {
  it('should return json', async () => {
    await request(app).post('/api/words/list').expect(200);
  });
});