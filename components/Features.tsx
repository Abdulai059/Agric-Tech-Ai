
"use client"
import { useState } from "react";
 
const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 4V7M14 21V24M4 14H7M21 14H24M6.34 6.34L8.46 8.46M19.54 19.54L21.66 21.66M6.34 21.66L8.46 19.54M19.54 8.46L21.66 6.34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    number: "01",
    title: "Precision Agriculture",
    desc: "AI-driven field analytics deliver hyper-local soil and weather insights, enabling data-backed decisions at every growth stage.",
   
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="8" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 8V6a5 5 0 0110 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="15" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    number: "02",
    title: "IoT Sensor Network",
    desc: "Thousands of connected field sensors transmit real-time moisture, temperature, and nutrient data straight to your dashboard.",
   
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <path d="M4 20L10 14L14 18L20 10L24 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    number: "03",
    title: "Yield Forecasting",
    desc: "Predictive models trained on decades of crop data give you reliable harvest projections weeks before the season peaks.",
   
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    number: "04",
    title: "Automated Irrigation",
    desc: "Smart water scheduling reduces waste by up to 45% while maintaining optimal hydration levels across every crop zone.",
    
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l2.5 5 5.5.8-4 3.9.94 5.5L14 16.5 9.06 19.2l.94-5.5-4-3.9 5.5-.8L14 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    number: "05",
    title: "Crop Health AI",
    desc: "Satellite and drone imagery analyzed by neural networks detects disease, pests, and nutrient deficiencies early.",
    
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
        <path d="M6 22V10M12 22V6M18 22V14M24 22V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    number: "06",
    title: "Analytics Dashboard",
    desc: "A unified command center for all your agricultural data — from soil reports to market pricing — in one clean interface.",
    
  },
];
 
export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
 
  return (
    <section
      className="relative pb-24 md:py-32 px-4 md:px-14 overflow-hidden"
    
    >
 
 
      <div className="relative max-w-7xl mx-auto">
 
        {/* Section Header */}
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
      onMouseEnter={() => setHoveredIndex(index)}
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
          ${
            hoveredIndex === index
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
 

