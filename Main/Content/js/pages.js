// Fixed Nav
let nav = document.getElementsByClassName("navbarSection")[0];
let x = window.matchMedia("(max-width: 1150px)");
let mobileUl = document.querySelector(".mobile-ul");

let headerContainer = document.querySelector("#headerContainer");
let headerHeight = headerContainer.offsetHeight;
let serviceMenuList = document.querySelector(".serviceMenu");

window.addEventListener("scroll", function () {
  mobileUl.classList.add("openWhileFixed");
  // console.log("object");

  if (window.scrollY >= headerHeight / 2) {
    if (!x.matches) {
      nav.classList.add("heavyBackground");

      //Servicemenu top 50 px olmalidi burda
      serviceMenuList.classList.add("openServiceMenuWhileNavFixed");
      serviceMenuList.classList.add("serviceWhileScrolled");
      nav.classList.remove("mobileHeavyBackground");
    } else {
      nav.classList.remove("heavyBackground");
    }
  }
  if (window.scrollY < headerHeight / 2) {
    if (!x.matches) {
      nav.classList.remove("heavyBackground");
      // serviceMenuList.classList.remove("openServiceMenuWhileNavFixed");
      nav.classList.remove("mobileHeavyBackground");
    }
  }
});
