const menubtn = document.querySelector(".menu-btn");
const navlist = document.querySelector(".nav-link");

menubtn.addEventListener("click", function () {
  console.log("working");
  console.log(navlist.style.display);
  if (navlist.style.display === "none") {
    navlist.style.display = "flex";
  } else {
    navlist.style.display = "none";
  }
});

let displaypercent = function (element, value) {
  let counter = 0;
  return function () {
    if (counter == value) {
      clearInterval(intervalId);
    } else {
      counter += 1;
      element.innerHTML = counter + "%";
    }
  };
};

let htmlnumber = document.querySelector(".htmlskill .text");
let intervalId1 = setInterval(displaypercent(htmlnumber, 85), 22);
let cssnumber = document.querySelector(".cssskill .text");
let intervalId2 = setInterval(displaypercent(cssnumber, 70), 30);
let javascriptnumber = document.querySelector(".javascriptskill .text");
let intervalId3 = setInterval(displaypercent(javascriptnumber, 50), 38);
let javanumber = document.querySelector(".javaskill .text");
let intervalId4 = setInterval(displaypercent(javanumber, 65), 30);
