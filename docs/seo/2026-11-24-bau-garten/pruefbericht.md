# Qualitätsprüfung 24.11.2026 – Bau und Garten

Ergebnis: **freigabefähig**. Drei neue eigenständige Ratgeber, keine überarbeiteten Bestandsratgeber. Drei individuelle Bilder, drei ergänzte redaktionelle Übersichten, drei neue Sitemap-URLs. Briefing vor Umsetzung gespeichert.

## Tatsächlich ausgeführt
- Quellen und Text gegenlesen: Keyword-Bedeutung statt Wortgleichheit; negative Varianten; Anzeigenlimits; regionale Grenzen; Tages-/Monatsbudget mit Einschränkungen; Anfragen nicht als Aufträge darstellen. Keine erfundenen Volumina, CPCs oder Ergebnisse. Bauhinweise ohne Montage-/Statikanleitung.
- Eigenständigkeit: Maurer qualifiziert Planung und Bauumfang, Trockenbau System-/Fertigstellungsumfang, Gartenbau Gestaltung versus Pflege und Logistik. Keine bestehende identische Suchintention gefunden. Lange identische Absätze zwischen neuen Artikeln automatisiert ausgeschlossen; gemeinsame fachliche Ads-Grundlagen sachlich erforderlich.
- check.py erfolgreich: valides verschachteltes HTML, eindeutige IDs/H1/Metadaten/Canonicals, lesbares Article-JSON-LD, interne Dateien und neue Fragmentziele, 12 Keywords und 6 individuelle FAQs pro Artikel, Anzeigen 30/90 Zeichen, jeweils eigenes dekodierbares WebP 1440×960 mit Alt.
- Korrekturen: CTA-Klassen auf bestehendes btn-solid angeglichen; Keywordtabellen mit vorhandener organic-table-Hülle versehen. Danach gesamten Checker erneut erfolgreich ausgeführt. Keine gemeinsamen Styles geändert.
- Sitemap XML erfolgreich: drei neue URLs genau einmal, sämtliche bestehenden Einträge einschließlich lastmod unverändert. Übersichten enthalten jeweils alle drei Links. Kategorienseite verweist bereits auf Ratgeber und blieb unverändert.
- Bytevergleich: alle 189 übrigen Bestandsdateien unverändert. Geschützte Seiten, Tracking, Formulare, CSS/JS/API und Deploymentkonfiguration nicht verändert.
- node --check page.js und node --check api/kontakt.js erfolgreich; git diff --check erfolgreich.
- Kontaktziel /kontakt#kontaktForm anhand HTML und vorhandenem Handler geprüft; öffentliche Erreichbarkeit separat protokolliert.

## Tatsächliche Grenzen
Kein Build-Skript im statischen Projekt vorhanden. Keine visuelle Browser-/Screenshot-/Viewportprüfung laut Auftrag. Kein echtes Formular abgesendet, daher keine Ende-zu-Ende-Bestätigung des SMTP-Versands. Alte unveränderte /index#leistungen-Anker in bestehenden Blogübersichten bleiben dokumentierter Bestand; keine neuen solchen Links eingeführt, geschützte Startseite nicht geändert. Keine Blocker für die neuen Seiten.

## Veröffentlichungsstand
Noch nicht als live bestätigt. GitHub-Checks, Merge und Produktion werden im Veröffentlichungsprotokoll nachgetragen. Ein Push allein gilt nicht als Deploymentnachweis.
