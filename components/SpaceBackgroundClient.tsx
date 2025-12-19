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
    const canLoad = () => {
      const nc = (
        navigator as Navigator & {
          connection?: { saveData?: boolean; effectiveType?: string };
        }
      ).connection;
      if (nc?.saveData) return false;
      if (nc?.effectiveType && nc.effectiveType !== '4g') return false;
      return true;
    };
    const start = () => {
      if (started) return;
      started = true;
      setReady(true);
    };
    const onLoadIdle = () => {
      const w = window as Window & {
        requestIdleCallback?: (cb: () => void) => void;
      };
      const ric = w.requestIdleCallback;
      if (!canLoad()) return;
      if (typeof ric === 'function') {
        ric(start);
      } else {
        setTimeout(start, 12000);
      }
    };
    const onFirstInteraction = () => {
      if (!canLoad()) return;
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
    window.addEventListener('load', onLoadIdle, { once: true });
    return () => {
      window.removeEventListener('load', onLoadIdle);
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
