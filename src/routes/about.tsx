import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, MapPin, Briefcase, Tv } from "lucide-react";
import profileImg from "@/assets/mufti-profile.jpg";
import cardImg from "@/assets/business-card.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Barrister Mufti Nafees | London Solicitor & Partner" },
      { name: "description", content: "Learn about Mr Mufti Islam — Solicitor and Partner at Commonwealth Solicitors. Education, experience and community work in London." },
      { property: "og:title", content: "About Barrister Mufti Nafees" },
      { property: "og:description", content: "Solicitor and Partner at Commonwealth Solicitors, London." },
      { property: "og:image", content: "/favicon.jpg" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-hero text-primary-foreground -mt-20 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-gold/10 blur-3xl animate-float" />
        <div className="container mx-auto px-6 grid lg:grid-cols-[1fr_auto] gap-12 items-end relative">
          <div className="animate-fade-up">
            <div className="text-xs tracking-[0.3em] text-gold uppercase mb-4">About</div>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6">A solicitor of <span className="text-gradient-gold">conviction</span>.</h1>
            <p className="text-primary-foreground/75 max-w-2xl text-lg">A respected London legal professional dedicated to expert representation, ethical practice and accessible justice.</p>
          </div>
          <img src={profileImg} alt="Portrait of Barrister Mufti Nafees" className="hidden lg:block w-64 h-80 object-cover rounded-3xl border border-gold/20 shadow-elegant card-3d" />
        </div>
      </section>

      <section className="container mx-auto px-6 py-20 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6 text-foreground/85 leading-relaxed">
          <div className="gold-divider" />
          <h2 className="font-serif text-3xl">Biography</h2>
          <p>
            Mr Mufti Islam is a highly motivated, organised, and dedicated legal professional working as a
            Solicitor and Partner of <strong>Commonwealth Solicitors</strong>. He provides clients with
            straightforward, practical, and understandable legal advice while maintaining a friendly and
            client-focused approach.
          </p>
          <p>
            Mufti is also widely known for participating in community television programmes related to legal
            awareness. He takes great satisfaction in providing both individuals and businesses with a legal
            service that is approachable, effective, and results-driven.
          </p>
          <p>
            As a forward-thinking solicitor, he continues to uphold the core values of integrity, accessibility,
            and professionalism. His extensive experience and in-depth knowledge ensure reliable guidance and
            strong representation in every legal matter — making him a committed advocate for justice.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {[
              { icon: Briefcase, label: "Role", value: "Solicitor & Partner, Commonwealth Solicitors" },
              { icon: MapPin, label: "Based", value: "London, United Kingdom" },
              { icon: MapPin, label: "Origin", value: "Dhaka, Bangladesh" },
              { icon: Tv, label: "Media", value: "Community TV legal awareness programmes" },
            ].map((d) => (
              <div key={d.label} className="flex gap-3 p-4 rounded-xl bg-secondary/40 border border-border">
                <d.icon className="w-5 h-5 text-gold mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{d.label}</div>
                  <div className="text-sm font-medium">{d.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6 card-3d">
            <GraduationCap className="w-8 h-8 text-gold mb-3" />
            <h3 className="font-serif text-xl mb-3">Education</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>· University of Westminster</li>
              <li>· London Metropolitan University</li>
              <li>· University of East London, Stratford</li>
            </ul>
          </div>
          <img src={cardImg} alt="Mufti Islam — Solicitor at Commonwealth Solicitors" className="rounded-2xl w-full object-cover shadow-elegant" />
        </aside>
      </section>
    </>
  );
}
