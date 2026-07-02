import { Calendar, MapPin, Phone, Mail, MessageCircle, Facebook, Globe } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const contactItems = [
  { icon: MapPin, label: "Office", value: "2nd Floor, 10-12 Whitechapel Road, London E1 1EW", href: "https://www.google.com/maps/place/Commonwealth+Solicitors/@51.516767,-0.0709236,17z" },
  { icon: Phone, label: "Office Phone", value: "0207 375 1274", href: "tel:+442073751274" },
  { icon: MessageCircle, label: "WhatsApp / Mobile", value: "+44 7958 053876", href: "https://wa.me/447958053876" },
  { icon: Mail, label: "Personal Email", value: "hello@barristermuftinafees.co.uk", href: "mailto:hello@barristermuftinafees.co.uk" },
  { icon: Mail, label: "Chambers Email", value: "info@cwchambers.com", href: "mailto:info@cwchambers.com" },
  { icon: Globe, label: "Chambers Website", value: "www.cwchambers.com", href: "https://www.cwchambers.com" },
];

export default function ContactPage() {
  usePageMeta(
    "Contact Barrister Mufti Nafees | London Solicitor – Whitechapel",
    "Get in touch with Mufti Nafees at Commonwealth Solicitors, Whitechapel. Book a consultation by phone, email or WhatsApp.",
  );

  return (
    <section className="bg-secondary/40 border-b border-border">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="gold-divider mx-auto mb-4" />
          <div className="text-xs tracking-[0.3em] text-gold uppercase mb-3">Contact</div>
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Let's talk</h1>
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
  );
}
