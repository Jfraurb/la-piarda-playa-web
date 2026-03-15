const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.menu-panel');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const category = tab.dataset.category;
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.querySelector(`[data-panel="${category}"]`).classList.add('active');
  });
});

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});
