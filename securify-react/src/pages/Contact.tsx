import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useFadeIn } from '../hooks/useFadeIn'

const channels = [
  { label: 'sales', email: 'sales@sentinel.io', desc: 'for pricing, enterprise plans, and demos.' },
  { label: 'support', email: 'support@sentinel.io', desc: 'for technical issues and account help.' },
  { label: 'security', email: 'security@sentinel.io', desc: 'to report a vulnerability or security concern.' },
  { label: 'press', email: 'press@sentinel.io', desc: 'for media inquiries and partnership requests.' },
]

export default function Contact() {
  const pageRef = useFadeIn()
  return (
    <div ref={pageRef} className="bg-black min-h-full">
      <Navbar />
      <section className="pt-40 pb-24 px-6 md:px-10">
        <p className="fade-in text-[11px] tracking-[0.14em] uppercase text-white/35 mb-6">contact</p>
        <h1 className="hero-title fade-in text-[clamp(3.5rem,9vw,8rem)] font-medium text-white max-w-4xl mb-8">
          let's<br /><span className="text-white/25">talk</span>
        </h1>
      </section>

      <section className="px-6 md:px-10 pb-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.07] border border-white/[0.07]">
          {channels.map((c, i) => (
            <div key={i} className="fade-in bg-black px-10 py-12 hover:bg-[#0a0a0a] transition-colors group">
              <p className="text-[11px] tracking-[0.12em] uppercase text-white/30 mb-4">{c.label}</p>
              <a href={`mailto:${c.email}`} className="text-[20px] font-medium tracking-[-0.03em] text-white group-hover:text-white/70 transition-colors block mb-3">
                {c.email}
              </a>
              <p className="text-[14px] text-white/40 font-light">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
