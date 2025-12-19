'use client';
import { useEffect, useRef, useState } from 'react';

export function InViewClient(props: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  const anchorRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (visible) return;
    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
            break;
          }
        }
      },
      { rootMargin: '200px' }
    );
    const node = anchorRef.current;
    if (node) io.observe(node);
    return () => io.disconnect();
  }, [visible]);
  return (
    <>
      <div ref={anchorRef} />
      {visible ? props.children : null}
    </>
  );
}
