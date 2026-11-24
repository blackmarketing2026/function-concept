# Qualitätsprüfung – 24.11.2026: Boden / Heizung / Sanitär

## Ergebnis: freigabefähig
Drei neue eigenständige Ratgeber, null überarbeitete Bestandsratgeber, drei eigene WebP-Bilder. Drei redaktionelle Übersichten ergänzt, drei neue Sitemap-URLs. Keine unvollständige Inhaltsseite.

## Tatsächlich geprüft
- Aktueller main cc1f2a4c511a58350555cd6294636e7a37b7f0c7, Branches, keine offenen PRs. Vollständiges Briefing vor Umsetzung gespeichert. Voriges Paket nicht wiederholt. WORKFLOW bereits aktuell, deshalb unverändert.
- Vollständige redaktionelle Durchsicht: Bodenbelagsverlegung gegenüber Fliesen/Materialhandel; geplante Heizungsmodernisierung und Wartung gegenüber Störung/Notdienst; Sanitärinstallation gegenüber Heizung, Handel und Rohrreinigung. Je zwölf Keyword-Vorschläge und sechs individuelle FAQs, passende lokale fiktive Anzeigen, Ausschlüsse samt Ausnahmen, Zielseiten- und Anfragehilfen. Keine erfundenen Messwerte, Referenzen, Förderquoten oder Einsparversprechen. Je ungefähr 1300–1400 Wörter im redaktionellen Body.
- Technische Ads-Aussagen anhand der geöffneten Google-Hilfe geprüft; Leistungsbereiche anhand Handwerk-Berufsprofilen. Quellen im Text verlinkt, Empfehlungen als redaktionelle Ableitung statt Nachfragebeleg formuliert.
- `python docs/seo/2026-11-24-boden-shk/check.py`: sieben HTML-Dateien auf Verschachtelung, IDs/H1, lokale Linkziele/Fragmente geprüft. Neue Seiten haben eindeutige Titel/Descriptions, www.com-Canonicals, kein noindex, gültiges Article-JSON-LD mit richtiger URL. Anzeigenlängen <=30/90, je >=10 Keywords und >=5 FAQs. Keine identischen längeren Haupttext-Absätze zwischen den drei neuen Artikeln.
- Drei verschiedene WebP-Dateien dekodiert, jeweils 1440×960; passende Alt-Texte, feste Maße, eindeutige Hashes. Bildinhalte geprüft, KI-Symbolbildkennzeichnung vorhanden.
- Sitemap als XML validiert: genau drei neue kanonische URLs, keine Duplikate, alle bisherigen Einträge samt lastmod erhalten. Übersicht am selben Datum aktualisiert, daher kein künstlicher lastmod-Wechsel. Neue Inhalte in Ratgeber-, Blog- und Kundengewinnungsübersicht verlinkt; bestehender Kategorien-Link auf /ratgeber unverändert ausreichend.
- Diff-Whitelist: 175 sonstige Bestandsdateien bytegleich, darunter sämtliche bestehenden Inhaltsseiten, geschützte Start-/Kampagnenseiten, globale Styles/Skripte, Tracking, Formulare, API und Deploymentkonfiguration. Nur drei Übersichten, Sitemap und Branchenregister im Bestand geändert.
- `node --check page.js`, `node --check api/kontakt.js`, `git diff --check` erfolgreich. Statisches Projekt ohne Build-Skript.
- Dokumentationskorrektur: Leerzeile innerhalb der erweiterten Branchentabelle entfernt; Status und Bilder vollständig eingetragen.

## Einschränkungen
Bekannter unveränderter Altlink /index#leistungen in Navigationen von Blog-/Kategorieübersichten zeigt auf fehlenden Startseitenanker. Nachweislich bereits in der Basis vorhanden, keine neue Abhängigkeit der Ratgeber. Neue Linkziele und Kontaktformularfragment sind gültig. Kein Eingriff in geschützte Startseite oder gemeinsame Navigation.
Keine visuelle Browser-, Screenshot- oder Viewport-Prüfung laut Auftrag. Kein externer vollständiger HTML-Validator/CWV-Test. Kein Kontaktformular-/SMTP-Testversand. Keine OpenSEO- oder GSC-Abfrage, keine gemessene Nachfrage/Wirkung/Indexierung behauptet.

## Veröffentlichung
Bei Erstellung dieses Berichts: Dateien erstellt und geprüft, noch kein bestätigter Push/Merge oder Live-Nachweis. Deployment und öffentliche Inhalte/Sitemap werden nach Veröffentlichung separat geprüft und dokumentiert.

## Veröffentlichungsprüfung abgeschlossen
PR #10 nach erfolgreichen Checks gemergt. Produktionscommit a839565c79ddd383a23eb200e7c5a48f972d1952, Vercel success. Elf öffentliche Ressourcen HTTP 200, finale URLs korrekt und bytegleich zum Repository. Drei neue Ratgeber-URLs in Live-Sitemap jeweils einmal enthalten. Kontaktseite zusätzlich HTTP 200 mit vorhandenem kontaktForm; kein Versand ausgelöst. Drei neue Ratgeber bestätigt veröffentlicht. Details: live-check.json und veroeffentlichung.md.
