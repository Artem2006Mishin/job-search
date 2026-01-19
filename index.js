const headerBurger = document.querySelector('.header__burger');
const mobileBurger = document.querySelector('.mobile__burger');
const mobile = document.querySelector('.mobile');
const mobileLinks = document.querySelectorAll('.mobile__nav-link');

headerBurger.addEventListener('click', () => {
  headerBurger.classList.toggle('burger--clicked');
  mobile.classList.toggle('mobile--opened');
});

mobileBurger.addEventListener('click', () => {
  headerBurger.classList.toggle('burger--clicked');
  mobile.classList.toggle('mobile--opened');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    headerBurger.classList.toggle('burger--clicked');
    mobile.classList.toggle('mobile--opened');
  });
});
