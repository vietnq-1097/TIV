const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.js-link');
const menuToggler = document.getElementById('menu-toggler');

window.onscroll = () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    const linkHref = link.href.split('#')[1];

    link.classList.remove('active');

    if (linkHref === current) {
      link.classList.add('active');
    }
  });
};

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menuToggler.checked = false;
  });
});
