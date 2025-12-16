import Image, { StaticImageData } from 'next/image';
import portfolio1 from '@/app/assets/portfolio1.png';
import portfolio2 from '@/app/assets/portfolio2.png';
import portfolio3 from '@/app/assets/portfolio3.png';
import portfolio4 from '@/app/assets/portfolio4.png';
import portfolio5 from '@/app/assets/portfolio5.png';
import portfolio6 from '@/app/assets/portfolio6.png';

type PortfolioItem = {
  title: string;
  description: string;
  image: StaticImageData;
};

const items: PortfolioItem[] = [
  {
    title: 'Selected Work',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed maximus aliquam velit.',
    image: portfolio1,
  },
  {
    title: 'Selected Work',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed maximus aliquam velit.',
    image: portfolio2,
  },
  {
    title: 'Selected Work',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed maximus aliquam velit.',
    image: portfolio3,
  },
  {
    title: 'Selected Work',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed maximus aliquam velit.',
    image: portfolio4,
  },
  {
    title: 'Selected Work',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed maximus aliquam velit.',
    image: portfolio5,
  },
  {
    title: 'Selected Work',
    description:
      'Lorem ipsum dolor sit amet consectetur. Aenean sed maximus aliquam velit.',
    image: portfolio6,
  },
];

export function Portfolio() {
  return (
    <section
      id='portfolio'
      aria-labelledby='portfolio-title'
      className='text-neutral-100 max-w-[1280px] mx-auto'
    >
      <p className='text-md font-semibold text-primary-200 neon-text'>
        PORTFOLIO
      </p>
      <h2
        id='portfolio-title'
        className='mt-md text-display-xs font-extrabold uppercase'
      >
        SELECTED WORK
      </h2>

      <div className='mt-6xl space-y-6xl'>
        {items.map((it, idx) => (
          <div key={idx}>
            <div className='overflow-hidden rounded-4xl shadow-neon border border-neutral-900'>
              <Image
                src={it.image}
                alt={`${it.title} ${idx + 1}`}
                className='w-full object-cover'
                priority={idx < 2}
              />
            </div>
            <h3 className='mt-md text-xl font-semibold text-neutral-100'>
              {it.title}
            </h3>
            <p className='mt-sm text-md text-neutral-400'>{it.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
