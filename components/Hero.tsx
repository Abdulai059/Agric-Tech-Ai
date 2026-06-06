export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/agricai.jpg"
          alt="Lush green terraced farm fields"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full pb-16 md:pb-24 px-6 md:px-14">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          
          {/* Left: Headline */}
          <div className="max-w-2xl">
            <h1
              className="hero-title text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[0.95] tracking-tight"
             
            >
              Smart AI Solutions
              <br />for a Stronger
              <br />Agriculture
            </h1>
          </div>

          {/* Right: Description + CTA */}
          <div className="flex flex-col items-start md:items-end gap-6 max-w-sm">
            <p
              className="hero-desc text-white/75 text-base leading-relaxed md:text-right"
            
            >
              Discover how cutting-edge technology, real-time insights, and precision tools are transforming traditional farming into a more productive, sustainable, and resilient industry.
            </p>
            <button
              className="hero-cta flex items-center gap-2 bg-[#b8f225] text-black font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#cff63d] transition-all duration-300 group"
           
            >
              Get Started
              <span className="w-7 h-7 bg-black rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="#b8f225" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-white text-xs tracking-widest uppercase" style={{ fontFamily: 'DM Sans' }}>Scroll</span>
        <div className="w-px h-8 bg-white/50 animate-pulse" />
      </div>
    </section>
  )
}
