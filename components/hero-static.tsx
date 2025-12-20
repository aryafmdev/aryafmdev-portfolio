import Image from 'next/image';
import heroImage from '@/app/assets/robotsmiling.png';

export function HeroStatic() {
  return (
    <div className='max-w-[1280px] mx-auto'>
      <div className='md:grid md:grid-cols-2 md:items-center md:gap-xs'>
        <section
          id='hero'
          aria-labelledby='hero-title'
          className='text-neutral-100 max-w-[1280px] mx-auto md:mx-0'
        >
          <div className='flex items-center gap-md'>
            <p className='text-md font-semibold'>
              Hi, I am Arya FM <br /> Software Engineer (Frontend Heavy)
            </p>
          </div>
          <h1 className='mt-2xl text-display-sm font-extrabold uppercase'>
            Building fast &amp;{' '}
            <span className='text-primary-200'>Interactive</span> web
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
        <div className='relative mt-8xl block w-full max-w-[1100px] mx-auto md:mt-0 md:mx-0 md:justify-self-end animate-hero-bob'>
          <Image
            src={heroImage}
            alt='Hero image'
            className='block w-full'
            sizes='(min-width: 1280px) 1100px, (min-width: 768px) 600px, 348px'
            quality={50}
            placeholder='blur'
            priority
          />
        </div>
      </div>
    </div>
  );
}
