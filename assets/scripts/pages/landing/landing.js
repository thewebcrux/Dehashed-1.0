const arrows = document.querySelector('.arrows');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((link) => {
      link.classList.remove('active');
    });
    link.classList.add('active');
  });
});

'mouseover mouseout'.split(' ').forEach((e) => {
  arrows.addEventListener(e, () => {
    arrows.querySelector('.below-arrow').classList.toggle('hidden');
  });
});
