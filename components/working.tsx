'use client';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import robotImage from '@/app/assets/robotmetallic.png';

type Item = { text: string };

const withMe: Item[] = [
  { text: 'React Expert' },
  { text: 'Precise Website Implementation' },
  { text: 'TypeScript Proficiency' },
  { text: 'Clean, Maintainable Code' },
  { text: 'Responsive Website Development' },
  { text: 'UI Design Proficiency (Figma)' },
];

const otherTalent: Item[] = [
  { text: 'Basic React Knowledge' },
  { text: 'Inconsistent Design Translation' },
  { text: 'Little to No TypeScript Knowledge' },
  { text: 'Unstructured Code' },
  { text: 'Inconsistent Responsiveness' },
  { text: 'No Design Skills' },
];

function ListSection(props: {
  title: string;
  avatar: React.ReactNode;
  items: Item[];
  textClass?: string;
}) {
  return (
    <div>
      <p className='text-md font-semibold text-neutral-100 text-center'>
        {props.title}
      </p>
      <div className='mt-2xl flex justify-center'>{props.avatar}</div>
      <div className='mt-3xl'>
        {props.items.map((i, idx) => (
          <div key={i.text} className='py-xl'>
            <div className='flex items-center gap-md'>
              <span className='inline-flex items-center justify-center text-primary-200'>
                <Icon
                  icon='lucide:sparkles'
                  width={22}
                  height={22}
                  className='neon-icon'
                />
              </span>
              <span
                className={`text-md ${props.textClass ?? 'text-neutral-100'}`}
              >
                {i.text}
              </span>
            </div>
            {idx < props.items.length - 1 && (
              <div className='mt-md border-t border-neutral-900' />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Working() {
  return (
    <section
      id='working'
      aria-labelledby='working-title'
      className='text-neutral-100 max-w-[1280px] mx-auto'
    >
      <p className='text-md font-semibold text-primary-200 neon-text text-center'>
        WORKING
      </p>
      <h2
        id='working-title'
        className='mt-md text-display-sm font-extrabold uppercase text-center'
      >
        WHY CHOOSE ME?
      </h2>

      <div className='mt-6xl space-y-8xl'>
        <ListSection
          title='WORKING WITH ME'
          avatar={
            <span className='inline-flex h-20 w-20 items-center justify-center rounded-full border border-neutral-900 bg-neutral-900/20 shadow-neon overflow-hidden'>
              <Image
                src={robotImage}
                alt='My avatar'
                className='h-full w-full object-cover object-top'
                style={{ objectPosition: 'center 20%' }}
                priority
              />
            </span>
          }
          items={withMe}
        />

        <ListSection
          title='ANOTHER TALENT'
          avatar={
            <span className='inline-flex h-20 w-20 items-center justify-center rounded-full border border-neutral-900 bg-neutral-900/20 text-primary-200 neon-icon'>
              <Icon icon='mingcute:user-4-fill' width={80} height={80} />
            </span>
          }
          items={otherTalent}
          textClass='text-neutral-500'
        />
      </div>

      <div className='mt-6xl'>
        <a
          href='#contact'
          className='inline-flex w-full items-center justify-center rounded-full bg-primary-200 px-6xl py-xl text-black shadow-neon transition-colors hover:bg-primary-300'
        >
          <span className='text-lg font-bold'>HIRE ME</span>
        </a>
      </div>
    </section>
  );
}
