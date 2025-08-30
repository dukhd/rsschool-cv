const scrollToTopBtn = document.querySelector('.scroll__to__top__btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});