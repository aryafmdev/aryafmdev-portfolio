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
import { useCallback, useRef } from 'react';
import Image from 'next/image';
import heroImage from '@/app/assets/robotsmiling.png';

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
  animate(bob, [0, -16, 0, 16, 0], {
    duration: 7,
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
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
    animate(shakeX, [0, 0.8, -0.8, 0], {
      duration: 0.6,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'mirror',
    });
    animate(shakeRz, [0, 0.3, -0.3, 0], {
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
        className='mt-8xl block w-full max-w-[1100px] mx-auto'
        ref={containerRef}
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
              filter: 'blur(24px)',
              opacity: 0.78,
              background:
                'radial-gradient(60% 60% at 50% 60%, rgba(145,255,2,0.45) 0%, rgba(145,255,2,0.0) 60%)',
              mixBlendMode: 'screen',
            }}
          />
          <motion.div
            className='absolute inset-0 -z-20'
            style={{
              rotateX: rxShadow,
              rotateY: ryShadow,
              x: xShadow,
              y: yShadow,
              filter: 'blur(40px)',
              opacity: 0.6,
              background:
                'radial-gradient(80% 80% at 50% 65%, rgba(145,255,2,0.65) 0%, rgba(145,255,2,0.0) 70%)',
              mixBlendMode: 'screen',
            }}
          />
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
