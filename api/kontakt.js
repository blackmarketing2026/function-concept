import { buildKontaktEmailHtml } from './_email-template.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, telefon, nachricht } = req.body || {};

  if (!name || !email || !nachricht) {
    return res.status(400).json({ error: 'Name, E-Mail und Nachricht sind erforderlich.' });
  }

  const { RESEND_API_KEY, RESEND_FROM_EMAIL, RESEND_TO_EMAIL } = process.env;

  if (!RESEND_API_KEY || !RESEND_FROM_EMAIL || !RESEND_TO_EMAIL) {
    console.error('Resend env vars missing: RESEND_API_KEY / RESEND_FROM_EMAIL / RESEND_TO_EMAIL');
    return res.status(500).json({ error: 'Serverkonfiguration fehlt.' });
  }

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: RESEND_TO_EMAIL,
        reply_to: email,
        subject: `Neue Kontaktanfrage von ${name}`,
        text: `Name: ${name}\nE-Mail: ${email}\nTelefon: ${telefon || '–'}\n\nNachricht:\n${nachricht}`,
        html: buildKontaktEmailHtml({ name, email, telefon, nachricht }),
      }),
    });

    if (!resendRes.ok) {
      const detail = await resendRes.text();
      console.error('Resend API error:', resendRes.status, detail);
      return res.status(502).json({ error: 'Nachricht konnte nicht versendet werden.' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Kontaktformular fetch error:', err);
    return res.status(500).json({ error: 'Nachricht konnte nicht versendet werden.' });
  }
}
