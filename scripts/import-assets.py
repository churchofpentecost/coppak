"""One-time, hash-verified import of the existing public website assets."""
import concurrent.futures
import hashlib
import json
from pathlib import Path
import urllib.parse
import urllib.request

ROOT = Path(__file__).resolve().parent.parent
items = json.loads((ROOT / 'scripts/source-assets.json').read_text())

def download(item):
    relative = Path(item['path'])
    if relative.is_absolute() or '..' in relative.parts:
        raise ValueError('Unsafe asset path')
    target = ROOT / 'public' / relative
    if target.exists() and hashlib.sha256(target.read_bytes()).hexdigest() == item['sha256']:
        return
    url = 'https://coppak.org/' + urllib.parse.quote(relative.as_posix(), safe='/')
    for attempt in range(3):
        try:
            request = urllib.request.Request(url, headers={'User-Agent': 'COPPAK-authorized-migration/1.0'})
            with urllib.request.urlopen(request, timeout=60) as response:
                data = response.read()
            if hashlib.sha256(data).hexdigest() != item['sha256']:
                raise ValueError('Asset checksum differs: ' + relative.as_posix())
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_bytes(data)
            return
        except Exception:
            if attempt == 2:
                raise

with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
    list(pool.map(download, items))
print(f'Imported and verified {len(items)} original assets.')
