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
    title: "VibeNation Festival: Nairobi Takeover",
    date: "2024-12-15",
    location: "Uhuru Gardens, Nairobi",
    category: "Festival",
    description:
      "A full-scale culture and music experience curated by THE MAGIK PRINCE.",
  },
  {
    title: "Corporate Tech Summit Afterparty",
    date: "2024-12-04",
    location: "Westlands, Nairobi",
    category: "Corporate",
    description:
      "A premium sonic experience designed for innovators & founders.",
  },
  {
    title: "Magik Prince Residency Night",
    date: "2024-12-20",
    location: "Kilimani, Nairobi",
    category: "Club",
    description:
      "High-energy multi-genre set. Afro • Amapiano • EDM • Hip Hop.",
  },
  {
    title: "Christmas Rave Experience",
    date: "2024-12-24",
    location: "Karen, Nairobi",
    category: "Special",
    description:
      "A December celebration of sound, culture, and festive energy.",
  },
];

const pastEvents = [
  {
    title: "Amapiano Block Party",
    date: "2024-10-10",
    location: "The Alchemist, Nairobi",
    category: "Festival",
  },
  {
    title: "StartUp Grind Afterparty",
    date: "2024-09-01",
    location: "Nairobi CBD",
    category: "Corporate",
  },
  {
    title: "Rooftop Sunset Sessions",
    date: "2024-08-14",
    location: "Lavington, Nairobi",
    category: "Club",
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
            BOOK THE MAGIK PRINCE
          </h2>

          <p className="text-white/80 mb-8 text-lg">
            Elevate your event with a multi-genre, high-energy sonic architect.
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
