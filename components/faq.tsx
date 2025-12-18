import { Icon } from '@iconify/react';

type QA = {
  q: string;
  a: string;
};

const faqs: QA[] = [
  {
    q: 'What technologies do you specialize in?',
    a: 'I specialize in React.js, Next.js, Tailwind CSS, and TypeScript for building high-performance, scalable, and maintainable web applications.',
  },
  {
    q: 'What is your typical project timeline?',
    a: 'Small projects take 1–2 weeks, medium 3–5 weeks, and larger engagements 6–10 weeks depending on scope, complexity, and feedback cycles.',
  },
  {
    q: 'Do you provide maintenance and support?',
    a: 'Yes. I offer ongoing maintenance, performance monitoring, and iterative improvements to ensure long-term stability and user satisfaction.',
  },
  {
    q: 'How do you ensure responsive design?',
    a: 'I design mobile-first layouts, use fluid grids and modern CSS features, and thoroughly test across common breakpoints and devices.',
  },
  {
    q: 'Can you work with existing designs?',
    a: 'Absolutely. I can translate Figma or other design files into pixel-perfect interfaces while maintaining accessibility and performance.',
  },
  {
    q: 'What is your pricing model?',
    a: 'Flexible pricing via fixed-price for well-defined scopes or time-based billing for evolving requirements, with transparent communication.',
  },
];

export function FAQ() {
  return (
    <section id='faq' aria-labelledby='faq-title' className='text-neutral-100 max-w-[1280px] mx-auto'>
      <p className='text-md font-semibold text-primary-200 neon-text text-center'>FAQ</p>
      <h2 id='faq-title' className='mt-md text-display-md font-extrabold uppercase text-center'>
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <div className='mt-6xl'>
        {faqs.map((item, idx) => (
          <div key={item.q} className='py-2xl'>
            <div className='flex items-center gap-md'>
              <span className='inline-flex items-center justify-center text-primary-200'>
                <Icon icon='ph:star-fill' width={20} height={20} className='neon-icon' />
              </span>
              <p className='text-lg font-semibold text-neutral-100'>{item.q}</p>
            </div>
            <p className='mt-sm text-md text-neutral-400'>{item.a}</p>
            {idx < faqs.length - 1 && <div className='mt-2xl border-t border-neutral-900' />}
          </div>
        ))}
      </div>
    </section>
  );
}
