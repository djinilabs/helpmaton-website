import { getCollection } from "astro:content";

export const prerender = true;

const staticRoutes = [
  "",
  "/ads",
  "/ads/automation",
  "/ads/beyond-chat",
  "/ads/choose-any-ai",
  "/ads/memory",
  "/ads/notion-for-agents",
  "/ads/support",
  "/agnostic",
  "/api-reference",
  "/blog",
  "/contact",
  "/demos",
  "/documentation",
  "/faq",
  "/getting-started",
  "/lp",
  "/privacy",
  "/producthunt",
  "/reddit",
  "/terms-of-service",
];

/** Escape for XML so <loc> is valid per sitemaps.org (e.g. &, <, >, ", ') */
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function urlElement(loc: string, lastmod?: string): string {
  const escapedLoc = escapeXml(loc);
  const lastmodTag = lastmod ? `\n    <lastmod>${escapeXml(lastmod)}</lastmod>` : "";
  return `  <url>\n    <loc>${escapedLoc}</loc>${lastmodTag}\n  </url>`;
}

export async function GET() {
  const site = import.meta.env.SITE ?? "https://helpmaton.com";
  const base = site.replace(/\/$/, "");

  const blogPosts = await getCollection("blog", ({ data }) => !data.draft);
  const blogUrls = blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    lastmod: post.data.pubDate.toISOString().slice(0, 10),
  }));

  const staticUrls = staticRoutes.map((path) => ({
    path: path || "/",
    lastmod: undefined as string | undefined,
  }));

  const urls = [
    ...staticUrls.map(({ path }) =>
      urlElement(path === "/" ? `${base}/` : `${base}${path}`),
    ),
    ...blogUrls.map(({ path, lastmod }) =>
      urlElement(`${base}${path}`, lastmod),
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "max-age=3600",
    },
  });
}
