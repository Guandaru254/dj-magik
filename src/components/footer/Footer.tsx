"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Youtube, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-red-600/20 py-12 px-6 bg-black/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* LEFT SIDE */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 hover:text-white transition-colors">
              © {new Date().getFullYear()} THE MAGIK PRINCE. All rights reserved.
            </p>

            <p className="text-xs text-gray-500 mt-2">
              VibeNation HQ · BraveTechnologies · Culture &amp; Code
            </p>

            <p className="text-xs text-gray-500 mt-2">
              Powered by{" "}
              <Link
                href="https://bravetechnologies.co.ke"
                target="_blank"
                className="text-red-400 hover:text-red-300 font-semibold"
              >
                Brave Technologies Ltd
              </Link>
            </p>
          </div>

          {/* RIGHT SIDE ICONS */}
          <div className="flex items-center space-x-6">
            <Link
              href="https://instagram.com/gk.magik_"
              target="_blank"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>

            <Link
              href="https://youtube.com/@djmagik254"
              target="_blank"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </Link>

            <Link
              href="https://gkmagik.com"
              target="_blank"
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <Globe className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
