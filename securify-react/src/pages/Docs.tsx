import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useFadeIn } from '../hooks/useFadeIn'

const sections = [
  {
    category: 'getting started',
    articles: ['quickstart guide', 'install the agent', 'connect your cloud provider', 'configure your first policy', 'invite your team'],
  },
  {
    category: 'api reference',
    articles: ['authentication', 'rate limits', 'encryption endpoints', 'policy management', 'audit log retrieval', 'webhooks'],
  },
  {
    category: 'sdks',
    articles: ['node.js sdk', 'python sdk', 'go sdk', 'rust sdk', 'ruby sdk (beta)'],
  },
  {
    category: 'compliance',
    articles: ['soc 2 overview', 'gdpr data mapping', 'hipaa setup guide', 'pci dss checklist', 'generating audit reports'],
  },
  {
    category: 'integrations',
    articles: ['aws integration', 'google cloud integration', 'azure integration', 'terraform provider', 'github actions'],
  },
  {
    category: 'security model',
    articles: ['encryption architecture', 'key management', 'zero trust overview', 'incident response', 'penetration testing'],
  },
]

export default function Docs() {
  const pageRef = useFadeIn()
  return (
    <div ref={pageRef} className="bg-black min-h-full">
      <Navbar />
      <section className="pt-40 pb-24 px-6 md:px-10">
        <p className="fade-in text-[11px] tracking-[0.14em] uppercase text-white/35 mb-6">documentation</p>
        <h1 className="hero-title fade-in text-[clamp(3.5rem,9vw,8rem)] font-medium text-white max-w-4xl mb-8">
          everything<br /><span className="text-white/25">you need</span>
        </h1>
        <p className="fade-in text-[16px] font-light text-white/50 max-w-[480px] leading-relaxed">
          comprehensive guides, api references, and sdk documentation. if something's missing, open an issue on github.
        </p>
      </section>

      <section className="px-6 md:px-10 pb-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.07] border border-white/[0.07]">
          {sections.map((s, i) => (
            <div key={i} className="fade-in bg-black px-8 py-10">
              <p className="text-[11px] tracking-[0.12em] uppercase text-white/30 mb-6">{s.category}</p>
              <ul className="flex flex-col gap-0">
                {s.articles.map((a, j) => (
                  <li key={j}>
                    <a href="#" className="block text-[14px] text-white/50 font-light py-2.5 border-b border-white/[0.06] last:border-0 hover:text-white transition-colors">
                      {a}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
