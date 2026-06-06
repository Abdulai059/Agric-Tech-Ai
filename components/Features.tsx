
"use client"
import { useState } from "react";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C10 4 7 7 7 11c0 3 1.5 5.5 3.5 7.5L14 24l3.5-5.5C19.5 16.5 21 14 21 11c0-4-3-7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="14" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 18c2-1 4-1.5 6-1M24 18c-2-1-4-1.5-6-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    number: "01",
    title: "Hyperlocal Weather",
    desc: "Farm-specific forecasts with spray timing windows so you never waste chemicals before rain.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <path d="M5 8h13M5 12h9M5 16h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 14c2 0 4 1.5 4 3.5S22 21 20 21h-1l-2 3-2-3H8c-2 0-3-1.5-3-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    number: "02",
    title: "Disease Risk Prediction",
    desc: "Proactive disease warnings based on humidity and leaf wetness before symptoms appear.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <path d="M6 20c0-4 3-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="9" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 4l1.5 1.5M22 8h2M20 12l1.5-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    number: "03",
    title: "Pest Pressure Alerts",
    desc: "Armyworm and Tuta absoluta warnings for your region before an outbreak hits.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="5" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 5v3M14 20v3M5 14h3M20 14h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    number: "04",
    title: "Photo Diagnosis",
    desc: "AI identifies crop disease from a photo with agronomist escalation for critical cases.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <path d="M7 24V14M14 24V6M21 24V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 10l3-4 7 5 7-8 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    number: "09",
    title: "Growth Stage Tracking",
    desc: "Log your planting date and get weekly alerts on what to do at every crop stage.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="10" r="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 10h2a4 4 0 014 4v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 16l2 2 2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    number: "08",
    title: "Agronomist Escalation",
    desc: "Unresolved issues go straight to a verified agronomist real expert answers within 24 hours.",
  },
];

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      className="relative pb-24 md:py-32 px-4 md:px-14 overflow-hidden"

    >


      <div className="relative max-w-7xl mx-auto">

        {/* Section Header. */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-dark" />
              <span
                className="text-xs font-semibold text-dark tracking-[0.25em] uppercase"

              >
                Our Technology
              </span>
            </div>
            <h2
              className="text-5xl md:text-6xl font-extrabold leading-[1.05] text-dark"

            >
              Built for Modern
              <br />
              <span className="text-lime-300">Farming</span> Challenges
            </h2>
          </div>

          <div className="lg:max-w-xs">
            <p
              className="text-sm leading-relaxed mb-6 text-dark"

            >
              Every tool is designed with farmers in mind — powerful under the
              hood, simple on the surface.
            </p>
            <button
              className="group flex items-center gap-2 text-sm font-semibold transition-all text-lime"

            >
              Explore all features
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="#8ab800"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              // onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="
        relative
        flex flex-col
        p-8
        rounded-3xl
        border border-black/5
        bg-gray-light
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
      "
            >

              {/* Icon */}
              <div
                className={`
          w-12 h-12
          rounded-2xl
          flex items-center justify-center
          mb-6
          transition-all duration-300
          ${hoveredIndex === index
                    ? "bg-lime-100 border border-lime-300"
                    : "bg-lime-50 border border-lime-200"
                  }
        `}
              >
                <div className="text-lime-700">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-7 text-gray-600 flex-1">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


