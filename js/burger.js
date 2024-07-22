const menu = document.querySelector(".wrap-burger");
const icon = document.querySelector(".burger-icon-btn");
const iconX = document.querySelector(".icon");
const items = document.querySelector(".item-burger");
const how = document.querySelector(".how");
const chocolate = document.querySelector(".chocolate");
const linkmenu = document.querySelectorAll('a[href*="#"]');

const btn = document.querySelector(".btn-baner-buy");
const products = document.querySelector(".products");
btn.addEventListener("click", () => {
  products.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

const up = document.querySelector(".up");
const hedader = document.querySelector(".hedader");
up.addEventListener("click", () => {
  hedader.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

for (let link of linkmenu)
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const blockId = link.getAttribute("href");
    document.querySelector("" + blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

const btnUp = document.querySelector(".btn");
window.addEventListener("scroll", () => {
  btnUp.style.opacity = "1";
});

const closeMenu = () => {
  menu.classList.remove("show-menu");
};

icon.addEventListener("click", () => {
  menu.classList.add("show-menu");
});

iconX.addEventListener("click", closeMenu);
items.addEventListener("click", closeMenu);
how.addEventListener("click", closeMenu);
chocolate.addEventListener("click", closeMenu);
