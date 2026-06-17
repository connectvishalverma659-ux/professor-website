import Link from "next/link";

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
            Professor Website
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