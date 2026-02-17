import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// https://astro.build/config
// site: used for canonical URLs, Open Graph, sitemaps, and absolute asset URLs
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://helpmaton.com',
  trailingSlash: 'never',
  integrations: [tailwind(), icon()],
});
