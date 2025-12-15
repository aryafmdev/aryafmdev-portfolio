'use client';
import { Icon } from '@iconify/react';

export function Service() {
  const items = [
    {
      title: 'Custom Website Development',
      description:
        'Building responsive, fast, and scalable websites tailored to your needs.',
    },
    {
      title: 'Web Performance Optimization',
      description:
        'Enhancing website speed, SEO, and overall performance for better results.',
    },
    {
      title: 'Website Maintenance & Debugging',
      description:
        'Fixing bugs, improving UI, and ensuring smooth performance over time.',
    },
  ];

  return (
    <section aria-labelledby='service-title' className='text-neutral-100'>
      <p className='text-md font-semibold text-primary-200 neon-text'>SERVICE</p>
      <h2
        id='service-title'
        className='mt-md text-display-xs font-extrabold uppercase'
      >
        MY SERVICE EXPERTISE
      </h2>
      <p className='mt-2xl text-md text-neutral-400'>
        Creating modern, intuitive, and visually consistent web experiences that
        align with industry trends and user expectations.
      </p>

      {items.map((item) => (
        <div key={item.title} className='mt-4xl'>
          <p className='text-sm text-neutral-400'>01</p>
          <div className='my-md border-t border-neutral-900' />
          <span className='mb-md inline-flex items-center justify-center rounded-full text-primary-200'>
            <Icon icon='lucide:monitor' width={32} height={32} className='neon-icon' />
          </span>
          <h3 className='text-xl font-semibold text-neutral-100'>
            {item.title}
          </h3>
          <p className='mt-sm text-md text-neutral-400'>{item.description}</p>
        </div>
      ))}
    </section>
  );
}
