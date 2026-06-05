"use client";

import { useState } from "react";

const NAV_ITEMS = ["Home", "About Us", "Services", "Our Products", "Technology"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
   <nav className="fixed top-0 left-0 right-0 z-50">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-0 py-5">
    {/* Logo */}
      <div className="text-white font-bold tracking-[0.18em] text-sm md:text-base uppercase font-syne">
        PAULVANTE
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex  bg-black/40 backdrop-blur-md border-b border-white/10 rounded-full p-[6px_8px] items-center gap-1">
        {NAV_ITEMS.map((item) => {
          const isActive = active === item;

          return (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={[
                "px-[18px] py-2 rounded-full text-[15px] font-medium transition-all",
                "cursor-pointer whitespace-nowrap",
                isActive
                  ? "bg-lime text-dark font-semibold"
                  : "text-white/80 hover:text-white"
              ].join(" ")}
            >
              {item}
            </button>
          );
        })}
      </div>

      {/* CTA Desktop */}
      <div className="hidden md:flex items-center">
        <button className="flex items-center gap-2 bg-[#b8f225] text-black font-semibold text-sm px-5 py-3 rounded-full hover:bg-[#cff63d] transition-all duration-300 group">
          Contact Us

          <span className="w-6 h-6 bg-black rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 10L10 2M10 2H4M10 2V8"
                stroke="#b8f225"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>

      {/* Mobile Button */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <div className={`w-6 h-0.5 bg-white mb-1.5 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <div className={`w-6 h-0.5 bg-white mb-1.5 transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
        <div className={`w-6 h-0.5 bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-4 transition-all duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"
        }`}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = active === item;

          return (
            <button
              key={item}
              onClick={() => {
                setActive(item);
                setMenuOpen(false);
              }}
              className={`text-left text-base font-medium py-2 transition-colors ${
                isActive ? "text-[#b8f225]" : "text-white/80 hover:text-white"
              }`}
            >
              {item}
            </button>
          );
        })}

        <button className="flex items-center gap-2 bg-[#b8f225] text-black font-semibold text-sm px-5 py-3 rounded-full w-fit mt-2">
          Contact Us
        </button>
      </div>
  </div>
</nav>
  );
}


