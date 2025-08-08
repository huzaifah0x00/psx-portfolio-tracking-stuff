import request from 'supertest';
import { describe, it, expect } from 'vitest';
import { app } from './app';

describe('API', () => {
  it('health endpoint', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
