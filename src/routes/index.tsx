import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, ShieldCheck, Scale, CheckCircle2, Sparkles, Quote, Star, Calendar, Tv, Play } from "lucide-react";
import profileImg from "@/assets/mufti-profile.jpg";
import tvImg from "@/assets/tv-program.jpg";
import flagsImg from "@/assets/flags.jpg";
import commissionImg from "@/assets/high-commission.jpg";
import { Tilt3D } from "@/components/Tilt3D";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barrister Mufti Nafees | London Solicitor – Immigration, Asylum & Commercial Law" },
      { name: "description", content: "Trusted London solicitor and partner at Commonwealth Solicitors. Specialist in Immigration, Asylum, Nationality, Commercial Lease, Tenancy & Money Claims. Book a consultation today." },
      { property: "og:title", content: "Barrister Mufti Nafees – London Solicitor" },
      { property: "og:description", content: "Expert legal advice in Immigration, Asylum and Commercial law from Whitechapel, London." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: ShieldCheck, title: "Immigration Law", desc: "Visas, settlement, sponsorship and complex applications handled with precision." },
  { icon: Scale, title: "Asylum Law", desc: "Compassionate, robust representation through every stage of the asylum process." },
  { icon: Award, title: "Nationality & EU Law", desc: "British citizenship, EU settled status and pre-settled status guidance." },
  { icon: CheckCircle2, title: "Commercial Lease", desc: "Landlord & tenant matters, lease drafting, renewals and dispute resolution." },
  { icon: Sparkles, title: "Landlord & Tenancy", desc: "Possession claims, deposit disputes and tenancy advice across London." },
  { icon: Star, title: "Money Claims", desc: "Debt recovery, contractual disputes and small to high-value money claims." },
];

const testimonials = [
  { name: "A. Rahman", text: "Mufti handled my complex visa application with exceptional care. Outcome was perfect.", rating: 5 },
  { name: "S. Begum", text: "Clear, honest advice and constant communication. Highly recommended for immigration matters.", rating: 5 },
  { name: "J. Ahmed", text: "Professional, knowledgeable, and genuinely cares about clients. A true advocate.", rating: 5 },
];

function HomePage() {
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

      {/* PRACTICE AREAS */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-2xl mb-14">
          <div className="gold-divider mb-4" />
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Practice Areas</h2>
          <p className="text-muted-foreground text-lg">Comprehensive legal expertise tailored to individuals, families and businesses across London and beyond.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Tilt3D key={s.title} className="rounded-2xl" max={10}>
              <div
                className="group bg-card border border-border rounded-2xl p-7 hover:border-gold/40 relative overflow-hidden h-full"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gold/5 group-hover:bg-gold/10 transition-colors" />
                <s.icon className="w-9 h-9 text-gold mb-5 relative" strokeWidth={1.5} />
                <h3 className="font-serif text-xl mb-2 relative">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative">{s.desc}</p>
              </div>
            </Tilt3D>
          ))}
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={tvImg} alt="Mufti Nafees on ATN Bangla UK legal awareness program" className="rounded-2xl object-cover h-64 w-full card-3d" />
            <img src={flagsImg} alt="Mufti Nafees representing UK and Bangladesh communities" className="rounded-2xl object-cover h-64 w-full card-3d mt-8" />
            <img src={commissionImg} alt="Mufti Nafees at the Bangladesh High Commission, London" className="rounded-2xl object-cover h-64 w-full col-span-2 card-3d" />
          </div>
          <div>
            <div className="gold-divider mb-4" />
            <h2 className="font-serif text-4xl md:text-5xl mb-6">A trusted advocate for the community</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Mr Mufti Islam is a highly motivated, organised and dedicated legal professional working as a
              Solicitor and Partner of Commonwealth Solicitors. He provides clients with straightforward,
              practical and understandable legal advice while maintaining a friendly, client-focused approach.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A familiar voice on community television, Mufti Nafees is widely respected for raising legal
              awareness and championing access to justice for the British Bangladeshi community in London.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-foreground font-medium border-b-2 border-gold pb-1 hover:gap-3 transition-all">
              Read full biography <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="gold-divider mx-auto mb-4" />
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Voices of trust</h2>
          <p className="text-muted-foreground">Recent reviews from clients across London.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-2xl p-7 card-3d relative">
              <Quote className="w-8 h-8 text-gold/40 mb-4" />
              <p className="text-foreground/85 leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div className="font-medium">{t.name}</div>
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8">Verified reviews are continually updated from Google &amp; Facebook.</p>
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
              <a href="https://wa.me/447958053876" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 rounded-full bg-gold text-gold-foreground font-medium shadow-gold hover:scale-105 transition-transform">WhatsApp Now</a>
              <a href="tel:+442073751274" className="px-6 py-3.5 rounded-full border border-primary-foreground/30 hover:border-gold transition-all">Call 0207 375 1274</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
