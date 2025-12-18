import { Icon } from '@iconify/react';

type ExpItem = {
  years: string;
  company: string;
  icon: string;
  role: string;
  description: string;
};

const items: ExpItem[] = [
  {
    years: '2020 – 2022',
    company: 'Upwork',
    icon: 'logos:upwork',
    role: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.',
  },
  {
    years: '2022 – 2023',
    company: 'Trello',
    icon: 'logos:trello',
    role: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.',
  },
  {
    years: '2023 – 2024',
    company: 'Zoom',
    icon: 'logos:zoom',
    role: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.',
  },
  {
    years: '2024 – 2025',
    company: 'Zapier',
    icon: 'logos:zapier',
    role: 'Frontend Developer',
    description:
      'Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.',
  },
];

function NumberBadge(props: { index: number }) {
  return (
    <span className='inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-900 bg-neutral-900/20 text-neutral-100'>
      {props.index}
    </span>
  );
}

function ExperienceCard(props: { item: ExpItem; index: number }) {
  const { item, index } = props;
  return (
    <div className='flex items-start gap-xl'>
      <div className='pt-2'>
        <NumberBadge index={index} />
      </div>
      <div className='flex-1 rounded-3xl border border-neutral-900 p-2xl'>
        <p className='text-sm text-neutral-400'>{item.years}</p>
        <p className='mt-md text-lg font-semibold text-neutral-100'>
          {item.role}
        </p>
        <div className='mt-md inline-flex items-center gap-sm'>
          <Icon icon={item.icon} width={72} height={20} />
        </div>
        <p className='mt-2xl text-md text-neutral-400'>{item.description}</p>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id='experience' aria-labelledby='experience-title' className='text-neutral-100 max-w-[1280px] mx-auto'>
      <p className='text-md font-semibold text-primary-200 neon-text text-center'>EXPERIENCE</p>
      <h2 id='experience-title' className='mt-md text-display-sm font-extrabold uppercase text-center'>
        PROFESSIONAL WORK
      </h2>

      <div className='mt-6xl space-y-4xl'>
        {items.map((it, i) => (
          <ExperienceCard key={it.company} item={it} index={i + 1} />
        ))}
      </div>
    </section>
  );
}
