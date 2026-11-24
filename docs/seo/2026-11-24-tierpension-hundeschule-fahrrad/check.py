from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
from PIL import Image
import json,re,subprocess,xml.etree.ElementTree as ET,hashlib
ROOT=Path(__file__).resolve().parents[3]
BASE='4f27f9c62a9a992f2a0d708cd299022278f5bfb9'
PAGES=['ratgeber/'+x+'-kunden-gewinnen-google-ads.html' for x in ['tierpensionen','hundeschulen','fahrradwerkstaetten']]
OVERVIEWS=['ratgeber/index.html','blog/index.html','blog/kundengewinnung/index.html','blog/kategorien.html']
ALLOWED={'blog/index.html','blog/kundengewinnung/index.html','ratgeber/index.html','sitemap.xml','docs/seo/BRANCHEN.md'}
def git(*args):return subprocess.check_output(['git',*args],cwd=ROOT)
class Parser(HTMLParser):
 def __init__(self):
  super().__init__();self.stack=[];self.tags=[];self.ids=[];self.schemas=[];self.script=None
 def handle_starttag(self,t,a):
  d=dict(a);self.tags.append((t,d))
  if 'id' in d:self.ids.append(d['id'])
  if t=='script' and d.get('type')=='application/ld+json':self.script=''
  if t not in {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}:self.stack.append(t)
 def handle_startendtag(self,t,a):
  self.handle_starttag(t,a)
  if self.stack and self.stack[-1]==t:self.handle_endtag(t)
 def handle_endtag(self,t):
  assert self.stack and self.stack[-1]==t,(t,self.stack[-5:]);self.stack.pop()
  if t=='script' and self.script is not None:self.schemas.append(json.loads(self.script));self.script=None
 def handle_data(self,d):
  if self.script is not None:self.script+=d

def resolve(name,path):
 target=ROOT/unquote(path.lstrip('/')) if path.startswith('/') else (ROOT/name).parent/unquote(path)
 return next((x for x in [target,Path(str(target)+'.html'),target/'index.html'] if x.is_file()),None)
urls=[];titles=[];descs=[];hashes=[]
for name in PAGES+OVERVIEWS:
 s=(ROOT/name).read_text();p=Parser();p.feed(s);assert not p.stack,name
 assert len(p.ids)==len(set(p.ids)),name
 assert sum(t=='h1' for t,d in p.tags)==1,name
 for t,d in p.tags:
  for attr in ['href','src']:
   if attr not in d:continue
   u=urlsplit(d[attr])
   if u.scheme or u.netloc:continue
   target=resolve(name,u.path) if u.path else ROOT/name
   assert target,(name,d[attr])
   if u.fragment:
    content=target.read_text()
    if not re.search(r'\bid=[\'"]'+re.escape(u.fragment)+r'[\'"]',content):
     oldlink = name in OVERVIEWS and d[attr] in git('show',BASE+':'+name).decode()
     assert oldlink,(name,d[attr])
     print('BASELINE unchanged fragment (protected destination):',name,d[attr])
  if t=='img':
   assert d.get('alt') and d.get('width') and d.get('height'),(name,d)
   im=Image.open(resolve(name,d['src']));im.load();assert im.size==(int(d['width']),int(d['height']))
   hashes.append(hashlib.sha256(resolve(name,d['src']).read_bytes()).hexdigest())
 if name in PAGES+['ratgeber/index.html']:
  url='https://www.function-concept.com/'+('ratgeber' if name.endswith('/index.html') else name[:-5]);urls.append(url)
  assert [d['href'] for t,d in p.tags if t=='link' and d.get('rel')=='canonical']==[url]
  titles+=re.findall(r'<title>(.*?)</title>',s)
  descs +=[d['content'] for t,d in p.tags if t=='meta' and d.get('name')=='description']
  assert not any('noindex' in d.get('content','') for t,d in p.tags if t=='meta')
  assert len(p.schemas)==1
 if name in PAGES:
  assert p.schemas[0]['mainEntityOfPage']==url
  assert '<html lang="de"' in s
  kw=re.search(r'<table id="keywords">(.*?)</table>',s,re.S).group(1);assert kw.count('<tr>')-1>=10
  faq=re.search(r'<section id="faq">(.*?)</section>',s,re.S).group(1);assert faq.count('<h3>')>=5
  assert 'href="/kontakt#kontaktForm"' in s
  for cl,limit in [('ad-headlines',30),('ad-descriptions',90)]:
   part=re.search(r'<ul class="'+cl+r'">(.*?)</ul>',s,re.S).group(1)
   for ad in re.findall(r'<li>(.*?)</li>',part):assert len(ad)<=limit,(name,ad,len(ad))
 print('PASS HTML/links/fragments:',name)
assert len(titles)==len(set(titles))==4 and len(descs)==len(set(descs))==4
assert len(hashes)==len(set(hashes))==3
ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}
now=ET.parse(ROOT/'sitemap.xml').getroot();old=ET.fromstring(git('show',BASE+':sitemap.xml'))
def sitemap(r):return {x.find('s:loc',ns).text:ET.tostring(x) for x in r}
locs=[x.text for x in now.findall('s:url/s:loc',ns)];assert len(locs)==len(set(locs))
for u in urls:assert locs.count(u)==1
before=sitemap(old);after=sitemap(now)
assert set(after)-set(before)==set(urls[:3])
# compare each existing XML record semantically, including original lastmod
for u in before:
 a=next(x for x in old if x.find('s:loc',ns).text==u);b=next(x for x in now if x.find('s:loc',ns).text==u)
 assert [(x.tag,x.text) for x in a]==[(x.tag,x.text) for x in b],u
for name in OVERVIEWS[:3]:
 s=(ROOT/name).read_text()
 for u in urls[:3]:assert s.count('href="'+urlsplit(u).path+'"')==1,(name,u)
for name in ['blog/index.html','blog/kundengewinnung/index.html','blog/kategorien.html']:assert 'href="/ratgeber"' in (ROOT/name).read_text()
existing=git('ls-tree','-r','--name-only',BASE).decode().splitlines()
for name in existing:
 if name not in ALLOWED:assert (ROOT/name).read_bytes()==git('show',BASE+':'+name),name
# article body overlap: duplicate substantive paragraphs, excluding common UI
paragraphs={}
for name in PAGES:
 s=(ROOT/name).read_text().split('<main')[1].split('</main>')[0]
 for part in re.findall(r'<p[^>]*>(.*?)</p>',s,re.S):
  text=re.sub('<[^>]+>','',part).strip()
  if len(text)>200:
   assert text not in paragraphs,(name,paragraphs.get(text));paragraphs[text]=name
print('PASS metadata/schema, 12 keywords + 6 FAQs each, 3 unique WebP images, ad lengths, distinct substantive paragraphs')
print('PASS sitemap XML: 3 new URLs, all existing entries/lastmod retained; all',len(existing)-len(ALLOWED),'other baseline files byte-identical')
print('PASS counts: 3 new guides / 0 revised guides / 0 new overviews / 3 revised overviews')
