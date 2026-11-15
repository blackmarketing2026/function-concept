# Recherche und Umsetzungsbriefing – 15.11.2026

Vollständig gespeichert vor Umsetzung. Basis main 4914a38979d21d31c51722a6d4123f84b3dcec93; keine offenen PRs. Remote-Branches main und bereits gemergter seo/gebaeudereinigung-2026-11-13. Historische Briefings und Berichte sowie CLAUDE.md, STRUKTUR-TEMPLATE.md, BLOG-ARTIKEL-CHECKLISTE.md, WORKFLOW.md gelesen. Keine AGENTS.md vorhanden. Aktuelle Nutzeranweisung ersetzt alte visuelle Prüfpflichten und Freigabevorbehalte.

## Seitenschutz und Bestandsabgleich

Verbindliches Register: seitenschutz.md / seitenregister.json. Bestandsabgleich anhand Dateipfaden, früherem Briefing und erlaubten Übersichten, keine Inhalts-/Kennzahlenanalyse ausgeschlossener Seiten. Das Gebäudereinigungspaket mit Budget/Keywords wurde am 13.11. in PR #1 gemergt und enthält ads im Pfad: jetzt geschützt. Nicht erneut erstellen, umbenennen oder kopieren. Auch sämtliche anderen bestehenden ads-Pfade sind ausgeschlossen. Die anderen alten Einzelartikel sind mangels unabhängig bestätigter Kampagnenfreiheit vorsorglich nicht freigegeben. Nur vier explizit dokumentierte redaktionelle Übersichten zugelassen. Es gibt kein offenes geeignetes Paket.

## OpenSEO / Wochenauswertung 2026-W46

Projekt 56d484cb-8829-41ab-ab45-09c32e34659e = Function Concept, Domain function-concept.com, Markt Deutschland/de. Gewählte Property https://www.function-concept.com/, siteOwner, kein API-/Reconnect-Problem. Projektkontext und Recherchelog leer. Keine frühere datierte GSC-Auswertung dieser Kalenderwoche im Repo. Kostenlose Abfragen erfolgreich, keine bezahlten Tracker, keine Einstellungen geändert.

Pacific-Time-Datierung, dataState=final, type=web. Aktuell 16.10.–12.11.2026 (28 Tage), Vergleich 18.09.–15.10.2026 (28 Tage), lückenlos und nicht überlappend. Rund drei Tage Verzögerung berücksichtigt. Enddatum ist eine konservative Abfragegrenze; die API bestätigt keinen separaten letzten finalen Verarbeitungstag. Ergänzung wegen geringer Daten: 13.08.–12.11.2026 (drei Kalendermonate).

Exakte equals-Seitenfilter, getrennt Dimension page und query+page, jeweils rowLimit=1000/startRow=0. Nach bestätigtem HTTP-Redirect zusätzlich finale URLs ohne /index abgefragt. Alle Antworten ok, hasMore=false; keine Folgeseite erforderlich. Keine Positions-/Impressionsfilter auf die Top-1000-Zeilen angewandt. Das Connector-Limit von 1000 Zeilen je Abruf sowie mögliche GSC-Auslassungen bleiben allgemeine Grenzen. Keine anonymisierten Queries rekonstruiert. Rohdaten mit Parametern: gsc-2026-W46.json. Weitere Läufe derselben ISO-Woche nutzen dieses datierte Ergebnis, sofern kein fehlgeschlagener Teilabruf zu wiederholen ist.

| Zugelassene finale URL | Klicks aktuell | Impressionen aktuell | CTR | Position | Vergleich |
|---|---:|---:|---:|---:|---|
| /blog | 0 | 4 | 0 % | 16 | keine Zeile geliefert |
| /blog/kategorien | 0 | 5 | 0 % | 10,4 | keine Zeile geliefert |
| /blog/kundengewinnung | keine Zeile | keine Zeile | n/a | n/a | keine Zeile |
| /blog/webseite | keine Zeile | keine Zeile | n/a | n/a | keine Zeile |

Sichtbare Query-Zuordnung: „bei google kunden gewinnen“ → /blog (0 Klicks, 4 Impressionen, Position 16); „concept blog“ → /blog/kategorien (0/2/8); „kategorieseiten funktionen“ → /blog/kategorien (0/1/30). Page-Summe Kategorien 5, sichtbare Query-Summe 3: Query-Tabelle ist unvollständig, keine Gleichsetzung. Drei Monate: /blog 0 Klicks/4 Impressionen/0 %/Position 16; /blog/kategorien 0/7/0 %/8,7; andere erlaubte Filter leer. Keine Aussage über geschützte Inhalte oder die gesamte Property. Kein prozentuales Wachstum aus leerem Vergleich ableiten. GSC-Klicks wären keine Kundenanfragen.

Schluss: sehr schwache Datengrundlage, keine belastbare datengetriebene Optimierung. Bestehende Inhalte nicht aufgrund von CTR/Position umschreiben. Neues Paket ist quellenbasiert und geschäftlich begründet, nicht als nachfragequantifiziert darstellen.

## Hauptdomain / URL-Konvention

