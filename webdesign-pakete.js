const packageSelect = document.getElementById('paket');
const requestForm = document.getElementById('kontaktForm');
document.querySelectorAll('[data-package]').forEach(link => {
  link.addEventListener('click', () => {
    packageSelect.selectedIndex = Number(link.dataset.package);
  });
});
requestForm.addEventListener('submit', () => {
  requestForm.dataset.formular = 'Webdesign ' + packageSelect.value;
});
