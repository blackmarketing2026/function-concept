"""Nonvisual public HTTP check. Does not request protected pages."""
from pathlib import Path
from urllib.request import Request, urlopen
from concurrent.futures import ThreadPoolExecutor
import hashlib, json
from datetime import datetime, timezone
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[3]
HERE = Path(__file__).resolve().parent
DOMAIN = 'https://www.function-concept.com'
PAGES = ['ratgeber/suchmaschinenwerbung-agentur-auswaehlen.html',
 'blog/kundengewinnung/werbekonto-zugriffe-agenturwechsel.html',
 'blog/kundengewinnung/agenturberichte-kundenanfragen-bewerten.html',
 'blog/kundengewinnung/seo-und-suchmaschinenwerbung-unterschied.html']
ASSETS = ['medien/blog/kundengewinnung/agentur-'+s+'.svg' for s in ['auswahl','zugriffe','berichte']]+['medien/blog/kundengewinnung/seo-suchwerbung.svg']
OVERVIEWS = ['blog/index.html','blog/kategorien.html','blog/kundengewinnung/index.html','blog/webseite/index.html']
def check_file(path):
    url = DOMAIN+'/'+path.removesuffix('.html').removesuffix('/index')
    with urlopen(Request(url,headers={'User-Agent':'FunctionConcept-SEO-QA/1.0'}),timeout=30) as r:
        data=r.read(); status=r.status; final=r.url
    expected=(ROOT/path).read_bytes()
    assert status==200 and final==url, (url,status,final)
    assert data==expected, ('content mismatch',path)
    if path=='sitemap.xml':
        root=ET.fromstring(data)
        locs=[x.text for x in root.findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url/{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
        assert len(locs)==len(set(locs))
        for p in PAGES: assert locs.count(DOMAIN+'/'+p[:-5])==1
    return {'url':url,'status':status,'finalUrl':final,'matchesRepository':True,'sha256':hashlib.sha256(data).hexdigest()}
with ThreadPoolExecutor(max_workers=5) as pool:
    checks=list(pool.map(check_file,PAGES+ASSETS+OVERVIEWS+['sitemap.xml']))
redirects=[]
for domain in ['https://function-concept.de','https://function-concept.com']:
    url=domain+'/blog/kategorien'
    with urlopen(Request(url,headers={'User-Agent':'FunctionConcept-SEO-QA/1.0'}),timeout=30) as r:
        assert r.status==200 and r.url==DOMAIN+'/blog/kategorien'
        redirects.append({'requested':url,'finalUrl':r.url,'status':r.status})
result={'checkedAtUTC':datetime.now(timezone.utc).isoformat(),'checks':checks,'domainChecks':redirects,'newURLs':0}
(HERE/'live-check.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
print('PASS',len(checks),'live files byte-identical; XML/URLs and two domain redirects verified')
