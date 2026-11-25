# Qualitätsprüfung – 25.11.2026
Basis: 1f8270f43f457ebac1cee28031b6a96e5fce08be. Ergebnis: freigabefähig, Veröffentlichung und Live-Prüfung noch ausstehend.

- Drei eigenständige Ratgeber: Parkettleger (1264 Wörter im Hauptbereich), Polstereien (1324), Umzugsreinigungsbetriebe (1357). Eigenständige Abläufe für Bodenprüfung, Werkstattannahme und Übergabetermin; kein bloßer Branchenworttausch. Bestehende Branchenbeiträge bleiben unverändert.
- Fachliche Aussagen gegen dokumentierte Primärquellen geprüft, Empfehlungen als redaktionelle Ableitung gekennzeichnet. Keine erfundenen Suchvolumina, Klickpreise oder Ergebnisse. Anzeigen als fiktive Beispiele. Sprache und Leistungsgrenzen geprüft.
- check.py erfolgreich: gültige HTML-Verschachtelung, eindeutige IDs/H1, lokale Links und neue Fragmente, Metadaten/Canonicals/Article-Schema, je 12 Keyword-Vorschläge und 6 FAQs, CTA /kontakt#kontaktForm, Anzeigenlängen 30/90, drei unterschiedliche WebP-Bilder mit Alt-Text/Maßen, keine identischen langen inhaltlichen Absätze zwischen den neuen Seiten.
- Neue Seitentitel im gesamten HTML-Bestand eindeutig. Quellenhinweise bewusst individuell zugeordnet. Kein neuer Drittanbieter, kein Tracking-/Formularwechsel.
- Sitemap XML geprüft: genau drei neue kanonische URLs; sämtliche bestehenden Einträge und lastmod erhalten, keine doppelten URLs.
- Drei bestehende redaktionelle Übersichten ergänzt; Kategorie bereits vorhanden. Keine neue Übersichtsseite.
- Schutzprüfung: alle 455 übrigen Basisdateien bytegleich, darunter Startseiten, sämtliche Werbe-/Kampagnenseiten und gemeinsame Komponenten.
- node --check für script.js, page.js, api/_email-template.js und api/kontakt.js bestanden; git diff --check ohne Fehler. Statisches Projekt ohne Buildskript, daher kein Buildlauf verfügbar.
- Kontaktziel live HTTP200 und vorhandener Formularanker bestätigt. Kein Formular abgesendet, kein SMTP-End-to-End-Test.
- Bekannter Altbefund: /index#leistungen in drei vorhandenen Blogübersichten hat kein entsprechendes Ziel-ID. Unverändert belassen; geschützte Startseite nicht bearbeitet. Alle neu gesetzten Links sind auflösbar.
- Keine visuelle Browser-, Screenshot- oder Viewport-Prüfung durchgeführt.
