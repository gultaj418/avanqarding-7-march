let hamburger = document.querySelector(".navbarSection nav .hamburger");
let navlinks = document.querySelector(".mobile-ul");
let links = document.querySelector(".mobile-ul li");
let hamburgerLine = document.querySelector(".line");
let upIcon = document.querySelector(".up");
let loader = document.querySelector(".loader");

let url = "https://avanqardups.az";

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
let serviceButton = document.querySelector(
  ".navbarSection nav .serviceTopMenu"
);
let serviceMenuList = document.querySelector(".serviceMenu");
let serviceArrow = document.querySelector(".arrow");

serviceButton.addEventListener("click", function () {
  serviceMenuList.classList.toggle("openServiceMenu");
  serviceArrow.classList.toggle("arrow-up");
});

let mobileServiceBtn = document.querySelector(".mobile-ul .serviceTopMenu");
let serviceUl = document.querySelector(".mobileServiceUl");
let mobArrow = document.querySelector(".mob-arrow");

// let serviceArrowMobile = document.querySelector(
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

document
  .getElementById("contactBtn")
  .addEventListener("click", onSubmitContact);

function onSubmitContact(event) {
  const nameResponsed = $("#nameResponsed");
  const phoneResponsed = $("#phoneResponsed");
  const mailResponsed = $("#emailResponsed");
  const companyNameResponsed = $("#companyNameResponsed");
  const messageResponsed = $("#messageResponsed");

  let userName = document.querySelector("#fname");
  let userMail = document.querySelector("#email");
  let userPhone = document.querySelector("#phone");
  let userCompany = document.querySelector("#companyName");
  let userMessage = document.querySelector("#message");
  let userSubject = document.querySelector("#movzu");

  var Obj = {
    name: userName.value,
    phone: userPhone.value,
    subject: userSubject.value,
    email: userMail.value,
    companyName: userCompany.value,
    message: userMessage.value,
  };

  if (
    userName.value === "" ||
    userPhone.value === "" ||
    userMail.value === "" ||
    userCompany.value === "" ||
    userMessage.value === ""
  ) {
    let successMess = document.querySelector(".success-message");

    successMess.classList.remove("active");
    userName.style.border = "1px solid blue";
    userPhone.style.border = "1px solid blue";
    userMail.style.border = "1px solid blue";
    userCompany.style.border = "1px solid blue";
    userMessage.style.border = "1px solid blue";

    nameResponsed.html("");
    phoneResponsed.html("");
    mailResponsed.html("");
    companyNameResponsed.html("");
    messageResponsed.html("");
    let json = {
      error: {
        name: {
          value: "",
          msg: "Zəhmət olmasa, adınızı daxil edin!",
          param: "name",
          location: "body",
        },
        email: {
          value: "",
          msg: "Zəhmət olmasa, elektron ünvanınızı daxil edin!",
          param: "email",
          location: "body",
        },
        phone: {
          value: "",
          msg: "Lütfən düzgün əlaqə nömrənizi daxil edin!",
          param: "phone",
          location: "body",
        },
        companyName: {
          value: "",
          msg: "Zəhmət olmasa, şirkət adını daxil edin!",
          param: "companyName",
          location: "body",
        },
        message: {
          value: "",
          msg: "Zəhmət olmasa, mətninizi daxil edin!",
          param: "message",
          location: "body",
        },
      },
    };

    if (userName.value === "") {
      nameResponsed.html(json.error.name.msg);
      userName.style.border = "1px solid red";
    }
    if (userPhone.value === "") {
      phoneResponsed.html(json.error.phone.msg);
      userPhone.style.border = "1px solid red";
    }
    if (userMail.value === "") {
      mailResponsed.html(json.error.email.msg);
      userMail.style.border = "1px solid red";
    }

    if (userCompany.value === "") {
      companyNameResponsed.html(json.error.companyName.msg);
      userCompany.style.border = "1px solid red";
    }
    if (userMessage.value === "") {
      messageResponsed.html(json.error.message.msg);
      userMessage.style.border = "1px solid red";
    }
  } else {
    userName.style.border = "1px solid blue";
    userPhone.style.border = "1px solid blue";
    userMail.style.border = "1px solid blue";
    userCompany.style.border = "1px solid blue";
    userMessage.style.border = "1px solid blue";
    phoneResponsed.html("");
    nameResponsed.html("");
    mailResponsed.html("");
    companyNameResponsed.html("");
    messageResponsed.html("");

    $.ajax({
      type: "POST",
      url: "https://avanqardups.az/contact",
      cache: false,
      data: Obj,
      success: function (data) {
        if (data.message) {
          let successMess = document.querySelector(".success-message");
          let form = $("#contactUs");
          let contactImage = document.querySelector(".contactUsImage");

          // form.addClass("active");
          contactImage.style.display = "none";
          successMess.classList.add("active");
          setTimeout(() => {
            contactImage.style.display = "block";
            successMess.classList.remove("active");
          }, 2500);
        } else {
          const arr = Object.values(data.error);
          for (let i = 0; i < arr.length; i++) {
            $(`#${arr[i].param}Responsed`).html(arr[i].msg);
          }
          //   nameResponsed.html(data.error.name.msg);
          //   phoneResponsed.html(data.error.phone.msg);
          //   mailResponsed.html(data.error.email.msg);
          //   companyNameResponsed.html(data.error.companyName.msg);
          //   messageResponsed.html(data.error.message.msg);
        }
      },
      error: function (error) {
        // console.log("error occurefd");
      },
    });
  }
}

// function onSubmitContact(event) {
//   // console.log("gggg");
//   // var Obj = {
//   // $.ajax({
//   //   type: "POST",
//   //   url: "http://127.0.0.1:5000/contact",
//   //   cache: false,
//   //   async: true,
//   //   data: Obj,
//   //   success: function (data) {
//   //     if (data) {
//   //       const nameResponsed = $("#nameResponsed");
//   //       // nameResponsed.html(data.error.name.msg);
//   //       // console.log(data.error.name.msg);
//   //       console.log("error bas vermedi");
//   //     } else {
//   //       console.log("error 1");
//   //     }
//   //   },
//   //   error: function (error) {
//   //     console.log(error, "error occured");
//   //   },
//   // });
// }
// $.ajax({
//   type: "POST",
//   url: url,
//   cache: false,
//   data: Obj,
//   success: function (data) {
//     if (data) {
//       let successMess = document.querySelector(".success-message");
//       let form = $("#contactUs");
//       let contactImage = document.querySelector(".contactUsImage");

//       // form.addClass("active");
//       contactImage.style.display = "none";
//       successMess.classList.add("active");
//       // nameResponsed.html(json.success.message);

//       console.log(data);
//     } else {
//       // console.log()
//     }
//   },
//   error: function (err) {
//     console.log(err);
//   },
// });
// console.log("salam");
