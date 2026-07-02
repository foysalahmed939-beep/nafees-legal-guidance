import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function NotFoundPage() {
  usePageMeta("Page not found | Barrister Mufti Nafees");
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-serif text-foreground">404</h1>
        <p className="mt-4 text-muted-foreground">This page could not be found.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">Go home</Link>
      </div>
    </div>
  );
}
