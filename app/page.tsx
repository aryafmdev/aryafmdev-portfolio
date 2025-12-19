import { Header } from '@/components/header';
import dynamic from 'next/dynamic';
const ServiceLazy = dynamic(() =>
  import('@/components/service').then((m) => m.Service)
);
const AboutLazy = dynamic(() =>
  import('@/components/about').then((m) => m.About)
);
const SkillLazy = dynamic(() =>
  import('@/components/skill').then((m) => m.Skill)
);
const WorkingLazy = dynamic(() =>
  import('@/components/working').then((m) => m.Working)
);
// const ExperienceLazy = dynamic(() => import('@/components/experience').then((m) => m.Experience));
const PortfolioLazy = dynamic(() =>
  import('@/components/portfolio').then((m) => m.Portfolio)
);
// const TestimonialsLazy = dynamic(() => import('@/components/testimonials').then((m) => m.Testimonials));
const FAQLazy = dynamic(() => import('@/components/faq').then((m) => m.FAQ));
const FooterLazy = dynamic(() =>
  import('@/components/footer').then((m) => m.Footer)
);
const ContactLazy = dynamic(() =>
  import('@/components/contact').then((m) => m.Contact)
);
import { Hero } from '@/components/hero';
import { InViewClient } from '@/components/InViewClient';

export default function Home() {
  return (
    <div className='bg-dark font-sans'>
      <Header />
      <main className='mx-auto w-full px-4xl py-xl text-neutral-100'>
        <Hero />
        <div className='mt-8xl'>
          <InViewClient>
            <ServiceLazy />
          </InViewClient>
        </div>
        <div className='mt-8xl'>
          <InViewClient>
            <AboutLazy />
          </InViewClient>
        </div>
        <div className='mt-8xl'>
          <InViewClient>
            <SkillLazy />
          </InViewClient>
        </div>
        <div className='mt-8xl'>
          <InViewClient>
            <WorkingLazy />
          </InViewClient>
        </div>
        {/* <div className='mt-8xl'>
          <InViewClient>
            <ExperienceLazy />
          </InViewClient>
        </div> */}
        <div className='mt-8xl'>
          <InViewClient>
            <PortfolioLazy />
          </InViewClient>
        </div>
        {/* <div className='mt-8xl'>
          <InViewClient>
            <TestimonialsLazy />
          </InViewClient>
        </div> */}
        <div className='mt-8xl'>
          <InViewClient>
            <FAQLazy />
          </InViewClient>
        </div>
        <div className='mt-8xl'>
          <InViewClient>
            <ContactLazy />
          </InViewClient>
        </div>
        <div className='mt-8xl'>
          <InViewClient>
            <FooterLazy />
          </InViewClient>
        </div>
      </main>
    </div>
  );
}
