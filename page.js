const pill = document.getElementById('cookiePill');
const modal = document.getElementById('cookieModal');
const consentKey = 'cookie-consent';
const visitLogKey = 'fc_visit_log';
const visitLogMax = 30;
const GTM_ID = 'GTM-NNB55THZ';

function logPageview() {
  const params = new URLSearchParams(location.search);
  const entry = {
    ts: new Date().toISOString(),
    path: location.pathname,
    ref: document.referrer || null,
    utm_source: params.get('utm_source'),
    utm_medium: params.get('utm_medium'),
    utm_campaign: params.get('utm_campaign'),
  };
  let log = [];
  try {
    log = JSON.parse(localStorage.getItem(visitLogKey)) || [];
  } catch {
    log = [];
  }
  log.push(entry);
  if (log.length > visitLogMax) log = log.slice(log.length - visitLogMax);
  localStorage.setItem(visitLogKey, JSON.stringify(log));
}

function openModal() { modal.classList.add('open'); }
function closeModal() { modal.classList.remove('open'); }

function loadGTM() {
  if (window.__gtmLoaded) return;
  window.__gtmLoaded = true;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
  document.head.appendChild(script);

  const noscript = document.createElement('noscript');
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.googletagmanager.com/ns.html?id=' + GTM_ID;
  iframe.height = '0';
  iframe.width = '0';
  iframe.style.display = 'none';
  iframe.style.visibility = 'hidden';
  noscript.appendChild(iframe);
  document.body.insertBefore(noscript, document.body.firstChild);
}

pill?.addEventListener('click', openModal);
modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

document.getElementById('cookieAll')?.addEventListener('click', () => {
  localStorage.setItem(consentKey, JSON.stringify({ analytics: true, marketing: true }));
  loadGTM();
  logPageview();
  closeModal();
});
document.getElementById('cookieNecessary')?.addEventListener('click', () => {
  localStorage.setItem(consentKey, JSON.stringify({ analytics: false, marketing: false }));
  closeModal();
});

const kontaktForm = document.getElementById('kontaktForm');
kontaktForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const status = document.getElementById('kontaktStatus');
  const submitBtn = document.getElementById('kontaktSubmit');
  let besuchsverlauf = [];
  try {
    besuchsverlauf = JSON.parse(localStorage.getItem(visitLogKey)) || [];
  } catch {
    besuchsverlauf = [];
  }

  const data = {
    name: document.getElementById('name')?.value.trim() || '',
    email: document.getElementById('email')?.value.trim() || '',
    telefon: document.getElementById('telefon')?.value.trim() || '',
    webseite: document.getElementById('webseite')?.value.trim() || '',
    nachricht: document.getElementById('nachricht')?.value.trim() || '',
    besuchsverlauf,
  };

  submitBtn.disabled = true;
  status.textContent = 'Wird gesendet …';
  status.className = 'form-status';

  try {
    const res = await fetch('/api/kontakt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('send failed');
    status.textContent = 'Danke! Deine Nachricht wurde versendet.';
    status.className = 'form-status ok';
    kontaktForm.reset();
  } catch (err) {
    status.textContent = 'Da ist etwas schiefgelaufen. Bitte versuch es erneut oder schreib uns direkt eine E-Mail.';
    status.className = 'form-status error';
  } finally {
    submitBtn.disabled = false;
  }
});

const storedConsent = localStorage.getItem(consentKey);
if (!storedConsent) {
  setTimeout(openModal, 800);
} else {
  const consent = JSON.parse(storedConsent);
  if (consent.analytics || consent.marketing) {
    loadGTM();
  }
  if (consent.analytics) {
    logPageview();
  }
}
