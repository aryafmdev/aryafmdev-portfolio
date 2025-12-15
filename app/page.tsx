import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Service } from '@/components/service';

export default function Home() {
  return (
    <div className='bg-dark font-sans'>
      <Header />
      <main className='mx-auto w-full px-4xl py-6xl text-neutral-100'>
        <Hero />
        <div className='mt-8xl'>
          <Service />
        </div>
      </main>
    </div>
  );
}
