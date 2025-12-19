'use client';
import { FormEvent, useState } from 'react';
import { z } from 'zod';
import { ContactModal } from './contact-modal';
import { AvailableClient } from '@/components/AvailableClient';

export function Contact() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<'success' | 'error'>('success');
  const [details, setDetails] = useState<string | undefined>(undefined);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    message: z
      .string()
      .trim()
      .refine(
        (msg) => msg.split(/\s+/).filter(Boolean).length >= 2,
        'Message must contain at least 2 words'
      ),
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    const result = contactSchema.safeParse({ name, email, message });

    if (result.success) {
      setErrors({});
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message }),
        });
        if (res.ok) {
          setStatus('success');
          setOpen(true);
          setDetails(undefined);
          form.reset();
        } else {
          try {
            const json = await res.json();
            setDetails(
              typeof json?.error === 'string'
                ? json.error
                : 'Failed to send email'
            );
          } catch {
            setDetails('Failed to send email');
          }
          setStatus('error');
          setOpen(true);
        }
      } catch {
        setDetails('Network error');
        setStatus('error');
        setOpen(true);
      }
    } else {
      const flattened = result.error.flatten();
      const fieldErrors = flattened.fieldErrors;
      const nextErrors = {
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      };
      setErrors(nextErrors);
      const firstInvalid =
        (nextErrors.name ? 'name' : undefined) ??
        (nextErrors.email ? 'email' : undefined) ??
        (nextErrors.message ? 'message' : undefined);
      if (firstInvalid) {
        const el = form.querySelector<HTMLInputElement | HTMLTextAreaElement>(
          `#${firstInvalid}`
        );
        el?.focus();
      }
      setStatus('error');
      setOpen(true);
    }
  }

  return (
    <section
      id='contact'
      aria-labelledby='contact-title'
      className='text-neutral-100 max-w-[1280px] mx-auto'
    >
      <p className='text-md font-semibold text-primary-200 text-center'>
        CONTACT
      </p>
      <h2
        id='contact-title'
        className='mt-md text-display-sm font-extrabold uppercase text-center'
      >
        LET’S GET IN TOUCH
      </h2>

      <div className='mt-6xl md:grid md:grid-cols-2 md:gap-6xl md:items-stretch'>
        <div className='md:pr-2xl md:h-full'>
          <AvailableClient />
        </div>
        <div className='md:h-full'>
          <form
            onSubmit={onSubmit}
            className='mx-auto w-full space-y-xl md:h-full md:flex md:flex-col'
            noValidate
          >
            <div>
              <label htmlFor='name' className='text-md text-neutral-100'>
                Name
              </label>
              <input
                id='name'
                name='name'
                type='text'
                autoComplete='name'
                required
                className='mt-sm w-full rounded-xl border border-neutral-900 bg-neutral-900/20 px-2xl py-xl text-neutral-100 placeholder-neutral-300'
                placeholder='Your name'
                aria-label='Name'
                aria-invalid={Boolean(errors.name) || undefined}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id='name-error' className='mt-xs text-sm text-red-500'>
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor='email' className='text-md text-neutral-100'>
                Email
              </label>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='mt-sm w-full rounded-xl border border-neutral-900 bg-neutral-900/20 px-2xl py-xl text-neutral-100 placeholder-neutral-300'
                placeholder='you@example.com'
                aria-label='Email'
                aria-invalid={Boolean(errors.email) || undefined}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id='email-error' className='mt-xs text-sm text-red-500'>
                  {errors.email}
                </p>
              )}
            </div>

            <div className='md:flex-1 md:flex md:flex-col'>
              <label htmlFor='message' className='text-md text-neutral-100'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows={6}
                required
                className='mt-sm w-full rounded-xl border border-neutral-900 bg-neutral-900/20 px-2xl py-xl text-neutral-100 placeholder-neutral-300 md:flex-1 md:min-h-[160px] lg:min-h-[320px] xl:min-h-[380px] resize-none'
                placeholder='Write your message...'
                aria-label='Message'
                aria-invalid={Boolean(errors.message) || undefined}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id='message-error' className='mt-xs text-sm text-red-500'>
                  {errors.message}
                </p>
              )}
            </div>

            <div className='md:mt-auto'>
              <button
                type='submit'
                className='inline-flex w-full items-center justify-center rounded-full bg-primary-200 px-6xl py-xl text-black shadow-neon transition-colors hover:bg-primary-300 cursor-pointer'
              >
                <span className='text-lg font-bold'>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <ContactModal
        open={open}
        status={status}
        onCloseAction={() => setOpen(false)}
        details={details}
      />
    </section>
  );
}
