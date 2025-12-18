'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const SpaceBackgroundDynamic = dynamic(
  () => import('@/components/SpaceBackground').then((m) => m.SpaceBackground),
  { ssr: false }
);

export function SpaceBackgroundClient() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      setReady(true);
    };
    const onFirstInteraction = () => {
      start();
      window.removeEventListener('scroll', onFirstInteraction);
      window.removeEventListener('mousemove', onFirstInteraction);
      window.removeEventListener('touchstart', onFirstInteraction);
      window.removeEventListener('click', onFirstInteraction);
      window.removeEventListener('keydown', onFirstInteraction);
      window.removeEventListener('wheel', onFirstInteraction as EventListener);
    };
    window.addEventListener('scroll', onFirstInteraction, { passive: true });
    window.addEventListener('mousemove', onFirstInteraction, { passive: true });
    window.addEventListener('touchstart', onFirstInteraction, {
      passive: true,
    });
    window.addEventListener('click', onFirstInteraction);
    window.addEventListener('keydown', onFirstInteraction);
    window.addEventListener('wheel', onFirstInteraction as EventListener, {
      passive: true,
    });
    const timeout = setTimeout(start, 3000);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', onFirstInteraction);
      window.removeEventListener('mousemove', onFirstInteraction);
      window.removeEventListener('touchstart', onFirstInteraction);
      window.removeEventListener('click', onFirstInteraction);
      window.removeEventListener('keydown', onFirstInteraction);
      window.removeEventListener('wheel', onFirstInteraction as EventListener);
    };
  }, []);
  if (!ready) return null;
  return <SpaceBackgroundDynamic />;
}
