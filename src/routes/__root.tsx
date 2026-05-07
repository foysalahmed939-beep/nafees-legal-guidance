import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-serif text-foreground">404</h1>
        <p className="mt-4 text-muted-foreground">This page could not be found.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-serif">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Barrister Mufti Nafees | Solicitor & Partner – Commonwealth Solicitors London" },
      { name: "description", content: "Barrister Mufti Nafees — expert London solicitor in Immigration, Asylum, Nationality, Commercial Lease, Landlord & Tenancy and Money Claims. Trusted legal advice in Whitechapel, London." },
      { name: "keywords", content: "Barrister Mufti Nafees, Mufti Islam solicitor, immigration solicitor London, asylum lawyer London, Whitechapel solicitor, Commonwealth Solicitors, landlord tenant lawyer, EU nationality lawyer" },
      { name: "author", content: "Barrister Mufti Nafees" },
      { name: "theme-color", content: "#0b1736" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Barrister Mufti Nafees" },
      { property: "og:image", content: "/favicon.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/favicon.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/jpeg", href: "/favicon.jpg" },
      { rel: "apple-touch-icon", href: "/favicon.jpg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
      { rel: "canonical", href: "https://www.barristermuftinafees.co.uk/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Attorney",
          name: "Barrister Mufti Nafees",
          alternateName: "Mufti Islam",
          image: "https://www.barristermuftinafees.co.uk/favicon.jpg",
          url: "https://www.barristermuftinafees.co.uk",
          telephone: "+44 207 375 1274",
          email: "hello@barristermuftinafees.co.uk",
          jobTitle: "Solicitor & Partner",
          worksFor: { "@type": "LegalService", name: "Commonwealth Solicitors", url: "https://www.cwchambers.com" },
          address: {
            "@type": "PostalAddress",
            streetAddress: "2nd Floor, 10-12 Whitechapel Road",
            addressLocality: "London",
            postalCode: "E1 1EW",
            addressCountry: "GB",
          },
          sameAs: ["https://www.facebook.com/mufti.nafees", "https://www.cwchambers.com/en/our-team"],
          areaServed: "London, United Kingdom",
          knowsAbout: ["Immigration Law", "Asylum Law", "Nationality and EU Law", "Commercial Lease", "Landlord and Tenancy Disputes", "Money Claims"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteNav />
      <main className="pt-20">
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </QueryClientProvider>
  );
}
