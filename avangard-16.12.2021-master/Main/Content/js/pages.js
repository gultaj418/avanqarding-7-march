// Fixed Nav
nav = document.getElementsByClassName("navbarSection")[0];
x = window.matchMedia("(max-width: 1150px)");
mobileUl = document.querySelector(".mobile-ul");

headerContainer = document.querySelector("#headerContainer");
headerHeight = headerContainer.offsetHeight;
serviceMenuList = document.querySelector(".serviceMenu");

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
