'use client';
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useScroll,
  useMotionValueEvent,
  animate,
} from 'framer-motion';
import { useCallback } from 'react';
import Image from 'next/image';
import heroImage from '@/app/assets/robotmetallic.png';

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateXRaw = useTransform(mouseY, (v) => v * -4);
  const rotateYRaw = useTransform(mouseX, (v) => v * 6);
  const xRaw = useTransform(mouseX, (v) => v * 12);
  const rotateX = useSpring(rotateXRaw, { stiffness: 140, damping: 18 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 140, damping: 18 });
  const x = useSpring(xRaw, { stiffness: 140, damping: 18 });
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, (y) => -y * 0.06);
  const bob = useMotionValue(0);
  animate(bob, [0, -6, 0], {
    duration: 4,
    ease: 'easeInOut',
    repeat: Infinity,
  });
  const yRaw = useMotionValue(0);
  useMotionValueEvent(parallaxY, 'change', (p) => {
    yRaw.set(p + bob.get());
  });
  useMotionValueEvent(bob, 'change', (bVal) => {
    yRaw.set(parallaxY.get() + bVal);
  });
  const y = useSpring(yRaw, { stiffness: 140, damping: 18 });
  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      mouseX.set(nx * 2);
      mouseY.set(ny * 2);
    },
    [mouseX, mouseY]
  );
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
      <motion.div
        className='mt-6xl block w-full max-w-[1100px] mx-auto'
        style={{ perspective: 1000 }}
        onMouseMove={onMouseMove}
        initial={{ opacity: 0, scale: 0.98, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        whileHover={{ scale: 1.02 }}
      >
        <motion.div style={{ rotateX, rotateY, x, y, willChange: 'transform' }}>
          <Image
            src={heroImage}
            alt='Hero image'
            className='block w-full'
            sizes='(min-width: 768px) 1100px, 100vw'
            priority
          />
        </motion.div>
      </motion.div>
    </>
  );
}
