function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function toWhatsappNumber(telefon) {
  const digits = String(telefon || '').replace(/[^\d]/g, '');
  if (!digits) return null;
  if (digits.startsWith('00')) return digits.slice(2);
  if (digits.startsWith('0')) return `49${digits.slice(1)}`;
  return digits;
}

export function buildKontaktEmailHtml({ name, email, telefon, nachricht }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeTelefon = telefon ? escapeHtml(telefon) : null;
  const safeNachricht = escapeHtml(nachricht).replace(/\n/g, '<br />');
  const waNumber = toWhatsappNumber(telefon);

  const buttons = [
    waNumber
      ? `<a href="https://wa.me/${waNumber}" style="display:block;background:#22c55e;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:bold;text-align:center;padding:14px 20px;border-radius:8px;margin-bottom:12px;">💬 WhatsApp öffnen</a>`
      : '',
    safeTelefon
      ? `<a href="tel:${safeTelefon}" style="display:block;background:#3b82f6;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:bold;text-align:center;padding:14px 20px;border-radius:8px;margin-bottom:12px;">📞 Anrufen</a>`
      : '',
    `<a href="mailto:${safeEmail}" style="display:block;background:#181d25;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:bold;text-align:center;padding:14px 20px;border-radius:8px;">✉️ E-Mail antworten</a>`,
  ].join('');

  return `<!doctype html>
<html lang="de">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Neue Kontaktanfrage</title>
</head>
<body style="margin:0;padding:0;background:#f6f7f9;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f7f9;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;background:#ffffff;border:1px solid #e2e4ea;border-radius:12px;overflow:hidden;">
          <tr>
            <td style="background:#181d25;padding:20px 24px;">
              <span style="font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:bold;color:#ffffff;">⚙ function concept</span>
            </td>
          </tr>
          <tr>
            <td style="padding:24px;">
              <p style="margin:0 0 18px;font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:bold;color:#181d25;">Neue Kontaktanfrage</p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td style="padding:6px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#8a8f98;width:90px;">Name</td>
                  <td style="padding:6px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#181d25;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#8a8f98;">E-Mail</td>
                  <td style="padding:6px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#181d25;">${safeEmail}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#8a8f98;">Telefon</td>
                  <td style="padding:6px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#181d25;">${safeTelefon || '–'}</td>
                </tr>
              </table>

              <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#8a8f98;">Nachricht</p>
              <p style="margin:0 0 24px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#181d25;background:#f6f7f9;border:1px solid #e2e4ea;border-radius:8px;padding:14px 16px;">${safeNachricht}</p>

              ${buttons}
            </td>
          </tr>
          <tr>
            <td style="padding:16px 24px;background:#f6f7f9;border-top:1px solid #e2e4ea;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#8a8f98;">Eingegangen über das Kontaktformular auf function-concept.com</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
