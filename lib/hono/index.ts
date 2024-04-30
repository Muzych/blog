
import { Hono } from "hono";
/* type your Cloudflare bindings here */
type Bindings = {};

/* type your Hono variables (used with c.get/c.set) here */
type Variables = {};

type ContextEnv = { Bindings: Bindings; Variables: Variables };

const app = new Hono<ContextEnv>()

const api = new Hono()

api.get("/", (c) => {
  return c.text("Hello, world!")
})

app.route("/api", api)

export default app;