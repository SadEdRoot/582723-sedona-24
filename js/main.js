"use strict"

var button = document.querySelector(".form-title__button");

var modalOrder = document.querySelector(".modal--order");

modalOrder.classList.remove("modal--nojs");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalOrder.classList.toggle("modal--show");
});
