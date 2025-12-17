import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { z } from 'zod';

const bodySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(2),
});

export async function POST(req: Request) {
  try {
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
    const { name, email, message } = parsed.data;

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
