import { useEffect } from "react";

const SITE_URL = "https://www.barristermuftinafees.co.uk";

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let tag = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    for (const [k, v] of Object.entries(attrs)) {
      if (k !== "content") tag.setAttribute(k, v);
    }
    document.head.appendChild(tag);
  }
  if (attrs.content) tag.setAttribute("content", attrs.content);
}

function upsertLink(rel: string, href: string) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    document.title = title;

    const url = SITE_URL + window.location.pathname;

    if (description) {
      upsertMeta('meta[name="description"]', { name: "description", content: description });
      upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
      upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    }

    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });

    upsertLink("canonical", url);
  }, [title, description]);
}
