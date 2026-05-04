import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useFadeIn } from '../hooks/useFadeIn'

const plans = [
  {
    tier: 'starter',
    price: '$0',
    period: 'free forever',
    features: ['up to 3 users', '10gb encrypted storage', 'basic threat detection', 'community support', '7-day audit log retention'],
    cta: 'get started free',
    featured: false,
  },
  {
    tier: 'pro',
    price: '$49',
    period: 'per seat / month',
    features: ['unlimited users', '1tb encrypted storage', 'real-time threat detection', 'soc 2 & gdpr compliance', '90-day audit log retention', 'priority slack support'],
    cta: 'start 14-day trial',
    featured: true,
  },
  {
    tier: 'enterprise',
    price: 'custom',
    period: 'volume pricing available',
    features: ['everything in pro', 'unlimited storage', 'hipaa & iso 27001', 'dedicated security engineer', '7-year audit log retention', 'sla 99.99% uptime'],
    cta: 'contact sales',
    featured: false,
  },
]

const faqs = [
  { q: 'can i switch plans anytime?', a: 'yes. upgrade or downgrade at any time. changes take effect at the start of your next billing cycle.' },
  { q: 'is there a free trial?', a: 'pro includes a 14-day free trial, no credit card required. starter is free forever.' },
  { q: 'what payment methods do you accept?', a: 'all major credit cards, ach bank transfer, and wire transfer for annual enterprise contracts.' },
  { q: 'do you offer nonprofit or startup discounts?', a: 'yes — 50% off pro for YC, a16z, and other recognized accelerator companies. reach out to verify.' },
]

export default function Pricing() {
  const pageRef = useFadeIn()
  return (
    <div ref={pageRef} className="bg-black min-h-full">
      <Navbar />
      <section className="pt-40 pb-24 px-6 md:px-10">
        <p className="fade-in text-[11px] tracking-[0.14em] uppercase text-white/35 mb-6">pricing</p>
        <h1 className="hero-title fade-in text-[clamp(3.5rem,9vw,8rem)] font-medium text-white max-w-4xl mb-8">
          transparent,<br /><span className="text-white/25">no surprises</span>
        </h1>
      </section>

      <section className="px-6 md:px-10 pb-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.07] border border-white/[0.07]">
          {plans.map(p => (
            <div key={p.tier} className={`fade-in flex flex-col px-10 py-12 ${p.featured ? 'bg-white text-black' : 'bg-black text-white'}`}>
              <p className={`text-[11px] tracking-[0.12em] uppercase mb-6 ${p.featured ? 'text-black/35' : 'text-white/30'}`}>{p.tier}</p>
              <p className={`text-[clamp(2.8rem,5vw,4rem)] font-medium tracking-[-0.04em] leading-none mb-1.5 ${p.featured ? 'text-black' : 'text-white'}`}>{p.price}</p>
              <p className={`text-[13px] mb-8 ${p.featured ? 'text-black/35' : 'text-white/30'}`}>{p.period}</p>
              <div className={`h-px mb-8 ${p.featured ? 'bg-black/[0.08]' : 'bg-white/[0.08]'}`} />
              <ul className="flex flex-col gap-3.5 mb-10 flex-1">
                {p.features.map(f => (
                  <li key={f} className={`text-[14px] font-light flex items-center gap-2.5 ${p.featured ? 'text-black/65' : 'text-white/55'}`}>
                    <span className={`block h-px w-4 shrink-0 ${p.featured ? 'bg-black/25' : 'bg-white/25'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`rounded-full px-6 py-3.5 text-[14px] font-normal border transition-colors ${p.featured ? 'bg-black text-white border-black hover:bg-neutral-800' : 'bg-transparent text-white border-white/15 hover:bg-white/[0.07]'}`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white text-black px-6 md:px-10 py-[120px]">
        <p className="fade-in text-[11px] tracking-[0.14em] uppercase text-black/35 mb-6">faq</p>
        <h2 className="fade-in text-[clamp(2.4rem,5vw,4rem)] font-medium leading-[0.95] tracking-[-0.04em] mb-16 max-w-xl">
          pricing<br /><span className="text-black/25">questions</span>
        </h2>
        <div>
          {faqs.map(f => (
            <div key={f.q} className="fade-in py-8 border-b border-black/[0.08] first:border-t first:border-black/[0.08]">
              <h3 className="text-[18px] font-medium tracking-[-0.03em] text-black mb-3">{f.q}</h3>
              <p className="text-[14px] leading-[1.7] text-black/50 font-light max-w-[600px]">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
