const pill = document.getElementById('cookiePill');
const modal = document.getElementById('cookieModal');
const consentKey = 'cookie-consent';

function openModal() { modal.classList.add('open'); }
function closeModal() { modal.classList.remove('open'); }

pill?.addEventListener('click', openModal);
modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

document.getElementById('cookieAll')?.addEventListener('click', () => {
  localStorage.setItem(consentKey, JSON.stringify({ analytics: true, marketing: true }));
  closeModal();
});
document.getElementById('cookieNecessary')?.addEventListener('click', () => {
  localStorage.setItem(consentKey, JSON.stringify({ analytics: false, marketing: false }));
  closeModal();
});

if (!localStorage.getItem(consentKey)) {
  setTimeout(openModal, 800);
}
