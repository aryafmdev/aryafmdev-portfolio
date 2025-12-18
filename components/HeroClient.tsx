'use client';
import dynamic from 'next/dynamic';

const HeroDynamic = dynamic(
  () => import('@/components/hero').then((m) => m.Hero),
  { ssr: false }
);

export function HeroClient() {
  return (
    <div className='relative'>
      <HeroDynamic />
    </div>
  );
}
