import { Link } from 'react-router-dom'
import Logo from './Logo'

const footerCols = [
  {
    title: 'product',
    links: [
      { label: 'platform',   to: '/platform' },
      { label: 'pricing',    to: '/pricing' },
      { label: 'changelog',  to: '/changelog' },
      { label: 'roadmap',    to: '/roadmap' },
    ],
  },
  {
    title: 'solutions',
    links: [
      { label: 'startups',   to: '/solutions' },
      { label: 'enterprise', to: '/solutions' },
      { label: 'healthcare', to: '/solutions' },
      { label: 'fintech',    to: '/solutions' },
    ],
  },
  {
    title: 'developers',
    links: [
      { label: 'docs',          to: '/docs' },
      { label: 'api reference', to: '/docs' },
      { label: 'sdks',          to: '/docs' },
      { label: 'status',        to: '/status' },
    ],
  },
  {
    title: 'company',
    links: [
      { label: 'about',    to: '/company' },
      { label: 'blog',     to: '/blog' },
      { label: 'careers',  to: '/careers' },
      { label: 'contact',  to: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.06] px-6 md:px-10 pt-16 pb-12">
      <div className="flex flex-col md:flex-row md:justify-between gap-12 mb-16">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <Logo className="h-[18px] w-[18px]" />
            <span className="text-[15px] font-normal tracking-tight">sentinel</span>
          </Link>
          <p className="text-[13px] text-white/35 mt-3 font-light leading-relaxed max-w-[220px]">
            enterprise-grade data security for teams that move fast.
          </p>
        </div>

        <div className="grid grid-cols-2 md:flex md:gap-16">
          {footerCols.map(col => (
            <div key={col.title} className="mb-8 md:mb-0">
              <p className="text-[11px] tracking-[0.12em] uppercase text-white/25 mb-4">
                {col.title}
              </p>
              {col.links.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block text-[14px] text-white/45 font-light mb-2.5 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 pt-8 border-t border-white/[0.06]">
        <p className="text-[12px] text-white/20 font-light">
          © 2026 sentinel, inc. all rights reserved.
        </p>
        <div className="flex gap-6">
          {['privacy', 'terms', 'security'].map(l => (
            <Link key={l} to="#" className="text-[14px] text-white/45 font-light hover:text-white transition-colors">
              {l}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
