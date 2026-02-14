import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { z } from 'zod';

const bodySchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().email().max(254),
  message: z.string().trim().min(2).max(4000),
  hp: z.string().optional(),
});

const rate = new Map<string, number>();
function tooFrequent(req: Request) {
  const now = Date.now();
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';
  const key = `${ip}|${req.headers.get('user-agent') || ''}`;
  const last = rate.get(key) || 0;
  if (now - last < 15_000) {
    rate.set(key, now);
    return true;
  }
  rate.set(key, now);
  return false;
}

function originAllowed(req: Request) {
  const origin = req.headers.get('origin');
  const host = req.headers.get('host');
  if (!origin) return true;
  try {
    const o = new URL(origin);
    const allowed = [
      'http://localhost:3000',
      'https://aryafmdev-portfolio.vercel.app',
    ];
    return (
      allowed.includes(origin) ||
      (typeof host === 'string' && o.host === host)
    );
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  try {
    if (!originAllowed(req)) {
      return NextResponse.json({ ok: false, error: 'Forbidden' }, { status: 403 });
    }
    if (tooFrequent(req)) {
      return NextResponse.json({ ok: false, error: 'Too Many Requests' }, { status: 429 });
    }
    const json = await req.json();
    const parsed = bodySchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Invalid payload',
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }
    const { name, email, message, hp } = parsed.data;
    if (hp && hp.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || 'muhammadaryafm@gmail.com';
    const from = process.env.SENDGRID_FROM;

    if (!apiKey || !from) {
      const missing = [
        !apiKey ? 'SENDGRID_API_KEY' : '',
        !from ? 'SENDGRID_FROM' : '',
      ]
        .filter(Boolean)
        .join(', ');
      return NextResponse.json(
        {
          ok: false,
          error: `Email service not configured. Missing: ${missing}`,
        },
        { status: 500 }
      );
    }

    sgMail.setApiKey(apiKey);

    const subject = `Contact from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    await sgMail.send({
      to,
      from,
      subject,
      text,
      replyTo: email,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    let message = 'Failed to send email';
    let status = 500;
    if (error instanceof Error) message = error.message;
    const maybeErr = error as {
      code?: number;
      response?: { body?: { errors?: Array<{ message?: string }> } };
    };
    if (maybeErr?.response?.body?.errors?.length) {
      message = maybeErr.response.body.errors.map((e) => e.message).join('; ');
      status = typeof maybeErr.code === 'number' ? maybeErr.code : 400;
    }
    return NextResponse.json({ ok: false, error: message }, { status });
  }
}
