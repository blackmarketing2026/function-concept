# Qualitätsprüfung – 25.11.2026

Ergebnis: bestanden und bestätigt veröffentlicht.

Drei neue Ratgeber, null bestehende Ratgeber überarbeitet, drei redaktionelle Übersichten ergänzt. Glasereien 1207, Zaunbauer 1228, Garagentorbetriebe 1289 Wörter im Hauptbereich einschließlich Quellen/Navigation. Je zwölf Keyword-Vorschläge und sechs FAQs. Eigenständige Schwerpunkte: Glasschaden vs. Maßanfertigung, Grundstückseinfriedung mit Montage, Toraustausch vs. Antriebs- und Reparaturservice. Fachquellen im Briefing und Artikel verlinkt. Keine erfundenen Nachfrage-, Klickpreis- oder Erfolgsdaten. Aussagen, Sprache, Suchintention und Abgrenzung redaktionell geprüft; keine gefährlichen Arbeitsanleitungen, Normbehauptungen oder Garantien.

Tatsächlich ausgeführt:
- check.py erfolgreich: HTML-Nesting, eindeutige IDs, eine H1, lokale Linkziele/Fragmente, Kontakt-CTA, Bilddateien/Alt/Maße, Canonicals, Article-Schema und keine noindex-Metadaten.
- Neue Titel und Descriptions eindeutig; Titel zusätzlich gegen gesamten HTML-Bestand geprüft.
- Anzeigenüberschriften maximal 30, Beschreibungen maximal 90 Zeichen. Keine identischen längeren Absätze innerhalb der drei neuen Seiten.
- Drei unterschiedliche WebP 1440×960, 154528/350676/101192 Bytes. Motive, Hände und Logo-Freiheit geprüft; sichtbare KI-Symbolbildkennzeichnung. Keine visuelle Websiteprüfung.
- Sitemap als XML validiert: exakt drei neue URLs, jede einmal; keine Dubletten, sämtliche alten Records einschließlich lastmod erhalten.
- Alle 385 übrigen Basisdateien bytegleich: geschützte Seiten, gemeinsame Komponenten, Tracking/Formulare/API und Konfiguration unverändert.
- node --check für script.js, page.js und beide api-JS-Dateien bestanden. Projekt hat kein Build-/Testscript. git diff --check bestanden.
- Zusätzliche Wortzählung/Titelprüfung zunächst wegen fehlendem bs4-Modul nicht ausführbar; mit Python-Standardbibliothek wiederholt und bestanden. HTML-Prüfung erfolgte unabhängig über check.py.
- Kontaktseite HTTP200 mit id=kontaktForm. Kein Formularversand, daher keine SMTP-Zustellung bestätigt.

Bekannte unveränderte Einschränkung: /index#leistungen in drei Blogübersichten verweist auf fehlenden Anker der geschützten Zielseite. Nicht durch dieses Paket verursacht, nicht verändert. Alle neuen Inhalts-/CTA-Links gültig.

Frischer main vor Veröffentlichung: 5ba3e36cdd4b53fa36c520dc4a4c74e018d755a2; offene PRs: keine. Vercel-Produktion erfolgreich für 3956b3f0cfbdd2a01073a94880b517b0c0792e57. Die ersten zwei HTTP-Prüfungen kurz nach Merge lieferten noch 404; Einzelabruf und anschließende vollständige Wiederholung bestanden. live_check.py bestätigt elf öffentliche Ressourcen mit HTTP200, korrekten finalen URLs und Bytegleichheit. Sitemap enthält die drei neuen URLs genau einmal. Rohprotokoll: live-check.json. Keine OpenSEO-/Automationsänderungen.
