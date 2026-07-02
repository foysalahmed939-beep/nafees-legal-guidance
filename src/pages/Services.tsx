import { Award, ShieldCheck, Scale, CheckCircle2, Building2, Home, Banknote } from "lucide-react";
import { Tilt3D } from "@/components/Tilt3D";
import { usePageMeta } from "@/hooks/usePageMeta";

const services = [
  { icon: ShieldCheck, title: "Immigration Law", desc: "Visas, settlement, sponsorship and complex applications handled with precision.", points: ["Spouse & family visas", "Work and sponsor licences", "Indefinite leave & settlement", "Appeals & judicial review"] },
  { icon: Scale, title: "Asylum Law", desc: "Compassionate, robust representation through every stage of the asylum process.", points: ["Asylum applications", "Substantive interviews", "First-tier & Upper Tribunal", "Fresh claims"] },
  { icon: Award, title: "Nationality & EU Law", desc: "British citizenship, EU settled status and pre-settled status guidance.", points: ["British citizenship", "Naturalisation", "EU Settled / Pre-Settled", "Status appeals"] },
  { icon: Building2, title: "Commercial Lease", desc: "Landlord & tenant matters, lease drafting, renewals and dispute resolution.", points: ["Lease drafting & review", "Renewals & assignments", "Dilapidations", "Forfeiture & possession"] },
  { icon: Home, title: "Landlord & Tenancy", desc: "Possession claims, deposit disputes and tenancy advice across London.", points: ["Section 8 & Section 21", "Deposit disputes", "Rent arrears", "Disrepair claims"] },
  { icon: Banknote, title: "Money Claims", desc: "Debt recovery, contractual disputes and small to high-value money claims.", points: ["Debt recovery", "Contract disputes", "Pre-action protocol", "Enforcement"] },
];

export default function ServicesPage() {
  usePageMeta(
    "Practice Areas | Barrister Mufti Nafees – London Solicitor",
    "Comprehensive legal services: Immigration, Asylum, Nationality, Commercial Lease, Landlord & Tenancy disputes and Money Claims.",
  );

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="max-w-2xl mb-14">
        <div className="gold-divider mb-4" />
        <div className="text-xs tracking-[0.3em] text-gold uppercase mb-3">Practice Areas</div>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Expertise that delivers</h1>
        <p className="text-muted-foreground text-lg">Comprehensive legal expertise tailored to individuals, families and businesses across London and beyond.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <Tilt3D key={s.title} className="rounded-2xl" max={10}>
            <div className="group bg-card border border-border rounded-2xl p-7 hover:border-gold/40 relative overflow-hidden h-full" style={{ animationDelay: `${i * 80}ms` }}>
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
  );
}
