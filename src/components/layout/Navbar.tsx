"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Publications", href: "/publications" },
  { name: "Teaching", href: "/teaching" },
  { name: "Team", href: "/team" },
  { name: "Open Positions", href: "/positions" },
  { name: "News", href: "/news" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4">

        <div className="flex items-center justify-between">

          {/* Website Title */}
          <h1 className="font-[var(--font-dm-serif)] whitespace-nowrap text-xl font-bold">
            CatLab - Dr. Akash Kaithal
          </h1>

          {/* Navigation Menu */}
          <div
            className={`mx-6 flex flex-wrap justify-center gap-4 transition-all duration-500 ease-in-out ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0 pointer-events-none"
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-[var(--font-playfair)] text-sm font-medium transition-colors hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl transition-all duration-200 hover:bg-gray-100 hover:shadow-md"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>
    </nav>
  );
}

{/*import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Research", href: "/research" },
  { name: "Publications", href: "/publications" },
  { name: "Teaching", href: "/teaching" },
  { name: "Team", href: "/team" },
  { name: "Open Positions", href: "/positions" },
  { name: "News", href: "/news" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex flex-wrap items-center justify-between">
          <h1 className="text-xl font-bold">
            CatLab - Dr. Akash Kaithal
          </h1>

          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

*/}
