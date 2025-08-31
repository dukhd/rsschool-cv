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

// scroll to top btn end ----------------

const prevBtn = document.querySelector('.pag__arrow__prev');
const nextBtn = document.querySelector('.pag__arrow__next');
const paginationItem = document.querySelectorAll('.pag__item');
const extraExpWrapper = document.querySelector('.extra__experience__wrapper');
const extraExpBox = document.querySelectorAll('.extra__experience__box');
const boxWidth = extraExpBox.offsetWidth + 80;
let activeBoxIndex = 1;

const nextExtraExpBox = () => {
  if (activeBoxIndex < extraExpBox.length - 1) {
    extraExpBox[activeBoxIndex].classList.add('hidden');
    extraExpBox[activeBoxIndex + 2].classList.remove('hidden');
    activeBoxIndex++;
    // extraExpWrapper.scrollBy({
    //   left: boxWidth,
    //   behavior: "smooth"
    // });
  }
};

const prevExtraExpBox = () => {
  if (activeBoxIndex !== 0 && activeBoxIndex < extraExpBox.length - 1) {
    extraExpBox[activeBoxIndex + 1].classList.add('hidden');
    extraExpBox[activeBoxIndex - 1].classList.remove('hidden');
    activeBoxIndex--;
    // extraExpWrapper.scrollBy({
    //   left: -boxWidth,
    //   behavior: "smooth"
    // });
  }
  if (activeBoxIndex === 0) {
    extraExpBox[activeBoxIndex + 1].classList.add('hidden');
    extraExpBox[extraExpBox.length - 1].classList.remove('hidden');
    activeBoxIndex = extraExpBox.length - 1;
  }
};
console.log(extraExpWrapper);
nextBtn.addEventListener("click", nextExtraExpBox);
prevBtn.addEventListener("click", prevExtraExpBox);