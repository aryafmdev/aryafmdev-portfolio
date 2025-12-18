'use client';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export function SpaceBackground() {
  return (
    <div className='fixed inset-0 -z-10'>
      <Canvas
        className='w-full h-full'
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Stars
          radius={140}
          depth={100}
          count={5000}
          factor={7}
          saturation={0}
          fade
          speed={1.5}
        />
      </Canvas>
    </div>
  );
}
