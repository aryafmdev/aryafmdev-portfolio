'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<
    'home' | 'about' | 'skill' | 'portfolio' | 'faq' | 'contact'
  >('home');
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const nav = [
    { label: 'Home', id: 'home', href: '#home' },
    { label: 'About', id: 'about', href: '#about' },
    { label: 'Skill', id: 'skill', href: '#skill' },
    { label: 'Projects', id: 'portfolio', href: '#portfolio' },
    { label: 'FAQ', id: 'faq', href: '#faq' },
    { label: 'Contact', id: 'contact', href: '#contact' },
  ] as const;
  const handleNavClick =
    (id: (typeof nav)[number]['id']) => (e: React.MouseEvent) => {
      e.preventDefault();
      setActive(id);
      if (id === 'home') {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        const headerEl = document.querySelector('header') as HTMLElement | null;
        const headerH = headerEl?.offsetHeight ?? 0;
        const extra = id === 'about' ? 38 : 8;
        if (el) {
          const y =
            el.getBoundingClientRect().top + window.scrollY - headerH - extra;
          window.scrollTo({
            top: Math.max(0, y),
            left: 0,
            behavior: 'smooth',
          });
        }
      }
      setOpen(false);
    };
  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-neutral-900 text-neutral-100 dark:border-neutral-100/15 transition-colors ${
        scrolled ? 'bg-black' : ''
      }`}
    >
      <div className='mx-auto flex items-center justify-between px-xl py-lg'>
        <div className='flex items-center gap-md'>
          <div className='h-[2px] w-8 bg-neutral-100/80' />
          <Link
            href='#home'
            className='text-display-sm font-extrabold text-primary-200 neon-text'
            onClick={handleNavClick('home')}
          >
            Arya FM
          </Link>
        </div>
        <nav className='hidden md:flex items-center gap-xl'>
          {nav.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={handleNavClick(item.id)}
              className={`text-md font-medium transition-colors ${
                active === item.id
                  ? 'text-primary-200 neon-text'
                  : 'text-neutral-100 hover:text-primary-200'
              }`}
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
                  key={item.id}
                  href={item.href}
                  className={`text-xl font-medium transition-colors ${
                    active === item.id
                      ? 'text-primary-200 neon-text'
                      : 'text-neutral-100 hover:text-primary-200'
                  }`}
                  onClick={handleNavClick(item.id)}
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
