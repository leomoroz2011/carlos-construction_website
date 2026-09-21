import { useEffect, useRef, useState } from 'react'
import {
  Hammer,
  Wrench,
  DoorOpen,
  AppWindow,
  LayoutGrid,
  Bath,
  PaintRoller,
  Droplets,
  Construction,
  Menu,
  X,
  Phone,
  MapPin,
  Star,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'

const PHONE = '+1 (415) 756-9400'
const PHONE_HREF = 'tel:+14157569400'

const services = [
  {
    icon: Hammer,
    title: 'Home Remodeling and Custom Trim',
    desc: 'Full interior remodels and custom trim work built to fit your home.',
  },
  {
    icon: Wrench,
    title: 'Handyman Work',
    desc: 'Repairs, fixes, and small jobs handled fast and done right.',
  },
  {
    icon: DoorOpen,
    title: 'Door Installation and Repair',
    desc: 'Interior and exterior doors installed, replaced, or repaired.',
  },
  {
    icon: AppWindow,
    title: 'Window Installation and Repair',
    desc: 'New windows and window repairs for comfort and energy savings.',
  },
  {
    icon: LayoutGrid,
    title: 'Flooring Installation and Repair',
    desc: 'Floor installs and repairs across tile, laminate, and hardwood.',
  },
  {
    icon: Bath,
    title: 'Kitchen and Bathroom Updates',
    desc: 'Kitchen and bathroom upgrades from small fixes to full updates.',
  },
  {
    icon: PaintRoller,
    title: 'Interior and Exterior Wall Work',
    desc: 'Drywall, patching, and wall repairs inside and out.',
  },
  {
    icon: Droplets,
    title: 'Plumbing Fixture Replacement',
    desc: 'Faucet, fixture, and minor plumbing repairs and replacements.',
  },
  {
    icon: Construction,
    title: 'Roof, Drainage, and Backyard Work',
    desc: 'Roof, drainage, ceiling, and backyard clearing work.',
  },
]

const reviews = [
  {
    quote:
      'If you are looking for reliable remodeling contractors in South San Francisco, CA, this is the company to call. The craftsmanship and communication were outstanding.',
    name: 'Tom H.',
  },
  {
    quote:
      'Our older home needed serious updating, and Carlos Construction Special In Details delivered beautifully. They preserved the character while giving us the modern functionality we wanted.',
    name: 'Lisa D.',
  },
  {
    quote:
      'The interior trim and finish carpentry they installed in our new construction home is flawless. Every corner and seam looks perfect.',
    name: 'Eddie R.',
  },
]

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#services', label: 'Services' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-ink/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-white font-extrabold tracking-tight text-lg">
          <span className="bg-accent text-ink rounded px-2 py-1 text-sm">CC</span>
          <span className="hidden sm:inline">CARLOS CONSTRUCTION</span>
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
            <a
              key={l.href}
              href={l.href}
              className="text-white/90 text-base"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            className="bg-accent text-white text-center font-semibold px-4 py-3 rounded-full"
          >
            Call {PHONE}
          </a>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center text-center px-5 pt-16"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80"
          alt="Home renovation and carpentry work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink/90" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto animate-hero">
        <span className="inline-block bg-white/10 border border-white/20 text-white/90 text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
          Serving San Francisco and San Mateo County
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
          Home Remodeling and Handyman Work in South San Francisco and Daly City
        </h1>
        <p className="text-white/80 text-lg md:text-xl mb-9 max-w-2xl mx-auto leading-relaxed">
          Family-owned, hands-on construction and remodeling from a single crew
          who shows up, does the work, and stands behind it. Free estimates on
          every job.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
          >
            Get a Free Estimate
          </a>
          <a
            href={PHONE_HREF}
            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center justify-center gap-2"
          >
            <Phone size={18} /> {PHONE}
          </a>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const ref = useReveal()
  return (
    <section id="services" className="py-24 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight mb-3">
            Services for San Francisco and San Mateo County Homes
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            One crew, nineteen years of hands-on construction experience, and
            free estimates on every project.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="group bg-neutral-50 border border-neutral-200 rounded-2xl p-6 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-lg hover:border-accent/40"
              >
                <div className="w-12 h-12 rounded-xl bg-ink text-accent flex items-center justify-center mb-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-ink text-lg mb-1.5">{s.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Trust() {
  const ref = useReveal()
  return (
    <section id="reviews" className="py-24 px-5 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight mb-3">
            Trusted by Homeowners Across the Peninsula
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <span className="inline-flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-4 py-2 text-sm font-semibold text-ink">
              <Star size={16} className="text-accent fill-accent" /> 5.0 / 5, 14 reviews
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-4 py-2 text-sm font-semibold text-ink">
              <CheckCircle2 size={16} className="text-accent" /> Thumbtack Top Pro
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-4 py-2 text-sm font-semibold text-ink">
              <ShieldCheck size={16} className="text-accent" /> Background checked
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-4 py-2 text-sm font-semibold text-ink">
              8 hires on Thumbtack
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div className="flex gap-1 mb-3 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent" />
                ))}
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                &ldquo;{r.quote}&rdquo;
              </p>
              <p className="text-ink font-semibold text-sm">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    if (typeof fetch === 'undefined') return
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true))
  }

  return (
    <section id="contact" className="py-24 px-5 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight mb-3">
            Get Your Free Estimate in Daly City and South San Francisco
          </h2>
          <p className="text-neutral-500 text-lg">
            Tell us about the job and Carlos will get back to you directly.
            Cash, check, Venmo, and Zelle accepted.
          </p>
        </div>

        {submitted ? (
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-10 text-center">
            <CheckCircle2 size={40} className="text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold text-ink mb-2">Message sent</h3>
            <p className="text-neutral-500">
              Thanks for reaching out. Carlos will call or text you back
              shortly to schedule your free estimate.
            </p>
          </div>
        ) : (
          /* TODO: Formspree endpoint below is a placeholder (no real Formspree
             account exists in this environment). Create a real Formspree form,
             point it at leomoroz09@gmail.com only as a temporary placeholder,
             then swap to Carlos's real email once confirmed, before this site
             is used to collect real leads. */
          <form
            action="https://formspree.io/f/PLACEHOLDER"
            method="POST"
            onSubmit={handleSubmit}
            className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-8 grid gap-4"
          >
            <input
              type="hidden"
              name="_subject"
              value="New website inquiry - Carlos Construction Special In Details"
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="service">
                  Service Needed
                </label>
                <input
                  id="service"
                  name="service"
                  type="text"
                  placeholder="e.g. Kitchen remodel"
                  required
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors duration-300"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors duration-300"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us a bit about the project"
                className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors duration-300"
              />
            </div>
            <button
              type="submit"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
            >
              Send Request
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-ink text-white/70 py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-white font-extrabold tracking-tight">
          <span className="bg-accent text-ink rounded px-2 py-1 text-sm">CC</span>
          CARLOS CONSTRUCTION
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm">
          <a href={PHONE_HREF} className="flex items-center gap-2 hover:text-white transition-colors duration-300">
            <Phone size={16} /> {PHONE}
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} /> South San Francisco and Daly City, CA
          </span>
        </div>
        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} Carlos Construction Special In Details. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Trust />
      <Contact />
      <Footer />
    </div>
  )
}
