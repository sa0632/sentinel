import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useFadeIn } from '../hooks/useFadeIn'
import { useTypewriter } from '../hooks/useTypewriter'

const trustLogos = ['stripe','notion','figma','linear','vercel','supabase','planetscale','cloudflare','resend','loom']

const features = [
  {
    title: 'end-to-end encryption',
    body: 'every byte is encrypted at rest and in transit using aes-256. your keys, your control — we never have access to your plaintext data.',
    icon: (
      <svg className="w-11 h-11 mb-7 opacity-90" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="28" height="28" rx="2" stroke="white" strokeWidth="1.5"/>
        <path d="M16 22h12M22 16v12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'real-time threat detection',
    body: 'behavioral anomaly detection powered by ml models trained on billions of security events. get alerted in under 200ms.',
    icon: (
      <svg className="w-11 h-11 mb-7 opacity-90" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="22" r="12" stroke="white" strokeWidth="1.5"/>
        <circle cx="22" cy="22" r="4" fill="white"/>
      </svg>
    ),
  },
  {
    title: 'zero-trust architecture',
    body: 'never trust, always verify. every request is authenticated, authorized, and continuously validated regardless of network location.',
    icon: (
      <svg className="w-11 h-11 mb-7 opacity-90" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 32V22l10-10 10 10v10" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="18" y="26" width="8" height="6" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'api-first design',
    body: 'plug into your existing stack in minutes. sdks for node, python, go, and rust. webhooks, rate limiting, and audit logs included.',
    icon: (
      <svg className="w-11 h-11 mb-7 opacity-90" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 10v6M22 28v6M10 22h6M28 22h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="22" cy="22" r="6" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'compliance automation',
    body: 'soc 2, gdpr, hipaa, iso 27001. continuous compliance monitoring with one-click audit report generation.',
    icon: (
      <svg className="w-11 h-11 mb-7 opacity-90" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="14" width="24" height="18" rx="2" stroke="white" strokeWidth="1.5"/>
        <path d="M16 22h12M16 18h6" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'analytics & audit logs',
    body: 'full visibility into who accessed what, when, and from where. tamper-proof logs retained for 7 years by default.',
    icon: (
      <svg className="w-11 h-11 mb-7 opacity-90" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 30l6-6 4 4 6-8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="8" y="8" width="28" height="28" rx="2" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
  },
]

const steps = [
  { num: '01', title: 'connect your infrastructure', body: 'install our lightweight agent or point your dns at our edge network. works with aws, gcp, azure, or bare metal. setup takes under 10 minutes.', tag: '5-min setup' },
  { num: '02', title: 'define your security policies', body: 'use our visual policy builder or write policies as code. role-based access, data classification rules, and retention schedules — all in one place.', tag: 'no-code or code' },
  { num: '03', title: 'monitor and respond in real time', body: 'sentinel watches every event across your stack. anomalies trigger automated responses — block, quarantine, or alert — before damage happens.', tag: 'automated response' },
  { num: '04', title: 'prove compliance, always', body: 'generate audit-ready reports on demand. share secure read-only links with auditors and customers. your compliance posture, always current.', tag: 'audit-ready' },
]

export default function Home() {
  const pageRef = useFadeIn()
  const { protect, your, data, cursorVisible } = useTypewriter()

  return (
    <div ref={pageRef} className="bg-black min-h-full">

      {/* ── HERO ── */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay loop muted playsInline
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4"
        />

        <Navbar absolute />

        <div className="relative h-full w-full">
          {/* headlines — typewriter animated */}
          <h1 className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] left-4 md:left-10 top-[18%]">
            {protect}
            {!your && cursorVisible && (
              <span className="inline-block w-[0.06em] h-[0.85em] bg-white ml-[0.04em] translate-y-[0.06em] align-middle" />
            )}
          </h1>
          <h1 className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] right-4 md:right-10 top-[38%] text-right">
            {your}
            {your && !data && cursorVisible && (
              <span className="inline-block w-[0.06em] h-[0.85em] bg-white ml-[0.04em] translate-y-[0.06em] align-middle" />
            )}
          </h1>
          <h1 className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] left-[18%] md:left-[28%] top-[58%]">
            {data}
            {data && cursorVisible && (
              <span className="inline-block w-[0.06em] h-[0.85em] bg-white ml-[0.04em] translate-y-[0.06em] align-middle" />
            )}
          </h1>

          {/* description */}
          <p className="absolute left-6 md:left-10 top-[46%] max-w-[240px] text-[15px] leading-snug text-white/90 font-light">
            we can guarding your data with utmost care, empowering you with privacy everywhere
          </p>

          {/* stat top-right */}
          <div className="absolute right-6 md:right-24 top-[14%]">
            <div className="flex items-center gap-3 justify-end">
              <div className="hidden md:block h-px w-24 bg-white/40 rotate-[20deg]" />
              <span className="text-4xl md:text-5xl font-medium tracking-tight">+65k</span>
            </div>
            <p className="text-xs md:text-sm text-white/70 mt-1 text-right">startups use</p>
          </div>

          {/* bottom fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black" />

          {/* stat bottom-left */}
          <div className="absolute left-6 md:left-20 bottom-20 md:bottom-24">
            <div className="flex items-center gap-3">
              <span className="text-4xl md:text-5xl font-medium tracking-tight">+1.5b</span>
              <div className="hidden md:block h-px w-24 bg-white/40 rotate-[-20deg]" />
            </div>
            <p className="text-xs md:text-sm text-white/70 mt-1">gb data was protected</p>
          </div>

          {/* stat bottom-right */}
          <div className="absolute right-6 md:right-20 bottom-16 md:bottom-20">
            <div className="flex items-center gap-3 justify-end">
              <div className="hidden md:block h-px w-24 bg-white/40 rotate-[-20deg]" />
              <span className="text-4xl md:text-5xl font-medium tracking-tight">+300k</span>
            </div>
            <p className="text-xs md:text-sm text-white/70 mt-1 text-right">downloads</p>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-black py-12 border-t border-white/[0.06] overflow-hidden">
        <p className="text-center text-[11px] tracking-[0.12em] uppercase text-white/35 mb-8">trusted by teams at</p>
        <div className="overflow-hidden">
          <div className="trust-scroll-track flex gap-16 w-max">
            {[...trustLogos, ...trustLogos].map((logo, i) => (
              <span key={i} className="text-[18px] font-semibold text-white/20 tracking-tight whitespace-nowrap hover:text-white/70 transition-colors cursor-default">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="bg-black px-6 md:px-10 py-[120px]">
        <p className="section-eyebrow fade-in text-[11px] tracking-[0.14em] uppercase text-white/35 mb-6">the platform</p>
        <h2 className="fade-in text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-white max-w-[640px] mb-20">
          everything your <span className="text-white/30">data needs</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.07] border border-white/[0.07]">
          {features.map(f => (
            <div key={f.title} className="fade-in bg-black px-10 py-12 hover:bg-[#0a0a0a] transition-colors cursor-default">
              {f.icon}
              <h3 className="text-[20px] font-medium tracking-[-0.03em] mb-3.5 text-white">{f.title}</h3>
              <p className="text-[14px] leading-[1.65] text-white/45 font-light max-w-xs">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-white text-black px-6 md:px-10 py-[120px]">
        <p className="fade-in text-[11px] tracking-[0.14em] uppercase text-black/35 mb-6">how it works</p>
        <h2 className="fade-in text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-black max-w-[640px] mb-20">
          simple to deploy, <span className="text-black/25">impossible to breach</span>
        </h2>
        <div>
          {steps.map((s, i) => (
            <div key={i} className="fade-in flex items-start gap-8 py-10 border-b border-black/[0.08] first:border-t first:border-black/[0.08]">
              <span className="text-[11px] tracking-[0.08em] text-black/25 min-w-[32px] pt-1">{s.num}</span>
              <div>
                <h3 className="text-[clamp(1.6rem,3.5vw,2.8rem)] font-medium tracking-[-0.04em] leading-none text-black mb-3">{s.title}</h3>
                <p className="text-[14px] leading-[1.65] text-black/45 font-light max-w-[440px]">{s.body}</p>
                <span className="inline-block mt-4 text-[11px] tracking-[0.08em] uppercase text-black/35 border border-black/15 rounded-full px-3.5 py-1">
                  {s.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white text-black px-6 md:px-10 py-[140px] text-center">
        <h2 className="fade-in text-[clamp(3rem,8vw,7rem)] font-medium tracking-[-0.04em] leading-[0.92] text-black mb-8">
          your data<br/>deserves better
        </h2>
        <p className="fade-in text-[16px] text-black/45 font-light max-w-[400px] mx-auto mb-12 leading-relaxed">
          join 65,000+ startups who stopped worrying about security and started shipping faster.
        </p>
        <div className="fade-in flex gap-3 justify-center flex-wrap">
          <button className="bg-black text-white text-sm font-normal rounded-full px-8 py-3.5 hover:bg-neutral-800 transition-colors">
            start for free
          </button>
          <button className="bg-transparent text-black text-sm font-normal rounded-full px-8 py-3.5 border border-black/18 hover:border-black/45 transition-colors">
            book a demo
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
