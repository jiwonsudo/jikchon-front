const header = document.querySelector('header');

addEventListener('scroll', () => {
  if (window.scrollY > 70 || window.pageYOffset > 70) {
    header.classList.add('scrolled-up');
  } else {
    header.classList.remove('scrolled-up');
  }
})