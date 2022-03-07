// const calcInputs = document.querySelectorAll(".calcInputs");
// const calcBtn = document.querySelector("#calcBtn");
// const alertBox = document.querySelector(".alert-box");

//Calculate the calculator
// calcBtn.addEventListener("click", () => {
//   window.scrollTo({
//     top: 380,
//     behavior: "smooth",
//   });
//
//   for (i = 0; calcInputs.length > i; i++) {
//     if (calcInputs[i].value === "") {
//       calcInputs[i].classList.add("alert-message");
//       alertBox.classList.add("active");
//     } else {
//       calcInputs[i].classList.remove("alert-message");
//       alertBox.classList.remove("active");
//     }
//   }
// });
//
const calcInputs = document.querySelectorAll(".calcInputs");
const calcBtn = document.querySelector("#calcBtn");
const alertBox = document.querySelector(".alert-box");
const calcResult = document.querySelector(".calc-result");
const submitBtnDiv = document.querySelector(".submitButton");

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const num3 = document.querySelector("#num3");
const num4 = document.querySelector("#num4");
const num5 = document.querySelector("#num5");
const num6 = document.querySelector("#num6");
const num7 = document.querySelector("#num7");
const num8 = document.querySelector("#num8");
const num9 = document.querySelector("#num9");
const num10 = document.querySelector("#num10");
const num11 = document.querySelector("#num11");
const num12 = document.querySelector("#num12");
const num13 = document.querySelector("#num13");
const num14 = document.querySelector("#num14");
const num15 = document.querySelector("#num15");
const num16 = document.querySelector("#num16");
const num17 = document.querySelector("#num17");
const num18 = document.querySelector("#num18");
const num19 = document.querySelector("#num19");
const num20 = document.querySelector("#num20");

var firstArr = [
  num1,
  num2,
  num3,
  num4,
  num5,
  num6,
  num7,
  num8,
  num9,
  num10,
  num11,
  num12,
  num13,
  num14,
  num15,
  num16,
  num17,
  num18,
  num19,
  num20,
];

var sectArr = [
  200, 250, 150, 75, 100, 150, 500, 750, 100, 150, 100, 500, 750, 100, 100, 200,
  300, 100, 100, 50,
];


calcInputs.forEach( function (e) {
      
  e.oninput=function(){
    if (e.value.length > 5)
    e.value = e.value.slice(0,5); 
  }

})

//true false array === 4 if(condition) every()  some() araray = 1,2,4,5 10 , 8 20, 6

calcBtn.addEventListener("click", (e) => {
  // let newArray = firstArr.some((param, index) => {
  //   if (param.value === "") {
  //     calcResult.classList.remove("active");

  //     calcResult.classList.add("danger");
  //     calcResult.innerHTML = `Zəhmət olmasa, xananı doldurun`;
  //     // console.log("nuldur");
  //     return false;
  //   } else {
      
  //     calcResult.classList.remove("danger");
  //     newInp = param.value * sectArr[index];
  //     sum += newInp;
  //     console.log("some changes");

  //     submitBtnDiv.classList.add("edited");
  //     calcResult.classList.add("active");
  //     calcResult.innerHTML = `Nəticə: ${sum} VA`;
  //     calcResult.classList.remove("danger");
  //     return true;

  //   }
  // });
  

  
  var newInp = 0;
  var count=0;
  var sum=0;
  for (i = 0; i < firstArr.length; i++) {
    if (firstArr[i].value === null || firstArr[i].value === "") {
      count++;

      if(count==firstArr.length) {
        calcResult.classList.remove("active");
        calcResult.classList.add("danger");
        submitBtnDiv.classList.add("edited");
        calcResult.innerHTML = `Zəhmət olmasa, xananı doldurun`;
        console.log("nuldur");
                
        }
       
    } 
  else{
    
      calcResult.classList.remove("danger");
      calcResult.classList.add("active");
     
      newInp = firstArr[i].value * sectArr[i];
      sum += newInp;
      submitBtnDiv.classList.add("edited");
      if(sum<=600000){
       calcResult.innerHTML = `Nəticə: ${sum} VA`;
      }
      else{
        calcResult.innerHTML = `Xəta: kəmiyyət çox böyükdür`;
      }

   
    
    }
  
  }

  calcInputs.forEach(function (element) {
    element.value = "";
  });
});
