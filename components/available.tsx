'use client';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import heroImage from '@/app/assets/robotmetallic.png';
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useScroll,
  useMotionValueEvent,
  animate,
} from 'framer-motion';
import { useCallback, useRef } from 'react';

export function Available() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateXRaw = useTransform(mouseY, (v) => v * -4);
  const rotateYRaw = useTransform(mouseX, (v) => v * 6);
  const xRaw = useTransform(mouseX, (v) => v * 10);
  const rotateX = useSpring(rotateXRaw, { stiffness: 140, damping: 18 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 140, damping: 18 });
  const x = useSpring(xRaw, { stiffness: 140, damping: 18 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 24]);
  const bob = useMotionValue(0);
  animate(bob, [0, -6, 0], {
    duration: 4,
    ease: 'easeInOut',
    repeat: Infinity,
  });
  const yRaw = useMotionValue(0);
  const baseY = 8;
  useMotionValueEvent(parallaxY, 'change', (p) => {
    yRaw.set(baseY + p + bob.get());
  });
  useMotionValueEvent(bob, 'change', (bVal) => {
    yRaw.set(baseY + parallaxY.get() + bVal);
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
    <section
      id='available'
      aria-labelledby='available-title'
      className='text-neutral-100 max-w-[1280px] mx-auto'
    >
      {/* <p className='text-md font-semibold text-primary-200 neon-text'>AVAILABLE</p>
      <h2 id='available-title' className='mt-md text-display-xs font-extrabold uppercase'>
        AVAILABLE FOR WORK
      </h2> */}

      <div ref={containerRef} className='mt-xl mx-auto max-w-[520px]'>
        <motion.div
          className='relative block w-full overflow-hidden'
          style={{ perspective: 1000 }}
          onMouseMove={onMouseMove}
          initial={{ opacity: 0, scale: 0.98, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            style={{ rotateX, rotateY, x, y, willChange: 'transform' }}
          >
            <Image
              src={heroImage}
              alt='Arya FM portrait'
              className='block w-full'
              priority
            />
          </motion.div>
        </motion.div>
        <div className='mt-2xl flex items-center justify-center gap-2xl'>
          <a
            href='mailto:muhammadaryafm@gmail.com'
            aria-label='Email Arya FM'
            className='inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900 bg-neutral-900/20 text-neutral-100'
          >
            <Icon
              icon='mdi:email'
              width={38}
              height={38}
              className='neon-icon'
            />
          </a>
          <a
            href='https://github.com/aryafmdev'
            aria-label='GitHub Profile'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900 bg-neutral-900/20 text-neutral-100'
          >
            <Icon
              icon='simple-icons:github'
              width={38}
              height={38}
              className='neon-icon'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/arya-fm-81a91038b/'
            aria-label='LinkedIn Profile'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900 bg-neutral-900/20 text-neutral-100'
          >
            <Icon
              icon='simple-icons:linkedin'
              width={32}
              height={32}
              className='neon-icon'
            />
          </a>
        </div>
        <div className='mt-2xl text-center'>
          <p className='text-xl font-semibold text-neutral-100'>Arya FM</p>
          <div className='mt-sm inline-flex items-center justify-center gap-sm'>
            <span className='inline-flex h-3 w-3 rounded-full bg-primary-200 neon-icon' />
            <span className='text-md text-neutral-400'>Available for Work</span>
          </div>
        </div>
      </div>
    </section>
  );
}
