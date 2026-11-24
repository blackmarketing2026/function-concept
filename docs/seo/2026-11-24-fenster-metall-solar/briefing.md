# Recherche-Briefing 24.11.2026 – Fenster, Metall und Solar

Vor Umsetzung gespeichert. Frisch geprüfte Basis main 992f719289adebbc35793c1ab05eebe454af6bea. Keine offenen PRs. Remote-Branches und Branchenregister geprüft, vorheriger Lauf #12/#13 abgeschlossen. Repository-Anweisungen CLAUDE.md, STRUKTUR-TEMPLATE.md, BLOG-ARTIKEL-CHECKLISTE.md und WORKFLOW.md gegenüber gelesener Fassung unverändert; keine AGENTS.md. Vorherigen Prüfbericht/Live-Nachweis, organische Vorlage und Übersichten geprüft. Kein OpenSEO, keine Zeitplanänderung.

## Auswahl, Bestandsabgleich und Intent
14 bestehende Ratgeber einschließlich der allgemeinen Agenturauswahl. Elektriker/Maler/Dachdecker bereits vorhanden. Suche nach Fensterbau, Metallbau, Solarteur, Photovoltaik in ratgeber/ und blog/ ohne Treffer; zusätzlich Tischler-/Elektrikertexte auf Fenster/Solar/PV/Metall abgeglichen. Keine vorhandene eigene Suchintention zum neuen Paket. Drei neue Ratgeber, keine Bestandsratgeber überarbeiten.

| URL unter /ratgeber/ | Fokus, Abgrenzung und eigenständiger Nutzen |
|---|---|
| fensterbauer-kunden-gewinnen-google-ads | Fenstertausch mit Montage statt Produktkauf oder reiner Reparatur. Anfrage nach Elementanzahl, Bestand, Einbausituation und Montageumfang; keine generische Tischlerkopie. |
| metallbauer-kunden-gewinnen-google-ads | Maßanfertigung von Geländern, Treppen und Toren mit Montage; Materialhandel, Fahrzeugbau und Fensterbau abgrenzen. Anfrage nach Verwendung, Maßen, Oberfläche, Planung und Einbausituation. |
| solarteure-kunden-gewinnen-google-ads | PV-Projekte statt Balkonkraftwerk-Handel, Solarthermie oder bloßem Elektroservice. Dach, Gebäudetyp, Verbrauch und vorhandene Anlage vorqualifizieren; keine Ertrags-/Förder-/Amortisationsversprechen. |

Alle Artikel: branchenspezifische Ausgangslage, Google-Ads-Ablauf, zwölf lokale Keyword-Vorschläge mit Intention/Kaufnähe, passende Ausschlüsse und Gegenbeispiele, fiktive Oldenburger Anzeige, Kampagnenarten/Gruppen/Region/Keywords/Budget/Tracking/Optimierung, Zielseiten-Checkliste, Fehler, sechs individuelle FAQs, Fazit/CTA. Keywords ohne Messdaten. Keine GSC-Auswertung, keine Volumina/CPC/Conversion-Raten. Priorität folgt Nutzerliste; Wirkung der Inhalte ist eine ungemessene Hypothese.

## Quellen am 24.11.2026 recherchiert
- https://www.handwerk.de/infos-zur-ausbildung/ausbildungsberufe/berufsprofile/glaserin – Fenster-/Glasarbeiten.
- https://www.handwerk.de/infos-zur-ausbildung/ausbildungsberufe/berufsprofile/metallbauerin – Konstruktion, Fertigung und Montage; Fachrichtungen abgrenzen.
- https://oekozentrum.nrw/energieeffizienz/initiative-elektromobilitaet-photovoltaik/hausbesitzer/pv-privathaushalte/ – PV-Dachplanung, Ausrichtung/Verschattung; keine Zahlenprognose übernehmen.
- Google Ads-Hilfe: answer/7478529 (Keyword-Optionen), 2453972 (Ausschlüsse), 7684791 (Anzeigen/30/90), 10486637 (Budgetgrenzen), 1722038 (Standortoptionen), 1722054 (Conversions), jeweils https://support.google.com/google-ads/answer/ID?hl=de geöffnet.
- Verbraucherzentrale NRW PV-Planungsseite: Suchtreffer gefunden, direkter Abruf 403; nicht als gelesene Hauptquelle verwenden.

Keine technischen Montageanleitungen, Rechts-/Förderberatung oder unbelegten Leistungswerte. Anzeigen und Empfehlungen sind redaktionell abgeleitet, keine Kundenbelege.

## Umsetzung, Domain und Schutz
Bestehende organische Vorlage, eigene Bilder unter medien/ratgeber/: Fenstermonteur beim Aufmaß, Metallbauer bei Geländerfertigung ohne gefährlichen Schweißvorgang, Solarteurin bei Projektbesprechung am Boden mit PV-Modul. Realistisch, keine Logos, KI-Symbolbild kennzeichnen, WebP/Alt/Maße. Keine Kundenreferenzen erfinden.

Neue Canonicals www.function-concept.com, Clean-URLs ohne Endung. Grundlage: bestehende Canonicals, vercel.json und heutige dokumentierte Redirect-/Liveprüfungen. Keine globale Domainänderung. Kontakt /kontakt#kontaktForm mit existierendem Handler; erneut HTTP/Formular prüfen, kein Testversand. Verlinkung zu /ratgeber und Agenturauswahl/Berichtserklärung; fachliche Abgrenzung Fenster/Metall mit gegenseitigem Link. Solarteure verweist bei Bedarf auf Elektriker zur Leistungsabgrenzung.

Whitelist bestehender Dateien: ratgeber/index.html, blog/index.html, blog/kundengewinnung/index.html, sitemap.xml, docs/seo/BRANCHEN.md. Diese Übersichten sind durch dokumentierten organischen Aufbau und frühere PRs zugelassen. Drei neue Ratgeber/Bilder und datierter Dokumentationsordner ergänzen. Alle anderen bestehenden Dateien bytegleich; insbesondere Startseiten, Kampagnenseiten, Formulare, Tracking, gemeinsame CSS/JS/API und Deploymentkonfiguration. Schutzregister und frühere Zuordnung gelten fort. WORKFLOW entspricht Auftrag, keine Scheinänderung. Sitemap nur drei neue URLs, bestehende Einträge/lastmod erhalten.

## Prüf- und Veröffentlichungsplan
HTML/IDs/H1, Titel/Descriptions/Canonicals/JSON-LD, Links/Fragmente, Keywords/FAQs, Anzeigengrenzen, Bilder, Sprache/Quellen/Eigenständigkeit, Sitemap XML/Duplikate/Erhaltung und Bytevergleich der geschützten Dateien. Vorhandenen Checker an aktuelle Basis anpassen. Kein Build-Skript; vorhandene JS-Syntax prüfen. Keine Browser-/Viewportprüfung. Alte unveränderte /index#leistungen-Anker dokumentieren. Nach grünen Checks Merge; Vercel-Status und öffentliche Inhalte/Bilder/Übersichten/Sitemap per HTTP prüfen. Status und Branchenregister nachtragen. Nächste Kandidaten: Dämmungsunternehmen, Entrümpelungsunternehmen, Umzugsunternehmen (Gebäudereiniger vorhanden).
