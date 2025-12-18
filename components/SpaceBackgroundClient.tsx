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
    const start = () => setReady(true);
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void) => void;
    };
    const ric = w.requestIdleCallback;
    if (typeof ric === 'function') {
      ric(start);
    } else {
      setTimeout(start, 0);
    }
  }, []);
  if (!ready) return null;
  return <SpaceBackgroundDynamic />;
}
