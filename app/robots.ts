import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// I crawler dei motori AI sono ammessi esplicitamente: servono per essere citati
// nelle risposte di ChatGPT, Perplexity, Claude e Google AI Overviews.
const aiCrawlers = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Claude-SearchBot", "Google-Extended"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
