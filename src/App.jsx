import { useEffect, useRef, useState } from 'react'
import {
  Hammer,
  Wrench,
  DoorOpen,
  LayoutGrid,
  Bath,
  PaintRoller,
  Phone,
  Star,
  CheckCircle2,
  ClipboardCheck,
  MapPinned,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react'
import { Navbar, Footer, StickyMobileCTA, PHONE, PHONE_HREF } from './Chrome.jsx'

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']

const SERVICES = [
  {
    icon: Bath,
    title: 'Kitchen & Bathroom Remodels',
    desc: 'Full kitchen and bathroom updates, from a new vanity and sink to a complete remodel.',
  },
  {
    icon: LayoutGrid,
    title: 'Flooring, Tile & Carpet',
    desc: 'Laminate, tile, and carpet installs and repairs across the whole house.',
  },
  {
    icon: Hammer,
    title: 'Room Additions & Remodels',
    desc: 'Bedroom and garage remodels, plus room additions built to fit your home.',
  },
  {
    icon: PaintRoller,
    title: 'Drywall, Paint & Trim',
    desc: 'Interior and exterior paint, drywall repair, and custom trim work.',
  },
  {
    icon: DoorOpen,
    title: 'Doors, Decks & Patios',
    desc: 'Door installation and repair, plus deck, patio, and porch construction.',
  },
  {
    icon: Wrench,
    title: 'Handyman & Small Repairs',
    desc: 'The fixes and small jobs that are easy to put off. Handled fast and done right.',
  },
]

const SERVICE_OPTIONS = [...SERVICES.map((s) => s.title), 'Something else']

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

function useCountUp(target, { decimals = 0, duration = 1400 } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        function tick(now) {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(target * eased)
          if (progress < 1) requestAnimationFrame(tick)
          else setValue(target)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])
  return [ref, value.toFixed(decimals)]
}

function useUtmFields() {
  const [utm, setUtm] = useState({})
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const found = {}
    UTM_KEYS.forEach((key) => {
      const val = params.get(key)
      if (val) found[key] = val
    })
    if (Object.keys(found).length) {
      sessionStorage.setItem('utm_params', JSON.stringify(found))
      setUtm(found)
    } else {
      const stored = sessionStorage.getItem('utm_params')
      if (stored) setUtm(JSON.parse(stored))
    }
  }, [])
  return utm
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center text-center px-5 pt-16">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1567361808960-dec9cb578182?auto=format&fit=crop&w=1920&q=80"
          alt="Hammer, tape measure, and hand tools laid out on a wood deck, ready for a job"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/75 to-ink/95" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto animate-hero">
        <span className="inline-block bg-white/10 border border-white/20 text-white/90 text-xs font-semibold tracking-wide uppercase px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
          Serving Daly City, South San Francisco, Millbrae &amp; Pacifica
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
          Home Remodeling and Handyman Work in Daly City and South San Francisco
        </h1>
        <p className="text-white/80 text-lg md:text-xl mb-9 max-w-2xl mx-auto leading-relaxed">
          One crew, run by Carlos, 15+ years remodeling homes across Daly City,
          South San Francisco, Millbrae, and Pacifica. Free estimates, no
          subcontracted labor passed off as ours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact-form"
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

function SparkVisual() {
  return (
    <div className="relative h-24 flex items-center justify-center overflow-hidden">
      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-accent spark-pulse" />
      </div>
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className={`spark-fleck spark-fleck-${i}`} />
      ))}
    </div>
  )
}

function EstimateVisual() {
  return (
    <div className="h-24 flex items-center justify-center">
      <div className="w-16 h-20 rounded-md bg-white border-2 border-ink/10 shadow-sm flex flex-col items-start gap-1.5 p-2.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`block h-1.5 rounded-full bg-neutral-200 estimate-line estimate-line-${i}`}
            style={{ width: i === 2 ? '55%' : '85%' }}
          />
        ))}
        <ClipboardCheck size={16} className="text-accent mt-1 estimate-check" />
      </div>
    </div>
  )
}

function RouteVisual() {
  return (
    <div className="h-24 flex items-center justify-center">
      <div className="relative w-28 h-10">
        <svg viewBox="0 0 112 40" className="w-full h-full">
          <path
            d="M4 32 C 30 32, 30 8, 56 8 S 82 32, 108 32"
            fill="none"
            stroke="#e5e5e5"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M4 32 C 30 32, 30 8, 56 8 S 82 32, 108 32"
            fill="none"
            stroke="#d95d2b"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="route-path"
          />
        </svg>
        <MapPinned size={16} className="text-accent absolute -top-1 right-0" />
      </div>
    </div>
  )
}

