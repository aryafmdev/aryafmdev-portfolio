'use client';
import { useState } from 'react';
import { Icon } from '@iconify/react';

type Testimonial = {
  name: string;
  role: string;
  company: string;
  brandIcon: string;
  brandClass?: string;
  text: string;
  stars: number;
};

const allTestimonials: Testimonial[] = [
  {
    name: 'Thom Haye',
    role: 'Head of Product',
    company: 'Google',
    brandIcon: 'logos:google',
    text: 'Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Thom Haye',
    role: 'Head of Product',
    company: 'Microsoft',
    brandIcon: 'logos:microsoft',
    text: 'Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Thom Haye',
    role: 'Head of Product',
    company: 'Amazon (AWS)',
    brandIcon: 'logos:aws',
    text: 'Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Thom Haye',
    role: 'Head of Product',
    company: 'Apple',
    brandIcon: 'simple-icons:apple',
    brandClass: 'text-neutral-100',
    text: 'Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Thom Haye',
    role: 'Head of Product',
    company: 'Facebook (Meta)',
    brandIcon: 'logos:facebook',
    text: 'Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Thom Haye',
    role: 'Head of Product',
    company: 'GitHub',
    brandIcon: 'logos:github',
    text: 'Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Thom Haye',
    role: 'Head of Product',
    company: 'Slack',
    brandIcon: 'logos:slack-icon',
    text: 'Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Thom Haye',
    role: 'Head of Product',
    company: 'Stripe',
    brandIcon: 'logos:stripe',
    text: 'Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Thom Haye',
    role: 'Head of Product',
    company: 'Atlassian',
    brandIcon: 'logos:atlassian',
    text: 'Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Thom Haye',
    role: 'Head of Product',
    company: 'Upwork',
    brandIcon: 'logos:upwork',
    text: 'Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Thom Haye',
    role: 'Head of Product',
    company: 'Zapier',
    brandIcon: 'logos:zapier',
    text: 'Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!',
    stars: 5,
  },
  {
    name: 'Thom Haye',
    role: 'Head of Product',
    company: 'Zoom',
    brandIcon: 'logos:zoom',
    text: 'Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!',
    stars: 5,
  },
];

const PAGE_SIZE = 3;

function Stars({ count }: { count: number }) {
  return (
    <div className='inline-flex items-center gap-xxs'>
      {Array.from({ length: count }).map((_, i) => (
        <Icon
          key={i}
          icon='ph:star-fill'
          width={18}
          height={18}
          className='text-primary-200 neon-icon'
        />
      ))}
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <div className='rounded-3xl border border-neutral-900 p-2xl'>
      <div className='flex items-start justify-between'>
        <div>
          <p className='text-lg font-semibold text-neutral-100'>{t.name}</p>
          <p className='text-sm text-neutral-400'>{t.role}</p>
        </div>
        <Icon
          icon={t.brandIcon}
          width={82}
          height={22}
          className={t.brandClass}
        />
      </div>
      <div className='mt-2xl'>
        <Stars count={t.stars} />
      </div>
      <p className='mt-md text-md text-neutral-100'>{`“${t.text}”`}</p>
    </div>
  );
}

export function Testimonials() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(allTestimonials.length / PAGE_SIZE);
  const isFirst = page === 0;
  const isLast = page === totalPages - 1;
  const visible = allTestimonials.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE
  );

  return (
    <section
      id='testimonials'
      aria-labelledby='testimonials-title'
      className='text-neutral-100 max-w-[1280px] mx-auto'
    >
      <p className='text-md font-semibold text-primary-200 neon-text text-center'>
        TESTIMONIALS
      </p>
      <h2
        id='testimonials-title'
        className='mt-md text-display-sm font-extrabold uppercase text-center '
      >
        PEOPLE SAYS ABOUT ME
      </h2>

      <div className='mt-6xl space-y-4xl'>
        {visible.map((t, idx) => (
          <Card key={`${t.company}-${idx}`} t={t} />
        ))}
      </div>

      <div className='mt-4xl flex items-center justify-center gap-xl'>
        <button
          type='button'
          aria-label='Previous testimonials'
          disabled={isFirst}
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-900 ${
            isFirst
              ? 'text-neutral-600 cursor-not-allowed'
              : 'text-primary-200 neon-icon cursor-pointer'
          }`}
        >
          <Icon icon='mingcute:arrow-left-line' width={22} height={22} />
        </button>
        <button
          type='button'
          aria-label='Next testimonials'
          disabled={isLast}
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-900 ${
            isLast
              ? 'text-neutral-600 cursor-not-allowed'
              : 'text-primary-200 neon-icon cursor-pointer'
          }`}
        >
          <Icon icon='mingcute:arrow-right-line' width={22} height={22} />
        </button>
      </div>
    </section>
  );
}
