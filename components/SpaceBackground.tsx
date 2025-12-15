'use client';
import { Canvas } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';

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
          count={14000}
          factor={7}
          saturation={0}
          fade
          speed={1.5}
        />
        <Sparkles
          count={900}
          size={23.4}
          speed={1.6}
          opacity={0.92}
          color='#91ff02'
          scale={[80, 80, 80]}
        />
        <Sparkles
          count={450}
          size={4}
          speed={2.6}
          opacity={0.65}
          color='#91ff02'
          scale={[70, 70, 70]}
        />
        <Sparkles
          count={450}
          size={2.8}
          speed={2.2}
          opacity={0.6}
          color='#91ff02'
          scale={[70, 70, 70]}
        />
        <Sparkles
          count={700}
          size={1.2}
          speed={3.4}
          opacity={0.38}
          color='#daffab'
          scale={[90, 90, 90]}
        />
        <Sparkles
          count={650}
          size={22}
          speed={3.6}
          opacity={0.32}
          color='#daffab'
          scale={[110, 110, 110]}
        />
      </Canvas>
    </div>
  );
}
