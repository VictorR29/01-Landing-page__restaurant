const toggleMenu = document.getElementsByClassName("navbar__menu-icon")[0];
const navbarMenu = document.getElementsByClassName("navbar__menu")[0];

toggleMenu.addEventListener("click", ()=> {
  navbarMenu.classList.toggle("active");

  if(toggleMenu.classList == "navbar__menu-icon") {
    toggleMenu.classList.remove("navbar__menu-icon");
    toggleMenu.classList.add("navbar__menu-icon--close");
  } else {
    toggleMenu.classList.remove("navbar__menu-icon--close");
    toggleMenu.classList.add("navbar__menu-icon");
  }
  
  toggleMenu.style.transition = "all ease .3s";
});
