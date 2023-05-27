// Toggle mobile menu
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', function() {
  navLinks.classList.toggle('show');
});