// Toggle dark / light mode
const modeToggleBtn = document.getElementById('mode-toggle');
modeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  modeToggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Mobile nav open / close
const menuButton = document.getElementById('menu-button');
const mobileNav = document.getElementById('mobile-nav');
const mobileClose = document.getElementById('mobile-close');

menuButton.addEventListener('click', () => {
  mobileNav.classList.remove('hidden');
});

mobileClose.addEventListener('click', () => {
  mobileNav.classList.add('hidden');
});

// Set footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Demo “Run” button (just prints the query)
const runBtn = document.getElementById('run-btn');
runBtn.addEventListener('click', () => {
  const q = document.getElementById('user-query').value;
  alert('You asked: ' + q); 
});
