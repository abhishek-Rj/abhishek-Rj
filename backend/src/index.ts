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

import { Hono } from 'hono';
import { cors } from 'hono/cors';
import * as z from 'zod';
import { Resend } from 'resend';

const schema = z.object({
	email: z.email(),
	message: z.string().optional(),
});

type Env = {
	RESEND_API: string;
};

const app = new Hono<{ Bindings: Env }>();
app.use(
	cors({
		origin: ['https://abhishek-rj.vercel.app', 'http://localhost:5173', 'https://www.abhishekraj.xyz'],
		allowMethods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS'],
		allowHeaders: ['Content-Type', 'Authorization'],
	}),
);

app.options('*', (c) => {
	return c.text('OK');
});

app.get('/', (c) => {
	return c.text('Hello World');
});

app.post('/contact', async (c) => {
	const resend_api = c.env.RESEND_API;
	const resend = new Resend(resend_api);
	const body = await c.req.json();
	const parsed = schema.safeParse(body);
	if (!parsed.success) {
		return c.json({ error: parsed.error });
	}
	const { data, error } = await resend.emails.send({
		from: 'onboarding@resend.dev',
		to: 'abhishekr2077@gmail.com',
		subject: 'Someone texted you',
		text: `From: ${parsed.data.email}\n\nMessage:\n${parsed.data.message ?? 'No message provided'}`,
	});

	if (error) {
		return c.json({ error: error.message }, 500);
	}

	return c.json({ success: true, data });
});

export default app;
