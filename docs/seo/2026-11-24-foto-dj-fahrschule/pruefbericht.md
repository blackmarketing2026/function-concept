# Qualitätsprüfung – 24.11.2026

Status: **freigabefähig** für drei neue Ratgeber, drei Bilder, drei ergänzte redaktionelle Übersichten und drei Sitemap-URLs. Veröffentlichung noch ausstehend.

## Tatsächlich ausgeführt
- Recherche vor Umsetzung gespeichert; aktueller main ee16b95ad6b844fa3d25895a4516146c4691196b, keine offenen PRs; neue Branchen gegen tatsächlichen Bestand geprüft.
- Redaktionelle Prüfung aller drei vollständigen Texte: Fotografen = Bildstil/Shootingart/Nutzungsumfang; DJs = Eventdatum/Location/Technik/Buchung; Fahrschulen = Klasse/Filiale/Kapazität/Kostenbestandteile. Eigenständiger Nutzwert und Suchintention, keine bloße Branchenwort-Kopie. Sprachkorrektur im DJ-Einstieg vorgenommen.
- Faktenabgleich mit den im Briefing verlinkten Google- und Branchenquellen: Keywordsemantik, Grenzen von Ausschlüssen und Standortausrichtung, Anzeigenlängen, Budgetausnahmen und Anfrage versus Buchung. Keine erfundenen Marktwerte, Kundenbeispiele oder Garantien. Anzeigen fiktiv gekennzeichnet. Pro Seite 12 Vorschläge und 6 individuelle FAQs.
- check.py erfolgreich: HTML-Verschachtelung, eindeutige IDs/H1/Title/Description, Canonicals, Article-JSON-LD, interne Links und neue Fragmente, Kontaktanker, Bilddateien/Maße/Alt-Texte, drei unterschiedliche WebP-Dateien, Anzeigen max. 30/90 Zeichen, keine identischen langen Textabsätze zwischen neuen Ratgebern.
- Sitemap als XML validiert, genau drei neue kanonische URLs, keine doppelten Einträge; alle bisherigen Einträge einschließlich lastmod semantisch unverändert. Neue Links in drei erlaubten Übersichten je einmal; ItemList ergänzt.
- 259 übrige Basisdateien bytegleich. Startseite, Kampagnenseiten, bestehende Ratgeber, gemeinsame Komponenten, Tracking, Formulare und Deploymentkonfiguration unverändert.
- node --check erfolgreich für script.js, page.js, kontakt-validierung.js, webdesign-pakete.js, api/kontakt.js und api/_email-template.js. package.json enthält kein Build-/Testskript; kein nicht vorhandener Build behauptet.
- git diff --check erfolgreich. Aktueller GitHub-main vor Veröffentlichung weiterhin identisch; Branchschutz laut Branch-API nicht aktiviert, keine erforderlichen Statuskontexte. Vercel-Checks trotzdem vor Merge abwarten.
- Öffentliche Kontaktseite HTTP 200, kontaktForm vorhanden; .de-Weiterleitung zu www.function-concept.com bestätigt. Keine Domainänderung.
- Bilder einzeln geprüft; kleine Softbox-Beschriftung im Fotografenbild mit Bildtool entfernt und erneut geprüft. Alle neuen Bilddateien KI-Symbolbilder, keine Kundenreferenzen.

## Grenzen und Bestandshinweise
Keine visuelle Website-/Browser-/Viewport-Prüfung gemäß Auftrag. Kein echter Formularversand und keine SMTP-Zustellungsprüfung; keine Nachricht an Dritte. Drei bekannte alte Verweise /index#leistungen in vorhandenen Übersichten haben am geschützten Ziel keinen passenden Anker. Sie wurden nicht neu eingeführt und bleiben unverändert; neue Ratgeberlinks bestehen die Prüfung. Keine Google-Indexierungs- oder Rankingprüfung, keine OpenSEO-Nutzung. Live-Inhaltsprüfung erst nach Deployment.

## Zählung
3 neue Ratgeber, 0 überarbeitete bestehende Ratgeber, 3 neue Bilder. Separat 3 ergänzte Übersichten. Keine geschützten URLs entfernt. Nächste Kandidaten: Friseure, Barbershops, Kosmetikstudios – vor nächster Umsetzung auf Überschneidungen prüfen.
