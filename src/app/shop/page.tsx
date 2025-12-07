"use client";

import { useMemo, useState } from "react";
import {
  ShoppingBag,
  Shirt,
  Ticket,
  Music,
  Headphones,
  Zap,
  Star,
  Filter,
  Search,
  ArrowUpDown,
  Globe2,
} from "lucide-react";

type Category = "all" | "merch" | "access" | "experiences" | "digital";
type Availability = "all" | "in-stock" | "preorder" | "coming-soon";
type PriceTier = "access" | "standard" | "premium";

interface ShopItem {
  id: string;
  title: string;
  price: string;
  priceTier: PriceTier;
  category: Category;
  tag: string;
  description: string;
  highlight?: string;
  status: Availability;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  locationTag?: string; // e.g. "Nairobi, Kenya"
  url?: string; // future checkout / link
}

const PRODUCTS: ShopItem[] = [
  {
    id: "magik-tee-blackout",
    title: "MAGIK PRINCE Tee — Blackout Edition",
    price: "KES 2,500",
    priceTier: "standard",
    category: "merch",
    tag: "Streetwear",
    description:
      "Premium heavyweight black tee with subtle THE MAGIK PRINCE chest print. Designed for Nairobi nights, studio days, and festival runs.",
    highlight: "Designed for Kenyan nightlife.",
    status: "preorder",
    icon: Shirt,
    locationTag: "Nairobi, Kenya",
  },
  {
    id: "vibenation-hoodie",
    title: "VibeNation HQ Hoodie — Night Shift",
    price: "KES 4,500",
    priceTier: "premium",
    category: "merch",
    tag: "VibeNation",
    description:
      "Ultra-soft fleece hoodie built for late-night sessions, rooftop events, and cold Limuru mornings after the show.",
    highlight: "Limited drop for core supporters.",
    status: "coming-soon",
    icon: ShoppingBag,
    locationTag: "Kenya-wide",
  },
  {
    id: "magik-cap",
    title: "MAGIK Cap — Frequency Edition",
    price: "KES 1,800",
    priceTier: "access",
    category: "merch",
    tag: "Headwear",
    description:
      "Curved brim cap with embroidered sigil. Low-key branding, high-key energy. Perfect for Nairobi mat rides & campus hangs.",
    status: "in-stock",
    icon: Headphones,
    locationTag: "Nairobi pickup / Kenya delivery",
  },
  {
    id: "exclusive-usb",
    title: "Exclusive Mix USB — Nairobi Sessions",
    price: "KES 3,000",
    priceTier: "standard",
    category: "digital",
    tag: "Collector’s Item",
    description:
      "Curated mixes recorded live in Nairobi: amapiano, afrobeats, hip-hop, and experimental blends you won’t find online.",
    highlight: "For true heads & collectors.",
    status: "preorder",
    icon: Music,
    locationTag: "Ships across Kenya",
  },
  {
    id: "vip-pass",
    title: "MAGIK VIP Season Access",
    price: "KES 12,000+",
    priceTier: "premium",
    category: "access",
    tag: "Access",
    description:
      "Priority entry, faster queues, and curated experiences at selected events where THE MAGIK PRINCE is performing or curating.",
    highlight: "Built for heavy supporters & industry heads.",
    status: "coming-soon",
    icon: Ticket,
    locationTag: "Nairobi nightlife",
  },
  {
    id: "sound-coaching",
    title: "1:1 DJ & Sound Coaching Session",
    price: "KES 6,500",
    priceTier: "premium",
    category: "experiences",
    tag: "Education",
    description:
      "A focused 90-minute session in Nairobi or online covering selection, storytelling, transitions, and brand building for DJs.",
    highlight: "Perfect for next-gen Kenyan creatives.",
    status: "in-stock",
    icon: Zap,
    locationTag: "Nairobi / Online (Africa)",
  },
  {
    id: "brand-strategy",
    title: "Culture-First Brand Session",
    price: "Custom",
    priceTier: "premium",
    category: "experiences",
    tag: "Strategy",
    description:
      "For brands, collectives, or venues who want to plug into African youth culture, nightlife, and music tech authentically.",
    status: "in-stock",
    icon: Globe2,
    locationTag: "Kenya & Pan-African",
  },
  {
    id: "event-pack",
    title: "Event Magik Pack – Curated Experience",
    price: "From KES 35,000",
    priceTier: "premium",
    category: "experiences",
    tag: "Events",
    description:
      "A tailored package blending DJ performance, curation, and experience design for Nairobi and Kenyan events.",
    highlight: "Ideal for launch events & brand nights.",
    status: "in-stock",
    icon: Star,
    locationTag: "Nairobi & major Kenyan cities",
  },
];

const CATEGORY_LABELS: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "merch", label: "Merch" },
  { id: "access", label: "Access" },
  { id: "experiences", label: "Experiences" },
  { id: "digital", label: "Digital & Collectors" },
];

const AVAILABILITY_LABELS: { id: Availability; label: string }[] = [
  { id: "all", label: "All Availability" },
  { id: "in-stock", label: "Available Now" },
  { id: "preorder", label: "Pre-order" },
  { id: "coming-soon", label: "Coming Soon" },
];

