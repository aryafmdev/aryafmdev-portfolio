'use client';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import heroImage from '@/app/assets/robotmetallic.png';

export function Available() {
  return (
    <section
      id='available'
      aria-labelledby='available-title'
      className='text-neutral-100 max-w-[1280px] mx-auto'
    >
      {/* <p className='text-md font-semibold text-primary-200 neon-text'>AVAILABLE</p>
      <h2 id='available-title' className='mt-md text-display-xs font-extrabold uppercase'>
        AVAILABLE FOR WORK
      </h2> */}

      <div className='mt-xl mx-auto max-w-[520px]'>
        <Image
          src={heroImage}
          alt='Arya FM portrait'
          className='w-full animate-hero-bob'
          priority
        />
        <div className='mt-2xl flex items-center justify-center gap-2xl'>
          <a
            href='mailto:muhammadaryafm@gmail.com'
            aria-label='Email Arya FM'
            className='inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900 bg-neutral-900/20 text-neutral-100'
          >
            <Icon
              icon='mdi:email'
              width={38}
              height={38}
              className='neon-icon'
            />
          </a>
          <a
            href='https://github.com/aryafmdev'
            aria-label='GitHub Profile'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900 bg-neutral-900/20 text-neutral-100'
          >
            <Icon
              icon='simple-icons:github'
              width={38}
              height={38}
              className='neon-icon'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/arya-fm-81a91038b/'
            aria-label='LinkedIn Profile'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900 bg-neutral-900/20 text-neutral-100'
          >
            <Icon
              icon='simple-icons:linkedin'
              width={32}
              height={32}
              className='neon-icon'
            />
          </a>
        </div>
        <div className='mt-2xl text-center'>
          <p className='text-xl font-semibold text-neutral-100'>Arya FM</p>
          <div className='mt-sm inline-flex items-center justify-center gap-sm'>
            <span className='inline-flex h-3 w-3 rounded-full bg-primary-200 neon-icon' />
            <span className='text-md text-neutral-400'>Available for Work</span>
          </div>
        </div>
      </div>
    </section>
  );
}
