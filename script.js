let burger = document.querySelector(".fa-bars");
let xMark = document.querySelector(".fa-xmark");
let mobileMenu = document.querySelector(".header_nav");

burger.addEventListener("click", ()=>{
  mobileMenu.style.left = "0";
  burger.style.display = "none";
  xMark.style.display = "block";
})

xMark.addEventListener("click", ()=>{
  mobileMenu.style.left = "-100%";
  burger.style.display = "block";
  xMark.style.display = "none";
})