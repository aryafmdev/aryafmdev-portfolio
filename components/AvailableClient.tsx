'use client';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const AvailableDynamic = dynamic(
  () => import('@/components/available').then((m) => m.Available),
  { ssr: false }
);

export function AvailableClient() {
  const [ready, setReady] = useState(false);
  const anchorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      setReady(true);
    };

    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            start();
            obs.disconnect();
            break;
          }
        }
      },
      { rootMargin: '200px' }
    );
    const node = anchorRef.current;
    if (node) io.observe(node);

    const onFirstInteraction = () => {
      start();
      window.removeEventListener('scroll', onFirstInteraction);
      window.removeEventListener('mousemove', onFirstInteraction);
      window.removeEventListener('touchstart', onFirstInteraction);
      window.removeEventListener('click', onFirstInteraction);
      window.removeEventListener('keydown', onFirstInteraction);
    };

    window.addEventListener('scroll', onFirstInteraction, { passive: true });
    window.addEventListener('mousemove', onFirstInteraction, { passive: true });
    window.addEventListener('touchstart', onFirstInteraction, { passive: true });
    window.addEventListener('click', onFirstInteraction);
    window.addEventListener('keydown', onFirstInteraction);

    const timeout = setTimeout(start, 4000);

    return () => {
      clearTimeout(timeout);
      io.disconnect();
      window.removeEventListener('scroll', onFirstInteraction);
      window.removeEventListener('mousemove', onFirstInteraction);
      window.removeEventListener('touchstart', onFirstInteraction);
      window.removeEventListener('click', onFirstInteraction);
      window.removeEventListener('keydown', onFirstInteraction);
    };
  }, []);

  return (
    <>
      <div ref={anchorRef} />
      {ready ? <AvailableDynamic /> : null}
    </>
  );
}
