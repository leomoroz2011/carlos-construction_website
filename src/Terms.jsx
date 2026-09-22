import { Navbar, Footer, StickyMobileCTA } from './Chrome.jsx'

export default function Terms() {
  return (
    <div className="bg-white">
      <Navbar />
      <StickyMobileCTA />
      <main className="max-w-3xl mx-auto px-5 pt-32 pb-24 text-neutral-700">
        <h1 className="text-3xl font-extrabold text-ink mb-2">Terms of Service</h1>
        <p className="text-sm text-neutral-400 mb-2">Last updated {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <p className="text-xs text-neutral-400 mb-10 italic">
          This is a plain-language template and has not had legal review.
        </p>

        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-ink mb-2">The services this site describes</h2>
            <p>
              This website belongs to Carlos Construction, operated by Construction Special In
              Details, Inc. The site describes remodeling, repair, and handyman services offered
              in Daly City, South San Francisco, Millbrae, and Pacifica. Actual work is scoped and
              agreed to separately with each customer, in person or by phone, before any job begins.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-2">No guaranteed outcome</h2>
            <p>
              Nothing on this site is a guarantee of a specific price, timeline, or result for
              your project. Estimates given through this site or by phone are starting points and
              can change once the scope of the actual job is confirmed in person.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-2">Limitation of liability</h2>
            <p>
              Construction Special In Details, Inc. is not liable for indirect, incidental, or
              consequential damages arising from your use of this website. This does not limit any
              liability related to work actually performed at your property, which is governed by
              the separate agreement made for that job.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink mb-2">Governing law</h2>
            <p>These terms are governed by the laws of the State of California.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
