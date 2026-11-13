# Recherche-Briefing – 13. November 2026

Status: vollständig für Umsetzung. Basis: main 9e7d85477f14047eb17ee3b283973111c41fb7a3. Keine offenen PRs im GitHub-Abgleich. Repository vollständig geklont; Titel/Abschnitte aller HTML-Seiten inventarisiert; bestehende Ratgeber-/Blogvorlagen und CLAUDE.md, STRUKTUR-TEMPLATE.md, BLOG-ARTIKEL-CHECKLISTE.md gelesen. Keine AGENTS.md im Repository vorhanden.

## Ziel und Lücke

Qualifizierte Beratungsanfragen von Reinigungsbetrieben für Google Ads. Bestehende Inhalte: allgemeines B2B-Google-Ads, B2B-Neukundengewinnung, Wortgruppen, Website und Cluster für Maler, Dachdecker und Elektriker. Kein eigenes Gebäudereinigungscluster. Die Branchenartikel wiederholen zahlreiche Abschnitte; dieses Paket übernimmt ausschließlich das Design, nicht deren Textgerüst.

Suchrecherche: „Google Ads Gebäudereinigung Büroreinigung Keywords Budget Aufträge“. Sichtbare Ergebnisse behandeln Gewerbeaufträge, Privat-/Gewerbetrennung und Jobsuchen. Das ist ein qualitatives Intent-Signal, kein Nachweis für Suchvolumen oder Rankingchancen. Wettbewerberbehauptungen zu CPC, Profitabilität oder garantierten Anfragen werden nicht übernommen. Keine Search-Console-/Keyword-Planer-Daten verfügbar.

## Freigegebenes Paket für diesen Test

| Datei | Eigenständige Suchintention | Konkreter Nutzwert / Abgrenzung |
|---|---|---|
| ratgeber/gebaeudereinigung-google-ads.html | Wie gewinne ich passende gewerbliche Reinigungsaufträge mit Search? | Objektarten, wiederkehrende Verträge, Einsatzgebiet, Besichtigung, Leadqualifikation, Übergabe an Vertrieb; keine ausführliche Budgetrechnung/Keyword-Liste |
| blog/kundengewinnung/gebaeudereinigung-google-ads-budget.html | Welches Budget kann ich wirtschaftlich testen? | Transparente Modellrechnung mit Qualifizierungs-/Abschlussquote, konservativem Deckungsbeitrag und Gesamtkosten; keine Marktpreisbehauptungen |
| blog/kundengewinnung/gebaeudereinigung-google-ads-keywords.html | Welche Suchbegriffe einschließen/ausschließen? | Intent-Matrix für Büro/Praxis/Jobs, Negativ-Match-Beispiele, Risiken pauschaler Ausschlüsse, Arbeitsroutine |

Drei Seiten ergeben sich aus diesen drei getrennten Entscheidungen, nicht aus einer generellen Seitenbegrenzung. Weitere Themen erst bei belegtem zusätzlichem Nutzwert. Bestehenden allgemeinen B2B-Artikel intern anbinden, nicht nachbauen. Kategorie Kundengewinnung besteht bereits: keine neue Kategorie notwendig. Alle drei Seiten in Blog- und Kategorieübersicht sowie Seitenübersicht und Sitemap aufnehmen; wechselseitige Links und CTA zur bestehenden Google-Ads-Anfrageseite.

## Faktenquellen (abgerufen 13.11.2026)

- https://support.google.com/google-ads/answer/2453972?hl=de – auszuschließende Keywords, deren Match-Verhalten und Varianten.
- https://support.google.com/google-ads/answer/9342105?hl=de – ähnliche Varianten auch bei genau passenden positiven Keywords.
- https://support.google.com/google-ads/answer/7102466?hl=de – Suchbegriffsbericht zur Prüfung von Ausschlüssen.
- https://support.google.com/google-ads/answer/10486637?hl=de – bei den meisten Kampagnen 2× Tages-/30,4× Monatsgrenze, Sonderfälle und Budgetänderungen beachten.
- https://support.google.com/google-ads/answer/1722038?hl=de – Präsenz vs. Interesse, keine garantierte geografische Genauigkeit.
- https://vercel.com/docs/project-configuration/git-configuration – branchbezogene Sperre automatischer Deployments.

Redaktionelle Vorschläge und Rechenbeispiele als solche erkennbar; keine Kundenfallstudien. Keine medizinischen Hygiene-, Rechts- oder Rentabilitätsgarantien. Keine echten Kundendaten.

## Domain, Design und Bilder

Canonicals der bestehenden Branchenratgeber und Sitemap verwenden function-concept.com. vercel.json definiert keine Domain. Abruf beider Domains über Web-Recherche scheiterte; zusätzliche HTTP-Prüfung wird dokumentiert. Kein Beleg für Wechsel zu .de: .com beibehalten, vor Veröffentlichung Domain-/Redirect-/Search-Console-Abgleich erforderlich.

Bestehende Klassen page-body, page-header, page-content, article-header, article-card und Footer übernehmen. Neue eigene SVG-Sachgrafiken statt unpassender Handwerkerfotos oder erfundener Referenzen: Prozess, Budgetmodell, Suchintentionen. Alt-Texte und feste Abmessungen. Keine neuen Drittdienste, kein neues Tracking; Datenschutzseite deshalb inhaltlich nicht erweitern.

## Übergabe und Abnahmekriterien

Erst nach diesem Briefing HTML erstellen. Jede Seite hat eigenen Title, Description, H1, Canonical, Quellen, verständlichen CTA. Interne Clean-URLs, funktionierende Bilder, Übersichtseinträge, Sitemap prüfen. Desktop 1440px und Mobil 390px/320px rendern, auf Überlauf und Kontrast prüfen. Fakten/Beispiele erneut gegenlesen. Fehler korrigieren und wiederholen. Tests ohne Zugang ausdrücklich als nicht durchgeführt markieren. Branch und Draft-PR; kein Merge und kein Deployment.

## Domain-Nachprüfung

HTTP-Abfrage erfolgreich: https://function-concept.de leitet per 301 auf https://www.function-concept.com/ weiter; https://function-concept.com per 307 ebenfalls dorthin, abschließend HTTP 200. Die ausgelieferte Startseite entspricht in der Größe (13.606 Bytes) dem Repository. Damit ist die .com-Domainfamilie belegt. Die bestehende Canonical-Schreibweise ohne www bleibt unverändert; eine globale Bereinigung auf www wäre eine separate, standortweite Änderung. Zugriff auf Vercel-Domaineinstellungen und Search Console wurde nicht durchgeführt.
