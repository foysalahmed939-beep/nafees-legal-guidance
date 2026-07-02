import { ArrowRight, Tv, Play } from "lucide-react";
import { Tilt3D } from "@/components/Tilt3D";
import { usePageMeta } from "@/hooks/usePageMeta";

const videos = [
  { id: "OdIpLlb-A7U", title: "Legal Awareness Programme" },
  { id: "KLGo_zC3sQg", title: "Community Law Discussion" },
  { id: "KF2iU1lSivI", title: "UK Immigration & Justice" },
];

export default function TvShowsPage() {
  usePageMeta(
    "TV Shows | Barrister Mufti Nafees – Legal Awareness on Community TV",
    "Watch Mufti Nafees on community television discussing immigration law, legal rights and access to justice for the British Bangladeshi community.",
  );

  return (
    <section className="bg-secondary/40 border-b border-border">
      <div className="container mx-auto px-6 py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="gold-divider mb-4" />
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold mb-3">
              <Tv className="w-4 h-4" /> On Television
            </div>
            <h1 className="font-serif text-4xl md:text-5xl mb-4">Featured TV programmes</h1>
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
  );
}
