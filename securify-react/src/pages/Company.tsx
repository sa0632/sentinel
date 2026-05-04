import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useFadeIn } from '../hooks/useFadeIn'

const team = [
  { initials: 'ak', name: 'alex kim', role: 'co-founder & ceo', bio: 'former security lead at stripe. built the fraud detection infrastructure protecting $800b+ in annual payment volume.' },
  { initials: 'mp', name: 'maya patel', role: 'co-founder & cto', bio: 'ex-google infrastructure. led the team that built google cloud\'s encryption key management service.' },
  { initials: 'jr', name: 'james reed', role: 'head of engineering', bio: 'previously cloudflare. architected zero trust network access products used by 10,000+ enterprises.' },
  { initials: 'sl', name: 'sara liu', role: 'head of design', bio: 'made security dashboards people actually want to use. formerly linear, vercel, and figma.' },
]

const values = [
  { title: 'transparency first', body: 'we publish our security model, our incident history, and our compliance posture. no marketing, no hiding.' },
  { title: 'security is a product', body: 'we believe security should be a feature teams ship, not a checklist they dread. we build accordingly.' },
  { title: 'no magic required', body: 'great security shouldn\'t require a phd. our tools meet developers where they are and make the right thing the easy thing.' },
  { title: 'long-term thinking', body: 'we\'d rather build something that lasts than something that scales fast and breaks spectacularly.' },
]

export default function Company() {
  const pageRef = useFadeIn()

  return (
    <div ref={pageRef} className="bg-black min-h-full">
      <Navbar />

      <section className="pt-40 pb-24 px-6 md:px-10">
        <p className="fade-in text-[11px] tracking-[0.14em] uppercase text-white/35 mb-6">company</p>
        <h1 className="hero-title fade-in text-[clamp(3.5rem,9vw,8rem)] font-medium text-white max-w-4xl mb-8">
          we believe<br/><span className="text-white/25">data has rights</span>
        </h1>
        <p className="fade-in text-[16px] font-light text-white/50 max-w-[520px] leading-relaxed">
          sentinel was founded in 2022 by engineers who spent years building security infrastructure at stripe, google, and cloudflare. we started because we were tired of watching great companies lose deals and customer trust because security felt too hard.
        </p>
      </section>

      {/* values */}
      <section className="px-6 md:px-10 pb-[120px]">
        <p className="fade-in text-[11px] tracking-[0.14em] uppercase text-white/35 mb-10">what we believe</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.07] border border-white/[0.07]">
          {values.map((v, i) => (
            <div key={i} className="fade-in bg-black px-10 py-12 hover:bg-[#0a0a0a] transition-colors">
              <h3 className="text-[20px] font-medium tracking-[-0.03em] text-white mb-3">{v.title}</h3>
              <p className="text-[14px] leading-[1.65] text-white/45 font-light max-w-sm">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* team */}
      <section className="bg-white text-black px-6 md:px-10 py-[120px]">
        <p className="fade-in text-[11px] tracking-[0.14em] uppercase text-black/35 mb-6">the team</p>
        <h2 className="fade-in text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.04em] mb-16 max-w-xl">
          people who've<br/><span className="text-black/25">been in the trenches</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/[0.07] border border-black/[0.07]">
          {team.map((t, i) => (
            <div key={i} className="fade-in bg-white px-10 py-12 hover:bg-neutral-50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-black/[0.06] flex items-center justify-center text-[13px] font-medium text-black/40 mb-6">
                {t.initials}
              </div>
              <h3 className="text-[18px] font-medium tracking-[-0.03em] text-black">{t.name}</h3>
              <p className="text-[12px] tracking-[0.06em] uppercase text-black/30 mb-3">{t.role}</p>
              <p className="text-[14px] leading-[1.65] text-black/50 font-light">{t.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
