# Recherche-Briefing – 24.11.2026
Vor Umsetzung gespeichert. Basis main 3ef51a9548e1a768543fa02ead377ac35950c0de. Offene PRs: keine. Remote-Branches und vorherige Veröffentlichung geprüft. CLAUDE.md, STRUKTUR-TEMPLATE.md, BLOG-ARTIKEL-CHECKLISTE.md und WORKFLOW.md bereits gelesen und per Diff unverändert bestätigt. Kein AGENTS.md im Repository.

## Bestand und Entscheidung
23 bestehende Ratgeber inklusive allgemeiner Agenturauswahl. Elektriker und vorherige Handwerks-/Kfz-Pakete bereits vorhanden. Volltext-, URL- und Titelabgleich für Immobilienmakler, Schädlingsbekämpfer, Schlüsseldienste und Hausmeister: kein entsprechender Ratgeber. Ein Satz im Metallbau-Ratgeber grenzt Schlüsseldienste ab, keine gleiche Suchintention.
Schlüsseldienste zurückgestellt: https://support.google.com/adspolicy/answer/13527633?hl=de (auch englische Originalfassung geprüft) untersagt entsprechende Anzeigen in Deutschland. Kein normaler Ads-Anleitungsratgeber, keine Umgehung über Hausmeister-Türöffnungen. Stattdessen nächster geeigneter Kandidat Hausmeisterservice. Register erhält diesen Ausschlussgrund.
Keine OpenSEO-/GSC-Nutzung und keine erfundenen Nachfragezahlen. Keywords redaktionell aus Leistungen und Auftragsabsicht abgeleitet.

## Drei neue Seiten und Suchintentionen
- /ratgeber/immobilienmakler-kunden-gewinnen-google-ads: Eigentümer- und Verkaufsmandate für Makler gewinnen; Verkäufer von Kauf-/Mietgesuchen trennen. Objektstandort statt nur Wohnort des Eigentümers; Erstgespräch, Bewertung und Mandat als getrennte Schritte. Keine garantierten Verkaufspreise/-fristen.
- /ratgeber/schaedlingsbekaempfer-kunden-gewinnen-google-ads: geeignete Anfragen nach Befallsverdacht sowie gewerblichem Monitoring gewinnen. Art/Ort/Umfang zunächst klären, Diagnose nicht per Anzeige behaupten. Keine Giftanleitung, Gesundheitsversprechen oder garantierte Einmalbekämpfung.
- /ratgeber/hausmeisterservices-kunden-gewinnen-google-ads: wiederkehrende Objektbetreuung von Eigentümern/Verwaltungen gewinnen. Objektgröße, Turnus, Leistungsumfang, Touren und Zugang klären. Abgrenzung zu Hausverwaltung, Fachhandwerk, Reinigungseinzelauftrag und Schlüsseldienst. Keine unbelegte Berechtigung für Facharbeiten.

Je Seite: individuelle Einleitung, Ads-Funktion, 12 Keyword-Ideen/Intentionen/Kaufnähe, passende Ausschlüsse und Ausnahmen, fiktive regionale Anzeige (30/90), Kampagnenarten/Region/Gruppen/Budget/Tracking/Optimierung, Zielseite, Fehler, 6 individuelle FAQs, Fazit und Kontakt-CTA.
Bilder: Maklerin beim Objektgespräch; Schädlingsfachkraft bei sachlicher Inspektion ohne Biozideinsatz; Hausmeister bei Objektkontrolle mit Checkliste. Keine Logos oder Ergebnisse. WebP1440x960, Alt, KI-Symbolbild.

## Quellen und Grenzen (24.11.2026)
- https://ivd.net/maklervertrag-abschliessen-provision-dauer-und-pflichten/ : Vermarktungsleistungen und Begleitung; keine Rechtsregeln/Provisionen/Vertragsgestaltung übernehmen.
- https://www.dsvonline.de/dsv/fuer-verbraucher/serioese-schaedlingsbekaempfer/verbraucherschutz.php : seriöse Anbieter, klare Angaben und Qualifikation. Keine pauschale gesundheitliche Unbedenklichkeit behaupten.
- UBA /professionelle-schaedlingsbekaempfung in Suche gefunden, direkter Abruf403; nicht als vollständig gelesen ausgeben und nicht alleinige Grundlage.
- https://www.ihk.de/koeln/hauptnavigation/recht-steuern/hausmeisterdienste-merkblatt--5143212 : Tätigkeitsgrenzen; im Ratgeber nur Hinweis, konkrete Berechtigung individuell mit Kammer klären, keine Rechtsberatung.
- https://support.google.com/adspolicy/answer/13527633?hl=en : Schlüsseldienste Deutschland ausgeschlossen.
- Google Ads https://support.google.com/google-ads/answer/7478529?hl=de (Keyword-Optionen), /2453972?hl=de (Ausschlüsse), /7684791?hl=de (responsive Anzeigen), /1722038?hl=de (Standort), /10486637?hl=de (Budget), /1722054?hl=de (Conversions), alle geöffnet.

## Schutz und erlaubte Änderungen
Alle Root-/Kampagnenseiten, Startseitenvarianten, Formulare, Tracking, gemeinsame CSS/JS/API, Deploymentkonfiguration und übrige Bestandsdateien unverändert. Insbesondere index, gen-google-ads, google-ads-anfrage/check/kampagne/danke, ki-webseite, mehr-anfragen-website, ad/kundenanfragen-generieren und webdesign-handwerker-dienstleister geschützt.
Whitelist: drei neue Ratgeber, drei eigene medien/ratgeber-Bilder, ratgeber/index.html, blog/index.html, blog/kundengewinnung/index.html, sitemap.xml, BRANCHEN.md und dieses Dokumentationsverzeichnis.
Redaktionelle Zuordnung der Übersichten durch Workflow, tatsächliche Inhalte und bisherige Inhalts-PRs belegt; keine unklaren Kampagnenseiten verändern. Neue Artikel untereinander kontextuell, zur /ratgeber-Übersicht und Agenturauswahl verlinken. CTA /kontakt#kontaktForm.
Domain www.function-concept.com durch aktuelle Canonicals, Sitemap und bestätigte HTTP-/Redirectprüfung vorherigen Pakets am selben Tag belegt. vercel.json cleanUrls true/trailingSlash false. Keine Domainänderung. Live-/Kontaktprüfung erneut nach Veröffentlichung.

## QA und Veröffentlichung
Fakten/Sprache/Eigenständigkeit/Überschneidungen, HTML/Metadaten/Canonical/JSON-LD, Links/CTA, Bilddateien/Alt, Keyword-/FAQ-Zahl, Anzeigenlänge prüfen. Sitemap XML plus alle alten Einträge/lastmod erhalten. Alle übrigen Bestandsdateien bytegleich. Syntaxchecks vorhanden, kein Buildskript. Keine visuelle Browserprüfung und kein echter Formularversand.
Nach Checks und frischem Remote-Stand committen, PR/Checks/Merge, Deployment und HTTP-Inhalt/Sitemap bestätigen. Ausgangsdaten: keine Messdaten; Priorität aus freien Branchen und getrennten Kundenproblemen. Bestehende Ratgeber nicht umschreiben.
Nächste Kandidaten: Fotografen, DJs, Fahrschulen; zuvor erneut Bestand prüfen.
