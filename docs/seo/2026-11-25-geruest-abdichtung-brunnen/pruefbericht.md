# Qualitätsprüfung – 25.11.2026
Ergebnis: bestanden und bestätigt veröffentlicht.

Drei neue eigenständige Ratgeber, keine bestehenden Ratgeber überarbeitet, drei Übersichten ergänzt. Gerüstbauer1088, Bauwerksabdichter1119, Brunnenbauer1158 Wörter im Hauptbereich inklusive Quellen/Navigation. Je zwölf Keyword-Vorschläge mit Intention, sechs individuelle FAQs und eigenes Bild. Schwerpunkte: Gerüst-Standzeit/Transport/Termin; Schadensaufnahme/Diagnose/Abdichtung; Brunnen-Nutzung/Vorprüfung/Bestandsservice. Quellen, Sprache, sachliche Leistungsgrenzen und Nutzwert geprüft. Keine erfundenen Nachfrage-/Ergebnisdaten, keine technischen Arbeitsanleitungen oder pauschalen Rechtszusagen.

Tatsächlich ausgeführt:
- check.py: HTML-Nesting, eindeutige IDs, eine H1, lokale Links und Fragmente, Kontakt-CTA, Bilder/Alt/Maße, Canonicals, Article-Schema, keine noindex-Metadaten bestanden.
- Titel/Descriptions eindeutig; Titel zusätzlich gegen gesamten HTML-Bestand geprüft.
- Anzeigen30/90Zeichen: eine Beschreibung zunächst91, gekürzt und gesamte Prüfung erfolgreich wiederholt. Keine identischen längeren Absätze zwischen den drei neuen Seiten.
- Drei unterschiedliche WebP1440x960,237990/96960/225578Bytes; sichtbare KI-Symbolbildkennzeichnung. Motive geprüft, keine visuelle Websiteprüfung.
- SitemapXML gültig: drei neue URLs jeweils einmal, keine Dubletten, sämtliche alten Records einschließlich lastmod unverändert.
- Alle399 übrigen Basisdateien bytegleich; geschützte Seiten, Tracking, Formulare, gemeinsame Komponenten und Deployment unverändert.
- node --check für script.js,page.js,api/_email-template.js,api/kontakt.js bestanden. Kein Build-/Testscript im Projekt vorhanden. git diff --check bestanden.
- Kontaktseite HTTP200, Formularanker kontaktForm vorhanden. Kein Testversand, keine bestätigte SMTP-Zustellung.

Bekannter Altfehler: /index#leistungen in drei Blogübersichten führt auf fehlenden Anker der geschützten Zielseite. Unverändert belassen; neue Links gültig.
Frischer main vor Veröffentlichung unverändert:0fe09ba5cee7de59328240cd31d012c073aca8a1. Keine offenen PRs beim Start. Vercel-Produktion erfolgreich für e59cd1b93f8b5283a507709cd49eda63caf167c9. live_check.py bestanden: elf öffentliche Ressourcen HTTP200, korrekte finale URLs und bytegleich zum Repository. Drei neue URLs jeweils einmal in veröffentlichter Sitemap. Rohprotokoll live-check.json. Kein OpenSEO, keine Automationsänderungen.
