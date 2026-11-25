# Qualitätsprüfung – 25.11.2026
Ergebnis: bestanden; drei neue Seiten bestätigt live.
Drei neue Ratgeber, null bestehende Ratgeber überarbeitet, drei redaktionelle Übersichten ergänzt. Hauptbereich inklusive Quellen/Navigation: Pflaster1078, Baumpflege1074, Wasserschaden1099 Wörter. Je12Keywordvorschläge und6individuelleFAQs. Fachquellen, Sprache, Suchintention und eigenständiger Mehrwert geprüft: Verkehrsflächen statt allgemeiner Gartenplanung, spezialisierte Baumleistungen, akute Schadensphasen statt chronischer Abdichtung. Keine erfundenen Nachfrage-/Ergebnisdaten oder technischen Arbeitsanleitungen.

Ausgeführt und bestanden:
- check.py: HTML-Nesting, IDs, eine H1, lokale Links/Fragmente und Kontakt-CTA, Bilder/Alt/Maße, Canonicals/Article, keine noindex-Metadaten.
- Individuelle Titel/Descriptions; Titel gegen gesamten HTML-Bestand geprüft.
- Anzeigen30/90Zeichen,12Keywords/6FAQs, keine identischen längeren Absätze zwischen neuen Seiten.
- Drei unterschiedliche WebP1440x960,251006/327850/86184Bytes. Motive geprüft, sichtbar als KI-Symbolbilder gekennzeichnet. Keine visuelle Websiteprüfung.
- SitemapXML: genau3neueURLs jeweils einmal, keine Dubletten; alte Records einschließlich lastmod erhalten.
- Alle441 übrigen Basisdateien bytegleich. Geschützte Seiten, gemeinsame Komponenten, Tracking, Formulare/API und Konfiguration unverändert.
- node --check script.js,page.js,api/_email-template.js,api/kontakt.js erfolgreich. Kein Build-/Testscript vorhanden. git diff --check bestanden.
- Frischer Kontaktabruf HTTP200, kontaktForm vorhanden. Kein Formularversand/SMTP-Test.

Bekannter unveränderter Altfehler: /index#leistungen in drei Blogübersichten, fehlender Anker an geschützter Zielseite. Neue Links gültig.
Basis d9123f2705c7cd00db600dce54078aebd547f597, offene PRs beim Start keine. Produktionsdeployment erfolgreich. Elf öffentliche Ressourcen HTTP200, exakte finale URL und bytegleich; neue Sitemap-URLs jeweils einmal, siehe live-check.json. Kein OpenSEO oder Automationsänderung.
