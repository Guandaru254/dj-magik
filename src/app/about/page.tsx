"use client";

import {
  Sparkles,
  ArrowRight,
  Star,
  Zap,
  Music,
  Radio,
  Calendar,
  Cpu,
  Globe2,
  Users,
  Mic2,
  Headphones,
  BookOpen,
  MapPin,
  Activity,
} from "lucide-react";

export default function AboutPage() {
  const identityPillars = [
    {
      label: "Multi-Hyphenate",
      title: "DJ · Technologist · Entrepreneur",
      body: "I don’t separate the lanes. I bring software engineering discipline, creative instinct, and business strategy into every project.",
    },
    {
      label: "African First",
      title: "Rooted in the Continent",
      body: "I’m obsessed with African sound, story, and opportunity—building systems that turn our culture into platforms, not just moments.",
    },
    {
      label: "Future-Focused",
      title: "AI & Data Native",
      body: "From DJ sets to live experiences, I’m always thinking about signals, systems, and how data can amplify human creativity.",
    },
  ];

  const capabilities = [
    {
      icon: Music,
      title: "Live DJ Performances",
      body: "Genre-fluid, high-energy sets built around crowd psychology, cultural context, and emotional flow.",
    },
    {
      icon: Radio,
      title: "A&R & Artist Development",
      body: "Scouting talent, helping artists refine identity, sound, and strategy for long-term growth.",
    },
    {
      icon: Calendar,
      title: "Event & Culture Curation",
      body: "From campus experiences to festival concepts—designing spaces people remember and talk about.",
    },
    {
      icon: Cpu,
      title: "AI & Creative Systems",
      body: "Designing workflows where AI accelerates creativity instead of replacing it—mix curation, insights, and tools.",
    },
    {
      icon: Globe2,
      title: "Digital Strategy",
      body: "Turning content, platforms, and communities into long-term ecosystems, not just viral spikes.",
    },
    {
      icon: Users,
      title: "Community & Ecosystems",
      body: "Building bridges between artists, brands, tech, and audiences in the African entertainment landscape.",
    },
  ];

  const ventures = [
    {
      title: "VibeNation HQ",
      tag: "Live Entertainment & Platforms",
      body: "A long-term project to build the headquarters of African entertainment—events, experiences, and digital platforms under one ecosystem.",
      meta: "Vision horizon: 2030 · Ecosystem, not just events.",
    },
    {
      title: "BraveTechnologies",
      tag: "Innovation Studio",
      body: "A technology company experimenting at the intersection of culture, data, and AI—building tools, products, and systems for creatives and brands.",
      meta: "Infrastructure for the future of African creativity.",
    },
    {
      title: "The Magik Brand",
      tag: "Artist & Creative ",
      body: "The personal brand that connects it all—DJ, strategist, and curator operating as one multi-dimensional identity.",
      meta: "The human interface to all the work.",
    },
  ];

  const timeline = [
    {
      year: "Early Years",
      title: "Curiosity, Sound & Screens",
      body: "Grew up obsessed with sound and systems—music on one hand, computers on the other. Noticed early that I loved both equally.",
    },
    {
      year: "Campus Era",
      title: "First Steps into Live Entertainment",
      body: "From just attending events to deeply observing how they work—what fails, what connects, what feels magical in the room.",
    },
    {
      year: "The Decision",
      title: "Choosing to Create, Not Just Consume",
      body: "Started DJing, learning the craft, reading the crowd, and understanding music across genres, eras, and cultures.",
    },
    {
      year: "Perform Music Incubator",
      title: "Industry-Level Exposure",
      body: "Joined the Perform Music Incubator by Santuri / Mastercard, met real industry professionals, and saw how big the opportunity truly is.",
    },
    {
      year: "VibeNation HQ",
      title: "Building the Blueprint",
      body: "Realized that live entertainment in Africa needs better systems. VibeNation HQ was born as a long-term HQ, not just another event brand.",
    },
    {
      year: "Now",
      title: "The Magik Phase",
      body: "Balancing software engineering, AI, DJing, and entrepreneurship to build something bigger than a single role or title.",
    },
  ];

  const testimonials = [
    {
      quote:
        "He doesn’t just play music. He understands how to design the energy of an entire night.",
      name: "Event Organizer",
      role: "Campus & Corporate Events",
    },
    {
      quote:
        "We came in for a DJ. We left with someone who thinks about the brand, the audience, and the future.",
      name: "Creative Director",
      role: "Brand Collaboration",
    },
    {
      quote:
        "There’s a rare mix of discipline, curiosity, and ambition in how he approaches both tech and music.",
      name: "Mentor",
      role: "Tech & Innovation",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* HERO / INTRO ------------------------------------------------ */}
      <section className="relative px-6 pt-28 pb-24">
        <div className="absolute inset-0 bg-linear-to-b from-red-950/40 via-black to-black" />
        <div className="relative max-w-6xl mx-auto z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/30 mb-6">
            <Sparkles className="w-4 h-4 text-red-500" />
            <span className="text-xs md:text-sm text-gray-200">
              MAGIK  · DJ · Culture Curator · Techpreneur
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block text-gray-300 text-lg md:text-xl mb-2">
              ABOUT
            </span>
            <span className="block">MAGIK </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-4">
            I am <span className="text-red-500 font-semibold">MAGIK </span>, a
            multidimensional creative and entrepreneur operating at the intersection of{" "}
            <span className="font-semibold text-red-400">music</span>,{" "}
            <span className="font-semibold text-red-400">technology</span>, and{" "}
            <span className="font-semibold text-red-400">business</span>.
          </p>

          <p className="text-sm md:text-base text-gray-400 max-w-3xl mb-6">
            Professionally, I&apos;m a software engineer leaning into data-driven 
            trends in African ecosystems. Creatively, I&apos;m a DJ, curator, and future
            music entrepreneur. My goal is simple:{" "}
            <span className="text-gray-200 font-semibold">
              build systems and experiences that inspire the next generation of African creatives &amp; founders.
            </span>
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
              <Activity className="w-3 h-3 text-red-500" />
              <span>Impact over aesthetics</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
              <Cpu className="w-3 h-3 text-red-500" />
              <span>Data aware</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
              <Headphones className="w-3 h-3 text-red-500" />
              <span>Obsessed with sound &amp; story</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/content"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-sm md:text-base font-semibold transition-all"
            >
              <BookOpen className="w-4 h-4" />
              Explore the work
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black text-sm md:text-base font-semibold transition-all"
            >
              <ArrowRight className="w-4 h-4" />
              Talk collaborations
            </a>
          </div>
        </div>
      </section>

      {/* IDENTITY PILLARS ------------------------------------------- */}
      <section className="px-6 py-16 border-t border-white/5 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-black mb-2">
                Identity in Three Dimensions
              </h2>
            </div>
            <p className="text-xs md:text-sm text-gray-500 max-w-sm">
              My north star:{" "}
              <span className="text-gray-200">
                build things that outlive moments—platforms, ecosystems, and experiences
                that keep giving value.
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {identityPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-600 hover:bg-red-600/5 transition-all"
              >
                <div className="text-xs font-semibold text-red-400 mb-2 uppercase tracking-wide">
                  {pillar.label}
                </div>
                <h3 className="text-lg md:text-xl font-black mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-300">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORIGIN STORY / TIMELINE ----------------------------------- */}
      <section className="px-6 py-20 bg-linear-to-b from-black via-red-950/10 to-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 mb-12">
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-black mb-3">
                From Curiosity to Blueprint
              </h2>
              <p className="text-sm md:text-base text-gray-300 mb-4">
                I never saw music and technology as separate worlds.
              </p>
              <p className="text-sm md:text-base text-gray-400">
                Early on, I was that kid who was equally excited about{" "}
                <span className="text-gray-200">new sound</span> and{" "}
                <span className="text-gray-200">new software</span>. Campus life
                amplified that—events, nightlife, and community shaped how I look at
                entertainment:
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-red-500" />
                  <span>
                    Live events revealed what works, what fails, and what feels truly
                    magical when people share space.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-red-500" />
                  <span>
                    Learning to DJ gave me a new lens on culture: not just playing
                    songs—but{" "}
                    <span className="text-gray-100">
                      architecting the emotional journey of a room.
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-red-500" />
                  <span>
                    Getting into tech showed me how much
                    potential there is to build better systems for creatives in Africa.
                  </span>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/2">
              <div className="rounded-2xl bg-black/60 border border-white/10 p-6 md:p-7">
                <div className="flex items-center gap-2 mb-4">
                  <Mic2 className="w-5 h-5 text-red-500" />
                  <span className="text-xs font-semibold text-red-400 uppercase tracking-wide">
                    THE JOURNEY
                  </span>
                </div>
                <div className="space-y-5">
                  {timeline.map((item, idx) => (
                    <div key={idx} className="border-l border-white/15 pl-4 relative">
                      <div className="w-2 h-2 rounded-full bg-red-500 absolute -left-1 top-1" />
                      <div className="text-[11px] uppercase tracking-wide text-gray-500 mb-0.5">
                        {item.year}
                      </div>
                      <div className="text-sm font-semibold text-gray-100">
                        {item.title}
                      </div>
                      <p className="text-xs text-gray-400 mt-1">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quote strip */}
          <div className="mt-6 rounded-2xl border border-red-600/40 bg-red-950/30 px-5 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <p className="text-sm md:text-base text-gray-100">
            </p>
            <div className="flex items-center gap-2 text-xs text-red-300">
              <Star className="w-4 h-4 fill-red-400 text-red-400" />
              <span>THE MAGIK BRAND</span>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES GRID ----------------------------------------- */}
      <section className="px-6 py-20 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-black mb-2">
                What I Actually Do
              </h2>
              <p className="text-sm md:text-base text-gray-400 max-w-xl">
                Beyond titles and aesthetics—these are the actual levers I pull in
                music, tech, and business.
              </p>
            </div>
            <p className="text-xs md:text-sm text-gray-500 max-w-sm">
              Think of this as my operating system: a set of skills that compound over
              time and across projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-600 hover:bg-red-600/5 transition-all"
                >
                  <Icon className="w-7 h-7 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{cap.title}</h3>
                  <p className="text-sm text-gray-300">{cap.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VENTURES / ECOSYSTEM -------------------------------------- */}
      <section className="px-6 py-20 bg-linear-to-b from-black via-red-950/10 to-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-black mb-2">
                The Ecosystem I&apos;m Building
              </h2>
              <p className="text-sm md:text-base text-gray-400 max-w-xl">
                Magik isn&apos;t just a DJ brand. It&apos;s one node in a
                growing ecosystem of projects designed to serve African creatives and
                audiences.
              </p>
            </div>
            <p className="text-xs md:text-sm text-gray-500 max-w-sm">
              By 2030, the goal is clear:{" "}
              <span className="text-gray-200 font-semibold">
                VibeNinjas HQ as a true HQ for African entertainment.
              </span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {ventures.map((v, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-black/70 border border-white/10 hover:border-red-600 transition-all"
              >
                <div className="text-[11px] uppercase tracking-wide text-red-400 mb-1">
                  {v.tag}
                </div>
                <h3 className="text-lg md:text-xl font-black mb-2">{v.title}</h3>
                <p className="text-sm text-gray-300 mb-3">{v.body}</p>
                <p className="text-xs text-gray-500">{v.meta}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-5 md:px-7 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <p className="text-sm text-gray-200 max-w-xl">
              If you&apos;re a{" "}
              <span className="text-red-400 font-semibold">
                brand, creative, or founder
              </span>{" "}
              who sees yourself in this vision, I&apos;m always open to building
              things that don&apos;t exist yet.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-xs font-semibold transition-all"
            >
              <MapPin className="w-4 h-4" />
              Start a conversation
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS ---------------------------------------------- */}
      <section className="px-6 py-20 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-red-500" />
            <span className="text-xs font-semibold text-red-400 uppercase tracking-wide">
              HOW PEOPLE DESCRIBE THE WORK
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-600 transition-all"
              >
                <p className="text-sm text-gray-200 italic mb-4">“{t.quote}”</p>
                <div className="text-xs text-gray-400">
                  <div className="font-semibold text-gray-100">{t.name}</div>
                  <div>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
