import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { MouseGlow } from "@/components/MouseGlow";
import HomePage from "@/pages/Home";

export default function App() {
  return (
    <>
      <MouseGlow />
      <SiteNav />
      <main className="pt-20">
        <HomePage />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  );
}
