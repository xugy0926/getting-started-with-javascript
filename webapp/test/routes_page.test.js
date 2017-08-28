import request from 'supertest';
import app from '../src/app.js';

describe('GET /', () => {
  it('should render properly', async () => {
    await request(app).get('/').expect(200);
  });
});

describe('GET /words', () => {
  it('should render properly', async () => {
    await request(app)
      .get('/words')
      .expect(200);
  });
});

describe('GET /homework', () => {
  it('should render properly', async () => {
    await request(app)
      .get('/homework/1')
      .expect(200);
    
    await request(app)
      .get('/homework/2')
      .expect(200);
  });
});