export const prerender = true;

export function GET() {
  const site = import.meta.env.SITE ?? "https://helpmaton.com";
  const base = site.replace(/\/$/, "");
  const sitemapUrl = `${base}/sitemap.xml`;

  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "max-age=3600",
    },
  });
}