Erreichbare erlaubte URL /blog/kategorien: .de leitet per 301 auf https://www.function-concept.com/blog/kategorien, .com ohne www per 308 auf denselben Host, dort HTTP 200. Vercel-Konfiguration cleanUrls=true/trailingSlash=false. Bestehende Sitemap .com ohne www bleibt für vorhandene Einträge bytegleich. Neue Seiten erhalten die direkt erreichbare www.com-Canonicalform; keine globale Domain- oder Redirectänderung, kein Zugriff auf geschützte Startseite zur Analyse. Neue Inhalte ohne .html verlinken. Keine Änderungen an vercel.json oder gemeinsamen Assets.

## Neues Themenpaket: eine Agenturentscheidung vorbereiten

Priorität: Betriebe bei einer konkreten Beauftragungsentscheidung unterstützen, mit prüfbaren Fragen statt Ergebnisversprechen. Bestehendes Register/frühere Briefings enthalten kein eigenständiges Paket für Anbieterwahl, Kontoübergabe und Agenturberichte. Themen sind keine Branchenkopien und keine Ausweichfassungen geschützter Budget-/Keywordartikel.

1. /ratgeber/suchmaschinenwerbung-agentur-auswaehlen — Ratgeber. Intent: Wie wähle ich eine Google-Ads-Betreuung für meinen lokalen Betrieb aus? Gliederung: eigener Bedarf; Leistungsmatrix; Transparenz und Kontrollfragen; messbare Vereinbarung; Vergleichsgespräch; Warnsignale; Übergabe. Eigenständiges Ergebnis: ausgefüllte Entscheidungsvorlage mit Zuständigkeiten. Kein Budgetrechner, keine Keywordliste.
2. /blog/kundengewinnung/werbekonto-zugriffe-agenturwechsel — Blog. Intent: Was muss bei Kontozugriff und Agenturwechsel übergeben werden? Gliederung: Konto vs. Verwaltungskonto; Rollen; Inventar; Übergabe-Reihenfolge; Abschlusskontrolle. Eigenständiges Ergebnis: technische Bestands-/Übergabecheckliste, keine Vertragsrechtsberatung.
3. /blog/kundengewinnung/agenturberichte-kundenanfragen-bewerten — Blog. Intent: Welche Informationen brauche ich im Agenturbericht für eine Entscheidung? Gliederung: Kosten/Zeitraum; Definition der gemessenen Handlung; Qualifizierung; Reife der Daten; Entscheidungsvorlage; fiktives Beispiel. Keine Rentabilitäts-/Budgetberatung, keine Behauptung tatsächlicher Kundenergebnisse.

Alle neuen Seiten explizit redaktionell, keine Kampagnenzuordnung, keine Formulare/Trackingänderungen. Untereinander verlinken, vorhandene Kontaktseite nur als Linkziel; dort nichts ändern. Einträge in blog/index.html und blog/kundengewinnung/index.html ergänzen. Bestehende Kategorie vorhanden: blog/kategorien.html bleibt unverändert. Keine Änderungen der globalen Seitenübersicht oder geschützter Ziele. Neue eigene SVG-Sachgrafiken, kein fremdes Foto und keine fiktive Referenz.

## Primärquellen, abgerufen 15.11.2026

- https://support.google.com/adspolicy/answer/9457109?hl=de – Leitfaden für Zusammenarbeit mit Drittanbietern; begrenzt für Transparenz/Anbieterauswahl.
- https://support.google.com/adspolicy/answer/6086450?hl=de – Drittanbieter-Richtlinie, Kosten-/Leistungstransparenz. Keine daraus abgeleitete Erfolgsgarantie.
- https://support.google.com/google-ads/answer/9978556?hl=de – Rollen und Zugriffsebenen.
- https://support.google.com/google-ads/answer/7456532?hl=de – technische Inhaberschaft von Kundenkonten, keine Gleichsetzung mit zivilrechtlichem Eigentum.
- https://support.google.com/google-ads/answer/6372672?hl=de – Einladungen und Entzug von Nutzerrechten.

## Maßnahmen / Beobachtung

Ausgangsdaten neuer Seiten: nicht vorhanden. Hypothese: konkrete Entscheidungshilfen erleichtern fachlich passende Beratungsanfragen. Maßnahme 15.11.2026: drei neue Seiten plus zwei reine Übersichten und drei Sitemap-URLs. Keine kausale Wirkung behaupten. Früheste reguläre Bewertung ab 14.12.2026 (28 vollständige Tage nach Veröffentlichung); technische Fehler sofort. Keine erneute Fassung bei jedem Lauf.

## Abnahme und Veröffentlichung

Faktenprüfung, HTML-Struktur, eindeutige Titles/Descriptions/H1/Canonicals, interne Links/Bilder, JSON-LD soweit vorhanden, Schutz-Diff, unveränderte gemeinsame Komponenten, XML/Sitemap-Einmaligkeit und Erhalt sämtlicher alter Einträge. Keine Browser-/Screenshot-/Viewportprüfung. Checks ohne installierten Build dokumentieren. Nach bestandenem Gate committen, über PR selbst mergen, Branchschutz respektieren. Vercel-Status und HTTP-Inhalt/Sitemap ohne Browser verifizieren; erst dann live melden. Keine Automationsänderung.
