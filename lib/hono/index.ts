import { Hono } from 'hono'
const app = new Hono()

app.get('/admin', (c) => c.text('Hello Cloudflare Workers!'))

export default app