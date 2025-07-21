import { Hono } from 'hono';
import { type } from 'arktype';
import { arktypeValidator } from '@hono/arktype-validator';

const app = new Hono().basePath('/api');

app.get('/estimate-generator', (c) => {
  return c.json({
    message: 'Hello from Hono!',
  });
});

const createEstimateSchema = type({
  brandName: 'string',
  brandPrimaryColor: 'string',
  description: 'string',
  numberOfPages: 'string',
  numberOfRevisions: 'string',
  deliveryTime: 'string',
});

app.post(
  '/estimate-generator',
  arktypeValidator('json', createEstimateSchema),
  (c) => {
    const body = c.req.valid('json');
    //    ^?

    return c.json({ body });
  },
);

export default {
  fetch: app.fetch,
} satisfies ExportedHandler<CloudflareBindings>;
