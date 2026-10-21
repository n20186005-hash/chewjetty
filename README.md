# Chew Jetty (Jeti Chew) — Panduan Pelancong

Panduan dalam Bahasa Melayu, English dan 中文 untuk Chew Jetty (Jeti Chew), kampung atas air warisan Cina di George Town, Pulau Pinang, Malaysia. Dibina dengan **Astro + Tailwind CSS + TypeScript**, di-deploy sebagai **Cloudflare Worker Static Assets**.

## Ciri

- Satu halaman dengan semua bahagian: Hero, Info Penting, Sejarah, Masa Terbaik, Tiket & Yuran, Tempat Letak Kereta, Makanan Berhampiran, Pengangkutan Terperinci, Tempat Berhampiran, Galeri Foto (lightbox), Senarai Perjalanan (localStorage), Peta Google & FAQ.
- Varian WebP dan imej sosial dijana oleh `scripts/optimize-images.mjs` semasa build.
- Tiga foto Chew Jetty bertarikh dalam `public/gallery/`, setiap satu dengan rekod sumber dan lesen dalam `src/data/photos.json`; galeri responsif dan lightbox dikekalkan.
- Senarai perjalanan interaktif: pengunjung boleh menanda aktiviti; data disimpan dalam `localStorage` sahaja, tidak dihantar ke pelayan.
- JSON-LD: `Organization`, `WebSite`; `TouristAttraction` dan `FAQPage` pada laman utama sahaja.
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

## Deploy ke Cloudflare Workers

`wrangler.toml` menggunakan Worker `src/index.ts` dan binding `ASSETS` bagi `dist/`.
Worker mengalihkan HTTP dan www ke HTTPS domain utama sambil mengekalkan laluan dan query, serta mengekalkan status 404 bagi URL yang tiada.
Nama projek sedia ada kekal `chew-jetty`; sahkan projek serta domain pada akaun sebelum deploy.

```bash
corepack pnpm build
corepack pnpm exec wrangler deploy --dry-run
corepack pnpm exec wrangler deploy
```

## Domain

Domain dikonfigurasikan di **satu tempat sahaja**: medan `site` dalam `astro.config.mjs` (boleh dibaca melalui pemboleh ubah persekitaran `CURRENT_SITE_DOMAIN`).

Apabila `site` kosong, projek tetap boleh dibina; pautan canonical / Open Graph menggunakan laluan relatif dan integrasi sitemap dimatikan secara automatik. Selepas domain sedia, isi di tempat tersebut dan bina semula — tiada penulisan domain di tempat lain.

## Struktur

```
public/
  gallery/chew-jetty-*-<hash>.jpg   # Tiga sumber foto dengan rekod masing-masing
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


## Photograph sources and licences

The three current photographs have separate records in `src/data/photos.json`: an entrance and a walkway view by Philip Mallis (30 April 2024, CC BY-SA 2.0), and a sea/mainland view attributed to Yuliarhm (18 May 2025, Commons own-work CC0 1.0 declaration). The third image is portrait-oriented through EXIF; the optimizer normalizes orientation before resizing. These dated views do not establish present conditions.

`PHOTO_CREDITS.md` maps the original file bytes to each source. Visible credits, source links, licence links, dates and transformation notices are served in all three homepage galleries and in the lightbox. Hero and introduction credits link to those records. The two BY-SA photographs and their resized/cropped/WebP/JPEG derivatives remain under CC BY-SA 2.0; the third retains its CC0 terms. Copyright language elsewhere applies to original site text/design, not to exclusive rights over these photographs. Attribution does not imply endorsement.

The optimizer verifies each original SHA256 and generates two WebPs per photo plus one entrance social crop under fresh names. The previous numbered originals and derivatives are removed from the current public tree; no claim is made about their photographers, source platform or reuse authority, and Git history is not rewritten.
