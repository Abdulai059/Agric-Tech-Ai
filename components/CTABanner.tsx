import Image from "next/image";

export default function CTABanner() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto bg-[#0a140a] my-10 py-10 md:px-6 px-4 md:px-14 md:rounded-lg">
        <div className="relative rounded-3xl overflow-hidden bg-lime px-10 md:px-16 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full overflow-hidden translate-x-1/3 -translate-y-1/3 pointer-events-none">
  <Image
    src="/agric-produce.png"
    alt="Farmer"
    fill
      sizes="288px"
    className="object-cover"
  />
</div>
          <div className="absolute bottom-0 right-20 w-40 h-40 rounded-full bg-black/5 pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            <h2
              className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-4"
          
            >
              Ready to Transform Your Farm?
            </h2>
            <p className="text-black/60 text-base">
              Join thousands of farmers already using Paulvante to grow smarter and harvest more.
            </p>
          </div>

          <div className="relative z-10 flex flex-col  md:pt-20  sm:flex-row gap-3">
            <button
              className="flex items-center gap-2 bg-black text-[#b8f225] font-semibold text-sm px-6 py-3.5 rounded-full hover:bg-gray-900 transition-all duration-300 group whitespace-nowrap"
             
            >
              Start Free Trial
              <span className="w-6 h-6 bg-[#b8f225] rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            <button
              className="flex items-center gap-2 border-2 border-black/20 text-black font-semibold text-sm px-6 py-3.5 rounded-full hover:border-black/40 transition-all duration-300 whitespace-nowrap"
            
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
