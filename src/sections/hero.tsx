import NavigateButton from "../components/navigate-button"

export function HeroSection() {

  const heroLinks = [
    { url: "/about", text: "Go to About Page" },
    { url: "/contact", text: "Go to Contact Page" },
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

      {/* Video Background */}
      <div className="absolute w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover">
          <source src="/hero.mp4" type="video/mp4" />
        </video>

      </div>

      <div className="relative z-10 w-full bg-black/70 px-20 py-30 backdrop-blur-xs">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-8 py-2 rounded-full border border-gray-300">
              <span className="text-gray-300 text-sm uppercase tracking-wider">
                Example Text
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-balance text-white">
                Lorem ipsum
              </h1>

              <p className="text-xl lg:text-2xl leading-relaxed text-gray-300 max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {heroLinks.map((link) => (
                <NavigateButton key={link.url} url={link.url} variant="customGray" text={link.text} />
              ))}
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}
