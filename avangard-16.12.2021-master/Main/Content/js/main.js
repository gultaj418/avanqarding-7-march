const hamburger = document.querySelector(".navbarSection nav .hamburger");
const navlinks = document.querySelector(".mobile-ul");
const links = document.querySelector(".mobile-ul li");
const hamburgerLine = document.querySelector(".line");
const upIcon = document.querySelector(".up");
let loader = document.querySelector(".loader");

const url = "https://avanqardups.az";

hamburger.addEventListener("click", () => {
  hamburgerLine.classList.toggle("lineActive");
  navlinks.classList.toggle("open");
});

//Up icon from bottom to top
upIcon.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Service dropdown
const serviceButton = document.querySelector(
  ".navbarSection nav .serviceTopMenu"
);
let serviceMenuList = document.querySelector(".serviceMenu");
const serviceArrow = document.querySelector(".arrow");

serviceButton.addEventListener("click", function () {
  serviceMenuList.classList.toggle("openServiceMenu");
  serviceArrow.classList.toggle("arrow-up");
});

const mobileServiceBtn = document.querySelector(".mobile-ul .serviceTopMenu");
const serviceUl = document.querySelector(".mobileServiceUl");
const mobArrow = document.querySelector(".mob-arrow");

// const serviceArrowMobile = document.querySelector(
//   ".mobile-ul .serviceTopMenu .serviceArrowDown"
// );

mobileServiceBtn.addEventListener("click", function () {
  serviceUl.classList.toggle("mobileServiceUlActivated");
  // serviceArrowMobile.classList.toggle("serviceArrowUp");
  mobArrow.classList.toggle("arrow-up");
});

//MODAL
var desktopBtn = document.querySelector("#searchIcon");
var mobileButton = document.querySelector("#searchIconMobile");
var modal = document.querySelector(".modal-bg");
var closeBtn = document.querySelector(".modal-close");

desktopBtn.addEventListener("click", function () {
  modal.classList.add("modal-active");
  document.body.style["overflow"] = "hidden";
});

mobileButton.addEventListener("click", function () {
  modal.classList.add("modal-active");
  document.body.style["overflow"] = "hidden";
  document.body.style.position = "fixed";
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("modal-active");
  document.body.style["overflow"] = "auto";
  document.body.style.position = "relative";
});

//FIXED NAV

let nav = document.getElementsByClassName("navbarSection")[0];
let x = window.matchMedia("(max-width: 768px)");
let headerContainer = document.querySelector("#headerContainer");
let headerHeight = headerContainer.offsetHeight;
let navHeight = nav.offsetHeight;
let mobileMenu = document.querySelector(".mobile-ul");
window.addEventListener("scroll", function () {
  if (!x.matches) {
    if (window.scrollY > 0) {
      mobileMenu.classList.add("openmenuWhileFixed");

      // add mobile heavy background
      nav.classList.add("mobileHeavyBackground");
      mobileMenu.classList.add("openMobileUlWhileNavFixed");
      serviceMenuList.classList.add("serviceWhileScrolled");

      if (window.scrollY > 300) {
        upIcon.classList.add("icon-active");
      }
    } else {
      //remove mobile background
      mobileMenu.classList.remove("openmenuWhileFixed");
      serviceMenuList.classList.remove("serviceWhileScrolled");

      nav.classList.remove("mobileHeavyBackground");
      mobileMenu.classList.remove("openMobileUlWhileNavFixed");
      upIcon.classList.remove("icon-active");
    }
  } else {
    if (window.scrollY > 0) {
      // add normal background
      nav.classList.add("heavyBackground");
      serviceMenuList.classList.add("openServiceMenuWhileNavFixed");
      serviceMenuList.classList.add(".stickyServiceMenu");
      mobileMenu.classList.add("fixedMobileMenu");
      if (window.scrollY > 500) {
        upIcon.classList.add("icon-active");
      }
    } else {
      // remove normal background

      mobileMenu.classList.remove("fixedMobileMenu");

      upIcon.classList.remove("icon-active");
      nav.classList.remove("heavyBackground");
      serviceMenuList.classList.remove("openServiceMenuWhileNavFixed");
    }
  }
});

