"use strict";
const submit = document.querySelector(".btn");
const rates = document.querySelectorAll(".rate");
const main = document.querySelector(".main");
const result = document.querySelector(".result");
const number = document.querySelector(".number");

const getTheRating = function () {
  let number = document.querySelector(".activated");
  return number.textContent;
};

let index;

rates.forEach((rate) => {
  rate.addEventListener("click", function () {
    rates.forEach((rate) => {
      rate.classList.remove("activated");
    });
    rate.classList.add("activated");
  });
});

submit.addEventListener("click", function () {
  submit.style.backgroundColor = "hsl(0, 0%, 100%)";
  submit.style.color = "hsl(25, 97%, 53%)";
  main.classList.add("hidden");
  result.classList.remove("submitted");
  number.textContent = getTheRating();
});
