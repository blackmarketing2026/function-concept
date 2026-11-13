// Pflichtangaben und plausibles Telefonnummernformat in allen Kontaktformularen prüfen.
(() => {
  const form = document.getElementById('kontaktForm');
  if (!form) return;
  for (const id of ['name', 'unternehmen']) {
    const field = document.getElementById(id);
    const validate = () => field.setCustomValidity(field.value && !field.value.trim() ? 'Bitte gib einen gültigen Wert ein.' : '');
    field.addEventListener('input', validate);
    validate();
  }
  const phone = document.getElementById('telefon');
  const validatePhone = () => {
    const value = phone.value.trim();
    const digits = value.replace(/\D/g, '');
    const valid = /^\+?[0-9 ()/.-]+$/.test(value) && digits.length >= 7 && digits.length <= 15;
    phone.setCustomValidity(!value || valid ? '' : 'Bitte gib eine gültige Telefonnummer mit 7 bis 15 Ziffern ein.');
  };
  phone.addEventListener('input', validatePhone);
  validatePhone();
})();
