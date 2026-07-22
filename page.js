const pill = document.getElementById('cookiePill');
const modal = document.getElementById('cookieModal');
const consentKey = 'cookie-consent';
const GTM_ID = 'GTM-NNB55THZ';

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
  closeModal();
});
document.getElementById('cookieNecessary')?.addEventListener('click', () => {
  localStorage.setItem(consentKey, JSON.stringify({ analytics: false, marketing: false }));
  closeModal();
});

const storedConsent = localStorage.getItem(consentKey);
if (!storedConsent) {
  setTimeout(openModal, 800);
} else {
  const consent = JSON.parse(storedConsent);
  if (consent.analytics || consent.marketing) {
    loadGTM();
  }
}
