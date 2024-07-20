const menu = document.querySelector(".wrap-burger");
const icon = document.querySelector(".burger-icon-btn");

icon.addEventListener("click", () => {
  const menu = document.querySelector(".wrap-burger");
  menu.style.display = "block";
});

const iconX = document.querySelector(".icon");
iconX.addEventListener("click", () => {
  const menu = document.querySelector(".wrap-burger");
  menu.style.display = "none";
});
