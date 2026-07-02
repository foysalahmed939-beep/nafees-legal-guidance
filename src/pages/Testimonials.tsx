import { Quote, Star } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const testimonials = [
  { name: "A. Rahman", text: "Mufti handled my complex visa application with exceptional care. Outcome was perfect.", rating: 5 },
  { name: "S. Begum", text: "Clear, honest advice and constant communication. Highly recommended for immigration matters.", rating: 5 },
  { name: "J. Ahmed", text: "Professional, knowledgeable, and genuinely cares about clients. A true advocate.", rating: 5 },
];

export default function TestimonialsPage() {
  usePageMeta(
    "Client Testimonials | Barrister Mufti Nafees – London Solicitor",
    "Verified reviews from clients across London who trusted Mufti Nafees with their immigration, asylum and commercial legal matters.",
  );

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="gold-divider mx-auto mb-4" />
        <div className="text-xs tracking-[0.3em] text-gold uppercase mb-3">Testimonials</div>
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Voices of trust</h1>
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
  );
}
