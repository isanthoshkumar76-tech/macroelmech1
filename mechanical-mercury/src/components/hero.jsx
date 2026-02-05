export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-40 px-6 text-center">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-900/40 via-black to-black"></div>
      <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[140px] -z-10"></div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Professional High Mast & Lighting Solutions
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          We are a trusted service provider specializing in high-mast (tower)
          lighting, bay/buzzard lights, highway lighting, and street lighting
          systems.
        </p>

        <p className="mt-4 text-gray-400">
          With proven expertise across sports stadiums, highways, industrial
          sites, and large infrastructure projects, our team delivers reliable
          supply and erection services with top safety and quality standards.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="/services"
            className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-xl font-semibold hover:opacity-90"
          >
            Our Services
          </a>

          <a
            href="/contact"
            className="border border-purple-500 px-6 py-3 rounded-xl text-purple-300 hover:bg-purple-600/10"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
