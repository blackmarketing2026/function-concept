# Function Concept — Projektüberblick

Statische Website/Blog der SEO-Agentur "Function Concept". Reines HTML/CSS/vanilla JS, kein Build-Tool, kein `package.json`. Deployment über Vercel (`vercel.json`: cleanUrls, keine trailing slash), zusätzlich `.htaccess` für Apache-Kompatibilität. Sprache durchgehend Deutsch (`lang="de"`).

## Struktur

- Root: `index.html`, `impressum.html`, `agb.html`, `datenschutz.html`, Fehlerseiten (`401.html`, `403.html`, `404.html`, `410.html`, `500.html`, `503.html`)
- Shared Assets: `style.css`, `script.js`, `page.js`
- `blog/<kategorie>/<artikel-slug>.html` — jede Kategorie hat eigenes `index.html`
- `blog/index.html` — Gesamtübersicht aller Artikel
- `blog/kategorien.html` — Kategorie-Kacheln (`.blog-grid`)
- `medien/blog/<kategorie>/` — spiegelt Blog-Struktur für Bild-Assets
- Bekannte Kategorien: `google-ads`, `kundengewinnung`, `webseite`

## Konventionen

- Kategorie-Ordner: lowercase deutsche Substantive
- Artikel-Dateinamen: kebab-case, oft vollständige Frage-Phrasen (z.B. `wie-registriere-ich-mich-bei-google-ads.html`)
- Interne Links ohne `.html`-Endung (root-relative, z.B. `href="/blog/google-ads/index"`), da Clean-URLs aktiv sind — die Dateien selbst behalten `.html`

## Neuen Blog-Artikel hinzufügen

Verbindlicher Prozess steht in `BLOG-ARTIKEL-CHECKLISTE.md`. Kurzfassung: Artikel-Datei anlegen und verlinken in (1) `blog/<kategorie>/index.html`, (2) `blog/index.html` (jeweils `.article-list`, neueste zuerst), (3) `sitemap.xml`. Bei neuer Kategorie zusätzlich Kachel in `blog/kategorien.html` (`.blog-grid`).

## Config-Dateien

- `sitemap.xml` — kanonische URLs, extensionless
- `robots.txt` — erlaubt alles, verweist auf Sitemap
- `vercel.json` — cleanUrls, keine trailing slash
- `.htaccess` — Apache-Rewrite für extensionless URLs (Fallback-Hosting)

## Kontaktformular / Resend

- Seite: `kontakt.html` (Felder: Name, E-Mail, Telefonnummer, Nachricht) — sendet per `fetch()` an `/api/kontakt`
- Backend: Vercel Serverless Function `api/kontakt.js` (erster Eintrag im `api/`-Ordner), ruft die Resend-HTTP-API direkt auf (kein npm-Package, kein `package.json` nötig)
- Formular-Handling (Submit, Statusanzeige) liegt in `page.js`, analog zum bestehenden Cookie-Consent-Code dort
- Benötigte Vercel-Environment-Variablen (im Vercel-Dashboard hinterlegt, nicht im Repo): `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_TO_EMAIL` — Domain bei Resend ist bereits verifiziert
- Datenschutz-Hinweis zu Resend steht in `datenschutz.html`, Abschnitt 7 (Kontaktformular)
