import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-8 flex flex-col items-center text-center gap-12 bg-gradient-to-br from-yellow-50 to-pink-50 font-sans">
      <h1 className="text-5xl font-bold">Dogwash</h1>
      <p className="text-lg max-w-xl">
        Pamper your pup with the coolest grooming in town! From speedy baths to
        full spa days, we do it all.
      </p>
      <div className="relative w-full max-w-2xl h-80">
        <Image
          src="https://images.unsplash.com/photo-1601758062710-0f34ff031885?auto=format&fit=crop&w=1200&q=80"
          alt="Freshly groomed dog"
          fill
          className="object-cover rounded-xl shadow-lg"
        />
      </div>
      <section className="max-w-xl w-full grid grid-cols-2 gap-4 text-lg">
        <div className="p-4 bg-white/70 rounded-lg shadow">🛁 Baths</div>
        <div className="p-4 bg-white/70 rounded-lg shadow">✂️ Haircuts</div>
        <div className="p-4 bg-white/70 rounded-lg shadow">🐾 Nail Trims</div>
        <div className="p-4 bg-white/70 rounded-lg shadow">🎀 Styling</div>
      </section>
      <a
        href="#book"
        className="mt-4 px-6 py-3 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-500 transition"
      >
        Book Now
      </a>
    </main>
  );
}
