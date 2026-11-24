# Qualitätsprüfung – 24.11.2026 Fenster/Metall/Solar

Ergebnis: **freigabefähig**. Drei neue eigenständige Ratgeber, null überarbeitete Bestandsratgeber, drei Bilder, drei ergänzte Übersichten und drei neue Sitemap-URLs. Vollständiges Briefing vor Umsetzung gespeichert.

## Ausgeführt und bestanden
- Fakten/Quellen und Sprache geprüft: Keyword-Bedeutungsvarianten, negative Optionen, 30/90 Zeichen, Standortgrenzen, Budget2/30,4 mit Einschränkungen, Conversions nicht als Aufträge darstellen. Keine erfundenen Volumina, CPCs, Quoten, Förderbeträge oder Ertragszusagen. PV-Hintergrund aus geöffnetem Öko-Zentrum-NRW-Beitrag; 403-Verbraucherzentrale nicht als gelesene Hauptquelle eingesetzt.
- Individueller Nutzwert: Fenster-Montageumfang und Elementanzahl; Metall-Konstruktion/Fertigung/Oberfläche; PV-Dach-/Gebäude-/Bestandsqualifizierung. Bestehende Titel/URLs/Inhalte abgeglichen, keine eigene Doppelintention. Gemeinsame Ads-Grundlagen sachlich erforderlich; keine identischen langen Absätze zwischen neuen Artikeln.
- check.py bestanden: HTML-Verschachtelung, eindeutige IDs/H1, individuelle Titel/Descriptions/Canonicals, Article-JSON-LD, lokale Dateien/Fragmente, Kontakt-CTA, je12 Keywords/6 FAQs, Anzeigenlimits. Drei unterschiedliche WebP-Bilder dekodierbar, 1440×960, Alt-Texte und Symbolbildkennzeichnung.
- Bestehende btn-solid-/organic-table-Klassen verwendet. Keine gemeinsamen Styles oder Skripte geändert.
- Sitemap XML valide: drei neue Canonicals genau einmal, sämtliche alten Einträge und lastmod erhalten. Drei redaktionelle Übersichten enthalten alle neuen Artikel. Kategorienseite bereits passend verlinkt, unverändert.
- Alle 203 übrigen Bestandsdateien bytegleich; geschützte Start-/Werbeseiten, Formulare, Tracking, gemeinsame CSS/JS/API und Deploymentkonfiguration unverändert.
- node --check page.js, node --check api/kontakt.js und git diff --check erfolgreich.

## Grenzen
Kein Build-Skript vorhanden. Keine visuelle Browser-/Viewport-/Screenshotprüfung laut Auftrag. Kontaktziel und vorhandener Handler geprüft, echter Formular-/SMTP-Versand nicht ausgelöst. Alte /index#leistungen-Anker in unveränderten Teilen der Blogübersichten bleiben dokumentierter Bestand; keine neuen fehlerhaften Anker eingeführt. Keine kritischen Fehler im neuen Paket.

## Veröffentlichung
Bestätigt live: PR #14 nach erfolgreichen Vercel-/Preview-Checks gemergt. Produktionscommit b3b876cf3335f04cdbf899f7f5e1cd9609fba7ae, Vercel success. live_check.py prüfte elf öffentliche Ressourcen mit HTTP200, kanonischem Endziel und Bytegleichheit; Sitemap enthält alle drei neuen URLs genau einmal. Kontaktseite separat HTTP200/Formular vorhanden. .de und non-www leiteten bei /blog/kategorien auf www.function-concept.com weiter. Nachweis in live-check.json und veroeffentlichung.md.
