'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@iconify/react';

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
            className='text-display-sm font-extrabold text-primary-200 neon-text'
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
          className='md:hidden inline-flex items-center justify-center rounded-full text-neutral-100 cursor-pointer'
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon
            icon={open ? 'mingcute:close-fill' : 'mingcute:menu-fill'}
            width={28}
            height={28}
            className='text-neutral-100'
          />
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
                className='inline-flex items-center justify-center rounded-full text-neutral-100 cursor-pointer'
                aria-label='Close menu'
                onClick={() => setOpen(false)}
              >
                <Icon
                  icon='mingcute:close-fill'
                  width={28}
                  height={28}
                  className='text-neutral-100'
                />
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
