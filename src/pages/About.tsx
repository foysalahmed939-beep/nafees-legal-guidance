import { Briefcase, MapPin, GraduationCap, Tv } from "lucide-react";
import tvImg from "@/assets/tv-program.jpg";
import flagsImg from "@/assets/flags.jpg";
import commissionImg from "@/assets/high-commission.jpg";
import cardImg from "@/assets/business-card.jpg";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function AboutPage() {
  usePageMeta(
    "About Barrister Mufti Nafees | London Solicitor & Community Advocate",
    "Meet Mr Mufti Islam — Solicitor and Partner at Commonwealth Solicitors. A trusted advocate serving London's British Bangladeshi community.",
  );

  return (
    <section className="bg-secondary/40 border-b border-border">
      <div className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div className="grid grid-cols-2 gap-4">
          <img src={tvImg} alt="Mufti Nafees on ATN Bangla UK legal awareness program" loading="lazy" decoding="async" className="rounded-2xl object-cover h-64 w-full card-3d" />
          <img src={flagsImg} alt="Mufti Nafees representing UK and Bangladesh communities" loading="lazy" decoding="async" className="rounded-2xl object-cover h-64 w-full card-3d mt-8" />
          <img src={commissionImg} alt="Mufti Nafees at the Bangladesh High Commission, London" loading="lazy" decoding="async" className="rounded-2xl object-cover h-64 w-full col-span-2 card-3d" />
        </div>
        <div>
          <div className="gold-divider mb-4" />
          <div className="text-xs tracking-[0.3em] text-gold uppercase mb-3">About</div>
          <h1 className="font-serif text-4xl md:text-5xl mb-6">A trusted advocate for the community</h1>
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

          <img src={cardImg} alt="Mufti Islam business card" loading="lazy" decoding="async" className="rounded-xl w-full max-w-sm object-cover shadow-elegant" />
        </div>
      </div>
    </section>
  );
}
