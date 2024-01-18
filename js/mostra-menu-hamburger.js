const logo = document.querySelector("#logo");
const menu = document.querySelector("nav");

logo.addEventListener("click", () => {
  menu.classList.toggle("menu_active");
})