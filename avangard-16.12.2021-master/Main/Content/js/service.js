document.getElementById("serviceBtn").addEventListener("click", submitForm);
function submitForm(event) {
  let url = "https://avanqardups.az/service";

  // event.preventDefault();
  let json = {
    error: {
      name: {
        value: "",
        msg: "Zəhmət olmasa adınızı daxil edin!",
        param: "name",
        location: "body",
      },
      phone: {
        value: "",
        msg: "Lütfən əlaqə nömrənizi düzgün daxil edin!",
        param: "phone",
        location: "body",
      },
    },
  };

  const nameResponsed = $("#nameResponsed");
  const phoneResponsed = $("#phoneResponsed");
  let userName = document.querySelector("#fname");
  let userLastName = document.querySelector("#number");

  var Obj={
    name:userName.value,
    surname: userLastName.value
  }

  if (userName.value === "" || userLastName.value === "") {
    let successMess = document.querySelector(".success-message");

    successMess.classList.remove("active");
    userName.style.border = "1px solid blue";
    userLastName.style.border = "1px solid blue";

    nameResponsed.html("");
    phoneResponsed.html("");

    if (userName.value === "") {
      nameResponsed.html(json.error.name.msg);
      userName.style.border = "1px solid red";
    }
    if (userLastName.value === "") {
      phoneResponsed.html(json.error.phone.msg);
      userLastName.style.border = "1px solid red";
    }
  } else {
    userName.style.border = "1px solid blue";
    userLastName.style.border = "1px solid blue";
    phoneResponsed.html("");
    nameResponsed.html("");

    $.ajax({
          type: "POST",
          url: url,
          cache: false,
          data: Obj,
          success: function (data) {
            console.log(data)
            if(data.message){
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
            }else {

              const arr=Object.values(data.error);
              for(let i=0; i<arr.length;i++){
                $(`#${arr[i].param}Responsed`).html(arr[i].msg)
              }

            }
          }

        }
    )
  }
}



const serviceBtn = document.querySelector(".serviceBtn");
const serviceInp = document.querySelectorAll(".serviceInp");
const serviceForm = document.querySelector("#serviceContact");

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
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("modal-active");
  document.body.style["overflow"] = "auto";
});
