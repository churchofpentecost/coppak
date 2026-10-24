import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';

// The upload connector limits individual payloads. Preserve the original PDF
// as three source chunks and verify its exact bytes before publishing it.
const source = new URL('../source-reports/vbs-2026/', import.meta.url);
const manifest = JSON.parse(await readFile(new URL('manifest.json', source), 'utf8'));
const report = Buffer.concat(await Promise.all(manifest.parts.map(part => readFile(new URL(part, source)))));
if (createHash('sha256').update(report).digest('hex') !== manifest.sha256) {
  throw new Error('VBS report integrity check failed');
}
const output = new URL('../public/reports/', import.meta.url);
await mkdir(output, { recursive: true });
await writeFile(new URL('vbs-pakistan-2026-impact-report.pdf', output), report);
console.log('Original VBS report restored and SHA-256 verified.');
