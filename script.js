const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.js-link');
const menuToggler = document.getElementById('menu-toggler');
const modalRegister = document.querySelector('.js-modal-register');
const modalToggle = document.querySelectorAll('.js-register-toggle');
const modalClose = document.querySelector('.js-modal-close');

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

modalToggle.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    modalRegister.classList.remove('hidden');
  });
});

modalClose.addEventListener('click', () => {
  modalRegister.classList.add('hidden');
});
