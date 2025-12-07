"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { brands } from "@/lib/data/brands";

export default function BrandsPage() {
  return (
    <div className="text-white min-h-screen pt-32 px-6 pb-32">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-6xl font-black mb-4">
          THE <span className="text-red-600">MAGIK ECOSYSTEM</span>
        </h1>

        <p className="text-gray-400 text-lg">
          A unified network of brands working together to shape Africa’s
          entertainment future — through music, technology & culture.
        </p>
      </div>

      {/* Brand Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {brands.map((b) => (
          <div
            key={b.id}
            className="bg-black/40 border border-white/10 hover:border-red-600 rounded-2xl overflow-hidden transition-all group"
          >
            {/* Image */}
            <div className="relative w-full h-52 bg-black">
              <Image
                src={b.image}
                alt={b.name}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition-all"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <p className="text-xs text-red-400 font-semibold mb-1">
                {b.role.toUpperCase()}
              </p>

              <h2 className="text-2xl font-black text-white mb-3 group-hover:text-red-500 transition-colors">
                {b.name}
              </h2>

              <p className="text-gray-300 text-sm mb-4">{b.tagline}</p>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {b.description}
              </p>

              {/* Focus Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {b.focus.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs border border-red-600/40 rounded-full text-red-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={b.url}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-bold text-red-500 group-hover:underline"
              >
                Explore {b.name}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="mt-32 max-w-4xl mx-auto text-center p-12 rounded-3xl bg-red-700/10 border border-red-800/40 backdrop-blur-md">
        <h2 className="text-3xl font-black mb-4">Collaborate With The Ecosystem</h2>

        <p className="text-gray-400 mb-8 text-sm md:text-base max-w-2xl mx-auto">
          If your brand wants to plug into music, culture, AI or creative tech —
          let's architect something iconic together.
        </p>

        <a
          href="/contact"
          className="px-10 py-4 bg-red-600 rounded-full hover:bg-red-700 transition-all font-bold"
        >
          Start a Partnership
        </a>
      </div>
    </div>
  );
}
