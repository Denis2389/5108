const mobileMenuIcon = document.getElementById("mobile-menu-icon");
const nav = document.querySelector(".header .nav");

mobileMenuIcon.addEventListener("click", () => {
  nav.classList.toggle("active");
});