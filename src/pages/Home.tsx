import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Award, ShieldCheck, Scale, CheckCircle2, Sparkles, Quote, Star, Calendar,
  Tv, Play, GraduationCap, MapPin, Briefcase, Building2, Home, Banknote,
  Phone, Mail, MessageCircle, Facebook, Globe,
} from "lucide-react";
import profileImg from "@/assets/mufti-profile.jpg";
import tvImg from "@/assets/tv-program.jpg";
import flagsImg from "@/assets/flags.jpg";
import commissionImg from "@/assets/high-commission.jpg";
import cardImg from "@/assets/business-card.jpg";
import { Tilt3D } from "@/components/Tilt3D";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Barrister Mufti Nafees | London Solicitor – Immigration, Asylum & Commercial Law" },
      { name: "description", content: "Trusted London solicitor and partner at Commonwealth Solicitors. Specialist in Immigration, Asylum, Nationality, Commercial Lease, Tenancy & Money Claims. Book a consultation today." },
      { property: "og:title", content: "Barrister Mufti Nafees – London Solicitor" },
      { property: "og:description", content: "Expert legal advice in Immigration, Asylum and Commercial law from Whitechapel, London." },
      { property: "og:image", content: "/favicon.png" },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: ShieldCheck, title: "Immigration Law", desc: "Visas, settlement, sponsorship and complex applications handled with precision.", points: ["Spouse & family visas", "Work and sponsor licences", "Indefinite leave & settlement", "Appeals & judicial review"] },
  { icon: Scale, title: "Asylum Law", desc: "Compassionate, robust representation through every stage of the asylum process.", points: ["Asylum applications", "Substantive interviews", "First-tier & Upper Tribunal", "Fresh claims"] },
  { icon: Award, title: "Nationality & EU Law", desc: "British citizenship, EU settled status and pre-settled status guidance.", points: ["British citizenship", "Naturalisation", "EU Settled / Pre-Settled", "Status appeals"] },
  { icon: Building2, title: "Commercial Lease", desc: "Landlord & tenant matters, lease drafting, renewals and dispute resolution.", points: ["Lease drafting & review", "Renewals & assignments", "Dilapidations", "Forfeiture & possession"] },
  { icon: Home, title: "Landlord & Tenancy", desc: "Possession claims, deposit disputes and tenancy advice across London.", points: ["Section 8 & Section 21", "Deposit disputes", "Rent arrears", "Disrepair claims"] },
  { icon: Banknote, title: "Money Claims", desc: "Debt recovery, contractual disputes and small to high-value money claims.", points: ["Debt recovery", "Contract disputes", "Pre-action protocol", "Enforcement"] },
];

const testimonials = [
  { name: "A. Rahman", text: "Mufti handled my complex visa application with exceptional care. Outcome was perfect.", rating: 5 },
  { name: "S. Begum", text: "Clear, honest advice and constant communication. Highly recommended for immigration matters.", rating: 5 },
  { name: "J. Ahmed", text: "Professional, knowledgeable, and genuinely cares about clients. A true advocate.", rating: 5 },
];

const videos = [
  { id: "OdIpLlb-A7U", title: "Legal Awareness Programme" },
  { id: "KLGo_zC3sQg", title: "Community Law Discussion" },
  { id: "KF2iU1lSivI", title: "UK Immigration & Justice" },
];

