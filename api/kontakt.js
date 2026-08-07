import nodemailer from 'nodemailer';
import { buildKontaktEmailHtml } from './_email-template.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, telefon, webseite, nachricht, besuchsverlauf } = req.body || {};

  if (!name || (!email && !telefon)) {
    return res.status(400).json({ error: 'Name und mindestens ein Kontaktweg (E-Mail oder Telefon) sind erforderlich.' });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_TO_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error('SMTP env vars missing: SMTP_HOST / SMTP_USER / SMTP_PASS');
    return res.status(500).json({ error: 'Serverkonfiguration fehlt.' });
  }

  const port = Number(SMTP_PORT) || 465;

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: SMTP_USER,
      to: SMTP_TO_EMAIL || SMTP_USER,
      replyTo: email || undefined,
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email || '–'}\nTelefon: ${telefon || '–'}\nWebseite: ${webseite || '–'}\n\nNachricht:\n${nachricht || '–'}`,
      html: buildKontaktEmailHtml({ name, email, telefon, webseite, nachricht, besuchsverlauf }),
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('SMTP send error:', err);
    return res.status(502).json({ error: 'Nachricht konnte nicht versendet werden.' });
  }
}
