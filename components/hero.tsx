import Image from 'next/image';
import heroImage from '@/app/assets/robotmetallic.png';

export function Hero() {
  return (
    <>
      <section
        id='hero'
        aria-labelledby='hero-title'
        className='text-neutral-100 max-w-[1280px] mx-auto'
      >
        <div className='flex items-center gap-md'>
          {/* <div className='h-[2px] w-8 bg-neutral-100/80' /> */}
          <p className='text-md font-semibold'>
            Hi, I am Arya FM <br /> Software Engineer (Frontend Heavy)
          </p>
        </div>
        <h1 className='mt-2xl text-display-sm font-extrabold uppercase'>
          Building fast &amp;{' '}
          <span className='text-primary-200 neon-text'>Interactive</span> web
          experiences.
        </h1>
        <p className='mt-2xl text-md text-neutral-400'>
          Bridging creativity and functionality to deliver stunning,
          user-friendly web applications
        </p>
        <div className='mt-6xl'>
          <a
            href='#contact'
            className='inline-flex w-full items-center justify-center rounded-full bg-primary-200 px-6xl py-xl text-black shadow-neon transition-colors hover:bg-primary-300'
          >
            <span className='text-lg font-bold'>HIRE ME</span>
          </a>
        </div>
      </section>
      <Image
        src={heroImage}
        alt='Hero image'
        className='mt-4xl block w-full max-w-[1100px] mx-auto animate-hero-bob'
        sizes='(min-width: 768px) 1100px, 100vw'
        priority
      />
    </>
  );
}
