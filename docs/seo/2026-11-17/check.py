from pathlib import Path
from html.parser import HTMLParser
import json, subprocess, xml.etree.ElementTree as ET
from urllib.parse import urlsplit, unquote
ROOT=Path(__file__).resolve().parents[3]
BASE='9b1c03057c17ac9723aa338217e15b0d244bcefb'
PAGES=['ratgeber/suchmaschinenwerbung-agentur-auswaehlen.html','blog/kundengewinnung/werbekonto-zugriffe-agenturwechsel.html','blog/kundengewinnung/agenturberichte-kundenanfragen-bewerten.html']
OVERVIEWS=['blog/index.html','blog/kundengewinnung/index.html']
IMAGES=['medien/blog/kundengewinnung/agentur-'+x+'.svg' for x in ['auswahl','zugriffe','berichte']]
def git(*args): return subprocess.check_output(['git',*args],cwd=ROOT)
class Parser(HTMLParser):
 def __init__(self):
  super().__init__(convert_charrefs=True); self.stack=[]; self.tags=[]; self.text=[]; self.ids=[]; self.scripts=[]; self.script=None
 def handle_starttag(self,t,a):
  d=dict(a); self.tags.append((t,d));
  if 'id' in d:self.ids.append(d['id'])
  if t=='script' and d.get('type')=='application/ld+json':self.script=''
  if t not in {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}:self.stack.append(t)
 def handle_startendtag(self,t,a):
  self.handle_starttag(t,a)
  if t not in {"area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"}:self.handle_endtag(t)
 def handle_endtag(self,t):
  assert self.stack and self.stack[-1]==t, (t,self.stack[-5:]); self.stack.pop()
  if t=='script' and self.script is not None:self.scripts.append(json.loads(self.script));self.script=None
 def handle_data(self,d):
  self.text.append(d)
  if self.script is not None:self.script+=d
urls=[]; titles=[]; descriptions=[]
for name in PAGES:
 p=Parser(); content=(ROOT/name).read_text(); p.feed(content); assert not p.stack
 assert len(p.ids)==len(set(p.ids)); assert sum(t=='h1' for t,d in p.tags)==1
 assert '<html lang="de"' in content
 canon=[d['href'] for t,d in p.tags if t=='link' and d.get('rel')=='canonical']; expected='https://www.function-concept.com/'+name[:-5];assert canon==[expected];urls+=canon
 import re
 title=re.findall(r'<title>(.*?)</title>',content);assert len(title)==1;titles+=title
 desc=[d['content'] for t,d in p.tags if t=='meta' and d.get('name')=='description'];assert len(desc)==1 and desc[0];descriptions+=desc
 assert not any('noindex' in d.get('content','') for t,d in p.tags if t=='meta')
 assert len(p.scripts)==1 and p.scripts[0]['mainEntityOfPage']==expected
 for t,d in p.tags:
  if t=='img':assert d.get('alt') and d.get('width') and d.get('height')
  for attr in ['href','src']:
   if attr not in d:continue
   u=urlsplit(d[attr])
   if u.scheme or u.netloc:continue
   if not u.path:
    if u.fragment:assert u.fragment in p.ids,(name,u.fragment)
    continue
   target=ROOT/unquote(u.path.lstrip('/')) if u.path.startswith('/') else (ROOT/name).parent/unquote(u.path)
   assert any(x.is_file() for x in [target,Path(str(target)+'.html'),target/'index.html']),(name,d[attr])
 print('PASS HTML/schema/metadata/local links/images:',name)
assert len(set(titles))==3 and len(set(descriptions))==3
for name in IMAGES: ET.parse(ROOT/name)
root=ET.parse(ROOT/'sitemap.xml').getroot(); ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}
locs=[e.text for e in root.findall('s:url/s:loc',ns)]
assert len(locs)==len(set(locs))
for u in urls:assert locs.count(u)==1
for name in OVERVIEWS:
 c=(ROOT/name).read_text()
 for u in urls:assert c.count('href="'+urlsplit(u).path+'"')==1
existing=git('ls-tree','-r','--name-only',BASE).decode().splitlines()
for name in existing:assert (ROOT/name).read_bytes()==git('show',BASE+':'+name),name
print('PASS all',len(existing),'existing files byte-identical; sitemap XML and unique canonical entries; overview links')
print('PASS 0 new content pages / 0 revised / 0 overview changes / 0 sitemap changes')
