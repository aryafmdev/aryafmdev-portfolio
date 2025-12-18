'use client';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import heroImage from '@/app/assets/robotsmiling.png';
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
  animate(bob, [0, -16, 0, 16, 0], {
    duration: 7,
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
  const shakeX = useMotionValue(0);
  const shakeRz = useMotionValue(0);
  const floatX = useMotionValue(0);
  const floatRz = useMotionValue(0);
  const xCombinedRaw = useMotionValue(0);
  const rzCombinedRaw = useMotionValue(0);
  animate(floatX, [0, 8, 0, -8, 0], {
    duration: 8,
    ease: 'easeInOut',
    repeat: Infinity,
  });
  animate(floatRz, [0, 0.8, 0, -0.8, 0], {
    duration: 8,
    ease: 'easeInOut',
    repeat: Infinity,
  });
  useMotionValueEvent(x, 'change', (vx) => {
    xCombinedRaw.set(vx + shakeX.get() + floatX.get());
  });
  useMotionValueEvent(shakeX, 'change', (sx) => {
    xCombinedRaw.set(x.get() + sx + floatX.get());
  });
  useMotionValueEvent(floatX, 'change', (fx) => {
    xCombinedRaw.set(x.get() + shakeX.get() + fx);
  });
  useMotionValueEvent(shakeRz, 'change', (sz) => {
    rzCombinedRaw.set(sz + floatRz.get());
  });
  useMotionValueEvent(floatRz, 'change', (fz) => {
    rzCombinedRaw.set(shakeRz.get() + fz);
  });
  const xCombined = useSpring(xCombinedRaw, { stiffness: 140, damping: 18 });
  const rz = useSpring(rzCombinedRaw, { stiffness: 140, damping: 18 });
  const xShadow = useTransform(xCombined, (v) => v * 0.6);
  const yShadow = useTransform(y, (v) => v * 0.6);
  const rxShadow = useTransform(rotateX, (v) => v * 0.5);
  const ryShadow = useTransform(rotateY, (v) => v * 0.5);
  const revealScaleRaw = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0.05, 1, 1, 0.05]
  );
  const revealOpacityRaw = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0]
  );
  const revealYRaw = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [-60, 0, 0, 60]
  );
  const revealScale = useSpring(revealScaleRaw, {
    stiffness: 100,
    damping: 24,
  });
  const revealOpacity = useSpring(revealOpacityRaw, {
    stiffness: 100,
    damping: 24,
  });
  const revealY = useSpring(revealYRaw, { stiffness: 100, damping: 24 });
  const blurRadiusRaw = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [14, 0, 0, 14]
  );
  const blurRadius = useSpring(blurRadiusRaw, { stiffness: 100, damping: 24 });
  const revealBlur = useTransform(blurRadius, (r) => `blur(${r}px)`);
  const bounceScale = useMotionValue(1);
  const bounceY = useMotionValue(0);
  const finalScale = useTransform(
    [revealScale, bounceScale],
    ([rs, bs]) => (rs as number) * (bs as number)
  );
  const finalY = useTransform(
    [revealY, bounceY],
    ([ry, by]) => (ry as number) + (by as number)
  );
  const prevProgress = useRef(scrollYProgress.get());
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const prev = prevProgress.current;
    if (prev < 0.18 && v >= 0.18) {
      animate(bounceScale, [1, 1.2, 0.8, 1], {
        duration: 0.6,
        ease: 'easeOut',
      });
      animate(bounceY, [0, 24, -12, 0], {
        duration: 0.6,
        ease: 'easeOut',
      });
    }
    prevProgress.current = v;
  });
  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      mouseX.set(nx * 2);
      mouseY.set(ny * 2);
    },
    [mouseX, mouseY]
  );
  const onHoverStart = () => {
    animate(shakeX, [0, 0.7, -0.7, 0], {
      duration: 0.6,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'mirror',
    });
    animate(shakeRz, [0, 0.25, -0.25, 0], {
      duration: 0.6,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'mirror',
    });
  };
  const onHoverEnd = () => {
    animate(shakeX, 0, { duration: 0.2 });
    animate(shakeRz, 0, { duration: 0.2 });
  };
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
          className='relative block w-full overflow-hidden pb-4xl'
          style={{
            perspective: 1000,
            scale: finalScale,
            opacity: revealOpacity,
            y: finalY,
            filter: revealBlur,
            willChange: 'transform, filter',
          }}
          onMouseMove={onMouseMove}
          onHoverStart={onHoverStart}
          onHoverEnd={onHoverEnd}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className='relative'
            style={{
              rotateX,
              rotateY,
              rotateZ: rz,
              x: xCombined,
              y,
              willChange: 'transform',
            }}
          >
            <motion.div
              className='absolute inset-0 -z-10'
              style={{
                rotateX: rxShadow,
                rotateY: ryShadow,
                x: xShadow,
                y: yShadow,
                filter: 'blur(14px)',
                opacity: 0.5,
                background:
                  'radial-gradient(60% 60% at 50% 60%, rgba(145,255,2,0.45) 0%, rgba(145,255,2,0.0) 60%)',
              }}
            />
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
