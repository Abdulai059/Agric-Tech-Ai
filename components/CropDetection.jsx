"use client";

import Image from "next/image";

const CheckIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    className="w-4 h-4 flex-shrink-0"
    stroke="#c8f135"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 10l4.5 4.5L16 6" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    className="w-3.5 h-3.5"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 13L13 3M13 3H6M13 3V10" />
  </svg>
);

const issues = [
  {
    title: "Diseases",
    desc: "Detects maize rust, blight, and fungal infections before they spread.",
  },
  {
    title: "Pest Damage",
    desc: "Recognises signs of fall armyworm, stem borer, and other destructive pests.",
  },
  {
    title: "Nutrient Deficiencies",
    desc: "Identifies nitrogen, phosphorus, and potassium imbalances in real time.",
  },
  {
    title: "Abiotic Stress",
    desc: "Detects drought, cold damage, and other non-living environmental factors.",
  },
];


function BeforeAfterCard() {
  return (
    <div className="relative w-full max-w-[650px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
      
      <div className="flex h-[450px]">

        {/* BEFORE */}
        <div className="relative w-1/2 h-full overflow-hidden">
          <Image
            src="/before1.jpg"
            alt="Diseased crop"
            fill
            className="object-cover scale-105 brightness-90"
            sizes="50vw"
          />

          <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-black/30 backdrop-blur border border-white/20">
            Before
          </span>
        </div>

        {/* divider */}
        <div className="w-px bg-white/10" />

        {/* AFTER */}
        <div className="relative w-1/2 h-full overflow-hidden">
          <Image
            src="/after1.jpg"
            alt="Healthy crop"
            fill
            className="object-cover"
            sizes="50vw"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />

          <span className="absolute top-5 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-black/30 backdrop-blur border border-[#c8f135]/40 text-white backdrop-blur">
            After
          </span>
        </div>

      </div>
    </div>
  );
}

export default function CropDetection() {
  return (
    <section className="bg-white flex items-center font-sans">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 py-20 lg:py-28 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* LEFT */}
          <div className="flex-1 max-w-lg">

<div className="relative inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 border border-[#c8f135]/40 bg-[#c8f135]/10 text-xs font-semibold tracking-widest uppercase text-[#4a7c10]">
  <span className="absolute -top-2 -left-0 text-4xl leading-none">🌾</span>
  <span className="pl-8">AI-Powered Detection</span>
</div>

            <h2 className="font-extrabold text-dark leading-tight mb-5 text-4xl md:text-5xl">
              How Our AI Detects <br />
              {/* <span className="text-[#5da016]">Crop Issues</span> */}
            </h2>

            <p className="text-[#4a5240] text-sm leading-relaxed mb-8 max-w-[420px]">
              Our advanced computer vision technology identifies early signs of
              crop stress so you can act before yield is lost.
            </p>

            <ul className="space-y-5 mb-10">
              {issues.map(({ title, desc }) => (
                <li key={title} className="flex items-start gap-3.5">
                  <span className="w-6 h-6 rounded-full bg-dark flex items-center justify-center flex-shrink-0">
                    <CheckIcon />
                  </span>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    <span className="font-semibold text-dark">
                      {title}:{" "}
                    </span>
                    {desc}
                  </p>
                </li>
              ))}
            </ul>

            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Simply upload a photo and receive an instant diagnosis with
              personalised recommendations.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-3 bg-lime-300 hover:bg-lime-200 text-dark font-semibold text-sm rounded-full pl-6 pr-3 py-1.5 transition-all hover:scale-[1.03] active:scale-95 shadow-lg shadow-[#5da016]/20 group"
            >
              Try It Now
              <span className="w-7 h-7 bg-dark group-hover:bg-dark rounded-full text-lime flex items-center justify-center">
               <ArrowIcon  />
              </span>
            </a>
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <BeforeAfterCard />
          </div>

        </div>
      </div>
    </section>
  );
}