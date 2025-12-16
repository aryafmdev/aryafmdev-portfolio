'use client';
import { FormEvent } from 'react';

export function Contact() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section id='contact' aria-labelledby='contact-title' className='text-neutral-100'>
      <p className='text-md font-semibold text-primary-200 neon-text'>CONTACT</p>
      <h2 id='contact-title' className='mt-md text-display-xs font-extrabold uppercase'>
        LET’S GET IN TOUCH
      </h2>

      <form
        onSubmit={onSubmit}
        className='mt-6xl mx-auto w-full max-w-[720px] space-y-3xl'
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
            className='mt-sm w-full rounded-xl border border-neutral-900 bg-neutral-900/20 px-2xl py-xl text-neutral-100 placeholder-neutral-500'
            placeholder='Your name'
            aria-label='Name'
          />
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
            className='mt-sm w-full rounded-xl border border-neutral-900 bg-neutral-900/20 px-2xl py-xl text-neutral-100 placeholder-neutral-500'
            placeholder='you@example.com'
            aria-label='Email'
          />
        </div>

        <div>
          <label htmlFor='message' className='text-md text-neutral-100'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            rows={6}
            required
            className='mt-sm w-full rounded-xl border border-neutral-900 bg-neutral-900/20 px-2xl py-xl text-neutral-100 placeholder-neutral-500'
            placeholder='Write your message...'
            aria-label='Message'
          />
        </div>

        <div>
          <button
            type='submit'
            className='inline-flex w-full items-center justify-center rounded-full bg-primary-200 px-6xl py-xl text-black shadow-neon transition-colors hover:bg-primary-300'
          >
            <span className='text-lg font-bold'>Send Message</span>
          </button>
        </div>
      </form>
    </section>
  );
}

