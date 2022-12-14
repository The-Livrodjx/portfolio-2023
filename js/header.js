const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const navLink = document.querySelectorAll(".navlink")
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menuList = document.querySelector(".menuList");

menuBtn.addEventListener('click', () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
  menuList.classList.add("show");

  navLink.forEach(link => {

    link.addEventListener('click', () => {
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
      menuList.classList.remove("show")
    })

  })
})


cancelBtn.addEventListener('click', () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
  menuList.classList.remove("show");
})