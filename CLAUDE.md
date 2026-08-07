# Function Concept — Projektüberblick

Statische Website/Blog der SEO-Agentur "Function Concept". Reines HTML/CSS/vanilla JS, kein Build-Tool. Einzige Ausnahme: `package.json` mit `nodemailer` als Dependency für den SMTP-Mailversand aus `api/kontakt.js`. Deployment über Vercel (`vercel.json`: cleanUrls, keine trailing slash), zusätzlich `.htaccess` für Apache-Kompatibilität. Sprache durchgehend Deutsch (`lang="de"`).

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

## Kontaktformular / SMTP (All-Inkl)

- Formulare: `kontakt.html` (Name, E-Mail, Telefonnummer, Nachricht — alle required), `google-ads-anfrage.html` (Name, Telefonnummer, Webseite, Nachricht optional — kein E-Mail-Feld) und `ad/kundenanfragen-generieren.html`. Alle nutzen dasselbe Formular-Markup mit `id="kontaktForm"` und Feld-IDs `name`/`email`/`telefon`/`webseite`/`nachricht` (je nach Seite nur eine Teilmenge vorhanden) und senden per `fetch()` an `/api/kontakt`
- Backend: Vercel Serverless Function `api/kontakt.js`, versendet über SMTP mit `nodemailer` (kein HTTP-E-Mail-Dienstleister mehr) — Postfach liegt bei All-Inkl
- Validierung serverseitig: `name` und mindestens einer von `email`/`telefon` sind Pflicht, `nachricht` ist optional
- Formular-Handling (Submit, Statusanzeige) liegt in `page.js`, liest Formularfelder per Optional-Chaining aus (`document.getElementById('x')?.value`), damit ein Handler für alle Formularvarianten funktioniert. Analog zum bestehenden Cookie-Consent-Code dort
- Benötigte Vercel-Environment-Variablen (im Vercel-Dashboard hinterlegt, nicht im Repo): `SMTP_HOST` (All-Inkl kasserver-Host), `SMTP_PORT` (465 = SSL, Standard), `SMTP_USER` (Postfach-Adresse, dient auch als Absender), `SMTP_PASS`, optional `SMTP_TO_EMAIL` (Empfänger, fällt sonst auf `SMTP_USER` zurück)
- Datenschutz-Hinweis zum Mailversand über All-Inkl steht in `datenschutz.html`, Abschnitt 7 (Kontaktformular)
- Bei erfolgreichem Versand pusht `page.js` das Event `lead` (mit `form_location` = `location.pathname`) in `window.dataLayer`, damit es in GTM (Container `GTM-NNB55THZ`) als Custom-Event-Trigger für Conversion-Tracking (z.B. Google Ads) genutzt werden kann. Der Push landet unabhängig vom Cookie-Consent im dataLayer-Array; ausgewertet wird er nur, wenn der GTM-Container geladen wurde (siehe `loadGTM()`, abhängig von Analytics-/Marketing-Consent)
- Besuchsverlauf: Bei erteiltem Analytics-Consent (`localStorage['cookie-consent'].analytics === true`) loggt `page.js` jeden Seitenaufruf in `localStorage['fc_visit_log']` (max. 30 Einträge). Wird beim Absenden des Kontaktformulars als `besuchsverlauf` mitgeschickt und von `api/_email-template.js` als chronologische Tabelle in die Benachrichtigungsmail gerendert. Ohne Consent bleibt das Feld leer. Datenschutz-Hinweis in `datenschutz.html`, Abschnitt 5.

## Google Ads Landingpage / Stripe Checkout

- Seite: `google-ads-kampagne.html` — eigenständige Sales-Landingpage (300 €/Monat, keine Einrichtungs-/Trackinggebühr), bewusst nicht in der Hauptnavigation verlinkt (für Ad-Traffic gedacht), aber in `sitemap.xml` eingetragen
- Bestell-Button ist ein direkter Link auf einen Stripe Payment Link (`https://buy.stripe.com/...`) — kein eigenes Backend, keine `/api`-Route, kein Stripe-API-Aufruf im Projekt (es gab früher `api/create-checkout-session.js`, wurde entfernt zugunsten des einfacheren Payment-Link-Ansatzes)
- Checkbox-Freischaltung des Buttons (§14-BGB-Bestätigung) liegt in `page.js`: Button ist ein `<a>` mit `aria-disabled`, per Checkbox-Change-Handler umgeschaltet, Klick wird per `e.preventDefault()` blockiert solange nicht bestätigt
- Preis, Produktinhalt und ggf. zusätzliche Felder (Telefonnummer, Custom Fields) werden direkt im Stripe-Dashboard am Payment Link gepflegt, nicht im Code
- Vor der Bestellung muss der Kunde per Checkbox bestätigen, als Unternehmer (§ 14 BGB) zu handeln — passend zu `agb.html` §1 (keine Verbraucherverträge)
- Datenschutz-Hinweis zu Stripe steht in `datenschutz.html`, Abschnitt 26
