"use client";

import { useState } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Ticket,
  Sparkles,
  Filter,
  ArrowRight,
} from "lucide-react";

// --------------------------------------------
// EVENT DATA (JSON-based, editable easily)
// --------------------------------------------

const eventCategories = ["All", "Festival", "Club", "Corporate", "Special"];

const upcomingEvents = [
  {
    title: "Creatives Unwind 2.0",
    date: "2026-02-28",
    location: "John Michuki Memorial Park, Nairobi",
    category: "Event",
    description:
      "A creative gathering in the heart of Nairobi.",
  },
  {
    title: "Twisted Vibes 3.0",
    date: "2026-02-14",
    location: "Kimbo, Nairobi",
    category: "Event",
    description:
      "A high energy Valentines night party.",
  },
];

const pastEvents = [
  {
    title: "Freshers Party",
    date: "2026-02-30",
    location: "KCA University, Nairobi",
    category: "Students Party",
  },
  {
    title: "Twisted Vibes 2.0",
    date: "2025-11-29",
    location: "Kastemil Gardens, Nairobi",
    category: "Event",
  },
  {
    title: "Creatives Unwind 1.0",
    date: "2026-10-10",
    location: "Karura Forest, Nairobi",
    category: "Event",
    description:
      "A hike and art adventure for creatives.",
  },
  {
    title: "Nairobi Showcase Day 1",
    date: "2025-03-27",
    location: "KODA , Westlands, Nairobi",
    category: "Showcase",
  },
  {
    title: "Nairobi Showcase Day 2",
    date: "2025-03-26",
    location: "KODA , Westlands, Nairobi",
    category: "Showcase",
  },
];

// --------------------------------------------
// COMPONENT
// --------------------------------------------

export default function EventsPage() {
  const [filter, setFilter] = useState("All");

  const filterEvents = (list: any[]) => {
    if (filter === "All") return list;
    return list.filter((ev) => ev.category === filter);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-28 px-6 pb-20">
      {/* =========================== */}
      {/* HEADER */}
      {/* =========================== */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-6xl md:text-7xl font-black mb-6">
          <span className="text-white">MAGIK</span>{" "}
          <span className="text-red-600">EVENTS</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Curated experiences blending music, culture, technology & emotion.
        </p>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {eventCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold border transition-all ${
                filter === cat
                  ? "bg-red-600 border-red-700"
                  : "border-white/20 hover:border-red-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* =========================== */}
      {/* UPCOMING EVENTS */}
      {/* =========================== */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-4xl font-black mb-10">
          <span className="text-white">UPCOMING</span>{" "}
          <span className="text-red-600">EVENTS</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {filterEvents(upcomingEvents).map((event, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-red-600 hover:bg-red-600/10 transition-all shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-red-500" />
                <span className="text-sm text-gray-300">
                  {new Date(event.date).toDateString()}
                </span>
              </div>

              <h3 className="text-2xl font-black mb-2">{event.title}</h3>

              <p className="text-gray-400 mb-4">{event.description}</p>

              <div className="flex items-center gap-2 text-gray-400 mb-6">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="px-4 py-1 text-xs rounded-full border border-red-500/40 text-red-400">
                  {event.category}
                </span>

                <button className="inline-flex items-center gap-2 px-5 py-2 bg-red-600 hover:bg-red-700 rounded-full text-sm font-bold transition-all">
                  <Ticket className="w-4 h-4" />
                  Get Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================== */}
      {/* PAST EVENTS */}
      {/* =========================== */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black mb-10">
          <span className="text-white">PAST</span>{" "}
          <span className="text-red-600">EVENTS</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {filterEvents(pastEvents).map((event, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-600 hover:bg-red-600/10 transition-all"
            >
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <Clock className="w-4 h-4" />
                {new Date(event.date).toDateString()}
              </div>

              <h3 className="text-xl font-black mb-2">{event.title}</h3>

              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                <MapPin className="w-4 h-4" />
                {event.location}
              </div>

              <span className="px-3 py-1 rounded-full border border-red-500/30 text-xs text-red-400">
                {event.category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================== */}
      {/* CTA SECTION */}
      {/* =========================== */}
      <section className="mt-32">
        <div className="max-w-5xl mx-auto text-center bg-linear-to-br from-red-600 to-red-900 p-16 rounded-3xl shadow-2xl">
          <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />

          <h2 className="text-4xl font-black text-white mb-4">
            BOOK THE MAGIK BRAND FOR YOUR NEXT EVENT
          </h2>

          <p className="text-white/80 mb-8 text-lg">
            Elevate your event with a multi-genre, high-energy architect.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-black hover:bg-gray-900 transition-all font-bold"
          >
            <Calendar className="w-5 h-5" />
            Request Booking
          </a>
        </div>
      </section>
    </div>
  );
}
