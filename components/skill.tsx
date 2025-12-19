import { Icon } from '@iconify/react';

type SkillItem = {
  name: string;
  icon: string;
  percent: number;
};

const skills: SkillItem[] = [
  { name: 'React JS', icon: 'logos:react', percent: 90 },
  { name: 'Next.js', icon: 'logos:nextjs-icon', percent: 85 },
  { name: 'JavaScript', icon: 'logos:javascript', percent: 90 },
  { name: 'TypeScript', icon: 'logos:typescript-icon', percent: 85 },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', percent: 90 },
  { name: 'MongoDB', icon: 'logos:mongodb-icon', percent: 80 },
  { name: 'ExpressJS', icon: 'devicon:express', percent: 80 },
  { name: 'Node.js', icon: 'logos:nodejs-icon', percent: 80 },
  { name: 'HTML', icon: 'logos:html-5', percent: 95 },
  { name: 'CSS', icon: 'logos:css-3', percent: 90 },
];

function CircleIcon(props: { icon: string }) {
  return (
    <span className='inline-flex h-16 w-16 items-center justify-center rounded-full border border-neutral-900 bg-neutral-500 text-primary-200 neon-icon'>
      <Icon icon={props.icon} width={36} height={36} />
    </span>
  );
}

export function Skill() {
  return (
    <section
      id='skill'
      aria-labelledby='skill-title'
      className='text-neutral-100 max-w-[1280px] mx-auto'
    >
      <div className='md:grid md:grid-cols-2 md:items-start md:gap-xs'>
        <div>
          <p className='text-md font-semibold text-primary-200'>
            SKILLS
          </p>
          <h2
            id='skill-title'
            className='mt-md text-display-sm font-extrabold uppercase'
          >
            SKILLS THAT BRING IDEAS TO LIFE
          </h2>
          <div className='mt-3xl grid grid-cols-5 gap-2xl md:grid-cols-3'>
            {skills.map((s) => (
              <CircleIcon key={s.name} icon={s.icon} />
            ))}
          </div>
        </div>
        <div className='mt-6xl md:mt-0 space-y-2xl'>
          {skills.map((s) => (
            <div key={s.name} className='w-full'>
              <div className='relative h-12 w-full rounded-full bg-neutral-500'>
                <div
                  className='absolute left-0 top-0 h-full rounded-full bg-primary-200 shadow-neon'
                  style={{ width: `${s.percent}%` }}
                />
                <div className='relative z-10 flex h-full items-center px-2xl pr-2xl justify-between'>
                  <span className='text-lg font-semibold text-black'>
                    {s.name}
                  </span>
                  <span className='inline-block text-md font-semibold text-black'>
                    {s.percent}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
