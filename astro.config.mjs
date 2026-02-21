import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import rehypeMermaid from 'rehype-mermaid';
import rehypeShiki from '@shikijs/rehype';

// https://astro.build/config
// site: used for canonical URLs, Open Graph, sitemaps, and absolute asset URLs
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://helpmaton.com',
  trailingSlash: 'never',
  integrations: [tailwind(), icon()],
  markdown: {
    // Disable built-in syntax highlighting so rehype-mermaid runs on raw pre/code
    // (otherwise Shiki transforms the block before rehype-mermaid can replace it)
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypeMermaid,
        {
          strategy: 'inline-svg',
          mermaidConfig: { theme: 'dark' },
        },
      ],
      [rehypeShiki, { theme: 'github-dark' }],
    ],
  },
});
