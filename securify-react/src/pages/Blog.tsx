import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useFadeIn } from '../hooks/useFadeIn'

const posts = [
  {
    date: 'may 1, 2026',
    tag: 'engineering',
    title: 'how we rebuilt our policy engine in go',
    excerpt: 'our original python policy evaluator was hitting 800ms at p99 under load. here\'s how we rewrote it in go and got that down to 4ms without changing the api surface.',
    readTime: '8 min read',
  },
  {
    date: 'apr 18, 2026',
    tag: 'security',
    title: 'the real cost of a data breach in 2026',
    excerpt: 'ibm\'s annual cost of a data breach report just dropped. we broke down what the numbers mean for early-stage startups specifically — and what actually moves the needle.',
    readTime: '5 min read',
  },
  {
    date: 'apr 3, 2026',
    tag: 'guide',
    title: 'soc 2 type ii in 6 weeks: a founder\'s playbook',
    excerpt: 'we interviewed 12 startup founders who closed their soc 2 type ii audit in under 8 weeks. here\'s the exact playbook they used, what they skipped, and what they wish they\'d done differently.',
    readTime: '12 min read',
  },
  {
    date: 'mar 20, 2026',
    tag: 'product',
    title: 'introducing byok for pro plans',
    excerpt: 'bring-your-own-key encryption was previously enterprise-only. today we\'re making it available to every pro customer. here\'s how it works and why it matters.',
    readTime: '4 min read',
  },
  {
    date: 'mar 5, 2026',
    tag: 'engineering',
    title: 'zero trust is not a product. it\'s a posture.',
    excerpt: 'everyone sells zero trust now. most of them are selling a firewall with a rebrand. here\'s what zero trust actually means architecturally and how to evaluate whether you have it.',
    readTime: '10 min read',
  },
  {
    date: 'feb 14, 2026',
    tag: 'guide',
    title: 'gdpr for engineers: what you actually need to do',
    excerpt: 'gdpr compliance doesn\'t require a law degree. we broke down the 7 things your engineering team needs to actually implement — and the 3 things that are mostly legal theater.',
    readTime: '9 min read',
  },
]

const tagColor: Record<string, string> = {
  engineering: 'text-white/50 border-white/12',
  security:    'text-white/50 border-white/12',
  guide:       'text-white/50 border-white/12',
  product:     'text-white/50 border-white/12',
}

export default function Blog() {
  const pageRef = useFadeIn()
  return (
    <div ref={pageRef} className="bg-black min-h-full">
      <Navbar />
      <section className="pt-40 pb-24 px-6 md:px-10">
        <p className="fade-in text-[11px] tracking-[0.14em] uppercase text-white/35 mb-6">blog</p>
        <h1 className="hero-title fade-in text-[clamp(3.5rem,9vw,8rem)] font-medium text-white max-w-4xl mb-8">
          security<br /><span className="text-white/25">writing</span>
        </h1>
      </section>

      <section className="px-6 md:px-10 pb-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.07] border border-white/[0.07]">
          {posts.map((p, i) => (
            <div key={i} className="fade-in bg-black px-10 py-12 hover:bg-[#0a0a0a] transition-colors cursor-pointer group">
              <div className="flex items-center justify-between mb-6">
                <span className={`text-[10px] tracking-[0.1em] uppercase border rounded-full px-3 py-1 ${tagColor[p.tag]}`}>{p.tag}</span>
                <span className="text-[12px] text-white/20 font-light">{p.readTime}</span>
              </div>
              <h3 className="text-[20px] font-medium tracking-[-0.03em] text-white mb-3 group-hover:text-white/80 transition-colors leading-snug">{p.title}</h3>
              <p className="text-[14px] leading-[1.65] text-white/40 font-light mb-6">{p.excerpt}</p>
              <p className="text-[12px] text-white/20 font-light">{p.date}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