//regex
const inputv = document.querySelector(".modal-input");
let container = document.querySelector(".table-data tbody");

let letters = /^[A-Za-z]+$/;
inputv.addEventListener("keyup", (e) => {
  const inputField = inputv.value;
  const string = inputField.replace(/\s+/, " ");
  const regEx = new RegExp(string, "i");
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `${url}/search?string=${string}`);
  xhr.onload = function () {
    // container.innerHTML = "";

    if (this.status === 200) {
      const responseTxt = JSON.parse(this.responseText);

      const result = responseTxt.filter((item) =>
        item.Name.toLowerCase().includes(string.toLowerCase())
      );
      // console.log(result);
      container.innerHTML = "";
      // console.log(responseTxt.length);
      if (result.length > 0) {
        result.map(function (element) {
          //ma series
          const detailsName = element.Name.split(" ").join("_");
          const detailsUrl = `${url}/product?productName=${detailsName}`;
          if (result) {
            container.parentElement.classList.add("active");
            container.innerHTML += `
            <tr class="product-tr">
               <td class="product-link"><a class="product-link-color" href=${detailsUrl}> ${element.Name}</a> </td>
              </tr>
                  `;
          } else {
            container.innerHTML = `
          <div class="not-found">daxil etdiyiniz kelime tapilmadi.</div>
        `;
          }
        });
      } else {
        container.parentElement.classList.add("active");

        container.innerHTML = `
          <div class="not-found">Axtardığınız məhsul tapılmadı.</div>
        `;

        //
      }
    }
  };
  xhr.send();
});

const prev_handler = window.onload;
window.onload = function () {
  if (prev_handler) {
    prev_handler();
  }
  const productFlex = document.querySelector(".productCard  .productFlex");
  const xhr = new XMLHttpRequest();

  if (window.location.href === `${url}/products`) {
    xhr.open("GET", `${url}/product/all`);
  } else {
    xhr.open("GET", `${url}/product/main`);
  }
  xhr.onreadystatechange = function () {
    if (this.readyState === 3) {
    } else if (this.status === 200 && this.readyState === 4) {
      // loader.classList.remove('active')
      if (loader) {
        loader.classList.add("active");
      }

      const response = JSON.parse(this.responseText);
      response.map(function (element) {
        const detailsName = element.Name.split(" ").join("_");
        let detailsUrl = "";
        if (window.location.href === `${url}/products`) {
          detailsUrl = `${url}/product?productName=${detailsName}`;
        } else {
          detailsUrl = `${url}/products`;
        }

        productFlex.innerHTML += `
        <div class="productInfo">
            <div class="productImageWrapper">
            <img src=${element.ImageUrl}>
            </div>
            <hr class="productHr">
            <div class="productHeadd">
            <h3>${element.Name}</h3>
            <p class="powerDescription">${element.Power}</p>
            </div>
            <hr class="productHr">
            <div class="productDesc">
            <p>${element.Title}</p>
            </div>
            <hr class="productHr">
            <div class="prdct-btn">
            <a id="daha-etrafli"  href=${detailsUrl}>Daha ətraflı <img id="productRightArrow" src="assets/img/right-arrow.svg" alt=""></a>
            </div>
           
        </div>
        
    </div>
    `;
      });
    } else {
      // console.log("error occured");
    }
  };
  xhr.send();
};

const desc = document.querySelectorAll(".productDetailsInfo p");

const func = () => {
  for (var i = 0, max = desc.length; i < max; i++) {
    if (desc[i].textContent == "n") {
      desc[i].innerHTML = `
      <br><br>
      `;
    }
  }
};

func();
