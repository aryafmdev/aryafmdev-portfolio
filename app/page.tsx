import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Service } from '@/components/service';
import { About } from '@/components/about';
import { Skill } from '@/components/skill';
import { Working } from '@/components/working';
// import { Experience } from '@/components/experience';
import { Portfolio } from '@/components/portfolio';
// import { Testimonials } from '@/components/testimonials';
import { FAQ } from '@/components/faq';
import { Available } from '@/components/available';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className='bg-dark font-sans'>
      <Header />
      <main className='mx-auto w-full px-4xl py-xl text-neutral-100'>
        <Hero />
        <div className='mt-8xl'>
          <Service />
        </div>
        <div className='mt-8xl'>
          <About />
        </div>
        <div className='mt-8xl'>
          <Skill />
        </div>
        <div className='mt-8xl'>
          <Working />
        </div>
        {/* <div className='mt-8xl'>
          <Experience />
        </div> */}
        <div className='mt-8xl'>
          <Portfolio />
        </div>
        {/* <div className='mt-8xl'>
          <Testimonials />
        </div> */}
        <div className='mt-8xl'>
          <FAQ />
        </div>
        <div className='mt-8xl'>
          <Available />
        </div>
        <div className='mt-8xl'>
          <Contact />
        </div>
        <div className='mt-8xl'>
          <Footer />
        </div>
      </main>
    </div>
  );
}
