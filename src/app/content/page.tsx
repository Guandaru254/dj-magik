"use client";

import { useState } from "react";
import contentData from "@/data/content.json";
import { Play } from "lucide-react";

export default function ContentPage() {
  const [category, setCategory] = useState("All");
  const [platform, setPlatform] = useState("All");

  const items = contentData.items.filter((item) => {
    const catMatch = category === "All" || item.category === category;
    const platMatch = platform === "All" || item.platform === platform;
    return catMatch && platMatch;
  });

  return (
    <div className="min-h-screen bg-black text-white px-6 py-28">
      
      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-7xl font-black mb-4">
          <span className="text-white">MY </span>
          <span className="text-red-600">CONTENT</span>
        </h1>
        <p className="text-gray-400 text-xl mt-4 max-w-2xl mx-auto">
          Explore mixes, albums, artist tapes and creative work by 
          <span className="text-red-500 font-bold"> MAGIK.</span>
        </p>
      </div>

      {/* FILTERS */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 mb-12">
        
        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-black border border-red-600/40 px-6 py-3 rounded-xl text-white"
        >
          {contentData.categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        {/* Platform Filter */}
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="bg-black border border-red-600/40 px-6 py-3 rounded-xl text-white"
        >
          {contentData.platforms.map((plat) => (
            <option key={plat}>{plat}</option>
          ))}
        </select>

      </div>

      {/* CONTENT GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            className="group bg-white/5 border border-white/10 hover:border-red-600 rounded-2xl overflow-hidden transition-all cursor-pointer"
          >
            <div className="relative aspect-video bg-black">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
              />
              <div className="absolute bottom-3 right-3 bg-black/80 text-xs px-2 py-1 rounded">
                {item.duration}
              </div>
              <Play className="absolute inset-0 m-auto text-white w-16 h-16 opacity-0 group-hover:opacity-100 transition" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-black mb-2 group-hover:text-red-500 transition">
                {item.title}
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>{item.platform}</span>
                <span>{item.category}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
