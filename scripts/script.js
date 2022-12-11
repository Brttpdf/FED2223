// JavaScript Document

var popup = document.querySelector(".pop-up");
var closeButton = document.querySelector(".close");

closeButton.addEventListener("click", closePopup);

function closePopup() {
  popup.classList.add("hidden");
}
