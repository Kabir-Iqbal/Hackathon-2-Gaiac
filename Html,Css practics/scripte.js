const navbtn = document.querySelector(".menu-icon")
const navMenu = document.querySelector("#menulist")

navbtn.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-opens")
    navbtn.classList.toggle("menu-open")
    
})

