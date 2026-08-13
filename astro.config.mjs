import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// Domain boleh ditetapkan kemudian di sini sahaja.
// Jika kosong, canonical / OG / sitemap akan degradasi dengan anggun tanpa menulis domain palsu.
const SITE_URL = process.env.CURRENT_SITE_DOMAIN || '';

export default defineConfig({
  output: 'static',
  adapter: cloudflare({ imageService: 'cloudflare' }),
  site: SITE_URL || undefined,
  integrations: [
    tailwind(),
    SITE_URL ? sitemap() : null,
  ].filter(Boolean),
});
