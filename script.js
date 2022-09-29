const menu = document.getElementById("sideMenu");
const hamburger = document.querySelector(".hamburger");
const topNav = document.querySelector(".top-nav");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  
});
