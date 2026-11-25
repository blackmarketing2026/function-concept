# Qualitätsprüfung – 25.11.2026
Basis c801c045b3f76caff688efeee8217bb3e83a1b8e. Ergebnis: geprüft, via PR #52 gemergt und öffentlich bestätigt veröffentlicht.

- Drei eigenständige Ratgeber mit unterschiedlichen Anfrageabläufen: Fahrzeug/Teileannahme, technische Fertigungsvorprüfung, Innentreppen-Bestandsberatung. Abgrenzung zu bestehenden Polster-, Metallbau- und Tischlerartikeln dokumentiert. Keine bestehenden Ratgeber umgeschrieben.
- Fahrzeugsattlereien: 1292 Wörter; Schweißfachbetriebe: 1301 Wörter; Treppenbauer: 1316 Wörter. Neue Seitentitel im gesamten HTML-Bestand eindeutig. Sprache, Faktenbezüge und Leistungsgrenzen geprüft; keine erfundenen Nachfrage-, Preis- oder Erfolgszahlen.
- check.py bestanden: HTML-Verschachtelung, IDs/H1, Links/Fragmente, einzigartige Metadaten, Canonicals und Article-Schema; je 12 Keyword-Vorschläge/6 FAQs; Anzeigenlängen 30/90; CTA /kontakt#kontaktForm; drei unterschiedliche WebP-Bilder mit korrekten Maßen und Alt-Text; keine identischen langen inhaltlichen Absätze zwischen neuen Seiten.
- Sitemap gültiges XML, genau drei neue URLs, keine Duplikate oder entfernten Bestands-URLs; sämtliche bisherigen lastmod unverändert.
- Drei bestehende Übersichten ergänzt; keine neue Kategorie oder Übersichtsseite. Branchenregister aktualisiert. Vorhandener WORKFLOW entspricht bereits aktuellem Nutzerauftrag.
- Schutzprüfung: alle 469 sonstigen Basisdateien bytegleich, insbesondere Start-/Werbe-/Kampagnenseiten und gemeinsame CSS/JS/API/Tracking-/Formulardateien.
- node --check für script.js, page.js, api/_email-template.js und api/kontakt.js erfolgreich; git diff --check ohne Fehler. Kein Buildskript im statischen Projekt vorhanden.
- Kontaktseite öffentlich HTTP200, finale URL und Formularanker bestätigt. Kein Testversand/SMTP-End-to-End-Test.
- Bekannter unveränderter Altbefund /index#leistungen in drei bestehenden Blogübersichten; geschütztes Startseitenziel nicht bearbeitet. Neue Links auflösbar.
- Keine visuelle Website-, Screenshot- oder Viewport-Prüfung. Keine Google-Indexierung behauptet.

## Live-Nachweis
Vercel-Preview und Preview-Check erfolgreich, PR mergeable/clean, main vor Merge unverändert. Produktionsdeployment für 22ea0b042b2d1a9c8005d294b42b5000e88f8113 erfolgreich. live_check.py bestanden: 11 Ressourcen (3 Ratgeber, 3 Bilder, 4 Übersichten und Sitemap) HTTP200, exakte finale URL und bytegleicher Inhalt. Alle drei neuen URLs genau einmal in öffentlicher Sitemap. Einzelbelege/UTC-Zeiten in live-check.json.
