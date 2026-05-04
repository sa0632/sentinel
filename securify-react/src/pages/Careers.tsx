import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useFadeIn } from '../hooks/useFadeIn'

const openRoles = [
  { title: 'senior backend engineer', team: 'engineering', location: 'remote — us/eu', type: 'full-time' },
  { title: 'security researcher', team: 'security', location: 'remote — anywhere', type: 'full-time' },
  { title: 'developer advocate', team: 'growth', location: 'remote — us', type: 'full-time' },
  { title: 'product designer', team: 'design', location: 'remote — us/eu', type: 'full-time' },
  { title: 'enterprise account executive', team: 'sales', location: 'new york or sf', type: 'full-time' },
]

const perks = [
  { title: 'fully remote', body: 'work from anywhere. we have team members in 14 countries. async-first culture with optional team offsites twice a year.' },
  { title: 'competitive comp', body: 'top-of-market salary, meaningful equity, and annual refresh grants. we benchmark against stripe, cloudflare, and hashicorp.' },
  { title: 'no meetings culture', body: 'default to async. we use linear, notion, and loom. most of our team has fewer than 3 recurring meetings per week.' },
  { title: 'learning budget', body: '$3,000/year for books, courses, conferences, and tools. no approval required for purchases under $200.' },
]

export default function Careers() {
  const pageRef = useFadeIn()
  return (
    <div ref={pageRef} className="bg-black min-h-full">
      <Navbar />
      <section className="pt-40 pb-24 px-6 md:px-10">
        <p className="fade-in text-[11px] tracking-[0.14em] uppercase text-white/35 mb-6">careers</p>
        <h1 className="hero-title fade-in text-[clamp(3.5rem,9vw,8rem)] font-medium text-white max-w-4xl mb-8">
          build the<br /><span className="text-white/25">internet's lock</span>
        </h1>
        <p className="fade-in text-[16px] font-light text-white/50 max-w-[480px] leading-relaxed">
          we're a small team solving a big problem. if you care deeply about security, developer experience, and writing code that actually ships — we want to talk.
        </p>
      </section>

      {/* open roles */}
      <section className="px-6 md:px-10 pb-[80px]">
        <p className="fade-in text-[11px] tracking-[0.14em] uppercase text-white/35 mb-8">open roles</p>
        <div className="flex flex-col gap-px bg-white/[0.07] border border-white/[0.07]">
          {openRoles.map((r, i) => (
            <div key={i} className="fade-in bg-black px-8 py-6 hover:bg-[#0a0a0a] transition-colors cursor-pointer group flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h3 className="text-[17px] font-medium tracking-[-0.02em] text-white group-hover:text-white/80 transition-colors">{r.title}</h3>
                <p className="text-[12px] text-white/30 font-light mt-1">{r.team} · {r.location}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[11px] tracking-[0.08em] uppercase text-white/25 border border-white/10 rounded-full px-3 py-1">{r.type}</span>
                <span className="text-[13px] text-white/20 group-hover:text-white/50 transition-colors">apply →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* perks */}
      <section className="bg-white text-black px-6 md:px-10 py-[120px]">
        <p className="fade-in text-[11px] tracking-[0.14em] uppercase text-black/35 mb-6">why sentinel</p>
        <h2 className="fade-in text-[clamp(2.4rem,5vw,4rem)] font-medium leading-[0.95] tracking-[-0.04em] mb-16 max-w-xl">
          we take care<br /><span className="text-black/25">of the people who ship</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/[0.07] border border-black/[0.07]">
          {perks.map((p, i) => (
            <div key={i} className="fade-in bg-white px-10 py-12 hover:bg-neutral-50 transition-colors">
              <h3 className="text-[18px] font-medium tracking-[-0.03em] text-black mb-3">{p.title}</h3>
              <p className="text-[14px] leading-[1.65] text-black/50 font-light">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
