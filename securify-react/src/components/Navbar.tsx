import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

const navLinks = [
  { label: 'platform', to: '/platform' },
  { label: 'solutions', to: '/solutions' },
  { label: 'company', to: '/company' },
  { label: 'support', to: '/support' },
]

interface NavbarProps {
  absolute?: boolean
}

export default function Navbar({ absolute = false }: NavbarProps) {
  const location = useLocation()

  return (
    <nav
      className={`
        ${absolute ? 'absolute' : 'fixed'}
        z-20 top-0 left-0 right-0
        flex items-center justify-between gap-4
        px-6 md:px-10 pt-6
      `}
    >
      {/* left pill — logo + brand */}
      <Link
        to="/"
        className="flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full pl-4 pr-6 py-3"
      >
        <Logo className="h-5 w-5" />
        <span className="text-white text-sm font-normal tracking-tight">sentinel</span>
      </Link>

      {/* center pill — nav links (hidden on mobile) */}
      <div className="hidden md:flex items-center gap-1 bg-neutral-900/90 backdrop-blur rounded-full px-3 py-2">
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`
              text-sm px-5 py-2 rounded-full transition-colors
              ${location.pathname === link.to ? 'text-white' : 'text-neutral-300 hover:text-white'}
            `}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* right cta */}
      <Link
        to="/platform"
        className="bg-white text-black text-sm font-normal rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors"
      >
        get started
      </Link>
    </nav>
  )
}
