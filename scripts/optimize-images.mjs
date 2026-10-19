import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
await mkdir('public/images', { recursive: true });
for (let i = 1; i <= 19; i++) {
  for (const width of [640, 1600]) {
    await sharp(`public/gallery/chew-jetty-${i}.jpg`).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(`public/images/chew-jetty-${i}-${width}.webp`);
  }
}
await sharp('public/gallery/chew-jetty-14.jpg').rotate().resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile('public/images/chew-jetty-social.jpg');
console.log('Generated 38 WebP images and the social cover.');
