import Link from "next/link";

const links = [
  { href: "/matches", label: "הכרויות" },
  { href: "/community", label: "קהילה" },
  { href: "/messages", label: "הודעות" },
  { href: "/profile", label: "פרופיל" },
];

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <span className="font-bold">יוסתים</span>
      <ul className="flex gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
