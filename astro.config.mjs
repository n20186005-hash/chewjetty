import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// Domain utama: chewjetty.org.
// Boleh di-override semasa build dengan pemboleh ubah persekitaran CURRENT_SITE_DOMAIN
// (cth: CURRENT_SITE_DOMAIN=https://staging.example.com npm run build).
const SITE_URL = process.env.CURRENT_SITE_DOMAIN || 'https://chewjetty.org';

export default defineConfig({
  output: 'static',
  adapter: cloudflare({ imageService: 'cloudflare' }),
  site: SITE_URL || undefined,
  i18n: {
    defaultLocale: 'ms',
    locales: ['ms', 'en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    tailwind(),
    SITE_URL ? sitemap() : null,
  ].filter(Boolean),
});
