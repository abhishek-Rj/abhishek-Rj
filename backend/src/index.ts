/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Hono } from "hono";
import { Resend } from "resend";
import "dotenv/config";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello World");
});

app.post("/contact", async (c) => {
  const resend_api = process.env.RESEND_API;
  const resend = new Resend(resend_api);
  const { email, message }: { email: string, message?: string } = await c.req.json();
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "abhishekr2077@gmail.com",
    subject: "Someone texted you",
    text: `From: ${email}\n\nMessage:\n${message ?? "No message provided"}`
  });

  if (error) {
    return c.json({ error: error.message }, 500);
  }

  return c.json({ success: true, data });
});

export default app;