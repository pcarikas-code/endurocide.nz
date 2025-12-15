import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title,
  description,
  keywords = "Endurocide, antimicrobial curtains, hospital curtains, infection control, healthcare curtains, disposable curtains",
  image = "/og-image.jpg",
  url = window.location.href,
  type = "website",
}: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = `${title} | Endurocide® New Zealand`;

    // Update meta tags
    const metaTags = {
      description: description,
      keywords: keywords,
      "og:title": title,
      "og:description": description,
      "og:image": image,
      "og:url": url,
      "og:type": type,
      "twitter:card": "summary_large_image",
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": image,
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      let element = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(name.startsWith("og:") ? "property" : "name", name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    });

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

  }, [title, description, keywords, image, url, type]);

  return null;
}
