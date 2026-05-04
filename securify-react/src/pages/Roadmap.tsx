import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useFadeIn } from '../hooks/useFadeIn'

const columns = [
  {
    status: 'shipped',
    items: [
      { title: 'rust sdk', detail: 'zero-copy, full async' },
      { title: 'byok for pro', detail: 'aws kms, gcp kms, azure kv' },
      { title: 'hipaa baa automation', detail: 'self-serve from dashboard' },
      { title: 'abac policy engine', detail: 'attribute-based access control' },
    ],
  },
  {
    status: 'in progress',
    items: [
      { title: 'fedramp moderate', detail: 'authorization in review' },
      { title: 'python sdk v2', detail: 'async-first rewrite' },
      { title: 'slack integration', detail: 'alerts + incident commands' },
      { title: 'data residency controls', detail: 'pin data to specific regions' },
    ],
  },
  {
    status: 'planned',
    items: [
      { title: 'ai anomaly explanations', detail: 'plain-english threat summaries' },
      { title: 'terraform provider', detail: 'infrastructure as code support' },
      { title: 'mobile app', detail: 'ios + android alerts' },
      { title: 'siem connector library', detail: 'splunk, datadog, elastic' },
    ],
  },
]

const statusStyle: Record<string, string> = {
  shipped:     'text-white/60 border-white/15',
  'in progress': 'text-white border-white/30',
  planned:     'text-white/35 border-white/10',
}

export default function Roadmap() {
  const pageRef = useFadeIn()
  return (
    <div ref={pageRef} className="bg-black min-h-full">
      <Navbar />
      <section className="pt-40 pb-24 px-6 md:px-10">
        <p className="fade-in text-[11px] tracking-[0.14em] uppercase text-white/35 mb-6">roadmap</p>
        <h1 className="hero-title fade-in text-[clamp(3.5rem,9vw,8rem)] font-medium text-white max-w-4xl mb-8">
          where<br /><span className="text-white/25">we're headed</span>
        </h1>
        <p className="fade-in text-[16px] font-light text-white/50 max-w-[480px] leading-relaxed">
          this is our public roadmap. we build in the open — vote on features, follow progress, and hold us accountable.
        </p>
      </section>

      <section className="px-6 md:px-10 pb-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.07] border border-white/[0.07]">
          {columns.map(col => (
            <div key={col.status} className="fade-in bg-black px-8 py-10">
              <span className={`inline-block text-[10px] tracking-[0.1em] uppercase border rounded-full px-3 py-1 mb-8 ${statusStyle[col.status]}`}>
                {col.status}
              </span>
              <div className="flex flex-col gap-px bg-white/[0.05]">
                {col.items.map((item, i) => (
                  <div key={i} className="bg-black px-0 py-5 border-b border-white/[0.06] last:border-0">
                    <p className="text-[15px] font-medium tracking-[-0.02em] text-white mb-1">{item.title}</p>
                    <p className="text-[12px] text-white/30 font-light">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
