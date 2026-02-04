"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Instagram, Youtube, Globe } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/content", label: "Content" }, // NEW consolidated content hub
  { href: "/events", label: "Events" },
  { href: "/brands", label: "Brands" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-red-600/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* --- LOGO --- */}
        <Link
          href="/"
          className="flex items-center space-x-3 group cursor-pointer"
        >
          <div className="w-12 h-12 bg-linear-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center font-black text-lg group-hover:scale-110 transition-transform shadow-lg shadow-red-600/40">
            M
          </div>
          <div>
            <h1 className="text-xl font-black text-white group-hover:text-red-500 transition-colors">
              MAGIK 
            </h1>
            <p className="text-xs text-gray-400">Mr Professional</p>
          </div>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-bold text-white hover:text-red-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* --- SOCIAL ICONS (Desktop) --- */}
        <div className="hidden md:flex lg:flex items-center space-x-4">
          <Link
            href="https://instagram.com/gk.magik_"
            target="_blank"
            className="hover:text-red-500 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </Link>
          <Link
            href="https://youtube.com/@djmagik254"
            target="_blank"
            className="hover:text-red-500 transition-colors"
          >
            <Youtube className="w-5 h-5" />
          </Link>
          <Link
            href="https://gkmagik.com"
            target="_blank"
            className="hover:text-red-500 transition-colors"
          >
            <Globe className="w-5 h-5" />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden ml-4 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      {menuOpen && (
        <div className="lg:hidden bg-black/95 border-t border-red-600/20 p-6 space-y-3">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-lg font-bold text-white hover:text-red-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
