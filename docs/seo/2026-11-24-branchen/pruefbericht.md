# Qualitätsprüfung – 24.11.2026

## Ergebnis: freigabefähig
Drei vollständige neue Branchenratgeber (Tischler, Zimmerer, Fliesenleger), keine überarbeiteten Bestandsratgeber. Drei eigene Branchenbilder, neue Ratgeberübersicht, drei bestehende redaktionelle Übersichten ergänzt. Vier neue Sitemap-URLs einschließlich Übersicht. Kein ungelöster Fehler in den neuen Seiten oder ihren Abhängigkeiten.

## Tatsächlich ausgeführt
- Recherche-Briefing vor HTML/Bilderstellung gespeichert. Bestand und offene PRs geprüft, keine thematischen Dubletten für die ausgewählten Branchen. Elektriker, Maler, Dachdecker und Gebäudereinigung schon vorhanden, nicht erneut angelegt.
- Vollständige redaktionelle Durchsicht der drei Texte: jeweils eigener Leistungsfokus, 12 Keyword-Vorschläge mit Intention, 6 individuelle FAQs, regionale fiktive Anzeigenbeispiele, Ausschlüsse mit Zielkonflikten, Kampagnen-/Budget-/Tracking-/Zielseiten-/Optimierungsabschnitte und CTA. Keine erfundenen Messwerte, Kundenergebnisse oder Garantien. Kein Austausch bloßer Branchenwörter. Maßmöbel, konstruktiver Holzbau und Verlegearbeiten sind klar abgegrenzt.
- Quellen geöffnet und fachliche Aussagen gegen Google-Hilfe und Berufsprofile des Handwerks geprüft. Allgemeine Ads-Technik von eigenen redaktionellen Empfehlungen unterschieden. Beispielanzeigen unter 30 Zeichen je Titel und 90 je Beschreibung. Budgetbeispiel ausdrücklich hypothetisch, keine CPC-/Erfolgsprognose.
- `python docs/seo/2026-11-24-branchen/check.py`: sieben HTML-Dateien auf Tag-Verschachtelung, eindeutige IDs/H1 und lokale Linkziele geprüft. Neue Seiten zusätzlich auf individuelle Metadaten, www.com-Canonicals, Indexierbarkeit, gültiges JSON-LD und Article-Zuordnung. Neue CTA-Fragmente lösen auf das tatsächliche kontaktForm auf.
- Drei WebP-Dateien vollständig dekodiert; jeweils 1440×960, unterschiedliche Hashes, Alt-Texte und feste Maße. Dateigrößen 156326, 199478 und 114408 Bytes. Generierte Bildinhalte kontrolliert: passende Branche, keine Logos/Referenzbehauptungen. Keine Website-Browserprüfung.
- Sitemap als XML geparst: eindeutige URLs, genau vier neue Einträge, alle vorhandenen Einträge samt lastmod semantisch unverändert. Drei neue Artikel jeweils in Ratgeber-, Blog- und Kundengewinnungsübersicht verlinkt. Kategorieübersicht verlinkt Ratgeberbereich.
- Diff-Whitelist gegen d074f90a0ce4224edd46765cfeca3b2e6b8eabae: 159 sonstige Bestandsdateien bytegleich. Keine Änderungen an Startseite, Kampagnen-Landingpages, Formularen, Tracking, globalem CSS/JS, API oder Deploymentkonfiguration.
- `node --check page.js`, `node --check api/kontakt.js` und `git diff --check` ohne Fehler. Kein Build-Skript im statischen Projekt vorhanden.
- Frischer HTTP-Abruf: .de und non-www.com am erlaubten Kategoriepfad leiten auf www.function-concept.com weiter. /kontakt liefert HTTP 200 mit vorhandenem kontaktForm. Formularhandler/API-Zuordnung gelesen, keine Nachricht versandt.

## Festgestellter Bestandsfehler und Grenzen
Erster Linktest fand `/index#leistungen` in den unveränderten Navigationen von blog/index.html, blog/kundengewinnung/index.html und blog/kategorien.html; die Ziel-ID fehlt bereits in der Basis. Dieser Altfehler betrifft nicht die neuen Ratgeber, deren Navigation eigene gültige Ziele nutzt. Keine Änderung der geschützten Startseite oder bestehenden Navigation. Checker unterscheidet jetzt nachweislich unveränderte Bestandslinks von neuen Links und wurde vollständig erneut ausgeführt: bestanden. Kein verschwiegenes pauschales „alle Links fehlerfrei“.

Keine vollständige externe HTML-Validator-/Barrierefreiheits-/Core-Web-Vitals-Prüfung. Keine visuelle Browser-, Screenshot- oder Viewport-Prüfung entsprechend Nutzerauftrag. Keine echte Kontaktformular-Einsendung und kein SMTP-Zustellnachweis, da keine Nachrichten an Dritte ausgelöst werden sollen. Keine OpenSEO-/GSC-Daten oder Keyword-Volumendaten verwendet. Nachfrage, Wirkung und Indexierung sind nicht bestätigt.

## Veröffentlichungsstand bei diesem Commit
Arbeitsdateien erstellt und geprüft; Push/Merge, Deployment und öffentliche neuen Seiten noch nicht bestätigt. Der nachfolgende Veröffentlichungsnachweis dokumentiert Commit, Checks, Deployment und HTTP-Abgleich getrennt. Kein Erfolgsstatus aus einem bloßen Push abgeleitet.
