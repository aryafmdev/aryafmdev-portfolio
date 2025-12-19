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
    <section
      aria-labelledby='service-title'
      className='text-neutral-100 max-w-[1280px] mx-auto'
    >
      <div className='md:grid md:grid-cols-2 md:items-end md:gap-xs'>
        <div>
          <p className='text-md font-semibold text-primary-200 neon-text'>
            SERVICE
          </p>
          <h2
            id='service-title'
            className='mt-md text-display-sm font-extrabold uppercase'
          >
            MY SERVICE EXPERTISE
          </h2>
        </div>
        <div>
          <p className='mt-2xl text-md text-neutral-400 md:mt-0'>
            Creating modern, intuitive, and visually consistent web experiences
            that align with industry trends and user expectations.
          </p>
        </div>
      </div>

      <div className='mt-6xl grid grid-cols-1 gap-4xl md:grid-cols-3 md:gap-xs'>
        {items.map((item, idx) => (
          <div key={item.title} className='mt-4xl md:mt-0'>
            <p className='text-sm text-neutral-400'>
              {String(idx + 1).padStart(2, '0')}
            </p>
            <div className='my-md border-t border-neutral-900' />
            <span className='mb-md inline-flex items-center justify-center rounded-full text-primary-200'>
              <Icon
                icon='lucide:monitor'
                width={32}
                height={32}
                className='neon-icon'
              />
            </span>
            <h3 className='text-xl font-semibold text-neutral-100'>
              {item.title}
            </h3>
            <p className='mt-sm text-md text-neutral-400'>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
