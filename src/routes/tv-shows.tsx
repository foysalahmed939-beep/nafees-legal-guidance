import { createFileRoute } from "@tanstack/react-router";
import { Tv, Play } from "lucide-react";
import { Tilt3D } from "@/components/Tilt3D";

export const Route = createFileRoute("/tv-shows")({
  head: () => ({
    meta: [
      { title: "TV Shows & Media | Barrister Mufti Nafees" },
      { name: "description", content: "Watch Barrister Mufti Nafees on community television — legal awareness programmes covering immigration, asylum, and UK law." },
      { property: "og:title", content: "Barrister Mufti Nafees on TV" },
      { property: "og:description", content: "Legal awareness TV programmes featuring Mufti Nafees." },
    ],
  }),
  component: TvShowsPage,
});

const videos = [
  { id: "OdIpLlb-A7U", title: "Legal Awareness with Barrister Mufti Nafees" },
  { id: "KLGo_zC3sQg", title: "Community Law Discussion" },
  { id: "KF2iU1lSivI", title: "UK Immigration & Justice" },
];

function TvShowsPage() {
  return (
    <>
      <section className="bg-hero text-primary-foreground -mt-20 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-gold/10 blur-3xl animate-float" />
        <div className="container mx-auto px-6 relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs tracking-[0.2em] uppercase mb-6 animate-fade-up">
            <Tv className="w-3.5 h-3.5" /> Television &amp; Media
          </div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6 animate-fade-up">
            On <span className="text-gradient-gold">Television</span>.
          </h1>
          <p className="text-primary-foreground/75 max-w-2xl text-lg animate-fade-up">
            A respected voice on community television — Mufti Nafees raises legal awareness on immigration,
            asylum, civil rights and access to justice across the UK.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((v, i) => (
            <Tilt3D key={v.id} className="rounded-2xl" max={10}>
              <div
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-elegant hover:border-gold/40 transition-colors animate-scale-in"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="relative aspect-video bg-primary">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold mb-2">
                    <Play className="w-3.5 h-3.5" /> Episode {i + 1}
                  </div>
                  <h3 className="font-serif text-xl">{v.title}</h3>
                </div>
              </div>
            </Tilt3D>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.youtube.com/results?search_query=Barrister+Mufti+Nafees"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-7 py-3.5 rounded-full font-medium shadow-gold hover:scale-105 transition-transform"
          >
            <Play className="w-4 h-4" /> Watch More on YouTube
          </a>
        </div>
      </section>
    </>
  );
}
