import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useFadeIn } from '../hooks/useFadeIn'

const entries = [
  {
    date: 'may 2026',
    version: 'v3.4.0',
    tag: 'feature',
    title: 'byok for all pro plans',
    body: 'bring your own encryption keys is now available on all pro plans, not just enterprise. connect your aws kms, google cloud kms, or azure key vault in one click.',
  },
  {
    date: 'apr 2026',
    version: 'v3.3.2',
    tag: 'fix',
    title: 'resolved latency spike in eu-west-1',
    body: 'a misconfigured edge node in our dublin pop caused p99 latency to spike to 340ms for ~18 minutes on april 14. full post-mortem published in our status page.',
  },
  {
    date: 'apr 2026',
    version: 'v3.3.0',
    tag: 'feature',
    title: 'automated hipaa baa generation',
    body: 'enterprise customers can now generate, sign, and store their business associate agreement directly from the dashboard. no back-and-forth with legal required.',
  },
  {
    date: 'mar 2026',
    version: 'v3.2.0',
    tag: 'feature',
    title: 'rust sdk ga',
    body: 'our rust sdk is now generally available after 3 months in beta. full async support, zero-copy deserialization, and idiomatic error handling throughout.',
  },
  {
    date: 'feb 2026',
    version: 'v3.1.0',
    tag: 'improvement',
    title: 'faster audit report generation',
    body: 'soc 2 and gdpr audit reports now generate in under 8 seconds, down from 45 seconds. we rewrote the report engine in go and added parallel evidence collection.',
  },
  {
    date: 'jan 2026',
    version: 'v3.0.0',
    tag: 'major',
    title: 'sentinel 3.0 — zero trust everywhere',
    body: 'complete rewrite of the policy engine with support for attribute-based access control (abac), just-in-time access provisioning, and continuous authorization on every request.',
  },
]

const tagColors: Record<string, string> = {
  feature:     'text-white/60 border-white/15',
  fix:         'text-white/40 border-white/10',
  improvement: 'text-white/60 border-white/15',
  major:       'text-white border-white/30',
}

export default function Changelog() {
  const pageRef = useFadeIn()
  return (
    <div ref={pageRef} className="bg-black min-h-full">
      <Navbar />
      <section className="pt-40 pb-24 px-6 md:px-10">
        <p className="fade-in text-[11px] tracking-[0.14em] uppercase text-white/35 mb-6">changelog</p>
        <h1 className="hero-title fade-in text-[clamp(3.5rem,9vw,8rem)] font-medium text-white max-w-4xl mb-8">
          what's<br /><span className="text-white/25">new</span>
        </h1>
      </section>

      <section className="px-6 md:px-10 pb-[120px]">
        <div className="flex flex-col">
          {entries.map((e, i) => (
            <div key={i} className="fade-in flex flex-col md:flex-row md:gap-16 py-10 border-b border-white/[0.07] first:border-t first:border-white/[0.07]">
              <div className="md:w-40 shrink-0 mb-4 md:mb-0">
                <p className="text-[12px] text-white/30 font-light">{e.date}</p>
                <p className="text-[11px] text-white/20 font-light mt-1">{e.version}</p>
              </div>
              <div className="flex-1">
                <span className={`inline-block text-[10px] tracking-[0.1em] uppercase border rounded-full px-3 py-1 mb-4 ${tagColors[e.tag]}`}>
                  {e.tag}
                </span>
                <h3 className="text-[20px] font-medium tracking-[-0.03em] text-white mb-3">{e.title}</h3>
                <p className="text-[14px] leading-[1.7] text-white/45 font-light max-w-[580px]">{e.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
