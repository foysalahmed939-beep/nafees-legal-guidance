import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Scale, Award, Building2, Home, Banknote, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Practice Areas | Barrister Mufti Nafees – London Solicitor" },
      { name: "description", content: "Immigration, Asylum, Nationality & EU Law, Commercial Lease, Landlord & Tenancy disputes and Money Claims — expert London legal services." },
      { property: "og:title", content: "Practice Areas – Barrister Mufti Nafees" },
      { property: "og:description", content: "Specialist legal services across Immigration, Asylum, Commercial and Tenancy law in London." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: ShieldCheck, title: "Immigration Law", desc: "From visit and work visas to indefinite leave to remain — strategic, end-to-end immigration advice with meticulous case preparation.", points: ["Spouse & family visas", "Work and sponsor licences", "Indefinite leave & settlement", "Appeals & judicial review"] },
  { icon: Scale, title: "Asylum Law", desc: "Sensitive, robust representation through every stage of the asylum process, including appeals and fresh claims.", points: ["Asylum applications", "Substantive interviews", "First-tier & Upper Tribunal", "Fresh claims"] },
  { icon: Award, title: "Nationality & EU Law", desc: "British citizenship, EU Settled and Pre-Settled Status applications handled with attention to every detail.", points: ["British citizenship", "Naturalisation", "EU Settled / Pre-Settled", "Status appeals"] },
  { icon: Building2, title: "Commercial Lease", desc: "Lease drafting, renewals and dispute resolution for landlords, tenants and businesses across London.", points: ["Lease drafting & review", "Renewals & assignments", "Dilapidations", "Forfeiture & possession"] },
  { icon: Home, title: "Landlord & Tenancy Disputes", desc: "Practical advice for residential landlords and tenants — possession, deposits and disrepair claims.", points: ["Section 8 & Section 21", "Deposit disputes", "Rent arrears", "Disrepair claims"] },
  { icon: Banknote, title: "Money Claims", desc: "From debt recovery to high-value contractual disputes — efficient, strategic civil litigation.", points: ["Debt recovery", "Contract disputes", "Pre-action protocol", "Enforcement"] },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-hero text-primary-foreground -mt-20 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />
        <div className="container mx-auto px-6 text-center relative animate-fade-up">
          <div className="text-xs tracking-[0.3em] text-gold uppercase mb-4">Practice Areas</div>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Expertise that <span className="text-gradient-gold">delivers</span>.</h1>
          <p className="max-w-2xl mx-auto text-primary-foreground/75 text-lg">Comprehensive legal services across immigration, commercial and civil disputes — backed by years of courtroom experience.</p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card border border-border rounded-2xl p-8 card-3d group relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gold/5 group-hover:bg-gold/10 transition-colors" />
            <s.icon className="w-10 h-10 text-gold mb-5 relative" strokeWidth={1.5} />
            <h3 className="font-serif text-2xl mb-3 relative">{s.title}</h3>
            <p className="text-muted-foreground mb-5 relative leading-relaxed">{s.desc}</p>
            <ul className="space-y-1.5 text-sm text-foreground/80 relative">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-gold" /> {p}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="bg-primary-gradient text-primary-foreground rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
          <h3 className="font-serif text-3xl md:text-4xl mb-4 relative">Not sure which area applies?</h3>
          <p className="text-primary-foreground/75 max-w-xl mx-auto mb-8 relative">Send a brief message and Mufti will personally direct you to the right path forward.</p>
          <a href="https://wa.me/447958053876" target="_blank" rel="noopener noreferrer" className="inline-flex relative items-center gap-2 px-7 py-3.5 rounded-full bg-gold text-gold-foreground font-medium shadow-gold">Start a conversation <ArrowRight className="w-4 h-4" /></a>
        </div>
      </section>
    </>
  );
}
