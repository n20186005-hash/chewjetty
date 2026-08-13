import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import sharp from 'sharp';

const svg = await readFile(resolve('public/favicon.svg'));

const targets = [
  ['public/favicon-16.png', 16],
  ['public/favicon-32.png', 32],
  ['public/apple-touch-icon.png', 180],
  ['public/favicon-192.png', 192],
  ['public/favicon-512.png', 512],
];

for (const [path, size] of targets) {
  await sharp(svg, { density: 300 }).resize(size, size).png().toFile(resolve(path));
  console.log(`generated ${path} (${size}x${size})`);
}
