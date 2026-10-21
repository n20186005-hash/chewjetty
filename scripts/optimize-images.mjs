import sharp from 'sharp';
import { mkdir, readFile, readdir, unlink } from 'node:fs/promises';
import { createHash } from 'node:crypto';
const photos = JSON.parse(await readFile('src/data/photos.json', 'utf8'));
await mkdir('public/images', { recursive: true });
// Retire only the old numbered derivatives and old social cover.
for (const name of await readdir('public/images')) {
  if (/^chew-jetty-\d+-(?:640|1600)\.webp$|^chew-jetty-social\.jpg$/.test(name)) await unlink('public/images/' + name);
}
for (const photo of photos) {
  const source = `public/gallery/${photo.basename}.jpg`;
  const bytes = await readFile(source);
  if (bytes.length !== photo.originalBytes || createHash('sha256').update(bytes).digest('hex') !== photo.originalSHA256) throw Error('Photo source does not match its provenance record: ' + photo.id);
  for (const width of [640, 1600]) {
    await sharp(bytes).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(`public/images/${photo.basename}-${width}.webp`);
  }
}
await sharp(`public/gallery/${photos[0].basename}.jpg`).rotate().resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82 }).toFile(`public/images/${photos[0].basename}-social.jpg`);
console.log('Generated six WebP variants and one social JPEG from three separately verified photo records.');
