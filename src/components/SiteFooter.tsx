import { Mail, Phone, MapPin, Facebook, MessageCircle, Globe } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-primary-gradient text-primary-foreground mt-24">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full border border-gold/40 grid place-items-center text-gold font-serif text-xl">M</div>
            <div>
              <div className="font-serif text-xl">Barrister Mufti Nafees</div>
              <div className="text-xs tracking-widest uppercase text-gold/80">Solicitor &amp; Partner</div>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/70 max-w-md leading-relaxed">
            Straightforward, practical, results-driven legal advice in Immigration, Asylum,
            Commercial Lease and Tenancy disputes — delivered with integrity and care from the heart of London.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-gold">Navigate</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><a href="#home" className="hover:text-gold">Home</a></li>
            <li><a href="#about" className="hover:text-gold">About</a></li>
            <li><a href="#services" className="hover:text-gold">Practice Areas</a></li>
            <li><a href="#tv" className="hover:text-gold">TV Shows</a></li>
            <li><a href="#contact" className="hover:text-gold">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4 text-gold">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" /> 2nd Floor, 10-12 Whitechapel Road, London E1 1EW</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 text-gold mt-0.5" /> <a href="tel:+442073751274" className="hover:text-gold">0207 375 1274</a></li>
            <li className="flex gap-2"><Mail className="w-4 h-4 text-gold mt-0.5" /> <a href="mailto:hello@barristermuftinafees.co.uk" className="hover:text-gold">hello@barristermuftinafees.co.uk</a></li>
            <li className="flex gap-3 pt-2">
              <a href="https://wa.me/447958053876" target="_blank" rel="noopener noreferrer" className="hover:text-gold" aria-label="WhatsApp"><MessageCircle className="w-5 h-5" /></a>
              <a href="https://www.facebook.com/mufti.nafees" target="_blank" rel="noopener noreferrer" className="hover:text-gold" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="https://www.cwchambers.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold" aria-label="Chambers website"><Globe className="w-5 h-5" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6 text-xs text-primary-foreground/60 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Barrister Mufti Nafees. All rights reserved.</p>
          <p>Regulated by the Solicitors Regulation Authority.</p>
          <p>
            Website Designed &amp; Developed by{" "}
            <a href="https://londonwebhub.co.uk" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
              London Web Hub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
