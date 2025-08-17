"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constants/navLinks/navLinks";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-51 px-5 xl:px-0">
      <nav
        className={`relative max-w-[1180px] mx-auto px-4 py-4 flex justify-between items-center bg-[rgba(102,155,188,0.1)] backdrop-blur-3xl ${menuOpen ? "rounded-t-[20px]" : "rounded-[20px]"}`}
      >
        <p className="text-[#669BBC] font-bold text-xl pl-5">ADAM IZI</p>

        {/* Десктопное меню */}
        <ul className="hidden md:flex gap-2.5">
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
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
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

        {/* Мобильное меню */}
        {menuOpen && (
          <div
            className="absolute left-0 top-full w-full bg-[rgba(102,155,188,0.1)] backdrop-blur-3xl rounded-b-[20px] 
                       flex flex-col items-center py-4 z-40 px-2"
          >
            <ul className="flex flex-col gap-4 w-full max-w-[400px] text-center">
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
        )}
      </nav>
    </header>
  );
}
