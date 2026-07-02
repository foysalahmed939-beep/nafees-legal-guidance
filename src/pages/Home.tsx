import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star, Calendar, MessageCircle } from "lucide-react";
import profileImg from "@/assets/mufti-profile.jpg";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function HomePage() {
  usePageMeta(
    "Barrister Mufti Nafees | London Solicitor – Immigration, Asylum & Commercial Law",
    "Trusted London solicitor and partner at Commonwealth Solicitors. Specialist in Immigration, Asylum, Nationality, Commercial Lease, Tenancy & Money Claims.",
  );

  return (
    <>
      {/* HERO */}
      <section className="relative bg-hero text-primary-foreground overflow-hidden -mt-20 pt-32">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-primary/40 blur-3xl" />

        <div className="container mx-auto px-6 py-20 md:py-32 grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs tracking-[0.2em] uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Solicitor &amp; Partner · London
            </div>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6">
              Barrister
              <br />
              <span className="text-gradient-gold">Mufti Nafees</span>
            </h1>
            <p className="text-lg text-primary-foreground/75 max-w-xl mb-8 leading-relaxed">
              Straightforward, practical legal counsel from a respected London solicitor.
              Specialist representation in Immigration, Asylum, Commercial Lease and Tenancy disputes —
              delivered with integrity, accessibility and unwavering professionalism.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.cwchambers.com/en/our-team" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 bg-gold text-gold-foreground px-6 py-3.5 rounded-full font-medium shadow-gold hover:shadow-elegant transition-all">
                <Calendar className="w-4 h-4" /> Book a Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link to="/services" className="inline-flex items-center gap-2 border border-primary-foreground/20 hover:border-gold/50 px-6 py-3.5 rounded-full text-primary-foreground/90 transition-all">
                Explore Practice Areas
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/10">
              {[
                { k: "15+", v: "Years Practice" },
                { k: "1000+", v: "Clients Served" },
                { k: "98%", v: "Client Satisfaction" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-serif text-3xl text-gold">{s.k}</div>
                  <div className="text-xs uppercase tracking-widest text-primary-foreground/60 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute -inset-6 rounded-[2rem] bg-gold/10 blur-2xl" />
            <div className="relative card-3d rounded-[2rem] overflow-hidden border border-gold/20 shadow-elegant">
              <img src={profileImg} alt="Barrister Mufti Nafees, London Solicitor and Partner at Commonwealth Solicitors" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
                <div className="text-xs uppercase tracking-[0.3em] text-gold mb-1">Solicitor</div>
                <div className="font-serif text-2xl">Mr Mufti Islam</div>
                <div className="text-sm text-primary-foreground/80">Partner · Commonwealth Solicitors</div>
              </div>
            </div>
            <div className="hidden md:block absolute -bottom-6 -left-6 bg-card text-card-foreground rounded-2xl p-4 shadow-elegant border border-border w-56 animate-float">
              <div className="flex items-center gap-1 text-gold mb-1">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <p className="text-xs text-muted-foreground italic">"Outstanding legal expertise — clear, confident, kind."</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { to: "/about", title: "About Mufti Nafees", desc: "Learn about his background, education and community work." },
            { to: "/services", title: "Practice Areas", desc: "Immigration, Asylum, Commercial Lease, Tenancy and more." },
            { to: "/contact", title: "Get in Touch", desc: "Book a consultation or reach out for confidential advice." },
          ].map((c) => (
            <Link key={c.to} to={c.to} className="group bg-card border border-border rounded-2xl p-8 hover:border-gold/40 transition-colors card-3d">
              <h3 className="font-serif text-2xl mb-2 group-hover:text-gold transition-colors">{c.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{c.desc}</p>
              <span className="inline-flex items-center gap-2 text-gold text-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-24">
        <div className="relative bg-primary-gradient text-primary-foreground rounded-3xl p-10 md:p-16 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold/15 blur-3xl animate-float" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl mb-3">Speak to Mufti Nafees today.</h3>
              <p className="text-primary-foreground/75">Confidential consultation. Clear advice. Real results.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="https://wa.me/447958053876" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gold text-gold-foreground font-medium shadow-gold hover:scale-105 transition-transform"><MessageCircle className="w-4 h-4" /> WhatsApp Now</a>
              <a href="tel:+442073751274" className="px-6 py-3.5 rounded-full border border-primary-foreground/30 hover:border-gold transition-all">Call 0207 375 1274</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
