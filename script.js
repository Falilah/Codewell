"use strict";
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  document.querySelector(".list-item").classList.toggle("hidden");
});
