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
  // ===========================
  // DATA LAYERS
  // ===========================
  const stats = [
    { label: "YouTube", value: "129+", sublabel: "Subscribers", icon: Youtube },
    { label: "Instagram", value: "1.1K", sublabel: "Followers", icon: Instagram },
    { label: "Content", value: "27+", sublabel: "Videos", icon: TrendingUp },
    { label: "Events", value: "50+", sublabel: "Curated", icon: Users },
  ];

  const identityPillars = [
    {
      label: "The Artist",
      title: "DJ • Performer • Sonic Storyteller",
      body: "From Amapiano and Afrobeats to Hip-Hop and EDM, every set is designed as an emotional arc, not just a playlist.",
    },
    {
      label: "The Architect",
      title: "AI & Data-Driven Creative",
      body: "Blending software engineering, AI and data with culture to build the next wave of African entertainment products.",
    },
    {
      label: "The Curator",
      title: "Events & Culture Builder",
      body: "Designing nights, festivals and experiences that become core memories for the people who attend.",
    },
    {
      label: "The Founder",
      title: "VibeNation HQ & BraveTechnologies",
      body: "Building long-term platforms, not just moments — from live entertainment to tech ecosystems.",
    },
  ];

  const services = [
    {
      icon: Music,
      title: "Live DJ Performances",
      desc: "Signature genre-fluid sets engineered to ignite any room — festivals, clubs, campuses, corporate, and private events.",
      highlight: "Multi-genre, multi-era, energy-tuned for your crowd.",
    },
    {
      icon: Radio,
      title: "A&R + Artist Development",
      desc: "Helping emerging African artists refine their sound, strategy, and catalogue for global-ready impact.",
      highlight: "Ear for talent, structure for growth.",
    },
    {
      icon: Zap,
      title: "AI-Driven Creative Strategy",
      desc: "Using AI and data to supercharge content, distribution, and decisions for artists, brands and events.",
      highlight: "Where tech meets intuition and culture.",
    },
    {
      icon: Calendar,
      title: "Event Architecture & Curation",
      desc: "From concept to line-up to execution: designing unforgettable, scalable cultural experiences.",
      highlight: "Not just events — ecosystems.",
    },
  ];

  const contentHighlights = [
    {
      label: "Latest Drop",
      title: "Amapiano Heat Set — Nairobi Night Edition",
      desc: "A high-energy journey through Amapiano, Afro-house and club heaters crafted for late nights.",
      cta: "Watch on YouTube",
      href: "https://youtube.com/@djmagik254",
      icon: Youtube,
    },
    {
      label: "Most Booked Vibe",
      title: "Campus & Young Professional Nights",
      desc: "Curated experiences for Gen Z & young professionals who want both nostalgia and new sounds.",
      cta: "View Events",
      href: "/events",
      icon: Calendar,
    },
    {
      label: "Currently Building",
      title: "VibeNation HQ — Africa’s Entertainment OS",
      desc: "A headquarters for live experiences, data, creators and brands across the continent.",
      cta: "Explore the Ecosystem",
      href: "/brands",
      icon: Zap,
    },
  ];

  const testimonials = [
    {
      quote:
        "He doesn’t just play music — he engineers the entire energy of the night.",
      name: "Sarah K.",
      role: "Corporate Event Lead",
    },
    {
      quote:
        "Our best-performing resident DJ. Always evolving, always in tune with the crowd.",
      name: "Mike T.",
      role: "Club Manager",
    },
    {
      quote:
        "From soundcheck to last track, everything felt intentional. A real professional.",
      name: "Linda M.",
      role: "Wedding Client",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* ======================================================
          1. HERO SECTION — Identity, Positioning, CTA
      ======================================================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-20">
        {/* Background Layer */}
        <div className="absolute inset-0 bg-linear-to-b from-red-950/40 via-black to-black opacity-95" />

        <div className="relative z-20 max-w-6xl mx-auto text-center">
          {/* Micro-tagline */}
          <div className="inline-flex items-center mb-6 px-6 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-sm backdrop-blur-md tracking-wide">
            <Sparkles className="w-4 h-4 mr-2 text-red-500" />
            <span>
              DJ • Cultural Curator • Techpreneur
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-7xl md:text-[8.5rem] font-black leading-[0.85] mb-10 drop-shadow-[0_0_40px_rgba(255,0,0,0.45)]">
            <span className="block text-white">IT'S</span>
            <span className="block bg-linear-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent">
              MAGIK
            </span>
          </h1>

          <p className="text-xl md:text-3xl text-gray-300 mb-4 tracking-wide">
            MR PROFESSIONAL · GEN Z · AFRICAN INNOVATOR
          </p>

          <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            A multi-dimensional creator blending
            <span className="text-red-500 font-bold"> sound</span>,
            <span className="text-red-500 font-bold"> technology</span>, and
            <span className="text-red-500 font-bold"> enterprise</span> to shape
            Africa&apos;s next wave of entertainment, culture, and business.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <a
              href="https://youtube.com/@djmagik254"
              target="_blank"
              rel="noopener noreferrer"
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

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-linear-to-b from-white/10 to-white/5 border border-red-600/30 hover:border-red-600 hover:bg-red-600/10 backdrop-blur-xl transition-all"
                >
                  <Icon className="w-7 h-7 text-red-500 mx-auto mb-4" />
                  <div className="text-4xl font-extrabold text-center">
                    {stat.value}
                  </div>
                  <div className="text-sm text-center text-red-500 tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-xs text-center text-gray-400">
                    {stat.sublabel}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          2. IDENTITY STRIP — Artist x Architect x Curator x Founder
      ======================================================= */}
      <section className="py-20 px-6 bg-linear-to-b from-black via-red-950/10 to-black border-t border-white/5">
        <div className="max-w-7xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-3">
                More than a DJ.
              </h2>
              <p className="text-gray-400 text-sm md:text-base max-w-xl">
                MAGIK is a full-stack creative: a{" "}
                <span className="text-red-400 font-semibold">music mind</span>, a{" "}
                <span className="text-red-400 font-semibold">tech brain</span>, and an{" "}
                <span className="text-red-400 font-semibold">
                  entrepreneur.
                </span>{" "}
                building long-term value in African entertainment.
              </p>
            </div>
            <p className="text-gray-500 text-xs md:text-sm max-w-sm">
              &quot;I don&apos;t chase moments. I create them — and then I build
              the platforms that let those moments scale.&quot;
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {identityPillars.map((pillar, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-black border border-white/10 hover:border-red-600 transition-all"
            >
              <div className="text-xs font-semibold text-red-400 mb-2 tracking-wide uppercase">
                {pillar.label}
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">
                {pillar.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================
          3. SERVICES — What You Can Book / Hire / Partner For
      ======================================================= */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-white">WHAT I</span>{" "}
            <span className="text-red-600">DO</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-red-600 to-transparent mx-auto mb-6" />
          <p className="text-gray-400 text-lg md:text-xl tracking-wide max-w-2xl mx-auto">
            Precision, intention, and energy — whether it&apos;s a single night,
            a brand campaign, or a long-term ecosystem play.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="p-8 bg-black rounded-2xl border border-white/10 hover:border-red-600 transition-all group cursor-pointer shadow-lg shadow-red-600/5 hover:shadow-red-600/25 flex flex-col h-full"
              >
                <Icon className="w-10 h-10 text-red-600 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black mb-3 group-hover:text-red-500 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 flex-1 group-hover:text-gray-300">
                  {s.desc}
                </p>
                <div className="text-xs text-red-400 flex items-center gap-1">
                  <ArrowRight className="w-3 h-3" />
                  <span>{s.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ======================================================
          4. CONTENT / CURRENT FOCUS STRIP
      ======================================================= */}
      <section className="py-24 px-6 bg-linear-to-b from-black via-red-950/10 to-black border-t border-white/5">
        <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              What I&apos;m putting into the world.
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl">
              From live sets to long-term ventures, each move is part of a
              larger roadmap for African entertainment.
            </p>
          </div>
          <p className="text-xs md:text-sm text-gray-500 max-w-sm">
            Built at the intersection of{" "}
            <span className="text-red-400">campus culture</span>,{" "}
            <span className="text-red-400">tech hubs</span>, and{" "}
            <span className="text-red-400">Nairobi nightlife.</span>
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {contentHighlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group p-7 rounded-2xl bg-black border border-white/10 hover:border-red-600 transition-all cursor-pointer flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-red-400 tracking-wide uppercase">
                    {item.label}
                  </span>
                  <Icon className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-lg font-black mb-2 group-hover:text-red-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 flex-1">
                  {item.desc}
                </p>
                <div className="text-xs text-red-400 flex items-center gap-1 mt-2">
                  <ArrowRight className="w-3 h-3" />
                  <span>{item.cta}</span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* ======================================================
          5. SOCIAL PROOF / MICRO TESTIMONIALS
      ======================================================= */}
      <section className="py-24 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              What the room says after the lights come on.
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-xl">
              Real words from real clients and collaborators across{" "}
              clubs, corporate events, weddings and culture-first projects.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Headphones className="w-4 h-4 text-red-500" />
            <span>Built on consistency, professionalism &amp; curation.</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-red-600 transition-all"
            >
              <div className="text-red-500 text-2xl mb-3">“</div>
              <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                {t.quote}
              </p>
              <div className="text-xs text-gray-400">
                <span className="font-semibold text-white">{t.name}</span>{" "}
                · {t.role}
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA strip */}
        <div className="max-w-7xl mx-auto mt-16 rounded-2xl bg-linear-to-r from-red-600 via-red-700 to-red-800 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black mb-2">
              Ready to engineer your next experience?
            </h3>
            <p className="text-sm md:text-base text-white/80 max-w-xl">
              Whether it&apos;s a festival stage, intimate gathering, brand launch,
              or campus takeover — let&apos;s build something that feels unforgettable
              in the moment and strategic in the long term.
            </p>
          </div>
          <a
            href="/contact"
            className="px-10 py-4 bg-black rounded-full font-bold text-sm md:text-base hover:bg-gray-900 transition-all inline-flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" />
            Book THE MAGIK PRINCE
          </a>
        </div>
      </section>
    </div>
  );
}
