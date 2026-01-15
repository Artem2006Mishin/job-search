const mobile = document.querySelector('.header__mobile');
const mobileNav = document.querySelector('.mobile__nav');
const title = document.querySelector('.header__title');

mobile.addEventListener('click', () => {
  mobile.classList.toggle('header__mobile--active');
  mobileNav.classList.toggle('mobile__nav--active');
  title.classList.toggle('header__title--active');
});