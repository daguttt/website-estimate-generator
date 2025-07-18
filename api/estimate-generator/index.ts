import { Hono } from 'hono';
import { handle } from '@hono/node-server/vercel';

const app = new Hono().basePath('/api');

app.get('/estimate-generator', (c) => {
  return c.json({
    message: 'Hello from Hono!',
  });
});

export default handle(app);
