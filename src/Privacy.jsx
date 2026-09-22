import { Navbar, Footer } from './Chrome.jsx'

export default function Privacy() {
  return (
    <div className="bg-white">
      <Navbar />
      <main className="max-w-3xl mx-auto px-5 pt-32 pb-24 text-neutral-700">
        <h1 className="text-3xl font-extrabold text-ink mb-2">Privacy Policy</h1>
        <p className="text-sm text-neutral-400 mb-10">Last updated {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-ink mb-2">Who this covers</h2>
            <p>
              This policy covers the website for Carlos Construction, operated by Construction
              Special In Details, Inc., 240 Lake Merced Blvd, Daly City, CA 94015. It explains
              what information we collect through this site and how we use it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-2">What the contact form collects</h2>
            <p>
              When you fill out the Free Estimate form on this site, we collect your name, the
              type of project you need help with, and whatever phone number and/or email address
              you provide so we can get back to you. That information is sent directly to Carlos
              Construction's inbox through our form provider, Formspree. We do not use it for
              anything other than responding to your request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-2">We don't sell your information</h2>
            <p>
              We don't sell, rent, or trade your information to any third party. It's used only to
              respond to your estimate request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-2">Analytics and cookies</h2>
            <p>
              This site uses Google Analytics to understand how visitors use the site, which sets
              cookies in your browser. You can disable cookies at any time in your browser's
              settings, and the site will still work normally.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-2">Requesting deletion of your data</h2>
            <p>
              If you'd like us to delete any information you submitted through this site, call{' '}
              <a href="tel:+14157569400" className="text-accent font-semibold">(415) 756-9400</a> and
              we'll remove it.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
