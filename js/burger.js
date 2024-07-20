const menu = document.querySelector(".wrap-burger");
const icon = document.querySelector(".burger-icon-btn");
const iconX = document.querySelector(".icon");
const items = document.querySelector(".item-burger");
const how = document.querySelector(".how");
const chocolate = document.querySelector(".chocolate");

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
