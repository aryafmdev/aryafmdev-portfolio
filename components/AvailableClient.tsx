'use client';
import dynamic from 'next/dynamic';

const AvailableDynamic = dynamic(
  () => import('@/components/available').then((m) => m.Available),
  { ssr: false }
);

export function AvailableClient() {
  return <AvailableDynamic />;
}

