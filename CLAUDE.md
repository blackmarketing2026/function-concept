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
- Besuchsverlauf: Bei erteiltem Analytics-Consent (`localStorage['cookie-consent'].analytics === true`) loggt `page.js` jeden Seitenaufruf in `localStorage['fc_visit_log']` (max. 30 Einträge). Wird beim Absenden des Kontaktformulars als `besuchsverlauf` mitgeschickt und von `api/_email-template.js` als chronologische Tabelle in die Benachrichtigungsmail gerendert. Ohne Consent bleibt das Feld leer. Datenschutz-Hinweis in `datenschutz.html`, Abschnitt 5.

## Google Ads Landingpage / Stripe Checkout

- Seite: `google-ads-kampagne.html` — eigenständige Sales-Landingpage (300 €/Monat, keine Einrichtungs-/Trackinggebühr), bewusst nicht in der Hauptnavigation verlinkt (für Ad-Traffic gedacht), aber in `sitemap.xml` eingetragen
- Bestell-Button ruft `/api/create-checkout-session` auf und leitet zu Stripe Checkout weiter (Abo, `mode: subscription`, feste Preisvariante `prod_SQKwPjZpRSOLMC` in Stripe)
- Backend: Vercel Serverless Function `api/create-checkout-session.js`, ruft die Stripe-HTTP-API direkt auf (kein npm-Package, kein `package.json` nötig), analog zu `api/kontakt.js`
- Button-Handling (Checkbox-Freischaltung, Fetch, Redirect, Abbruch-Status via `?abgebrochen=1`) liegt in `page.js`, analog zum bestehenden Kontaktformular-Code dort
- Nach erfolgreicher Zahlung leitet Stripe zu `google-ads-kampagne-danke.html` weiter (eigene Danke-Seite, `noindex, follow`, nicht in `sitemap.xml`)
- Benötigte Vercel-Environment-Variablen (im Vercel-Dashboard hinterlegt, nicht im Repo): `STRIPE_SECRET_KEY`, `STRIPE_PRICE_ID` (die konkrete Preis-ID `price_...` der hinterlegten Preisvariante von Produkt `prod_SQKwPjZpRSOLMC` — nicht die Produkt-ID selbst, die reicht Stripe Checkout nicht für `line_items[].price`)
- Vor der Bestellung muss der Kunde per Checkbox bestätigen, als Unternehmer (§ 14 BGB) zu handeln — passend zu `agb.html` §1 (keine Verbraucherverträge)
- Datenschutz-Hinweis zu Stripe steht in `datenschutz.html`, Abschnitt 26
