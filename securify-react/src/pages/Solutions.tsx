import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useFadeIn } from '../hooks/useFadeIn'

const solutions = [
  {
    segment: 'startups',
    headline: 'ship fast without cutting corners',
    body: 'soc 2 ready from day one. sentinel automates the compliance work so your engineers can stay focused on the product. most startups close their first enterprise deal faster after deploying sentinel.',
    stats: ['+40% faster deal cycles', 'soc 2 in 6 weeks', 'no dedicated security hire needed'],
  },
  {
    segment: 'enterprise',
    headline: 'control at every layer',
    body: 'unified visibility across multi-cloud, multi-region deployments. fine-grained policy controls, dedicated tenancy options, and a security engineer assigned to your account.',
    stats: ['99.99% sla', 'dedicated tenancy', 'custom data residency'],
  },
  {
    segment: 'healthcare',
    headline: 'hipaa without the headache',
    body: 'built-in baa, phi detection and masking, and audit trails that satisfy any investigator. sentinel handles the compliance infrastructure so your team handles patient outcomes.',
    stats: ['hipaa baa included', 'phi auto-detection', '7-year audit retention'],
  },
  {
    segment: 'fintech',
    headline: 'pci dss and beyond',
    body: 'tokenization, encryption, and access controls purpose-built for payment data. pass your next audit with a single dashboard export.',
    stats: ['pci dss level 1', 'real-time fraud signals', 'sox-ready audit logs'],
  },
]

export default function Solutions() {
  const pageRef = useFadeIn()

  return (
    <div ref={pageRef} className="bg-black min-h-full">
      <Navbar />

      <section className="pt-40 pb-24 px-6 md:px-10">
        <p className="fade-in text-[11px] tracking-[0.14em] uppercase text-white/35 mb-6">solutions</p>
        <h1 className="hero-title fade-in text-[clamp(3.5rem,9vw,8rem)] font-medium text-white max-w-4xl mb-8">
          built for<br/><span className="text-white/25">every team</span>
        </h1>
      </section>

      <section className="px-6 md:px-10 pb-[120px]">
        <div className="flex flex-col gap-px bg-white/[0.07] border border-white/[0.07]">
          {solutions.map((s, i) => (
            <div key={i} className="fade-in bg-black px-10 py-14 hover:bg-[#080808] transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                <div className="max-w-xl">
                  <p className="text-[11px] tracking-[0.12em] uppercase text-white/30 mb-4">{s.segment}</p>
                  <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-medium tracking-[-0.04em] leading-[1.05] text-white mb-4">{s.headline}</h2>
                  <p className="text-[14px] leading-[1.65] text-white/45 font-light">{s.body}</p>
                </div>
                <div className="flex flex-col gap-3 md:text-right shrink-0">
                  {s.stats.map((st, j) => (
                    <span key={j} className="text-[12px] text-white/35 font-light tracking-[0.02em]">{st}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
