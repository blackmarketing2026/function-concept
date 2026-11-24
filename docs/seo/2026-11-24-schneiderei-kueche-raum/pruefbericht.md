# Qualitätsprüfung – 24.11.2026

Ergebnis: freigabefähig für Veröffentlichung; Live-Nachweis noch ausstehend.

- Drei neue eigenständige Ratgeber, null bestehende Ratgeber überarbeitet; drei redaktionelle Übersichten ergänzt.
- Fakten anhand im Briefing dokumentierter Primärquellen geprüft. Fachleistungen knapp eingeordnet, Kampagnenempfehlungen als redaktionelle Ableitungen. Keine erfundenen Volumina/Erfolge. Schneiderei-Rechnung ausdrücklich hypothetisch.
- Sprache und Abgrenzung redaktionell geprüft: Änderung/Anprobe vs. Küchenprojekt/Beratungszyklus vs. textile Gestaltung/Aufmaß/Polster. Keine reinen Branchenwort-Kopien. Keine identischen längeren Absätze in den drei neuen Texten.
- check.py erfolgreich: HTML-Nesting, IDs, eine H1, interne Dateien/Fragmente, Alt-Texte und Bildmaße; jeweils zwölf Keyword-Vorschläge und sechs FAQs; Anzeigenüberschriften <=30 und Beschreibungen <=90 Zeichen.
- Title/Description innerhalb neuer Seiten eindeutig; Titles zusätzlich gegen gesamten HTML-Bestand auf Eindeutigkeit geprüft. Canonicals und Article-Schema stimmen mit extensionless .com-URLs überein; kein noindex.
- Drei verschiedene generierte Bilder motivisch geprüft, als WebP1440x960 eingebunden, sichtbare KI-Symbolbildkennzeichnung. Keine Website-Screenshot-/Viewportprüfung.
- Sitemap mit XML-Parser validiert: exakt drei neue URLs einmalig, keine Dubletten, sämtliche bisherigen Einträge samt lastmod erhalten.
- Alle 357 nicht erlaubten Basisdateien bytegleich; geschützte Seiten, CSS/JS/API, Tracking, Formulare und Deploymentkonfiguration unverändert.
- node --check für script.js,page.js und beide api-JS-Dateien erfolgreich. Kein Build-/Testscript im Projekt vorhanden. git diff --check bestanden.
- Kontaktseite öffentlich HTTP200, Formular-ID kontaktForm vorhanden; keine Testnachricht und kein Nachweis des Mailversands.
- Bekannter unveränderter /index#leistungen-Anker in drei Blogübersichten verweist auf fehlenden Anker der geschützten Zielseite. Nicht durch dieses Paket eingeführt, nicht geändert; neue CTA- und Inhaltslinks gültig.

Deployment und öffentliche Byte-/Sitemapprüfung folgen nach Merge. Keine OpenSEO-Nutzung; keine Automationen/Schedules geändert.
