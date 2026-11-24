from pathlib import Path
import urllib.request,hashlib,json,datetime,xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor
ROOT=Path(__file__).resolve().parents[3]
D=Path(__file__).resolve().parent
pages=json.loads((D/'neue-seiten.json').read_text())
items=[(p['url'],p['path']) for p in pages]+[('https://www.function-concept.com'+p['image'],p['image'].lstrip('/')) for p in pages]+[('https://www.function-concept.com/'+u,f) for u,f in [('ratgeber','ratgeber/index.html'),('blog','blog/index.html'),('blog/kundengewinnung','blog/kundengewinnung/index.html'),('blog/kategorien','blog/kategorien.html'),('sitemap.xml','sitemap.xml')]]
def get(item):
 u,f=item
 with urllib.request.urlopen(urllib.request.Request(u,headers={'User-Agent':'FunctionConcept-SEO-QA/1.0'}),timeout=60) as r:
  b=r.read();expected=(ROOT/f).read_bytes()
  result={'url':u,'final_url':r.url,'status':r.status,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest(),'repository_equal':b==expected,'checked_at_utc':datetime.datetime.now(datetime.timezone.utc).isoformat()}
  assert r.status==200 and r.url==u and b==expected,result
  if f=='sitemap.xml':
   locs=[x.text for x in ET.fromstring(b).findall('{*}url/{*}loc')];assert len(locs)==len(set(locs))
   for p in pages:assert locs.count(p['url'])==1
   assert locs.count('https://www.function-concept.com/ratgeber')==1
  return result
results=list(ThreadPoolExecutor(max_workers=5).map(get,items))
(D/'live-check.json').write_text(json.dumps(results,ensure_ascii=False,indent=2)+'\n')
print('PASS',len(results),'public resources: HTTP 200, final canonical URL, byte-identical to repository; sitemap includes all new URLs once')
