"use client";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Content", href: "/content" },
  { name: "Events", href: "/events" },
  { name: "Brands", href: "/brands" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
];

export default function DesktopNav() {
  return (
    <nav className="hidden lg:flex space-x-8 text-sm font-bold">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="hover:text-red-500 transition"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}
