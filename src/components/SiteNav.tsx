import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const links: { to: string; label: string; end?: boolean }[] = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Practice Areas" },
  { to: "/tv-shows", label: "TV Shows" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Barrister Mufti Nafees logo" width="48" height="48" decoding="async" fetchPriority="high" className="w-12 h-12 object-contain rounded-xl transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110 drop-shadow-[0_4px_12px_rgba(212,175,55,0.35)]" />
          <div className="leading-tight">
            <div className="font-serif text-lg text-foreground">Barrister Mufti Nafees</div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Solicitor &amp; Partner</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `text-sm font-medium relative after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-gold after:transition-all hover:after:w-full ${
                  isActive ? "text-foreground after:w-full" : "text-foreground/80 hover:text-foreground after:w-0"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="tel:+442073751274"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all shadow-gold"
          >
            <Phone className="w-4 h-4" /> 0207 375 1274
          </a>
        </nav>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-up">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? "text-foreground font-medium" : "text-foreground/80")}
              >
                {l.label}
              </NavLink>
            ))}
            <a href="tel:+442073751274" className="inline-flex items-center gap-2 text-primary font-medium">
              <Phone className="w-4 h-4" /> 0207 375 1274
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
