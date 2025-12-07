"use client";

import {
  Sparkles,
  Play,
  Calendar,
  TrendingUp,
  Youtube,
  Instagram,
  Users,
  Zap,
  Music,
  Radio,
  Headphones,
  Award,
  ArrowRight,
} from "lucide-react";

export default function HomePage() {
  // ============================
  //  DATA
  // ============================
  const stats = [
    { label: "YouTube", value: "129+", sublabel: "Subscribers", icon: Youtube },
    { label: "Instagram", value: "1.1K", sublabel: "Followers", icon: Instagram },
    { label: "Content", value: "27+", sublabel: "Videos", icon: TrendingUp },
    { label: "Events", value: "50+", sublabel: "Curated", icon: Users },
  ];

  const services = [
    {
      icon: Music,
      title: "Live DJ Performances",
      desc: "Signature genre-fluid sets engineered to ignite any crowd.",
    },
    {
      icon: Radio,
      title: "A&R + Artist Development",
      desc: "Refining raw African talent into global-ready creative powerhouses.",
    },
    {
      icon: Zap,
      title: "AI-Driven Creative Strategy",
      desc: "Where data and intuition fuse to shape the future of music innovation.",
    },
    {
      icon: Calendar,
      title: "Event Architecture",
      desc: "Designing unforgettable cultural experiences, ecosystems & movements.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white">

      {/* ======================================================
          HERO SECTION — Cinematic, Strong Brand Identity
      ======================================================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20">
        
        {/* Background Layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/40 via-black to-black opacity-95" />

        {/* Center Container */}
        <div className="relative z-20 max-w-6xl mx-auto text-center">

          {/* Micro-tagline */}
          <div className="inline-flex items-center mb-6 px-6 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-sm backdrop-blur-md tracking-wide">
            <Sparkles className="w-4 h-4 mr-2 text-red-500" />
            <span>DJ • A&R • AI Architect • Cultural Engineer</span>
          </div>

          {/* Main Title */}
          <h1 className="text-7xl md:text-[9rem] font-black leading-[0.85] mb-10 drop-shadow-[0_0_40px_rgba(255,0,0,0.45)]">
            <span className="block text-white">THE MAGIK</span>
            <span className="block bg-linear-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent">
              PRINCE
            </span>
          </h1>

          <p className="text-xl md:text-3xl text-gray-300 mb-6 tracking-wide">
            MR. PROFESSIONAL
          </p>

          <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            A multi-dimensional creator blending 
            <span className="text-red-500 font-bold"> sound</span>, 
            <span className="text-red-500 font-bold"> technology</span>, and 
            <span className="text-red-500 font-bold"> enterprise</span>{" "}
            into one unified African creative future.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <a
              href="https://youtube.com/@djmagik254"
              target="_blank"
              className="group flex items-center gap-3 px-10 py-5 rounded-full bg-linear-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 transition-all font-bold text-lg hover:scale-105 shadow-xl shadow-red-600/40"
            >
              <Play className="w-6 h-6" />
              Watch Latest Set
            </a>

            <a
              href="/events"
              className="px-10 py-5 border-2 border-white hover:bg-white hover:text-black rounded-full font-bold text-lg transition-all flex items-center gap-2"
            >
              <Calendar className="w-6 h-6" />
              View Events
            </a>
          </div>

          {/* Stats — now more premium, spaced out, elegant */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-red-600/30 hover:border-red-600 hover:bg-red-600/10 backdrop-blur-xl transition-all"
                >
                  <Icon className="w-7 h-7 text-red-500 mx-auto mb-4" />
                  <div className="text-4xl font-extrabold text-center">{stat.value}</div>
                  <div className="text-sm text-center text-red-500 tracking-wider">{stat.label}</div>
                  <div className="text-xs text-center text-gray-400">{stat.sublabel}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          SERVICES — Sharper, cleaner, luxury branding
      ======================================================= */}
      <section className="py-32 px-6 bg-linear-to-b from-black via-red-950/10 to-black">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-6xl font-black mb-6">
            <span className="text-white">WHAT I</span>{" "}
            <span className="text-red-600">DO</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-red-600 to-transparent mx-auto mb-6" />
          <p className="text-gray-400 text-xl tracking-wide">
            Precision. Impact. Multidimensional mastery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="p-10 bg-black rounded-2xl border border-white/10 hover:border-red-600 transition-all group cursor-pointer shadow-lg shadow-red-600/5 hover:shadow-red-600/20"
              >
                <Icon className="w-12 h-12 text-red-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black mb-4 group-hover:text-red-500 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ======================================================
          CTA — Stronger, clearer, more powerful message
      ======================================================= */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center bg-linear-to-br from-red-600 via-red-700 to-red-800 rounded-3xl p-20 shadow-2xl">
          <Award className="w-20 h-20 mx-auto text-white mb-8" />

          <h2 className="text-5xl font-black text-white mb-6 tracking-tight">
            READY FOR THE MAGIK?
          </h2>

          <p className="text-2xl text-white/90 mb-10 leading-relaxed">
            Book THE MAGIK PRINCE for your next event, experience or cultural moment.
          </p>

          <a
            href="/contact"
            className="px-12 py-5 bg-black rounded-full font-bold text-lg hover:bg-gray-900 transition-all inline-flex items-center gap-3"
          >
            <Calendar className="w-6 h-6" /> Book Now
          </a>
        </div>
      </section>
    </div>
  );
}
