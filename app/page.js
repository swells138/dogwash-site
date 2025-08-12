import Image from "next/image";

const services = [
  { title: "Baths", image: "/images/cat1.png" },
  { title: "Haircuts", image: "/images/dog1.png" },
  { title: "Nail Trims", image: "/images/dog2.png" },
  { title: "Styling", image: "/images/cat2.png" },
];

const testimonials = [
  { name: "Milo’s mom", text: "Fast, gentle, and he smelled amazing for days!", stars: 5 },
  { name: "Rocky’s dad", text: "Best cut he’s had—staff was super friendly.", stars: 5 },
  { name: "Zoe’s family", text: "Great prices and same-day nail trim. Thank you!", stars: 4 },
];

export default function Home() {
  return (
    <main className="relative min-h-screen font-sans text-center flex flex-col bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-2xl font-extrabold tracking-tight">
            <span className="text-pink-600">Dog</span>wash
          </a>
          <nav className="hidden gap-6 sm:flex text-sm">
            <a href="#services" className="hover:text-pink-700">Services</a>
            <a href="#pricing" className="hover:text-pink-700">Pricing</a>
            <a href="#reviews" className="hover:text-pink-700">Reviews</a>
            <a href="#book" className="hover:text-pink-700">Book</a>
            <a href="#contact" className="hover:text-pink-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/dog3.png"
            alt="Freshly groomed dog"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-pink-500/35" />
        </div>
        <div className="mx-auto max-w-6xl px-6 py-20 text-center text-white">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight drop-shadow">
            Fresh Cuts. Happy Pups.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg drop-shadow">
            Pamper your pup with the coolest grooming in town—from speedy baths to full spa days.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#book"
              className="rounded-full bg-pink-600 px-6 py-3 font-semibold text-white shadow hover:bg-pink-500"
            >
              Book Now
            </a>
            <a
              href="#pricing"
              className="rounded-full px-6 py-3 font-semibold ring-1 ring-white/70 hover:bg-white/10"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Services Tiles */}
      <section id="services" className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Grooming Menu</h2>
        <p className="mt-2 text-gray-600">Gentle care, clean cuts, and lots of tail wags.</p>

        <div className="mt-8 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.title} className="relative h-48 overflow-hidden rounded-2xl shadow ring-1 ring-pink-100">
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width:1024px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/35 grid place-items-center">
                <span className="text-white text-xl font-semibold drop-shadow">{s.title}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="w-full bg-pink-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">Pricing</h2>
          <p className="mt-2 text-gray-700">Transparent packages. Breed/coat may adjust final price.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { tier: "Small Dogs", note: "Up to 20 lbs", price: "$35 Bath • $55 Full Groom" },
              { tier: "Medium Dogs", note: "21–50 lbs", price: "$45 Bath • $70 Full Groom" },
              { tier: "Large Dogs", note: "51+ lbs", price: "$55 Bath • $90 Full Groom" },
            ].map((p) => (
              <div key={p.tier} className="rounded-2xl border border-pink-100 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">{p.tier}</h3>
                <p className="text-sm text-gray-600">{p.note}</p>
                <p className="mt-3 text-lg font-bold text-pink-700">{p.price}</p>
                <a href="#book" className="mt-4 inline-block rounded-full bg-pink-600 px-4 py-2 text-white hover:bg-pink-500">
                  Book this
                </a>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="mt-10 rounded-2xl border border-pink-100 bg-white p-6">
            <h3 className="text-lg font-semibold">Add-Ons</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-gray-700">
              <li>Teeth Brushing — $10</li>
              <li>De-Shedding Treatment — $15</li>
              <li>Paw & Pad Trim — $10</li>
              <li>Anal Gland Expression — $15</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Happy Humans, Happier Dogs</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-pink-100 bg-white p-6 text-left shadow-sm">
              <blockquote className="text-gray-800">“{t.text}”</blockquote>
              <figcaption className="mt-3 flex items-center justify-between text-sm text-gray-600">
                <span>— {t.name}</span>
                <span className="text-yellow-500">
                  {"★".repeat(t.stars)}
                  {"☆".repeat(5 - t.stars)}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="w-full bg-pink-100">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">Book an Appointment</h2>
          <p className="mt-2 text-gray-700">Call, email, or send a quick request.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="tel:+14445551234" className="rounded-full bg-pink-600 px-5 py-3 font-semibold text-white hover:bg-pink-500">
              Call (444) 555-1234
            </a>
            <a href="mailto:hello@dogwash.com" className="rounded-full px-5 py-3 font-semibold ring-1 ring-pink-400 hover:bg-white">
              Email Us
            </a>
            <a href="#contact" className="rounded-full px-5 py-3 font-semibold ring-1 ring-pink-400 hover:bg-white">
              Send Request
            </a>
          </div>
        </div>
      </section>

      {/* Contact (simple form placeholder) */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Contact</h2>
        <form className="mx-auto mt-6 grid max-w-2xl gap-4 text-left">
          <input className="rounded-lg border border-pink-200 px-3 py-2" placeholder="Your name" />
          <input className="rounded-lg border border-pink-200 px-3 py-2" type="email" placeholder="Email" />
          <textarea className="rounded-lg border border-pink-200 px-3 py-2" rows={4} placeholder="Tell us about your pup & service needed" />
          <button className="rounded-lg bg-pink-600 px-5 py-3 font-semibold text-white hover:bg-pink-500">Send</button>
        </form>
      </section>

      <footer className="border-t py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Dogwash — Gentle grooming, happy pups.
      </footer>
    </main>
  );
}
