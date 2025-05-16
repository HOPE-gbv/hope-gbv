import { serve } from '@hono/node-server';
// import { serveStatic } from '@hono/node-server/serve-static';
// import { readFileSync } from 'fs';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import path from 'path';
import routes from './routes/index.js';
import { prisma } from './lib/prisma-client.js';
import { config } from 'dotenv';

config();
type Variables = {
  currentUrl: string;
};

const app = new Hono<{ Variables: Variables }>();
// Middleware
app.use(cors({ origin: '*' }));
app.use(logger());

// HTTP Middleware
app.use('*', async (c, next) => {
  // Get protocol from header or default to http
  const protocol = c.req.header('x-forwarded-proto') || 'http';
  const fullUrl = `${protocol}://${c.req.header('host')}${c.req.url}`;
  c.set('currentUrl', fullUrl);
  await next();
});

// Routes
const api = new Hono();
api.route('/', routes);
app.route('/api', api);


app.get('/user', async (c) => {
  const user = await prisma.user.findMany();
  return c.json({ user });
})
// Static files
// app.use(
//   '/assets/*',
//   serveStatic({
//     root: '../client/dist',
//   }),
// );

// app.get('*', async (c) => {
//   try {
//     const indexPath = path.resolve('../client/dist/index.html');
//     const html = readFileSync(indexPath, 'utf-8');
//     return c.html(html);
//   } catch (error) {
//     console.error('Error serving index.html:', error);
//     return c.text('Internal Server Error', 500);
//   }
// });

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
