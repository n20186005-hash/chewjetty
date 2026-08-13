// 检查三份 i18n JSON：键结构一致性 + 跨语言字符/词汇混杂检测
import { readFileSync, existsSync } from 'node:fs';

const ms = JSON.parse(readFileSync('src/i18n/ms.json', 'utf8'));
const en = JSON.parse(readFileSync('src/i18n/en.json', 'utf8'));
const zh = JSON.parse(readFileSync('src/i18n/zh.json', 'utf8'));

const walk = (o, p = '') => {
  let r = [];
  for (const k in o) {
    const v = o[k];
    const np = p ? `${p}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) r = r.concat(walk(v, np));
    else r.push(np);
  }
  return r;
};

const flat = (o, p = '') => {
  let r = [];
  for (const k in o) {
    const v = o[k];
    const np = p ? `${p}.${k}` : k;
    if (typeof v === 'string') r.push([np, v]);
    else if (v && typeof v === 'object') r = r.concat(flat(v, np));
  }
  return r;
};

const keysOf = (o) => [...walk(o)].sort();
const mk = keysOf(ms), ek = keysOf(en), zk = keysOf(zh);
const same = (a, b) => a.join('\n') === b.join('\n');

console.log('=== 键结构一致性 ===');
console.log('ms vs en :', same(mk, ek));
console.log('ms vs zh :', same(mk, zk));
if (!same(mk, ek)) {
  console.log('  仅 ms :', mk.filter((x) => !ek.includes(x)).join(', '));
  console.log('  仅 en :', ek.filter((x) => !mk.includes(x)).join(', '));
}
if (!same(mk, zk)) {
  console.log('  仅 ms :', mk.filter((x) => !zk.includes(x)).join(', '));
  console.log('  仅 zh :', zk.filter((x) => !mk.includes(x)).join(', '));
}

// 数组长度一致性（键相同但数组元素数可能不同）
const arrLen = (o, p = '') => {
  let r = [];
  for (const k in o) {
    const v = o[k];
    const np = p ? `${p}.${k}` : k;
    if (Array.isArray(v)) r.push([np, v.length]);
    else if (v && typeof v === 'object') r = r.concat(arrLen(v, np));
  }
  return r;
};
const al = (o) => JSON.stringify([...arrLen(o)].sort((a, b) => a[0].localeCompare(b[0])));
const ae = al(en), az = al(zh);
console.log('=== 数组长度一致性 ===');
console.log('ms vs en :', al(ms) === ae);
console.log('ms vs zh :', al(ms) === az);
if (al(ms) !== ae) {
  const am = arrLen(ms), bm = arrLen(en);
  am.filter(([k]) => !bm.some(([k2]) => k2 === k)).forEach(([k, l]) => console.log(`  仅 ms ${k}=${l}`));
  bm.filter(([k]) => !am.some(([k2]) => k2 === k)).forEach(([k, l]) => console.log(`  仅 en ${k}=${l}`));
}
if (al(ms) !== az) {
  const am = arrLen(ms), bz = arrLen(zh);
  am.filter(([k]) => !bz.some(([k2]) => k2 === k)).forEach(([k, l]) => console.log(`  仅 ms ${k}=${l}`));
  bz.filter(([k]) => !am.some(([k2]) => k2 === k)).forEach(([k, l]) => console.log(`  仅 zh ${k}=${l}`));
}

const CJK = /[\u4e00-\u9fff]/;
const malayWords = /\b(yang|untuk|adalah|dengan|bagi|kepada|waktu|yuran|alamat|tempat|jalan|masa|buka|tutup|kuki|pelawat|perkhidmatan|pengguna|makanan|pengangkutan|sejarah|budaya)\b/i;
const latinSentence = /^[A-Za-z][A-Za-z .'",:;()\-–—!?/0-9]{10,}$/;

const show = (label, hits) => console.log(`=== ${label} ===\n${hits.map(([p, v]) => `${p} = ${v}`).join('\n') || '(无)'}`);

show('ms 中的中文 (CJK)', flat(ms).filter(([, v]) => CJK.test(v)));
show('en 中的中文 (CJK)', flat(en).filter(([, v]) => CJK.test(v)));
show('zh 中的马来语词汇', flat(zh).filter(([, v]) => v.length > 4 && malayWords.test(v)));
show('zh 中的疑似英文长句', flat(zh).filter(([, v]) => v.length > 10 && latinSentence.test(v)));

// === dist 构建产物检查 ===
const distFiles = {
  ms: 'dist/index.html',
  en: 'dist/en/index.html',
  zh: 'dist/zh/index.html',
};
const strip = (h) =>
  h
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/g, ' ');
const ctx = (t, pat, n = 3) => {
  const out = [];
  const re = new RegExp(pat, 'g');
  let m;
  let i = 0;
  while ((m = re.exec(t)) && i < n) {
    out.push(t.slice(Math.max(0, m.index - 70), m.index + 70).replace(/\s+/g, ' '));
    i++;
  }
  return out;
};

console.log('\n=== dist 各语言页文本混杂 ===');
for (const [lang, f] of Object.entries(distFiles)) {
  if (!existsSync(f)) {
    console.log(`${lang}: 缺少 ${f}`);
    continue;
  }
  const text = strip(readFileSync(f, 'utf8'));
  const cjk = [...new Set(text.match(CJK) || [])].slice(0, 8);
  const mal = [...new Set((text.match(malayWords) || []).map((w) => w.toLowerCase()))];
  console.log(`--- ${lang} (${f}) ---`);
  console.log('  CJK 字符:', cjk.length ? cjk.join(', ') : '(无)');
  console.log('  马来语词:', mal.length ? mal.join(', ') : '(无)');
}

console.log('\n=== 上下文定位 ===');
console.log('EN 页 "中" 来源:');
ctx(readFileSync(distFiles.en, 'utf8'), '中', 3).forEach((s) => console.log('  ...' + s + '...'));
console.log('EN 页 "info" 来源:');
ctx(readFileSync(distFiles.en, 'utf8'), 'info', 3).forEach((s) => console.log('  ...' + s + '...'));
console.log('MS 页 "中" 来源:');
ctx(readFileSync(distFiles.ms, 'utf8'), '中', 3).forEach((s) => console.log('  ...' + s + '...'));
console.log('ZH 页 马来语锚点 id 是否可见（应只出现在 href 中）:');
ctx(readFileSync(distFiles.zh, 'utf8'), 'sejarah', 2).forEach((s) => console.log('  ...' + s + '...'));
