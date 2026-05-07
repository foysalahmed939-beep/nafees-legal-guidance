import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/447958053876"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[oklch(0.72_0.18_145)] animate-ping opacity-30" />
      <span className="relative flex items-center gap-2 bg-[oklch(0.62_0.18_145)] hover:bg-[oklch(0.55_0.18_145)] text-white px-4 py-3 rounded-full shadow-elegant transition-all">
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline text-sm font-medium">Chat now</span>
      </span>
    </a>
  );
}
