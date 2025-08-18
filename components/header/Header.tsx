"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constants/navLinks/navLinks";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-51 bg-transparent">
      <div className="px-5 xl:px-0 max-w-[1180px] mx-auto relative">
        <nav
          className={`w-full px-4 py-4 flex justify-between items-center bg-[rgba(102,155,188,0.1)] backdrop-blur-3xl ${menuOpen ? "rounded-t-[20px]" : "rounded-[20px]"}`}
        >
          <p className="text-[#669BBC] font-bold text-xl pl-5">ADAM IZI</p>

          {/* Десктопное меню */}
          <ul className="hidden lg:flex gap-2.5">
            {navLinks.map((link) => (
              <li key={`${link.href}-${link.label}`}>
                <Link
                  className="font-normal text-base px-6 pb-3.5 pt-3 hover:text-[#730202]"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Кнопка бургера */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-black transition-transform duration-300 ease-in-out origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black transition-transform duration-300 ease-in-out origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
        {/* Мобильное меню */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full z-40">
            <div className="mx-auto max-w-[1180px] px-5 xl:px-0">
              <div className="w-full bg-[rgba(102,155,188,0.1)] backdrop-blur-3xl rounded-b-[20px] flex flex-col items-center py-4 px-4">
                <ul className="flex flex-col gap-4 w-full text-center">
                  {navLinks.map((link) => (
                    <li key={`${link.href}-${link.label}`}>
                      <Link
                        href={link.href}
                        className="block font-normal text-base px-6 py-3 hover:text-[#446F8B] transition"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
