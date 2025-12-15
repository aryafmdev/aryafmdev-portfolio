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
          radius={130}
          depth={80}
          count={10000}
          factor={6}
          saturation={0}
          fade
          speed={0.85}
        />
        <Sparkles
          count={640}
          size={3.2}
          speed={2.2}
          opacity={0.9}
          color='#91ff02'
          scale={[80, 80, 80]}
        />
        <Sparkles
          count={300}
          size={3.8}
          speed={2.3}
          opacity={0.6}
          color='#91ff02'
          scale={[70, 70, 70]}
        />
        <Sparkles
          count={300}
          size={2.6}
          speed={2.0}
          opacity={0.55}
          color='#91ff02'
          scale={[70, 70, 70]}
        />
        <Sparkles
          count={500}
          size={1.2}
          speed={3.0}
          opacity={0.35}
          color='#daffab'
          scale={[90, 90, 90]}
        />
        <Sparkles
          count={450}
          size={1}
          speed={3.2}
          opacity={0.3}
          color='#daffab'
          scale={[110, 110, 110]}
        />
      </Canvas>
    </div>
  );
}
