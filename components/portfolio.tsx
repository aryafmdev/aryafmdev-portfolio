import Image, { StaticImageData } from 'next/image';
import portfolio1 from '@/app/assets/cinemapedia.png';
import portfolio2 from '@/app/assets/sociality.png';
import portfolio3 from '@/app/assets/booky.png';
import portfolio4 from '@/app/assets/foody.png';
// import portfolio5 from '@/app/assets/portfolio5.png';
// import portfolio6 from '@/app/assets/portfolio6.png';

type PortfolioItem = {
  title: string;
  description: string;
  image: StaticImageData;
  liveUrl?: string;
};

const items: PortfolioItem[] = [
  {
    title: 'CinemaPedia',
    description:
      'CinemaPedia is a Movie Explorer web application built with Next.js, TypeScript, and TailwindCSS. This app allows users to explore, discover, and learn about various movies from around the world. With a responsive design and a user-friendly interface, CinemaPedia offers a seamless and enjoyable movie exploration experience.',
    image: portfolio1,
    liveUrl: 'https://cinemapedia-olive.vercel.app/',
  },
  {
    title: 'Sociality',
    description:
      'Sociality is A modern social media platform built with Next.js + TypeScript. Tailwind CSS, shadcn/ui, Redux Toolkit manages client state, TanStack Query handles server state with caching, Optimistic UI ensures responsive UX, Day.js formats dates, and ZOD + React Hook Form power validation and forms.',
    image: portfolio2,
    liveUrl: 'https://socialmediaappnextjstypescripttailw.vercel.app/',
  },
  {
    title: 'Booky',
    description:
      'Booky is a modern library web app built with React, TypeScript, and Vite. It features authentication, book search and filters, detailed pages with reviews and stock, loan management, and user profiles. Styling uses Tailwind CSS + shadcn/ui, with Redux Toolkit, TanStack Query, and Day.js.',
    image: portfolio3,
    liveUrl: 'https://booky-library-web.vercel.app/',
  },
  {
    title: 'Foody',
    description:
      'Foody is a restaurant web app built with React, Vite, and TypeScript. It enables users to explore menus, apply filters, search dishes, manage their cart, and complete simple checkouts. Styled with Tailwind CSS and shadcn/ui, it uses Redux Toolkit for UI state and TanStack Query for server data, responsive, and structured user experiences.',
    image: portfolio4,
    liveUrl: 'https://foody-restaurant-app-wine.vercel.app/',
  },
  // {
  //   title: 'Selected Work',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur. Aenean sed maximus aliquam velit.',
  //   image: portfolio5,
  // },
  // {
  //   title: 'Selected Work',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur. Aenean sed maximus aliquam velit.',
  //   image: portfolio6,
  // },
];

export function Portfolio() {
  return (
    <section
      id='portfolio'
      aria-labelledby='portfolio-title'
      className='text-neutral-100 max-w-[1280px] mx-auto'
    >
      <p className='text-md font-semibold text-primary-200 neon-text text-center'>
        PORTFOLIO
      </p>
      <h2
        id='portfolio-title'
        className='mt-md text-display-sm font-extrabold uppercase text-center'
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
            <h3 className='mt-xl text-xl font-semibold text-neutral-100'>
              {it.title}
            </h3>
            <p className='mt-xl text-md text-neutral-400'>{it.description}</p>
            {it.liveUrl && (
              <div className='mt-2xl'>
                <a
                  href={it.liveUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex w-full items-center justify-center rounded-full bg-primary-200 px-2xl py-md text-black shadow-neon transition-colors hover:bg-primary-300'
                  aria-label={`Open live preview for ${it.title}`}
                >
                  <span className='text-md font-bold'>LIVE PREVIEW</span>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
