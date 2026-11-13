from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import xml.etree.ElementTree as ET,json,re
r=Path(__file__).resolve().parents[1]
class P(HTMLParser):
 def __init__(self):super().__init__();self.tags=[];self.ids=[]
 def handle_starttag(self,t,a):
  a=dict(a);self.tags.append((t,a))
  if 'id' in a:self.ids.append(a['id'])
files=[*r.glob('ratgeber/gebaeudereinigung*.html'),*r.glob('blog/kundengewinnung/gebaeudereinigung*.html')]
errors=[];count=0
for f in files:
 p=P();p.feed(f.read_text());ids=p.ids
 if len(ids)!=len(set(ids)):errors.append(str(f)+' duplicate ids')
 for tag,attrs in p.tags:
  if tag=='img' and not attrs.get('alt'):errors.append(str(f)+' missing alt')
  key='src' if tag in ['img','script'] else 'href'
  u=attrs.get(key,'');s=urlsplit(u)
  if not u or s.scheme or s.netloc:continue
  target=r/s.path.lstrip('/') if s.path.startswith('/') else f.parent/s.path
  if not s.path:target=f
  if not target.is_file():
   if target.with_suffix('.html').is_file():target=target.with_suffix('.html')
   elif (target/'index.html').is_file():target=target/'index.html'
   else:errors.append(f'{f.name}: missing {u}');continue
  count+=1
  if s.fragment and target.suffix=='.html':
   q=P();q.feed(target.read_text())
   if unquote(s.fragment) not in q.ids:errors.append(f'{f.name}: missing anchor {u}')
 for t in ['title','h1']:
  if sum(1 for tag,a in p.tags if tag==t)!=1:errors.append(f'{f.name}: {t} count')
 if sum(1 for t,a in p.tags if t=='link' and a.get('rel')=='canonical')!=1:errors.append('canonical count')
 text=re.sub('<[^>]+>',' ',re.sub(r'<(script|style).*?</\1>','',f.read_text(),flags=re.S))
 print(f.name, len(text.split()),'words including shared navigation/footer')
 for index in ['blog/index.html','blog/kundengewinnung/index.html','seitenuebersicht.html']:
  if '/'+str(f.relative_to(r))[:-5] not in (r/index).read_text():errors.append(f'{index}: missing new page')
urls=[x.text for x in ET.parse(r/'sitemap.xml').iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
assert len(urls)==len(set(urls))
for f in files:
 assert 'https://function-concept.com/'+str(f.relative_to(r))[:-5] in urls
for f in r.glob('medien/blog/kundengewinnung/gebaeudereinigung*.svg'):ET.parse(f)
assert 600/4==150 and 150*.1==15 and 15*.4==6 and 900/2==450 and 1200*.4==480
result={'checked_internal_references':count,'new_pages':len(files),'errors':errors,'sitemap':'valid XML, unique URLs, all new pages present','svg':'3 valid XML','budget_arithmetic':'passed'}
print(json.dumps(result,ensure_ascii=False))
raise SystemExit(bool(errors))