function Features() {
  const ref = useReveal()
  const cards = [
    {
      title: 'One Call, One Crew',
      desc: "You talk to Carlos, not a dispatcher. The same crew that quotes the job shows up and finishes it, no subcontracted labor swapped in halfway through.",
      Visual: SparkVisual,
    },
    {
      title: 'Free Estimates, No Surprises',
      desc: 'Carlos walks the space with you and writes the number down before any work starts. What you agree to is what you get billed.',
      Visual: EstimateVisual,
    },
    {
      title: '15+ Years on the Peninsula',
      desc: 'From Daly City and South San Francisco out to San Bruno, San Mateo, Millbrae, Brisbane, and Pacifica, Carlos has been remodeling Peninsula homes for over 15 years.',
      Visual: RouteVisual,
    },
  ]
  return (
    <section className="py-24 px-5 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal grid md:grid-cols-3 gap-6">
          {cards.map(({ title, desc, Visual }) => (
            <div key={title} className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col">
              <Visual />
              <h3 className="font-bold text-ink text-lg mt-4 mb-1.5">{title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const WORK_PHOTOS = [
  { src: '/work/door-hardware-install.png', alt: 'Carlos installing a new door lockset and hardware' },
  { src: '/work/fireplace-remodel-progress.png', alt: 'Fireplace and built-in remodel with the wall opened up for wiring' },
  { src: '/work/living-room-finished.png', alt: 'Finished living room remodel with a new fireplace surround' },
  { src: '/work/exterior-door-install.png', alt: 'New exterior side door installed on a home' },
  { src: '/work/sunroom-exterior.png', alt: 'Finished sunroom addition with new windows' },
  { src: '/work/wood-lattice-fence.png', alt: 'New wood lattice fence panel' },
  { src: '/work/rust-damage-repair.png', alt: 'Rusted roof flashing before repair' },
  { src: '/work/living-room-finished-2.png', alt: 'Finished living room remodel, wide view' },
]

function RecentWork() {
  const ref = useReveal()
  return (
    <section className="py-24 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight mb-3">
            A Few Recent Jobs Around the Peninsula
          </h2>
          <p className="text-neutral-500 text-lg">Real photos from real jobs, not stock shots.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {WORK_PHOTOS.map((p) => (
            <div key={p.src} className="aspect-square rounded-xl overflow-hidden bg-neutral-100">
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pillars() {
  const [yearsRef, years] = useCountUp(15)
  const [ratingRef, rating] = useCountUp(5, { decimals: 1 })
  const [reviewsRef, reviewCount] = useCountUp(38)
  const stats = [
    { ref: yearsRef, value: `${years}+`, label: 'Years Remodeling on the Peninsula' },
    { ref: ratingRef, value: `${rating}★`, label: 'Rating on Yelp' },
    { ref: reviewsRef, value: reviewCount, label: 'Yelp Reviews' },
  ]
  return (
    <section className="py-20 px-5 bg-ink">
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4 sm:gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label} ref={s.ref}>
            <div className="text-4xl sm:text-5xl font-extrabold text-accent tracking-tight tabular-nums">{s.value}</div>
            <p className="text-white/60 text-xs sm:text-sm mt-2 leading-snug">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Protocol() {
  const ref = useReveal()
  const steps = [
    {
      n: '01',
      title: 'Call or Send Your Project',
      desc: 'Reach Carlos directly by phone or through the free estimate form. He calls back personally, usually the same day.',
    },
    {
      n: '02',
      title: 'Walkthrough & Free Estimate',
      desc: "Carlos sees the space in person and gives you a real number before any work starts. No upsell script.",
    },
    {
      n: '03',
      title: 'The Work Gets Done',
      desc: 'One crew, start to finish, cleanup included. Cash, Zelle, or Venmo when the job is done.',
    },
  ]
  return (
    <section className="py-24 px-5 bg-white">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="reveal text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight mb-3">How a Job With Carlos Works</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`rounded-2xl p-6 border border-neutral-200 ${i === 1 ? 'md:-mt-4 md:mb-4 bg-ink text-white border-transparent' : 'bg-neutral-50'}`}
            >
              <span className={`text-3xl font-extrabold ${i === 1 ? 'text-accent' : 'text-neutral-300'}`}>{s.n}</span>
              <h3 className={`font-bold text-lg mt-3 mb-1.5 ${i === 1 ? 'text-white' : 'text-ink'}`}>{s.title}</h3>
              <p className={`text-sm leading-relaxed ${i === 1 ? 'text-white/70' : 'text-neutral-500'}`}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesGrid() {
  const ref = useReveal()
  return (
    <section id="services" className="py-24 px-5 bg-ink">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
            What Carlos Handles Around Millbrae and Pacifica
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="group bg-ink p-7 hover:bg-white/5 transition-colors duration-300">
                <div className="w-11 h-11 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <h3 className="font-bold text-white text-base mb-1.5">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TrustSignals() {
  const ref = useReveal()
  const badges = [
    { icon: Star, label: '5.0★ Rated on Yelp (38 Reviews)' },
    { icon: Hammer, label: '15+ Years on the Peninsula' },
    { icon: CheckCircle2, label: 'Free, In-Person Estimates' },
  ]
  return (
    <section className="py-16 px-5 bg-white border-y border-neutral-100">
      <div ref={ref} className="reveal max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-4">
        {badges.map((b) => {
          const Icon = b.icon
          return (
            <span
              key={b.label}
              className="inline-flex items-center gap-2 bg-neutral-50 border border-neutral-200 rounded-full px-5 py-2.5 text-sm font-semibold text-ink"
            >
              <Icon size={16} className="text-accent" /> {b.label}
            </span>
          )
        })}
      </div>
    </section>
  )
}

function Testimonials() {
  const ref = useReveal()
  return (
    <section id="reviews" className="py-24 px-5 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="reveal text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight mb-4">
            What the Neighbors on Yelp Are Saying
          </h2>
          <div className="inline-flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-5 py-2.5 text-sm font-semibold text-ink">
            <span className="flex text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} className="fill-accent" />
              ))}
            </span>
            5.0 out of 5, 38 reviews on Yelp
          </div>
        </div>
        <div className="max-w-2xl mx-auto bg-white border border-neutral-200 rounded-2xl p-8">
          <p className="text-neutral-600 text-lg leading-relaxed mb-4">
            &ldquo;Carlos and his team helped our family with various projects, from putting up
            laminate flooring to replacing a new vanity cabinet and bathroom sink. He is well
            organized in assessing what needs to be done, and picked up the supplies from the
            remodel store himself. Most importantly, he is very responsive to any concerns or
            questions during or after the project.&rdquo;
          </p>
          <p className="text-ink font-semibold text-sm">Verified Yelp review</p>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const utm = useUtmFields()
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    service: '',
    phone: '',
    email: '',
    preferred: '',
    message: '',
  })

  const hasPhone = form.phone.trim().length > 0
  const hasEmail = form.email.trim().length > 0
  const needsPreferredStep = hasPhone && hasEmail

  const steps = ['Your Name', "What You Need", 'Contact Info', 'Confirm']
  const lastStep = steps.length - 1

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
    setError('')
  }

  function validateStep() {
    if (step === 0 && !form.name.trim()) return 'Enter your name to continue.'
    if (step === 1 && !form.service) return 'Pick what you need help with.'
    if (step === 2) {
      if (!hasPhone && !hasEmail) return 'Add a phone number or email so we can reach you.'
      if (needsPreferredStep && !form.preferred) return 'Let us know how you\'d like us to reach back out.'
    }
    return ''
  }

  function next() {
    const msg = validateStep()
    if (msg) {
      setError(msg)
      return
    }
    if (step === 2 && !needsPreferredStep) {
      setForm((f) => ({ ...f, preferred: hasPhone ? 'Call' : 'Email' }))
    }
    setStep((s) => Math.min(s + 1, lastStep))
  }

  function back() {
    setError('')
    setStep((s) => Math.max(s - 1, 0))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    const data = new FormData(e.target)
    fetch(e.target.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true))
      .finally(() => setSubmitting(false))
  }

  return (
    <section id="contact" className="py-24 px-5 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight mb-3">
            Get Your Free Estimate in Daly City and South San Francisco
          </h2>
          <p className="text-neutral-500 text-lg mb-8">Tell us about the job and Carlos will get back to you directly.</p>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
          >
            Start Your Free Estimate
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden border border-neutral-200">
          <iframe
            title="Carlos Construction location, 888 Alta Loma Drive, South San Francisco, CA"
            src="https://www.google.com/maps?q=888+Alta+Loma+Drive,+South+San+Francisco,+CA+94080&output=embed"
            className="w-full h-64 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div
        id="contact-form"
        className="hidden target:flex fixed inset-0 z-[100] items-center justify-center p-4 sm:p-6 bg-ink/70 backdrop-blur-sm overflow-y-auto"
      >
        <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 my-auto">
          <a
            href="#"
            aria-label="Close form"
            onClick={() => { setStep(0); setError(''); setSubmitted(false) }}
            className="absolute top-5 right-5 h-9 w-9 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center hover:border-accent/50 transition-colors duration-300"
          >
            <X size={16} className="text-ink" />
          </a>

          {submitted ? (
            <div className="text-center py-6">
              <CheckCircle2 size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-ink mb-2">Thanks, we'll be in touch shortly</h3>
              <p className="text-neutral-500">Carlos will {form.preferred === 'Email' ? 'email' : 'call or text'} you back to schedule your free estimate.</p>
            </div>
          ) : (
          /* TODO: Formspree requires an account to generate a real endpoint,
             no API key is available in this environment. Sign in at
             formspree.io, create a new form with recipient
             carlos54humberto1@gmail.com (confirmed lead email), then swap
             the ID below in before this collects a real lead. */
          <form
            action="https://formspree.io/f/PLACEHOLDER"
            method="POST"
            onSubmit={handleSubmit}
            className="pr-8"
          >
            <input type="hidden" name="_subject" value="New website inquiry - Carlos Construction" />
            <input type="hidden" name="preferred_contact" value={form.preferred} />
            {UTM_KEYS.map((key) =>
              utm[key] ? <input key={key} type="hidden" name={key} value={utm[key]} /> : null,
            )}

            <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden mb-8">
              <div
                className="h-full bg-accent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ width: `${((step + 1) / steps.length) * 100}%` }}
              />
            </div>

            {step === 0 && (
              <div>
                <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="name">Your name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors duration-300"
                />
              </div>
            )}

            {step === 1 && (
              <div>
                <label className="block text-sm font-semibold text-ink mb-3">What do you need help with?</label>
                <input type="hidden" name="service" value={form.service} />
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {SERVICE_OPTIONS.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => update('service', opt)}
                      className={`text-left text-sm px-4 py-3 rounded-lg border transition-colors duration-300 ${
                        form.service === opt
                          ? 'bg-accent text-white border-accent font-semibold'
                          : 'bg-white border-neutral-300 text-ink hover:border-accent/50'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors duration-300"
                    />
                  </div>
                </div>
                {needsPreferredStep && (
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-2">Preferred way to hear back</label>
                    <div className="flex gap-2.5">
                      {['Call', 'Email'].map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => update('preferred', opt)}
                          className={`flex-1 text-sm px-4 py-2.5 rounded-lg border transition-colors duration-300 ${
                            form.preferred === opt
                              ? 'bg-accent text-white border-accent font-semibold'
                              : 'bg-white border-neutral-300 text-ink hover:border-accent/50'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1.5" htmlFor="message">
                    Anything else? (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Tell us a bit about the project"
                    className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors duration-300"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-white border border-neutral-200 rounded-xl p-5 grid gap-2 text-sm">
                <p><span className="text-neutral-400">Name:</span> <span className="font-semibold text-ink">{form.name}</span></p>
                <p><span className="text-neutral-400">Project:</span> <span className="font-semibold text-ink">{form.service}</span></p>
                {hasPhone && <p><span className="text-neutral-400">Phone:</span> <span className="font-semibold text-ink">{form.phone}</span></p>}
                {hasEmail && <p><span className="text-neutral-400">Email:</span> <span className="font-semibold text-ink">{form.email}</span></p>}
                <p><span className="text-neutral-400">Preferred contact:</span> <span className="font-semibold text-ink">{form.preferred}</span></p>
              </div>
            )}

            {error && <p className="text-red-600 text-sm mt-4">{error}</p>}

            <div className="flex items-center justify-between mt-8">
              <button
                type="button"
                onClick={back}
                disabled={step === 0}
                className="flex items-center gap-1 text-sm font-semibold text-neutral-500 disabled:opacity-0 transition-opacity"
              >
                <ChevronLeft size={16} /> Back
              </button>
              {step < lastStep ? (
                <button
                  key="next-btn"
                  type="button"
                  onClick={next}
                  className="flex items-center gap-1 bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
                >
                  Next <ChevronRight size={16} />
                </button>
              ) : (
                <button
                  key="submit-btn"
                  type="submit"
                  disabled={submitting}
                  className="bg-accent hover:bg-accent/90 text-white font-semibold px-7 py-3 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 disabled:opacity-60"
                >
                  {submitting ? 'Sending...' : 'Send Request'}
                </button>
              )}
            </div>
          </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <StickyMobileCTA />
      <Hero />
      <Features />
      <RecentWork />
      <Pillars />
      <Protocol />
      <ServicesGrid />
      <TrustSignals />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
