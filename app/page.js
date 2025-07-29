import Image from "next/image";

const services = [
  {
    title: "Baths",
    image:
      "/images/cat1.png",
  },
  {
    title: "Haircuts",
    image:
      "/images/dog1.png",
  },
  {
    title: "Nail Trims",
    image:
      "/images/dog2.png",
  },
  {
    title: "Styling",
    image:
      "/images/cat2.png",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen font-sans text-center flex flex-col items-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/dog3.png"
          alt="Freshly groomed dog"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-pink-500/40 dark:bg-pink-800/50 mix-blend-multiply" />
      </div>
      <div className="relative w-full max-w-4xl mx-auto p-8 flex flex-col items-center gap-12 backdrop-blur-sm">
        <h1 className="text-6xl font-bold tracking-tight">Dogwash</h1>
        <p className="text-xl max-w-2xl">
          Pamper your pup with the coolest grooming in town! From speedy baths to
          full spa days, we do it all.
        </p>
        <section className="grid gap-6 w-full max-w-3xl md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <Image src={service.image} alt={service.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-2xl font-semibold drop-shadow-lg">
                  {service.title}
                </span>
              </div>
            </div>
          ))}
        </section>
        <a
          href="#book"
          className="px-8 py-3 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-500 transition"
        >
          Book Now
        </a>
      </div>
    </main>
  );
}
