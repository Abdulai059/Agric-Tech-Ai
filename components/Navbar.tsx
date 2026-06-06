"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  "Home",
  "About Us",
  "Services",
  "Our Products",
  "Technology",
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
<nav
  className={`
    fixed inset-x-0 top-0 z-50
    transition-all duration-500
    ${
      scrolled
        ? "bg-black/70 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none"
        : "bg-transparent backdrop-blur-none"
    }
  `}
>
        <div
          className={`
            max-w-7xl mx-auto
            flex items-center justify-between
            px-5 lg:px-0 
            transition-all duration-500
            ${scrolled ? "py-3" : "py-5"}
          `}
        >
          {/* Logo */}
          <div className="text-white font-bold tracking-[0.2em] uppercase text-sm md:text-base">
            PAULVANTE
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center rounded-full bg-black/60 backdrop-blur-xl  border border-white/10 p-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item;

              return (
                <button
                  key={item}
                  onClick={() => setActive(item)}
                  className={`
                    relative px-5 py-2.5 rounded-full
                    text-sm font-medium transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#b8f225] text-black"
                        : "text-white/80 hover:text-white"
                    }
                  `}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <button
            className="
              hidden md:flex items-center gap-3
              rounded-full bg-[#b8f225]
              px-5 py-2
              font-semibold text-black
              transition-all duration-300
              hover:scale-105
              hover:bg-[#d0f64a]
            "
          >
            Contact Us

            <span
              className="
                flex h-8 w-8 items-center justify-center
                rounded-full bg-black
                transition-transform duration-300
                group-hover:rotate-45
              "
            >
              <ArrowUpRight
                size={14}
                className="text-[#b8f225]"
              />
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="relative md:hidden h-10 w-10"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`
                absolute left-2 top-3 h-0.5 w-6 bg-white
                transition-all duration-300
                ${menuOpen ? "rotate-45 translate-y-2" : ""}
              `}
            />

            <span
              className={`
                absolute left-2 top-5 h-0.5 w-6 bg-white
                transition-all duration-300
                ${menuOpen ? "opacity-0" : ""}
              `}
            />

            <span
              className={`
                absolute left-2 top-7 h-0.5 w-6 bg-white
                transition-all duration-300
                ${menuOpen ? "-rotate-45 -translate-y-2" : ""}
              `}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`
          md:hidden fixed inset-0 z-40
          bg-black/95 backdrop-blur-2xl
          transition-all duration-500
          ${
            menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      >
        <div className="flex h-full flex-col justify-center px-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActive(item);
                setMenuOpen(false);
              }}
              className={`
                py-5 text-left text-3xl font-semibold
                transition-colors duration-300
                ${
                  active === item
                    ? "text-[#b8f225]"
                    : "text-white"
                }
              `}
            >
              {item}
            </button>
          ))}

          <button
            className="
              mt-8 rounded-full
              bg-[#b8f225]
              px-6 py-4
              text-lg font-semibold
              text-black
            "
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}