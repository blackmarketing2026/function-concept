# Function Concept: SEO-Ablauf in einem Durchlauf

Ziel: organische Sichtbarkeit und qualifizierte Kundenanfragen für Google Ads an Handwerksbetriebe und lokale Dienstleister. Kein Social Media. Kein Merge, Deployment oder Veröffentlichen ohne ausdrückliche Anweisung.

## Laufzustände

Gespeichert/geplant bedeutet nicht gestartet. Ein gestarteter Lauf benötigt eine bestätigte Ausführung; ein fertiger Lauf benötigt einen Commit, einen Draft-PR und einen Prüfbericht. Kein Fortschritt darf allein aus einer geplanten Uhrzeit abgeleitet werden. Fehlende Zugriffe und nicht mögliche Tests ausdrücklich berichten.

## Vorprüfung und Doppelarbeit

Aktuellen Default-Branch, Repository-Anweisungen und offene PRs lesen. Existiert ein offenes Paket, zuerst dessen Status prüfen und keine inhaltliche Dublette erzeugen. Bereits gemergte Themen gegen den aktuellen Bestand prüfen. Pro Lauf ein eigener Branch mit eindeutiger Datums-/Laufkennung. Keine weiteren Automationen aus einem Lauf erzeugen. Falls notwendige Cloud-Werkzeuge fehlen: blockiert melden und nachvollziehbaren Stand sichern.

## Rolle 1: Recherche

Bestandsinventar und Themenlücken mit aktuellen Quellen erstellen. Ein zusammenhängendes Paket mit Ratgeber und ergänzenden Artikeln planen. Seitenzahl ergibt sich aus eigenständigen Suchintentionen. Pro Seite URL, Zielgruppe, Fragestellung, konkrete Hilfestellung, Abgrenzung, Quellen, Bildidee und interne Links festlegen. Keine erfundenen Suchvolumina/Kundenergebnisse. Vor Umsetzung vollständiges Briefing unter docs/seo/<lauf>/recherche.md speichern. Danach kurze Rückmeldung.

## Rolle 2: Umsetzung

Nur anhand vollständigen Briefings arbeiten. Bestehende Gestaltung, Navigation, Einwilligungslogik und Clean-URLs verwenden. Geeignete eigene oder nachweisbar nutzbare Bilder, Alt-Texte, Metadaten und interne Verlinkung ergänzen. Blog-, Kategorie- und weitere betroffene Übersichten sowie Sitemap abgleichen. Keine redundant aufgefüllten Texte. Hauptdomain anhand aktueller Konfiguration und HTTP-Weiterleitungen prüfen; keine unbelegte globale Änderung. Bei neuen Branches vor dem ersten Push Vercel-Autodeployment für genau diesen Branch über git.deploymentEnabled deaktivieren. Andere Hosting-Automationen prüfen, soweit zugänglich. Danach kurze Rückmeldung.

## Rolle 3: Qualitätsprüfung

Fakten/Quellen, Sprache, Nutzwert, Überschneidung, SEO-Metadaten, Canonicals, interne Links samt Ankern, Bilddateien, Übersichten und Sitemap prüfen. Rechenbeispiele nachrechnen. Desktop und Mobil im Browser rendern; Überlauf, Bilder, CTA-Kontrast, Navigation und Cookie-Bedienung prüfen. Fehler korrigieren und betroffene Prüfungen wiederholen. Nicht durchführbare Prüfungen mit konkreter Ursache dokumentieren.

Prüfbericht unter docs/seo/<lauf>/pruefbericht.md: **freigabefähig** nur bei erfüllten wesentlichen Kriterien; sonst **blockiert** mit Restaufgaben. Ein blockierter Stand darf als Draft-PR gespeichert werden. Kein Merge und kein Deployment. Abschlussmeldung mit Branch, PR, Dateien, Tests und offenen Punkten.

## Einrichtung am 13.11.2026

Vorhandener aktiver Einrichtungsauftrag (irrtümlich täglich 09:00) pausiert. Separater Umsetzungsauftrag bereits pausiert. Exakter alter Titel „Function Concept SEO mit Qualitätsprüfung“ nicht in zugänglicher Liste. Frühere Recherche-Aufgabe laut gespeicherter Referenz nicht zugänglich; nicht als gelöscht behandeln.

Neuer Testauftrag erstellt und „Jetzt ausführen“ aufgerufen. Antwort: „Ready to run in this conversation“ mit inline_run, keine bestätigte Hintergrundausführung. Der Test wurde hier im Cloud-Gespräch bearbeitet. Testauftrag anschließend pausiert; kein zweiter Lauf. Umgebungsauswahl inherited, environments null: kein Nachweis einer fest zugeordneten unbeaufsichtigten Cloud-Ausführung. Montagsplan 08:00 Europe/Berlin kann gespeichert werden, bleibt bis zum erfolgreichen Gesamttest deaktiviert.
