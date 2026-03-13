const burger = document.querySelector(".header__burger");
const title = document.querySelector(".header__title");
const menu = document.querySelector(".mobile-menu");
const links = document.querySelectorAll(".mobile-menu__link");
const body = document.body;

function toggleMenu() {
  body.classList.toggle("lock");
  title.classList.toggle("header__title--white");
  menu.classList.toggle("mobile-menu--opened");
  burger.classList.toggle("burger--clicked");
}

burger.addEventListener("click", toggleMenu);

links.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});