const PRICE_LABELS: { id: PriceTier; label: string }[] = [
  { id: "access", label: "Entry Level" },
  { id: "standard", label: "Standard" },
  { id: "premium", label: "Premium" },
];

export default function ShopPage() {
  const [category, setCategory] = useState<Category>("all");
  const [availability, setAvailability] = useState<Availability>("all");
  const [priceTier, setPriceTier] = useState<PriceTier | "all">("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"relevance" | "price-asc" | "price-desc">(
    "relevance"
  );

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      if (category !== "all" && item.category !== category) return false;
      if (availability !== "all" && item.status !== availability) return false;
      if (priceTier !== "all" && item.priceTier !== priceTier) return false;

      if (search.trim()) {
        const q = search.toLowerCase();
        const haystack = (
          item.title +
          " " +
          item.description +
          " " +
          (item.tag ?? "") +
          " " +
          (item.locationTag ?? "")
        ).toLowerCase();
        if (!haystack.includes(q)) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sort === "relevance") return 0;

      const parsePrice = (p: string): number => {
        // Rough parser: grabs first number-like thing
        const match = p.replace(/,/g, "").match(/(\d+(\.\d+)?)/);
        return match ? parseFloat(match[1]) : 0;
      };

      const pa = parsePrice(a.price);
      const pb = parsePrice(b.price);

      if (sort === "price-asc") return pa - pb;
      if (sort === "price-desc") return pb - pa;
      return 0;
    });
  }, [category, availability, priceTier, search, sort]);

  const featured = PRODUCTS.find(
    (item) => item.id === "magik-tee-blackout"
  ) ?? PRODUCTS[0];

  return (
    <div className="w-full min-h-screen bg-black text-white px-6 pb-24 pt-28">
      {/* Invisible-ish SEO helper for screen readers & crawlers */}
      <p className="sr-only">
        Official shop for THE MAGIK PRINCE in Nairobi, Kenya. Buy merch,
        experiences, and access passes connected to African nightlife, DJ
        culture, and VibeNation HQ.
      </p>

      {/* HEADER */}
      <section className="max-w-6xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/30 text-xs mb-4">
          <ShoppingBag className="w-4 h-4 text-red-500" />
          <span>Official Store · Nairobi · Kenya · Africa</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black mb-3">
          MAGIK SHOP —{" "}
          <span className="bg-linear-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent">
            MERCH & EXPERIENCES
          </span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-sm md:text-base">
          From premium streetwear and collector&apos;s items to high-touch
          experiences and culture-first access passes — designed in Nairobi,
          built for Kenya and the African creative ecosystem.
        </p>
      </section>

      {/* FILTERS BAR */}
      <section className="max-w-6xl mx-auto mb-10 space-y-4">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search merch, experiences, access passes..."
              className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm outline-none focus:border-red-500 transition-colors"
            />
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-gray-400" />
            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value as "relevance" | "price-asc" | "price-desc")
              }
              className="bg-white/5 border border-white/10 text-xs md:text-sm rounded-lg px-3 py-2 outline-none focus:border-red-500"
            >
              <option value="relevance">Sort: Default</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
            </select>
          </div>
        </div>

        {/* Category / Availability / Price Filters */}
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="flex items-center gap-1 text-xs uppercase tracking-wide text-gray-400">
              <Filter className="w-3 h-3" /> Category:
            </span>
            {CATEGORY_LABELS.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`px-3 py-1.5 rounded-full text-xs md:text-sm border transition-all ${
                  category === c.id
                    ? "bg-red-600 text-white border-red-600"
                    : "border-white/10 text-gray-300 hover:border-red-600 hover:text-white"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Availability & Price */}
          <div className="flex flex-wrap gap-3 items-center">
            <select
              value={availability}
              onChange={(e) =>
                setAvailability(
                  e.target.value as Availability
                )
              }
              className="bg-white/5 border border-white/10 text-xs md:text-sm rounded-lg px-3 py-2 outline-none focus:border-red-500"
            >
              {AVAILABILITY_LABELS.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.label}
                </option>
              ))}
            </select>

            <select
              value={priceTier}
              onChange={(e) =>
                setPriceTier(
                  (e.target.value === "all"
                    ? "all"
                    : e.target.value) as PriceTier | "all"
                )
              }
              className="bg-white/5 border border-white/10 text-xs md:text-sm rounded-lg px-3 py-2 outline-none focus:border-red-500"
            >
              <option value="all">All Price Levels</option>
              {PRICE_LABELS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT */}
      <section className="max-w-6xl mx-auto mb-12">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-6 rounded-3xl bg-linear-to-r from-red-900/70 via-red-800/80 to-black border border-red-700/60 p-6 md:p-10">
          <div>
            <p className="text-xs uppercase tracking-wide text-red-200 mb-2">
              FEATURED DROP — NAIROBI
            </p>
            <h2 className="text-2xl md:text-3xl font-black mb-2">
              {featured.title}
            </h2>
            <p className="text-sm text-red-100 mb-2">{featured.price}</p>
            <p className="text-sm md:text-base text-red-50 mb-4">
              {featured.description}
            </p>
            {featured.highlight && (
              <p className="text-xs text-red-100 mb-4">
                <span className="font-semibold">Why it matters: </span>
                {featured.highlight}
              </p>
            )}
            <p className="text-[11px] text-red-100/90 mb-4">
              Location focus: {featured.locationTag ?? "Kenya & beyond"}
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <button className="px-5 py-2.5 rounded-full bg-black/80 text-xs md:text-sm font-semibold hover:bg-black transition-all border border-red-300/40">
                Join Pre-order List
              </button>
              <p className="text-[11px] md:text-xs text-red-100/85">
                For now, DM{" "}
                <span className="font-semibold">@gk.magik_</span> on Instagram
                to secure your slot.
              </p>
            </div>
          </div>

          <div className="flex md:justify-end">
            <div className="w-full md:w-[260px] h-full rounded-2xl bg-black/40 border border-red-300/40 flex flex-col items-center justify-center p-6 text-center">
              <Shirt className="w-10 h-10 text-red-200 mb-3" />
              <p className="text-xs uppercase tracking-wide text-red-200 mb-1">
                CORE SUPPORTER PIECE
              </p>
              <p className="text-sm text-red-50 mb-2">
                Built for the day ones, Nairobi ravers, and Kenyan creatives
                who believe in the vision.
              </p>
              <p className="text-[11px] text-red-100/80">
                Limited units · First run ships from Nairobi · Africa-focused,
                globally ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">
            {filteredProducts.length} item
            {filteredProducts.length === 1 ? "" : "s"} found
          </h2>
          <p className="text-xs text-gray-500">
            Built for Nairobi & Kenyan creatives, collectors, and culture
            builders.
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="border border-white/10 rounded-2xl p-10 text-center text-gray-400 text-sm">
            Nothing matches that combo yet. Try removing a filter or searching
            for something broader like{" "}
            <span className="text-red-400 font-semibold">“hoodie”</span> or{" "}
            <span className="text-red-400 font-semibold">“Nairobi”</span>.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProducts.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-white/5 hover:border-red-600 hover:bg-red-600/5 transition-all p-6 flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 text-[11px] text-red-400 mb-1">
                        <Icon className="w-4 h-4" />
                        <span>{item.tag}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-300 mb-2">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-right text-sm">
                      <div className="font-semibold text-red-400 mb-1">
                        {item.price}
                      </div>
                      <div className="text-[11px] text-gray-400">
                        {item.locationTag}
                      </div>
                    </div>
                  </div>

                  {item.highlight && (
                    <p className="text-xs text-gray-300 bg-black/40 border border-red-600/30 rounded-xl px-3 py-2">
                      <span className="font-semibold text-red-400">
                        Highlight:{" "}
                      </span>
                      {item.highlight}
                    </p>
                  )}

                  <div className="flex items-center justify-between text-[11px] text-gray-400">
                    <div className="flex gap-2 items-center flex-wrap">
                      <StatusPill status={item.status} />
                      <PricePill tier={item.priceTier} />
                    </div>
                    <p className="text-[11px] text-gray-500">
                      DM{" "}
                      <span className="text-red-400 font-semibold">
                        @gk.magik_
                      </span>{" "}
                      to order or book.
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Extra SEO Copy — still natural & useful */}
        <div className="mt-10 text-[11px] text-gray-500 max-w-4xl">
          <p className="mb-2">
            THE MAGIK PRINCE shop is intentionally built around{" "}
            <span className="text-gray-300">
              Nairobi nightlife, Kenyan creatives, and the wider African
              entertainment ecosystem
            </span>
            . Whether you&apos;re in Kilimani, Westlands, Thika Road, Mombasa,
            Eldoret, or across the continent, these pieces and experiences are
            designed to travel with you.
          </p>
          <p>
            For now, orders and bookings are processed manually via email or
            Instagram DM — full e-commerce, payments, and logistics for Kenya
            and Africa are part of the roadmap.
          </p>
        </div>
      </section>
    </div>
  );
}

/* --------------------------------------------------
   Small UI helpers
-------------------------------------------------- */

function StatusPill({ status }: { status: Availability }) {
  const label =
    status === "in-stock"
      ? "Available in Kenya"
      : status === "preorder"
      ? "Pre-order now"
      : "Coming soon";

  const colorClasses =
    status === "in-stock"
      ? "bg-emerald-600/20 border-emerald-500/50 text-emerald-200"
      : status === "preorder"
      ? "bg-amber-500/15 border-amber-400/40 text-amber-200"
      : "bg-gray-500/15 border-gray-400/40 text-gray-200";

  return (
    <span
      className={`px-2.5 py-1 rounded-full border text-[11px] inline-flex items-center gap-1 ${colorClasses}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}

function PricePill({ tier }: { tier: PriceTier }) {
  const label =
    tier === "access"
      ? "Entry level"
      : tier === "standard"
      ? "Standard range"
      : "Premium / Pro";

  return (
    <span className="px-2.5 py-1 rounded-full border border-white/10 text-[11px] text-gray-300">
      {label}
    </span>
  );
}
