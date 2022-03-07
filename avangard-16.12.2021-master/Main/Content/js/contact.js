//
// const ClientName=document.getElementsByClassName('fname');
// console.log(ClientName);
//
// const btn=document.getElementsByClassName('contactBtn');
// btn.submit((data)=>{
//
//     const xhr = new XMLHttpRequest();
//     xhr.open("POST",'/contact', true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.send(JSON.stringify({
//         value: value
//     }));
//
// });

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
  let userSubject=document.querySelector("#movzu");

  var Obj = {
    name: userName.value,
    phone: userPhone.value,
    subject:userSubject.value,
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
          //   nameResponsed.html(data.error.name.msg);
          //   phoneResponsed.html(data.error.phone.msg);
          //   mailResponsed.html(data.error.email.msg);
          //   companyNameResponsed.html(data.error.companyName.msg);
          //   messageResponsed.html(data.error.message.msg);
        }
      },
      error: function (error) {
        // console.log("error occured");
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
