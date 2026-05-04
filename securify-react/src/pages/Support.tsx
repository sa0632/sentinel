import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useFadeIn } from '../hooks/useFadeIn'

const faqs = [
  { q: 'how long does setup take?', a: 'most teams are fully operational within 10 minutes. install the agent, connect your cloud provider, and your first policies are active. our onboarding wizard handles the rest.' },
  { q: 'does sentinel store my data?', a: 'no. sentinel operates on encrypted ciphertext. your plaintext data never leaves your infrastructure. we never have access to your keys or your content.' },
  { q: 'what compliance frameworks do you support?', a: 'soc 2 type i & ii, gdpr, hipaa, iso 27001, pci dss, ccpa, fedramp moderate (in progress). one-click audit reports for all supported frameworks.' },
  { q: 'can i bring my own encryption keys?', a: 'yes. byok (bring your own key) is available on pro and enterprise plans. keys are stored in your own hsm or cloud kms. sentinel never touches the raw key material.' },
  { q: 'what happens during an incident?', a: 'sentinel detects anomalies in real time and triggers your configured playbooks automatically — block, quarantine, or alert. you receive a full incident report with timeline and recommendations within minutes.' },
  { q: 'is there a free tier?', a: 'yes. our starter plan is free forever for up to 3 users with 10gb encrypted storage and basic threat detection. no credit card required.' },
]

const channels = [
  { label: 'documentation', desc: 'full api reference, guides, and tutorials.', action: 'read the docs →' },
  { label: 'slack community', desc: 'join 8,000+ security engineers in our public slack.', action: 'join slack →' },
  { label: 'email support', desc: 'pro and enterprise customers get priority email support.', action: 'send a message →' },
  { label: 'status page', desc: 'real-time uptime and incident history.', action: 'check status →' },
]

export default function Support() {
  const pageRef = useFadeIn()

  return (
    <div ref={pageRef} className="bg-black min-h-full">
      <Navbar />

      <section className="pt-40 pb-24 px-6 md:px-10">
        <p className="fade-in text-[11px] tracking-[0.14em] uppercase text-white/35 mb-6">support</p>
        <h1 className="hero-title fade-in text-[clamp(3.5rem,9vw,8rem)] font-medium text-white max-w-4xl mb-8">
          we've got<br/><span className="text-white/25">your back</span>
        </h1>
      </section>

      {/* support channels */}
      <section className="px-6 md:px-10 pb-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.07] border border-white/[0.07]">
          {channels.map((c, i) => (
            <div key={i} className="fade-in bg-black px-8 py-10 hover:bg-[#0a0a0a] transition-colors group cursor-pointer">
              <h3 className="text-[16px] font-medium tracking-[-0.02em] text-white mb-2">{c.label}</h3>
              <p className="text-[13px] text-white/40 font-light leading-relaxed mb-6">{c.desc}</p>
              <span className="text-[12px] text-white/25 group-hover:text-white/60 transition-colors">{c.action}</span>
            </div>
          ))}
        </div>
      </section>

      {/* faq */}
      <section className="bg-white text-black px-6 md:px-10 py-[120px]">
        <p className="fade-in text-[11px] tracking-[0.14em] uppercase text-black/35 mb-6">faq</p>
        <h2 className="fade-in text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.04em] mb-16 max-w-xl">
          common<br/><span className="text-black/25">questions</span>
        </h2>
        <div>
          {faqs.map((f, i) => (
            <div key={i} className="fade-in py-8 border-b border-black/[0.08] first:border-t first:border-black/[0.08]">
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
