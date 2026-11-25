# Qualitätsprüfung – 25.11.2026
Ergebnis: bestanden; drei neue Seiten bestätigt live.
Drei neue Ratgeber, null bestehende Ratgeber überarbeitet, drei redaktionelle Übersichten ergänzt. Hauptbereich inklusive Quellen/Navigation: Rohrreinigung1107, Aufzug1120, Schornsteinfeger1256 Wörter. Je zwölf Keyword-Vorschläge und sechs individuelle FAQs. Eigenständige Schwerpunkte: Akuteinsatz/Inspektion, Anlagen-/Vertragsqualifizierung, freie versus hoheitliche Aufgaben. Quellen, Sprache, Suchintention und Nutzwert geprüft; keine erfundenen Nachfrage-/Ergebnisdaten.

Ausgeführt und bestanden:
- check.py: HTML-Nesting, eindeutige IDs, eine H1, lokale Links/Fragmente, Kontakt-CTA, Bilder/Alt/Maße, Canonicals/Article, keine noindex-Metadaten.
- Individuelle Titel/Descriptions; Titel zusätzlich gegen gesamten HTML-Bestand geprüft.
- Anzeigen30/90Zeichen,12Keywords/6FAQs, keine identischen längeren Absätze zwischen neuen Seiten. Eine Anzeigenbeschreibung zunächst91Zeichen; gekürzt und vollständigen Check erneut bestanden.
- Drei unterschiedliche WebP1440x960 mit120440/101472/132000Bytes; Motive geprüft, sichtbar als KI-Symbolbilder gekennzeichnet. Keine visuelle Websiteprüfung.
- SitemapXML, genau drei neue URLs jeweils einmal, keine Dubletten; alle alten Records einschließlich lastmod erhalten.
- Alle427 übrigen Basisdateien bytegleich. Geschützte Seiten, gemeinsame Komponenten, Tracking, Formulare, API und Deploymentkonfiguration unverändert.
- node --check script.js,page.js,api/_email-template.js,api/kontakt.js erfolgreich. Kein Build-/Testscript vorhanden. git diff --check bestanden.
- Kontaktseite HTTP200, kontaktForm vorhanden. Kein Formularversand/SMTP-Test.

Unveränderter Altfehler: /index#leistungen in drei Blogübersichten, fehlender Anker an geschützter Zielseite. Neue Links gültig.
Basis35302e17d52c164fad058c35e31fc4f8f5e3aa0c; offene PRs beim Start keine. Produktionsdeployment erfolgreich. Elf öffentliche Ressourcen HTTP200, exakte finale URL und bytegleich; drei Sitemap-URLs jeweils einmal, siehe live-check.json. Kein OpenSEO oder Automationsänderung.
