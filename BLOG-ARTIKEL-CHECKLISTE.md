# Checkliste: Neuer Blogartikel / neue Blog-Kategorie

Diese Checkliste muss bei **jedem** neuen Blogartikel und bei **jeder** neuen Blog-Kategorie
vollständig abgearbeitet werden. Ein Artikel gilt erst als fertig, wenn alle Punkte erledigt sind —
nicht nur die Artikeldatei selbst.

## Bei einem neuen Artikel in einer bestehenden Kategorie

- [ ] Artikel-Datei anlegen unter `blog/<kategorie>/<artikel-slug>.html`
- [ ] Artikel in der Kategorie-Übersicht verlinken: `blog/<kategorie>/index.html`
      (`.article-list`, neuester Artikel steht oben)
- [ ] Artikel in der globalen Blog-Übersicht verlinken: `blog/index.html`
      (`.article-list`, neuester Artikel steht oben)
- [ ] Eintrag in `sitemap.xml` ergänzen (`<url>` mit vollständiger URL, `changefreq`, `priority`)
- [ ] Falls der Artikel einen neuen Drittdienst/eine neue Technologie erwähnt oder einbindet:
      Abschnitt in `datenschutz.html` prüfen/ergänzen

## Bei einer komplett neuen Kategorie (zusätzlich zu allem oben)

- [ ] Neuen Ordner `blog/<neue-kategorie>/` anlegen
- [ ] `blog/<neue-kategorie>/index.html` als Kategorie-Übersichtsseite anlegen
- [ ] Neue Kategorie-Kachel in `blog/kategorien.html` ergänzen (`.blog-grid`, mit Icon, Titel, Kurztext)
- [ ] Ersten Artikel der Kategorie wie oben in beide Artikel-Übersichten verlinken
- [ ] Kategorie-Index **und** Artikel in `sitemap.xml` eintragen

## Verifikation vor dem Commit

Vor jedem Commit, der einen neuen Artikel oder eine neue Kategorie enthält, folgende drei Dateien
gezielt gegenlesen (nicht nur die neue Artikeldatei):

1. `blog/index.html` — steht der neue Artikel in der Liste?
2. `blog/kategorien.html` — steht die Kategorie in der Liste (nur bei neuer Kategorie)?
3. `blog/<kategorie>/index.html` — steht der Artikel in der Kategorie-Liste?
4. `sitemap.xml` — sind alle neuen URLs eingetragen?

**Grund für diese Regel:** Ein neuer Artikel, der nur als Datei existiert, aber nirgends verlinkt
ist, wird von echten Besuchern nie gefunden (nur über die exakte URL) und taucht ohne Sitemap-Eintrag
auch bei Google schlechter auf. Die Datei selbst anzulegen ist nur der erste von mehreren
notwendigen Schritten.
