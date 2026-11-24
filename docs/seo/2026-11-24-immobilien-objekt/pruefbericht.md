# Qualitätsprüfung – 24.11.2026
Ergebnis: **freigabefähig**. Drei neue Ratgeber, keine Bestandsratgeber überarbeitet, drei eigene WebP-Bilder, drei ergänzte Übersichten, drei neue Sitemap-URLs.

## Tatsächlich ausgeführt
- Recherche vor Umsetzung gespeichert. Bestand/URLs/Titel/Volltexte, Branches und offene PRs abgeglichen. Workflow bereits passend, unverändert.
- Quellen und Sprache gegengelesen. Google Keyword-Optionen/negative Varianten/30-90-Anzeigen/Standort/Budget/Conversions geprüft. Branchenbezüge IVD, DSV und IHK. Keine Vertrags-/Provisionsrechtsberatung, Biozidanleitung, Gesundheits-/Erfolgsgarantie oder unbelegte Fachberechtigung.
- Wichtige Korrektur der Themenplanung: Schlüsseldienste aufgrund ausdrücklicher Google-Richtlinie für Deutschland zurückgestellt; Hausmeisterservices als eigenständige Objektbetreuung gewählt. Kein Umgehungsvorschlag. Im Branchenregister dokumentiert.
- Eigenständige Nutzwerte: Eigentümermandate und auswärtige Eigentümer; Befallsabklärung versus Monitoring; Objektgröße/Turnus/Touren/Leistungsgrenzen. Keine langen identischen Absätze zwischen neuen Seiten.
- check.py bestanden: HTML-Verschachtelung/IDs/H1, individuelle Titel/Descriptions/Canonicals, Article-JSON-LD, lokale Links/Fragmente, Kontakt-CTA, 12 Keyword-Vorschläge/6 FAQs pro Ratgeber, Anzeigenlimits30/90.
- Drei eigene Bilder inhaltlich geprüft, keine Logos oder Ergebnisversprechen; WebP1440x960 dekodierbar, eindeutige Hashes, Alt-Texte/Maße und KI-Symbolbildkennzeichnung vorhanden.
- XML-Sitemap gültig: drei neue Canonicals genau einmal, keine Duplikate, alle alten Einträge/lastmods erhalten. Drei erlaubte Übersichten verlinken neue Artikel; Kategorieübersicht bereits angebunden.
- 245 übrige Bestandsdateien bytegleich zur Basis 3ef51a9548e1a768543fa02ead377ac35950c0de. Geschützte Seiten, Formulare, Tracking, gemeinsame CSS/JS/API und Deploymentkonfiguration unverändert.
- node --check page.js, node --check api/kontakt.js und git diff --check bestanden. Keine kritischen Fehler festgestellt.

## Grenzen
Statisches Projekt ohne Buildskript. Keine visuelle Webseiten-/Screenshot-/Viewportprüfung laut Auftrag. Kein tatsächlicher Formular-/SMTP-Versand. Alte unveränderte /index#leistungen-Anker in Blognavigationen dokumentiert; keine neuen Links dieser Art. UBA-Direktabruf403, deshalb DSV als gelesene Branchenquelle genutzt.

## Veröffentlichung
Bestätigt live am 24.11.2026. PR #20 nach erfolgreichen Vercel-Checks gemergt. Produktionsdeployment erfolgreich. Elf öffentliche Ressourcen HTTP200, finale URLs korrekt und bytegleich zum Repository; drei neue Sitemap-URLs jeweils genau einmal. Kontaktseite HTTP200 und kontaktForm vorhanden. Details in live-check.json und veroeffentlichung.md.
