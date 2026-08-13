# Chew Jetty (Jeti Chew) — Panduan Pelancong

Laman web satu halaman (single-page) dalam Bahasa Melayu untuk Chew Jetty (Jeti Chew), kampung atas air warisan Cina di George Town, Pulau Pinang, Malaysia. Dibina dengan **Astro + Tailwind CSS + TypeScript**, di-deploy sebagai **Cloudflare Worker Static Assets**.

## Ciri

- Satu halaman dengan semua bahagian: Hero, Info Penting, Sejarah, Masa Terbaik, Tiket & Yuran, Tempat Letak Kereta, Makanan Berhampiran, Pengangkutan Terperinci, Tempat Berhampiran, Galeri Foto (lightbox), Senarai Perjalanan (localStorage), Peta Google & FAQ.
- Galeri foto sebenar Chew Jetty (19 gambar) dalam `public/gallery/`, disusun dengan grid responsif, lazy-loading dan klik-untuk-besarkan.
- Senarai perjalanan interaktif: pengunjung boleh menanda aktiviti; data disimpan dalam `localStorage` sahaja, tidak dihantar ke pelayan.
- JSON-LD struktur data: `TouristAttraction`, `LocalBusiness`, `FAQPage`.
- GA4: `G-HXM22WWPKP`.
- Logo & favicon SVG tempatan dengan simbol jambatan kampung atas air yang konsisten.

## Teknologi & Versi (dikunci)

- [Astro](https://astro.build) `5.18.2` + `@astrojs/tailwind` + `@astrojs/cloudflare` + `@astrojs/sitemap` + `@astrojs/check`
- Tailwind CSS `3.4.19`, TypeScript `5.8.3`
- Node.js `22.12.0` (lihat `.node-version` & `engines`)
- pnpm `9.15.9` (lihat `packageManager`, Corepack)
- Wrangler `4.x` untuk deploy ke Cloudflare Workers (Static Assets)

Semua versi ditulis secara tepat (tiada `^`, `latest`, atau julat terapung) dalam `package.json` dan diselaraskan dengan `pnpm-lock.yaml` (`--frozen-lockfile`).

## Pembangunan

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm dev       # atau: astro dev --background
```

## Semakan

```bash
corepack pnpm check     # astro check (tiada ralat)
corepack pnpm build     # bina ke dist/
```

## Deploy ke Cloudflare Pages

Fail `wrangler.toml` disediakan (nama `chew-jetty`, `pages_build_output_dir = "./dist"`). Deploy:

```bash
corepack pnpm build
npx wrangler pages deploy dist --project-name=chew-jetty
```

## Domain

Domain dikonfigurasikan di **satu tempat sahaja**: medan `site` dalam `astro.config.mjs` (boleh dibaca melalui pemboleh ubah persekitaran `CURRENT_SITE_DOMAIN`).

Apabila `site` kosong, projek tetap boleh dibina; pautan canonical / Open Graph menggunakan laluan relatif dan integrasi sitemap dimatikan secara automatik. Selepas domain sedia, isi di tempat tersebut dan bina semula — tiada penulisan domain di tempat lain.

## Struktur

```
public/
  gallery/chew-jetty-1..19.jpg   # Foto sebenar
  favicon.svg / favicon-16.svg / favicon-32.svg / apple-touch-icon.svg / logo.svg
  robots.txt / _headers / _redirects
src/
  pages/index.astro              # Satu halaman penuh
  layouts/BaseLayout.astro       # HTML + JSON-LD
  components/                    # BaseHead, Header, Footer, FaqAccordion, GA4
  consts.ts                      # Semua data kandungan
  styles/global.css              # Tema & gaya
  index.ts                       # Entry Worker (Cloudflare)
```

## Penafian

Laman web ini bukan laman web rasmi Chew Jetty; ia merupakan panduan pelancong bebas.
