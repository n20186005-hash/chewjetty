import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import sharp from 'sharp';
const photos=JSON.parse(fs.readFileSync('src/data/photos.json','utf8'));
assert.equal(photos.length,3);assert.equal(new Set(photos.map(p=>p.originalSHA256)).size,3);
const publicOriginals=fs.readdirSync('public/gallery').filter(f=>f.endsWith('.jpg')).sort();assert.deepEqual(publicOriginals,photos.map(p=>p.basename+'.jpg').sort());
for(const photo of photos){
 const bytes=fs.readFileSync(`public/gallery/${photo.basename}.jpg`);assert.equal(bytes.length,photo.originalBytes);assert.equal(createHash('sha1').update(bytes).digest('hex'),photo.originalSHA1);assert.equal(createHash('sha256').update(bytes).digest('hex'),photo.originalSHA256);assert(photo.basename.endsWith(photo.originalSHA256.slice(0,12)));
 const oriented=await sharp(bytes).rotate().raw().toBuffer({resolveWithObject:true});assert.equal(oriented.info.width,photo.displayWidth);assert.equal(oriented.info.height,photo.displayHeight);
 for(const width of [640,1600]){const file=`public/images/${photo.basename}-${width}.webp`;const actual=await sharp(file).removeAlpha().toColourspace('srgb').raw().toBuffer({resolveWithObject:true});const expected=await sharp(bytes).rotate().resize({width,withoutEnlargement:true}).removeAlpha().toColourspace('srgb').raw().toBuffer({resolveWithObject:true});assert.equal(actual.info.width,width);assert.equal(actual.info.height,expected.info.height);assert.equal(actual.data.length,expected.data.length);let difference=0;for(let i=0;i<actual.data.length;i++)difference+=Math.abs(actual.data[i]-expected.data[i]);const mae=difference/actual.data.length;assert(mae<8,`${photo.id} pixel mismatch: ${mae}`);console.log(`${photo.id} ${width}: original mapping, orientation and decode PASS; RGB MAE ${mae.toFixed(4)}`);assert.deepEqual(fs.readFileSync(file),fs.readFileSync(file.replace('public/','dist/')));}
}
const social=`public/images/${photos[0].basename}-social.jpg`;const socialMeta=await sharp(social).metadata();assert.equal(socialMeta.width,1200);assert.equal(socialMeta.height,630);assert.deepEqual(fs.readFileSync(social),fs.readFileSync(social.replace('public/','dist/')));
const actualSocial=await sharp(social).removeAlpha().raw().toBuffer();const expectedSocial=await sharp(`public/gallery/${photos[0].basename}.jpg`).rotate().resize(1200,630,{fit:'cover'}).removeAlpha().raw().toBuffer();assert.equal(actualSocial.length,expectedSocial.length);let socialDiff=0;for(let i=0;i<actualSocial.length;i++)socialDiff+=Math.abs(actualSocial[i]-expectedSocial[i]);assert(socialDiff/actualSocial.length<8);console.log('entrance social: original pixel mapping PASS; RGB MAE '+(socialDiff/actualSocial.length).toFixed(4));
const expectedOutputs=photos.flatMap(p=>[`${p.basename}-640.webp`,`${p.basename}-1600.webp`]).concat(photos[0].basename+'-social.jpg').sort();assert.deepEqual(fs.readdirSync('public/images').sort(),expectedOutputs);assert.deepEqual(fs.readdirSync('dist/images').sort(),expectedOutputs);
for(const lang of ['ms','en','zh']){
 const html=fs.readFileSync(lang==='ms'?'dist/index.html':`dist/${lang}/index.html`,'utf8');assert.equal((html.match(/class="gallery-thumb /g)||[]).length,3);assert(!/chew-jetty-\d+-(640|1600)\.webp|chew-jetty-social\.jpg/.test(html));
 const script=[...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m=>m[1]).find(s=>s.includes("querySelectorAll('.gallery-thumb')"));assert(script);
 const events={},thumbs=photos.map((_,i)=>({dataset:{index:String(i)},addEventListener(type,fn){this[type]=fn}})),credits=photos.map(()=>({hidden:true})),nodes={};const classes=new Set();
 for(const name of ['lightbox','lightbox-close','lightbox-prev','lightbox-next'])nodes[name]={addEventListener(type,fn){this[type]=fn},classList:{add:x=>classes.add(x),remove:x=>classes.delete(x),contains:x=>classes.has(x)}};
 nodes['lightbox-img']={src:'',alt:''};const body={style:{overflow:''}};
 const document={body,querySelectorAll:q=>q==='.gallery-thumb'?thumbs:credits,getElementById:id=>nodes[id],addEventListener:(type,fn)=>events[type]=fn};vm.runInNewContext(script,{document});
 const check=index=>{assert.equal(nodes['lightbox-img'].src,`/images/${photos[index].basename}-1600.webp`);assert.equal(nodes['lightbox-img'].alt,photos[index].copy[lang].alt);assert.deepEqual(credits.map(c=>c.hidden),photos.map((_,i)=>i!==index));};
 for(let i=0;i<3;i++){thumbs[i].click();check(i);assert(classes.has('active'));assert.equal(body.style.overflow,'hidden');nodes['lightbox-close'].click();assert(!classes.has('active'));assert.equal(body.style.overflow,'');}
 thumbs[0].click();nodes['lightbox-prev'].click({stopPropagation(){}});check(2);nodes['lightbox-next'].click({stopPropagation(){}});check(0);events.keydown({key:'ArrowRight'});check(1);events.keydown({key:'Escape'});assert(!classes.has('active'));
 thumbs[2].click();nodes.lightbox.click({target:nodes['lightbox-img']});assert(classes.has('active'));nodes.lightbox.click({target:nodes.lightbox});assert(!classes.has('active'));
 for(const photo of photos){assert(html.includes(photo.filePage));assert(html.includes(photo.licenseURL));assert(html.includes(photo.author));assert(html.includes(photo.date));assert(html.includes(photo.copy[lang].caption));}
 console.log(`${lang}: PASS three actual gallery callbacks, exact src/alt/visible credit mapping, prev/next wrapping, keyboard, backdrop/close, scroll restoration and served source/licence/author/date captions.`);
}
console.log('PASS per-photo original hashes, independently mapped derived pixels, EXIF portrait orientation, seven fresh generated names, three-image gallery/lightbox in all existing languages. Browser layout remains a separate gate.');
