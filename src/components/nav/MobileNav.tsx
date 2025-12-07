"use client";

export default function MobileNav({ close }: { close: () => void }) {
  const NAV_ITEMS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Content", href: "/content" },
    { name: "Events", href: "/events" },
    { name: "Brands", href: "/brands" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-red-600/20 p-6 space-y-4">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={close}
          className="block text-lg font-bold hover:text-red-500 transition"
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
