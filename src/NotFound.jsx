import { Navbar, Footer, PHONE, PHONE_HREF } from './Chrome.jsx'

export default function NotFound() {
  return (
    <div className="bg-white">
      <Navbar />
      <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5 pt-16">
        <h1 className="text-5xl font-extrabold text-ink mb-3">404</h1>
        <p className="text-neutral-500 mb-8">That page doesn't exist. Call us directly or head back home.</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/" className="bg-accent text-white font-semibold px-7 py-3.5 rounded-full">Back Home</a>
          <a href={PHONE_HREF} className="bg-neutral-100 text-ink font-semibold px-7 py-3.5 rounded-full">Call {PHONE}</a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
