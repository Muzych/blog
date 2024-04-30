
import { HTTPException } from 'hono/http-exception';

import { Hono} from 'hono';


const app = new Hono().basePath('/api');


app.get('/hello', (c) => c.text('Hello Cloudflare Workers!'))
/**
 * Not found handler
 */
app.get('*', (c) => {
  return c.json(
    {
      success: false,
      errors: {
        issues: [
          {
            code: 'not_found',
            message: 'The requested resource was not found.',
          },
        ],
        name: 'NotFound',
      },
    },
    404,
  );
});

/**
 * Error handler
 */
app.onError((err, c) => {
  if (err instanceof HTTPException) {
    // Get the custom response
    return err.getResponse();
  }
  console.error(err);
  return c.json(
    {
      success: false,
      errors: {
        issues: [
          {
            code: 'internal_server_error',
            message: 'An internal server error occurred.',
          },
        ],
        name: 'InternalServerError',
      },
    },
    500,
  );
});

export type App = typeof app;

export default app;