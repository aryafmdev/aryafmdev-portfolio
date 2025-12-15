'use client';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skill', href: '#skill' },
    { label: 'Projects', href: '#projects' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];
  return (
    <header className='w-full border-b border-neutral-900 text-neutral-100 dark:border-neutral-100/15'>
      <div className='mx-auto flex items-center justify-between px-xl py-lg'>
        <div className='flex items-center gap-md'>
          <div className='h-[2px] w-8 bg-neutral-100/80' />
          <Link
            href='#home'
            className='text-display-sm font-extrabold text-primary-200'
          >
            Arya FM
          </Link>
        </div>
        <nav className='hidden md:flex items-center gap-xl'>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-md font-medium text-neutral-100 hover:text-primary-200 transition-colors'
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type='button'
          className='md:hidden inline-flex items-center justify-center rounded-full text-neutral-100'
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='text-neutral-100'
            >
              <path d='M18 6 6 18' />
              <path d='M6 6l12 12' />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='28'
              height='28'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              className='text-neutral-100'
            >
              <path d='M3 6h18' />
              <path d='M3 12h18' />
              <path d='M3 18h18' />
            </svg>
          )}
        </button>
      </div>
      {open && (
        <div
          role='dialog'
          aria-modal='true'
          className='md:hidden fixed inset-0 z-50 bg-black backdrop-blur-sm'
        >
          <div className='mx-auto px-xl py-lg'>
            <div className='flex items-center justify-between pb-lg border-b border-neutral-900'>
              <div className='flex items-center gap-md'>
                <div className='h-[2px] w-8 bg-neutral-100/80' />
                <span className='text-display-sm font-extrabold text-primary-200'>
                  Arya FM
                </span>
              </div>
              <button
                type='button'
                className='inline-flex items-center justify-center rounded-full text-neutral-100'
                aria-label='Close menu'
                onClick={() => setOpen(false)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='28'
                  height='28'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  className='text-neutral-100'
                >
                  <path d='M18 6 6 18' />
                  <path d='M6 6l12 12' />
                </svg>
              </button>
            </div>
            <nav className='flex flex-col gap-2xl py-lg'>
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='text-xl font-medium text-neutral-100 hover:text-primary-200 transition-colors'
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
