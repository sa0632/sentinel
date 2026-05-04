import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useFadeIn } from '../hooks/useFadeIn'

const capabilities = [
  { label: 'encryption at rest', detail: 'aes-256-gcm, customer-managed keys' },
  { label: 'encryption in transit', detail: 'tls 1.3, certificate pinning' },
  { label: 'key management', detail: 'hsm-backed, automatic rotation' },
  { label: 'access controls', detail: 'rbac, abac, just-in-time access' },
  { label: 'threat intelligence', detail: 'real-time ioc feeds, ml anomaly detection' },
  { label: 'incident response', detail: 'automated playbooks, siem integration' },
  { label: 'data loss prevention', detail: 'content inspection, policy enforcement' },
  { label: 'secrets management', detail: 'dynamic credentials, vault integration' },
]

export default function Platform() {
  const pageRef = useFadeIn()

  return (
    <div ref={pageRef} className="bg-black min-h-full">
      <Navbar />

      {/* hero */}
      <section className="pt-40 pb-24 px-6 md:px-10">
        <p className="fade-in text-[11px] tracking-[0.14em] uppercase text-white/35 mb-6">the platform</p>
        <h1 className="hero-title fade-in text-[clamp(3.5rem,9vw,8rem)] font-medium text-white max-w-4xl mb-8">
          built for<br/><span className="text-white/25">engineers</span>
        </h1>
        <p className="fade-in text-[16px] font-light text-white/50 max-w-[480px] leading-relaxed">
          a security platform that gets out of your way. api-first, developer-friendly, and powerful enough for the most demanding enterprise workloads.
        </p>
      </section>

      {/* capabilities grid */}
      <section className="px-6 md:px-10 pb-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.07] border border-white/[0.07]">
          {capabilities.map((c, i) => (
            <div key={i} className="fade-in bg-black px-10 py-10 hover:bg-[#0a0a0a] transition-colors group cursor-default">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-[18px] font-medium tracking-[-0.03em] text-white">{c.label}</h3>
                <span className="text-[11px] tracking-[0.06em] uppercase text-white/20 mt-1 group-hover:text-white/40 transition-colors shrink-0">
                  {c.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* architecture diagram text */}
      <section className="bg-white text-black px-6 md:px-10 py-[120px]">
        <p className="fade-in text-[11px] tracking-[0.14em] uppercase text-black/35 mb-6">architecture</p>
        <h2 className="fade-in text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.04em] mb-16 max-w-xl">
          zero single<br/><span className="text-black/25">point of failure</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/[0.07] border border-black/[0.07]">
          {[
            { tier: 'edge layer', desc: '200+ PoPs globally. requests routed to nearest node. sub-10ms latency worldwide.' },
            { tier: 'control plane', desc: 'policy evaluation, key management, and audit logging run in isolated enclaves.' },
            { tier: 'data plane', desc: 'your data never touches our infrastructure. we operate on encrypted ciphertext only.' },
          ].map((t, i) => (
            <div key={i} className="fade-in bg-white px-10 py-12 hover:bg-neutral-50 transition-colors">
              <p className="text-[11px] tracking-[0.1em] uppercase text-black/25 mb-4">{t.tier}</p>
              <p className="text-[15px] leading-relaxed text-black/55 font-light">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
