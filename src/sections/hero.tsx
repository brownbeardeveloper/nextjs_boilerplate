import NavigateButton from "../components/navigate-button"

export function HeroSection() {

  const heroLinks = [
    { url: "/about", text: "Go to About Page" },
    { url: "/contact", text: "Go to Contact Page" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 lg:py-0 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Lorem ipsum dolor
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-balance">
                Lorem ipsum
                <br />
                <span className="text-foreground/80">
                  Lorem
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {heroLinks.map((link) => (
                <NavigateButton key={link.url} url={link.url} variant="customTransparent" text={link.text} />
              ))}
            </div>
            </div>
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-lg"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 1em, black calc(100% - 1em), transparent), linear-gradient(to bottom, transparent, black 1em, black calc(100% - 1em), transparent)",
                  maskComposite: "intersect",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 1em, black calc(100% - 1em), transparent), linear-gradient(to bottom, transparent, black 1em, black calc(100% - 1em), transparent)",
                  WebkitMaskComposite: "source-in",
                }}
              >
                <source src="/hero.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
