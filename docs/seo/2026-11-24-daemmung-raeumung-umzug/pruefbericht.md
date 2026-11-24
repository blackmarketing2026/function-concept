# Qualitätsprüfung 24.11.2026 – Dämmung/Räumung/Umzug

Ergebnis: **freigabefähig**. Drei neue Ratgeber, keine Bestandsratgeber überarbeitet, drei eigene Bilder, drei ergänzte Übersichten und drei neue Sitemap-URLs. Briefing vor Umsetzung gespeichert.

## Durchgeführt
- Fakten/Quellen und Sprache gegenlesen: Keyword-Bedeutung, negative Varianten, Anzeigen30/90, Standortgrenzen und Besonderheit Start/Ziel bei Umzug, Budget2/30,4 mit Einschränkungen, Kontakte nicht als Aufträge darstellen. Keine erfundenen Volumina/CPC/Quoten/Referenzen, keine Förder-/Einsparversprechen. UBA-Hinweis zu Elektroaltgeräten sachlich begrenzt, keine Gefahrstoffanleitung. AMÖ als Grundlage für Umfangsklärung, keine Haftungs-/Steuerzahlen übernommen.
- Eigenständiger Nutzen: Dämmung nach Bauteil/Verfahren/Eignungsprüfung; Räumung nach Umfang/Erhalt/Zugang; Umzug nach Route/Termin/Transportleistungen. Titel-/URL-/Volltextabgleich ohne doppelte Bestandsintention. Lange identische Absätze zwischen neuen Artikeln ausgeschlossen. Gemeinsame Ads-Grundlagen fachlich notwendig.
- check.py erfolgreich: HTML-Verschachtelung, IDs, H1, individuelle Titel/Descriptions/Canonicals, Article-JSON-LD, lokale Links/Fragmente, Kontakt-CTA, 12 Keywords/6 FAQs pro Artikel, Anzeigenlimits. WebP-Bilder jeweils einmalig, dekodierbar1440×960, Alt/Maße vorhanden, KI-Symbolbildkennzeichnung.
- Sprachkorrektur im Umzugs-Einstieg vorgenommen; vollständigen Checker danach erneut erfolgreich ausgeführt. Bestehende btn-solid-/organic-table-Klassen, keine gemeinsamen Komponenten verändert.
- Sitemap XML gültig, neue URLs je einmal, sämtliche alten Einträge und lastmod unverändert. Drei Übersichten verlinken alle neuen Artikel; bestehende Kategorieübersicht bereits passend angebunden.
- Alle 217 übrigen Bestandsdateien bytegleich. Startseiten, Kampagnenseiten, Formulare, Tracking, CSS/JS/API und Deploymentkonfiguration unverändert.
- node --check page.js, node --check api/kontakt.js, git diff --check erfolgreich.

## Grenzen
Kein Build-Skript im statischen Projekt. Keine visuelle Browser-/Screenshot-/Viewportprüfung laut Auftrag. Kein echter Formular-/SMTP-Versand, um keine Nachricht auszulösen; Linkziel und Handler geprüft, HTTP-Formularprüfung separat. Vorhandene unveränderte /index#leistungen-Anker in alten Blognavigationen dokumentiert; keine neuen solchen Links. Keine kritischen Fehler der neuen Seiten.

## Veröffentlichung
Bestätigt live am 24.11.2026. PR #16 nach erfolgreichen Vercel-Checks gemergt. Produktionsdeployment erfolgreich. 11 öffentliche Ressourcen HTTP200, erwartete finale URLs und bytegleich zum Repository; neue Sitemap-URLs jeweils genau einmal. Kontaktseite HTTP200 und kontaktForm vorhanden. Details in live-check.json und veroeffentlichung.md.
