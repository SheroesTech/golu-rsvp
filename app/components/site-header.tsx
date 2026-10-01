import Link from "next/link";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Stories", "/stories"],
  ["Through the years", "/through-the-years"]
];

export function SiteHeader({ active }: { active: string }) {
  return <header className="site-header">
    <Link className="wordmark" href="/" aria-label="Golu home">golu</Link>
    <nav aria-label="Main navigation">
      {links.map(([label, href]) => <Link className={active === href ? "active" : ""} href={href} key={href}>{label}</Link>)}
    </nav>
    <Link className="header-rsvp" href="/#rsvp">RSVP <span>↗</span></Link>
  </header>;
}
