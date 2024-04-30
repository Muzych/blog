import { Hono } from 'hono'

const app = new Hono()

app.get('/admin', (c) => {
  return c.text('Hello Hono! I am admin')
})

app.get('/death', (c) => {
  return c.text('Hello Hono! I am death')
})

export default app
