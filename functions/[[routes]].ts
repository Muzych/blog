import { logDevReady } from "@remix-run/cloudflare";
import * as build from "../build/server";
import app from "../lib/hono";
// You can also use it with other runtimes
import { handle } from "hono/cloudflare-pages";
import { remix } from "remix-hono/handler";

if (process.env.NODE_ENV === "development") logDevReady(build);

// Add the Remix middleware to your Hono server
app.use(
	"*",
	remix({
		build,
		mode: process.env.NODE_ENV as "development" | "production",
		// getLoadContext is optional, the default function is the same as here
		getLoadContext(c) {
			return c.env;
		},
	}),
);

// Create a Cloudflare Pages request handler for your Hono server
export const onRequest = handle(app);