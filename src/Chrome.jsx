import { useState } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'

export const PHONE = '(415) 756-9400'
export const PHONE_HREF = 'tel:+14157569400'

function Logo({ className = '' }) {
  return (
    <span className={`flex items-center gap-2 text-white font-extrabold tracking-tight ${className}`}>
      <span className="bg-accent text-ink rounded px-2 py-1 text-sm leading-none">CC</span>
      <span>CARLOS CONSTRUCTION</span>
    </span>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const onHome = typeof window !== 'undefined' && window.location.pathname === '/'
  const links = onHome
    ? [
        { href: '#services', label: 'Services' },
        { href: '#reviews', label: 'Reviews' },
        { href: '#contact', label: 'Contact' },
      ]
    : [{ href: '/', label: 'Home' }]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-ink/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Logo className="text-base" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/80 hover:text-white transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            className="bg-accent hover:bg-accent/90 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
          >
            Call {PHONE}
          </a>
        </nav>
        <button
          className="md:hidden bg-ink/90 border border-white/20 text-white rounded-lg p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-ink border-t border-white/10 px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-white/90 text-base" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={PHONE_HREF} className="bg-accent text-white text-center font-semibold px-4 py-3 rounded-full">
            Call {PHONE}
          </a>
        </div>
      )}
    </header>
  )
}

export function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-ink/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex gap-3">
      <a
        href={PHONE_HREF}
        className="flex-1 flex items-center justify-center gap-2 bg-accent text-white font-semibold text-sm py-3 rounded-full"
      >
        <Phone size={16} /> Call Now
      </a>
      <a
        href="/#contact"
        className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/25 text-white font-semibold text-sm py-3 rounded-full"
      >
        Free Estimate
      </a>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-ink text-white/70 py-10 px-5 pb-24 md:pb-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo />
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm">
            <a href={PHONE_HREF} className="flex items-center gap-2 hover:text-white transition-colors duration-300">
              <Phone size={16} /> {PHONE}
            </a>
            <a
              href="https://www.facebook.com/CarlosConstructionSpecialInDetails/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> 240 Lake Merced Blvd, Daly City, CA
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Construction Special In Details, Inc. (dba Carlos Construction). All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-white/70 transition-colors duration-300">Privacy Policy</a>
            <a href="/terms" className="hover:text-white/70 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