const contactItems = [
  { icon: MapPin, label: "Office", value: "2nd Floor, 10-12 Whitechapel Road, London E1 1EW", href: "https://www.google.com/maps/place/Commonwealth+Solicitors/@51.516767,-0.0709236,17z" },
  { icon: Phone, label: "Office Phone", value: "0207 375 1274", href: "tel:+442073751274" },
  { icon: MessageCircle, label: "WhatsApp / Mobile", value: "+44 7958 053876", href: "https://wa.me/447958053876" },
  { icon: Mail, label: "Personal Email", value: "hello@barristermuftinafees.co.uk", href: "mailto:hello@barristermuftinafees.co.uk" },
  { icon: Mail, label: "Chambers Email", value: "info@cwchambers.com", href: "mailto:info@cwchambers.com" },
  { icon: Globe, label: "Chambers Website", value: "www.cwchambers.com", href: "https://www.cwchambers.com" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section id="home" className="relative bg-hero text-primary-foreground overflow-hidden -mt-20 pt-32 scroll-mt-24">
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
              <a href="#services" className="inline-flex items-center gap-2 border border-primary-foreground/20 hover:border-gold/50 px-6 py-3.5 rounded-full text-primary-foreground/90 transition-all">
                Explore Practice Areas
              </a>
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

      {/* ABOUT */}
      <section id="about" className="bg-secondary/40 border-y border-border scroll-mt-24">
        <div className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={tvImg} alt="Mufti Nafees on ATN Bangla UK legal awareness program" className="rounded-2xl object-cover h-64 w-full card-3d" />
            <img src={flagsImg} alt="Mufti Nafees representing UK and Bangladesh communities" className="rounded-2xl object-cover h-64 w-full card-3d mt-8" />
            <img src={commissionImg} alt="Mufti Nafees at the Bangladesh High Commission, London" className="rounded-2xl object-cover h-64 w-full col-span-2 card-3d" />
          </div>
          <div>
            <div className="gold-divider mb-4" />
            <div className="text-xs tracking-[0.3em] text-gold uppercase mb-3">About</div>
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

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Briefcase, label: "Role", value: "Solicitor & Partner" },
                { icon: MapPin, label: "Based", value: "London, United Kingdom" },
                { icon: GraduationCap, label: "Education", value: "Westminster · LMU · UEL" },
                { icon: Tv, label: "Media", value: "Community TV programmes" },
              ].map((d) => (
                <div key={d.label} className="flex gap-3 p-4 rounded-xl bg-card border border-border">
                  <d.icon className="w-5 h-5 text-gold mt-0.5" />
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{d.label}</div>
                    <div className="text-sm font-medium">{d.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <img src={cardImg} alt="Mufti Islam business card" className="rounded-xl w-full max-w-sm object-cover shadow-elegant" />
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section id="services" className="container mx-auto px-6 py-24 scroll-mt-24">
        <div className="max-w-2xl mb-14">
          <div className="gold-divider mb-4" />
          <div className="text-xs tracking-[0.3em] text-gold uppercase mb-3">Practice Areas</div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Expertise that delivers</h2>
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
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 relative">{s.desc}</p>
                <ul className="space-y-1.5 text-sm text-foreground/80 relative">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-gold" /> {p}</li>
                  ))}
                </ul>
              </div>
            </Tilt3D>
          ))}
        </div>
      </section>

      {/* TV SHOWS */}
      <section id="tv" className="bg-secondary/40 border-y border-border scroll-mt-24">
        <div className="container mx-auto px-6 py-24">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="gold-divider mb-4" />
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold mb-3">
                <Tv className="w-4 h-4" /> On Television
              </div>
              <h2 className="font-serif text-4xl md:text-5xl mb-4">Featured TV programmes</h2>
              <p className="text-muted-foreground text-lg">Watch Mufti Nafees discuss legal awareness, immigration and access to justice.</p>
            </div>
            <a href="https://www.youtube.com/results?search_query=Barrister+Mufti+Nafees" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground font-medium border-b-2 border-gold pb-1 hover:gap-3 transition-all">
              Watch more on YouTube <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v, i) => (
              <Tilt3D key={v.id} className="rounded-2xl" max={10}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-gold/40 transition-colors animate-scale-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="relative aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <div className="p-5 flex items-center gap-3">
                    <Play className="w-4 h-4 text-gold" />
                    <h3 className="font-serif text-lg">{v.title}</h3>
                  </div>
                </div>
              </Tilt3D>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="container mx-auto px-6 py-24 scroll-mt-24">
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

      {/* CONTACT */}
      <section id="contact" className="bg-secondary/40 border-t border-border scroll-mt-24">
        <div className="container mx-auto px-6 py-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="gold-divider mx-auto mb-4" />
            <div className="text-xs tracking-[0.3em] text-gold uppercase mb-3">Contact</div>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Let's talk</h2>
            <p className="text-muted-foreground">Reach out by phone, email or WhatsApp — or book directly via the Commonwealth Solicitors team page.</p>
            <div className="flex flex-wrap gap-3 justify-center mt-8">
              <a href="https://www.cwchambers.com/en/our-team" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-6 py-3 rounded-full font-medium shadow-gold"><Calendar className="w-4 h-4" /> Book Appointment</a>
              <a href="https://wa.me/447958053876" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border hover:border-gold px-6 py-3 rounded-full transition-all"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
              <a href="https://www.facebook.com/mufti.nafees" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border hover:border-gold px-6 py-3 rounded-full transition-all"><Facebook className="w-4 h-4" /> Facebook</a>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-3">
              {contactItems.map((it) => (
                <a key={it.label} href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border card-3d group">
                  <div className="w-11 h-11 rounded-xl bg-primary text-gold grid place-items-center shrink-0 group-hover:scale-105 transition-transform">
                    <it.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{it.label}</div>
                    <div className="font-medium text-foreground">{it.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-border shadow-elegant min-h-[480px] card-3d">
              <iframe
                title="Commonwealth Solicitors location"
                src="https://www.google.com/maps?q=Commonwealth+Solicitors+10-12+Whitechapel+Road+London+E1+1EW&output=embed"
                className="w-full h-full min-h-[480px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-24">
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
