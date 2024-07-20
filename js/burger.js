const menu = document.querySelector(".wrap-burger");
const icon = document.querySelector(".burger-icon-btn");
const iconX = document.querySelector(".icon");

icon.addEventListener("click", () => {
  menu.classList.add("show-menu");
});

iconX.addEventListener("click", () => {
  menu.classList.remove("show-menu");
});
