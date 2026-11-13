# Qualitätsprüfung – 13. November 2026

## Ergebnis: blockiert

Das Content-Paket ist erstellt und statisch geprüft. Freigabe ist blockiert, weil Desktop-/Mobilansicht nicht gerendert werden konnte. Der unbeaufsichtigte Cloud-Gesamtlauf ist ebenfalls nicht nachgewiesen. Keine Veröffentlichung und kein Merge.

## Durchgeführt

- Aktueller Repository-Bestand und offene PRs geprüft; kein Gebäudereinigungscluster und keine offenen PRs gefunden.
- Vollständiges Recherche-Briefing vor HTML-Erstellung gespeichert; drei getrennte Suchintentionen umgesetzt.
- Ratgeber, Budgetartikel und Keywordartikel redaktionell gegengelesen: keine erfundenen Kundenergebnisse, keine Suchvolumina, keine Ranking-/Leadgarantien. Rechenannahmen ausdrücklich hypothetisch.
- Technische Aussagen anhand verlinkter Google-Primärquellen geprüft: Standortoptionen, ähnliche Keywordvarianten, Ausschlusslogik, Suchbegriffsbericht, Ausgabengrenzen.
- Budgetmodell nachgerechnet: 600/4=150 Klicks; 15 Anfragen; 6 qualifiziert; 2 Verträge; 900/2=450 € Gesamtkosten je Vertrag. Zweite Rechnung 1200×0,4=480; 480/3=160. Kein Gewinnversprechen.
- 70 interne Referenzen der neuen Seiten einschließlich Navigationsanker und Assets geprüft: nach Korrektur keine fehlenden Ziele.
- Aus Vorlage übernommener kaputter Link /index#leistungen auf den drei neuen Seiten zu vorhandenem /index#system korrigiert. Bestehende fremde Seiten nicht umgebaut.
- Je Seite genau ein Title, H1 und Canonical; eigenständige Description; eindeutige IDs; Bild-Alt-Texte und Abmessungen vorhanden.
- Alle drei Seiten in globaler Blogliste, bestehender Kategorie Kundengewinnung, Seitenübersicht und Sitemap. blog/kategorien.html gegengelesen: bestehende Kategorie vorhanden, kein neuer Kategorieeintrag nötig.
- Sitemap gültiges XML, keine doppelten URLs, neue Clean-URLs vorhanden. Drei SVG-Dateien gültiges XML und eigene sachliche Illustrationen.
- Neue Seiten verweisen auf bestehendes CSS und /page.js. Keine neuen Drittanbieter oder Tracker eingebaut; vorhandene Datenschutzabschnitte unverändert relevant.
- Textlinks und CTA auf neuen Seiten auf dunkles Blau #1552bd gesetzt; weißer CTA-Text. Quellcodeprüfung, keine behauptete visuelle Abnahme.
- git diff --check ohne Befund; Validator nach Korrektur erneut erfolgreich: python scripts/check-gebaeudereinigung.py.
- Domain: .de → www.function-concept.com (301), .com → www.function-concept.com (307), Ziel HTTP 200. Bestehende Canonicals .com ohne www beibehalten. Globale www-Normalisierung ist ein getrenntes Thema, kein unbelegter Wechsel zu .de.
- Vercel ist per Commit-Status als Hostingintegration belegt. Automatische Deployments für Branch seo/gebaeudereinigung-2026-11-13 in vercel.json deaktiviert; keine GitHub-Actions-Workflows im Bestand.

## Nicht durchgeführt / Einschränkungen

- **Desktop/Mobil 1440/390/320 Pixel:** Playwright vorhanden, mitgelieferter Browser fehlt. System-Chromium gefunden, startet aber nicht: `socket() failed: Operation not permitted (1)`; Prozess bricht ab. Daher keine Screenshots, keine tatsächliche Prüfung von Umbruch, horizontalem Überlauf, SVG-Lesbarkeit, Sticky-Header oder Cookie-Interaktion.
- Keine vollständige HTML-Konformitätsprüfung mit Nu Validator, keine Lighthouse-/Core-Web-Vitals-Messung. Statische Struktur-/Linkprüfung ersetzt diese nicht.
- Kein Live-Formularversand, keine Zahlung, keine produktiven Conversion-Tests; es wurden keine Formulare geändert.
- Keine Search-Console-/Keyword-Planer-Daten; organische Nachfrage und Indexierung nicht quantitativ bestätigt.
- Kein Zugriff auf Vercel-Domainverwaltung oder beliebige externe Webhooks; Schutz in der dokumentierten Vercel-Branchkonfiguration gesetzt, externe unbekannte Hostingintegrationen nicht vollständig auditierbar.
- Automation „Jetzt ausführen“ übergab inline_run an dieses Gespräch. Das ist kein Nachweis für einen autonomen Hintergrundlauf. environments=null liefert keine konkrete Cloud-Zuordnung. Ursprünglicher Gesprächs-Zugriffsfehler konnte nicht repariert werden; alte exakte Aufgabe nicht zugänglich gefunden.

## Für Freigabe erforderlich

1. Alle drei neuen Seiten und geänderten Übersichten im funktionsfähigen Cloud-Browser bei Desktop- und Mobilbreiten prüfen, Befunde korrigieren, erneut prüfen.
2. Nach diesen Prüfungen Content-Status neu beurteilen. Draft allein ist keine Freigabe.
3. Für die Wochenautomatik einen echten unbeaufsichtigten Lauf mit zugänglichem Ergebnis und gespeichertem Draft-PR bestätigen. Erst nach erfolgreichem Gesamttest aktivieren; geplante Zeit Montag 08:00 Europe/Berlin.
