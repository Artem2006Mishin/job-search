const burger = document.querySelector(".header__burger");
const title = document.querySelector(".header__title");
const menu = document.querySelector(".mobile-menu");
const links = document.querySelectorAll(".mobile-menu__link");
const header = document.querySelector(".header");
const body = document.body;

function toggleMenu() {
  body.classList.toggle("lock");
  title.classList.toggle("header__title--white");
  menu.classList.toggle("mobile-menu--opened");
  burger.classList.toggle("burger--clicked");
  header.classList.toggle("header--transparent");
}

burger.addEventListener("click", toggleMenu);

links.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});
