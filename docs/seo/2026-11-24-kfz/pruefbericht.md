# Qualitätsprüfung – 24.11.2026
Ergebnis: **freigabefähig**. 3 neue Ratgeber, 0 überarbeitete Ratgeber, 3 neue WebP-Bilder, 3 ergänzte redaktionelle Übersichten, 3 neue Sitemap-URLs.

## Tatsächlich geprüft
- Briefing vor Umsetzung gespeichert; Bestand, Branchenregister und offene PRs abgeglichen.
- Fakten und Quellen gegengelesen: Google Keyword-Optionen, negative Varianten, responsive Anzeigen, Standortoptionen, Budgetgrenzen und Conversionarten. ADAC für Leistungsarten und Auftragsklärung. Keine erfundenen Nachfrage-/CPC-/Erfolgszahlen. Werkstattrechnung ausdrücklich hypothetisch, rechnerisch 80 x 1/4 = 20 Euro. Keine pauschalen Kostenerstattungs-, Reparatur-, Wertsteigerungs- oder Leasing-Abnahmegarantien.
- Drei eigenständige Intentionen und Abläufe: Begutachtungsanlass, Werkstatttermin/Auslastung, Pflegeumfang/Fahrzeugzustand. Kein Branchenwort-Austausch, keine langen identischen Absätze in den neuen Seiten.
- check.py erfolgreich: HTML-Verschachtelung, eindeutige IDs und H1, Titel/Descriptions/Canonicals, Article-JSON-LD, lokale Links/Fragmente, Kontakt-CTA, 12 Keyword-Vorschläge und 6 FAQs je Ratgeber, Anzeigenlimits30/90.
- Gefundenen Fehler korrigiert: erste Autoaufbereiter-Anzeigenbeschreibung zunächst 91 Zeichen, danach verkürzt. Vollständige Prüfung erneut erfolgreich.
- Drei eigene dekodierbare WebP1440x960, Alt-Texte, Maße, unterschiedliche Bildhashes und KI-Symbolbildkennzeichnung. Bildinhalt geprüft; keine Webseiten-Viewportprüfung.
- Sitemap als XML geprüft: neue Canonicals genau einmal, keine Duplikate, alle alten Einträge einschließlich lastmod erhalten. Drei erlaubte Übersichten enthalten alle neuen Links; Kategorieübersicht bereits angebunden.
- Alle 231 übrigen Bestandsdateien bytegleich zur Basis 78da41a8c0230c897b5fb38470eb612764415f75. Geschützte Seiten, Formulare, Tracking, gemeinsame CSS/JS/API und Konfiguration unverändert.
- node --check page.js, node --check api/kontakt.js und git diff --check erfolgreich.
- WORKFLOW.md bereits auf aktuellem Nutzerauftrag; keine unnötige Wiederänderung.

## Grenzen
Statisches Projekt ohne Buildskript. Keine visuelle Browser-/Screenshot-/Viewportprüfung laut Auftrag. Kein echter Formular-/SMTP-Versand, um keine Nachricht auszulösen. Bestehende unveränderte /index#leistungen-Anker in alten Blognavigationen als Bestandshinweis protokolliert. Neue Inhalte haben keine solchen Links. Keine kritischen offenen Fehler.

## Veröffentlichung
Bestätigt live am 24.11.2026. PR #18 nach erfolgreichen Vercel-Checks gemergt. Produktionsdeployment erfolgreich. 11 öffentliche Ressourcen HTTP200, finale URLs korrekt und bytegleich zum Repository; neue Sitemap-URLs jeweils genau einmal. Kontaktseite HTTP200 und kontaktForm vorhanden. .de und non-www .com für /blog/kategorien auf www.function-concept.com weitergeleitet. Details in live-check.json und veroeffentlichung.md.
