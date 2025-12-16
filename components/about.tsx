import Image from 'next/image';
import aboutImage from '@/app/assets/aboutme-image.png';

export function About() {
  return (
    <section
      aria-labelledby='about-title'
      className='text-neutral-100 text-center max-w-[1280px] mx-auto'
    >
      <p className='text-md font-semibold text-primary-200 neon-text'>ABOUT ME</p>
      <h2
        id='about'
        className='mt-md text-display-xs font-extrabold uppercase'
      >
        Crafting seamless
        <span className='text-primary-200 neon-text'> High-performance web </span>
        experiences
      </h2>
      <p className='mt-2xl text-md text-neutral-400'>
        I love turning designs into interactive, high-performance websites. With
        a keen eye for detail and a deep understanding of frontend technologies,
        I create smooth and visually appealing user experiences.
      </p>
      <div className='mt-6xl'>
        <Image
          src={aboutImage}
          alt='About me work showcase'
          className='w-full rounded-4xl shadow-neon'
          priority
        />
      </div>
    </section>
  );
}
