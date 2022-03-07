// FAQ SECTION ACCORDION
let url = "https://avanqardups.az";

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

var acc = document.getElementsByClassName("questions");

gsap.registerPlugin(ScrollTrigger);
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("activeQuestions");
  });
}
