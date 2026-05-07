import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Practice Areas" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
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
          <div className="w-10 h-10 rounded-full bg-primary-gradient grid place-items-center text-gold font-serif text-xl shadow-gold">
            M
          </div>
          <div className="leading-tight">
            <div className="font-serif text-lg text-foreground">Barrister Mufti Nafees</div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Solicitor &amp; Partner</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 hover:text-foreground relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              activeProps={{ className: "text-foreground after:w-full" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+442073751274"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all shadow-gold"
          >
            <Phone className="w-4 h-4" /> 0207 375 1274
          </a>
        </nav>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-up">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-foreground/80">
                {l.label}
              </Link>
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
