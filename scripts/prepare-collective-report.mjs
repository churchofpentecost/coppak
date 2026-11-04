// Build an illustrated downloadable WEB EDITION from existing COP Pakistan site assets.
// This is not a byte-for-byte copy of the separate 11-page archival report.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const photoRoot = join(root, 'public/assets/images/coppak/projects/collective-marriages');
const output = join(root, 'public/reports/breaking-the-chains-collective-weddings-web-edition.pdf');
const pages = [
 {heading:'Breaking the Chains of Generational Slavery', caption:'Eighteen weddings bring hope and practical support to families in Sheikhupura', paragraphs:['THE CHURCH OF PENTECOST - PAKISTAN | SHEIKHUPURA DISTRICT | DECEMBER 6, 2024','18 couples married. 36 families reached. More than 2,000 guests welcomed. 18 households equipped.','The brides families outstanding brick-kiln debts were cleared as part of the initiative; the bridegrooms families were already debt-free.']},
 {heading:'Eighteen New Beginnings',caption:'A request for one wedding grew into a celebration for eighteen couples',paragraphs:['In January 2024, sixteen mothers, most of them widows, appealed to church leaders for help. Their families were struggling with brick-kiln debt and feared that their daughters would inherit the same hardships.','The Church of Pentecost Pakistan listened, prayed, and planned a collective wedding initiative. Two additional families were included, bringing the total to eighteen.']},
 {heading:'The Mothers Plea',caption:'Families hoped their daughters could begin lives without new debt',paragraphs:['Sixteen women explained the strain of exhausting work, debt deductions and uncertainty about their childrens futures. Some families had lived under the burden of kiln-related debt for two generations.','One mother asked Rev. Dr. Jamil Nasir to select just one daughter by lottery for wedding support; the others would rejoice even if just one could be helped. The church committed to supporting all of them.']},
 {heading:'Preparation and Celebration',caption:'A brick kiln became a place of shared joy',paragraphs:['Local pastors worked with families for nearly eleven months, coordinating the wedding arrangements, food, hospitality and essential furnishings.','The kiln owner agreed to make the venue available and to suspend brick production for the day. More than 2,000 people gathered to celebrate on December 6, 2024.']},
 {heading:'The Wedding Service',caption:'Couples, leaders, families and guests gathered for a service of prayer',paragraphs:['Eighteen couples celebrated their marriages in the presence of their relatives and community. The church provided pastoral care and prayer throughout the occasion.','For the mothers who had once requested support for only one daughter, the shared celebration became an answer to prayer.']},
 {heading:'Practical Support',caption:'The church furnished eighteen new households',paragraphs:['Each couple received essential household goods, including beds, sofas, tables, cabinets and crockery. Buildings were not provided.','The gifts helped the couples establish their homes and reduced immediate pressure to borrow for essential items. The initiative reached 36 families across both sides of the marriages.']},
 {heading:'Addressing Family Debt',caption:'Practical compassion included debt settlement',paragraphs:['The outstanding kiln debts of the brides families were cleared as part of the initiative. The bridegrooms families were already debt-free.','Debt relief and the provision of furnishings were intended to offer a more stable beginning to married life.']},
 {heading:'Faith Expressed Through Compassion',caption:'Love through action, prayer and pastoral service',paragraphs:['The Church of Pentecost Pakistan believes that Gospel witness includes responding to peoples practical needs. Material assistance was offered alongside fellowship, encouragement and spiritual care.','Let us not love in word, neither in tongue; but in deed and in truth. - 1 John 3:18 (KJV)']},
 {heading:'A Shared Celebration',caption:'An event remembered by families and the wider community',paragraphs:['This collective wedding event brought together couples, relatives, church leaders and members of the local community.','The celebration was not the end of the churchs relationship with the families: fellowship and pastoral encouragement continued afterwards.']},
 {heading:'Looking to the Future',caption:'Praying for strong marriages, safe livelihoods and opportunities',paragraphs:['Our prayer is that the eighteen couples will continue to grow in faith, strengthen their households and build lives with greater stability.','We remember other mothers and children still facing hardship in brick-kiln communities.']},
 {heading:'Pray and Partner With Us',caption:'Walk alongside vulnerable families in Pakistan',paragraphs:['Churches, ministries and individuals are invited to explore practical ways to support families facing hardship in brick-kiln communities.','Contact: info@coppak.org | Website: coppak.org','WEB EDITION: This illustrated summary uses photographs from the existing COP Pakistan collective-marriages website archive. It is not a reproduction of the separate original 11-page photo report.']}
];
const ascii = s => s.replace(/[\u2018\u2019]/g,"'").replace(/[\u2013\u2014]/g,'-').replace(/[\u201c\u201d]/g,'"').replace(/[^\x20-\x7e]/g,'');
const esc = s => ascii(s).replace(/([\\()])/g,'\\$1');
const wrap = (text,max=93) => {let words=ascii(text).split(/\s+/),lines=[],line='';for(let w of words){if((line+' '+w).trim().length>max){if(line)lines.push(line);line=w;}else line=(line+' '+w).trim();}if(line)lines.push(line);return lines;};
const jpegSize = b => {let i=2;while(i<b.length){if(b[i]!==255){i++;continue;}let mark=b[i+1];if([0xC0,0xC1,0xC2,0xC3,0xC5,0xC6,0xC7,0xC9,0xCA,0xCB,0xCD,0xCE,0xCF].includes(mark)) return {h:b.readUInt16BE(i+5),w:b.readUInt16BE(i+7)}; if(mark===0xD8||mark===0xD9){i+=2;continue;}const len=b.readUInt16BE(i+2);if(len<2)break;i+=2+len;}return {w:1200,h:800};};
const objects=[null];
const add = b => {objects.push(Buffer.isBuffer(b)?b:Buffer.from(b,'binary'));return objects.length-1;};
const font = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
const bold = add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');
const photoBuffers=await Promise.all(pages.map(async (_,i)=>{try{return await readFile(join(photoRoot,String(i+1).padStart(2,'0')+'.jpg'));}catch{return null;}}));
const imageIds=photoBuffers.map(b=>{if(!b)return null;const {w,h}=jpegSize(b);return {id:add(Buffer.concat([Buffer.from('<< /Type /XObject /Subtype /Image /Width '+w+' /Height '+h+' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length '+b.length+' >>\nstream\n'),b,Buffer.from('\nendstream')])),w,h};});
const pageIds=[];
for(let i=0;i<pages.length;i++){
 const p=pages[i];let ops=[];
 ops.push('0.08 0.22 0.23 rg 0 744 612 48 re f','1 1 1 rg BT /F2 12 Tf 40 762 Td (THE CHURCH OF PENTECOST - PAKISTAN) Tj ET');
 ops.push('0.08 0.22 0.23 rg BT /F2 20 Tf 40 711 Td ('+esc(p.heading).slice(0,100)+') Tj ET');
 ops.push('0.35 0.40 0.39 rg BT /F1 11 Tf 40 687 Td ('+esc(p.caption).slice(0,108)+') Tj ET');
 const im=imageIds[i];let imgBottom=300;
 if(im){const scale=Math.min(530/im.w,350/im.h);const iw=im.w*scale,ih=im.h*scale;imgBottom=640-ih;ops.push('q '+iw.toFixed(2)+' 0 0 '+ih.toFixed(2)+' '+((612-iw)/2).toFixed(2)+' '+imgBottom.toFixed(2)+' cm /Im1 Do Q');}
 let y=imgBottom-27;
 for(const para of p.paragraphs){for(const line of wrap(para,94)){ops.push('0.15 0.20 0.20 rg BT /F1 10.5 Tf 42 '+y.toFixed(1)+' Td ('+esc(line)+') Tj ET');y-=15;}y-=13;}
 ops.push('0.55 0.55 0.55 rg BT /F1 9 Tf 42 30 Td (Sheikhupura 2024 | Illustrated website edition | '+(i+1)+' / '+pages.length+') Tj ET');
 const contents=Buffer.from(ops.join('\n'),'binary');const cid=add(Buffer.concat([Buffer.from('<< /Length '+contents.length+' >>\nstream\n'),contents,Buffer.from('\nendstream')]));
 const xobjs=im?'/XObject << /Im1 '+im.id+' 0 R >>':'';
 const pid=add('<< /Type /Page /Parent @PAGES@ /MediaBox [0 0 612 792] /Resources << /Font << /F1 '+font+' 0 R /F2 '+bold+' 0 R >> '+xobjs+' >> /Contents '+cid+' 0 R >>');
 pageIds.push(pid);
}
const pagesId=add('<< /Type /Pages /Count '+pageIds.length+' /Kids ['+pageIds.map(id=>id+' 0 R').join(' ')+'] >>');
for(const id of pageIds)objects[id]=Buffer.from(objects[id].toString().replace('@PAGES@',pagesId+' 0 R'),'binary');
const catalog=add('<< /Type /Catalog /Pages '+pagesId+' 0 R >>');
let chunks=[Buffer.from('%PDF-1.4\n%\xD3\xE4\xF5\xF6\n','binary')],offsets=[0],offset=chunks[0].length;
for(let i=1;i<objects.length;i++){offsets[i]=offset;const buf=Buffer.concat([Buffer.from(i+' 0 obj\n'),objects[i],Buffer.from('\nendobj\n')]);chunks.push(buf);offset+=buf.length;}
const start=offset;chunks.push(Buffer.from('xref\n0 '+objects.length+'\n0000000000 65535 f \n'+offsets.slice(1).map(v=>String(v).padStart(10,'0')+' 00000 n \n').join('')+'trailer\n<< /Size '+objects.length+' /Root '+catalog+' 0 R >>\nstartxref\n'+start+'\n%%EOF\n'));
await mkdir(join(root,'public/reports'),{recursive:true});await writeFile(output,Buffer.concat(chunks));
console.log('Created illustrated web edition:',output);
