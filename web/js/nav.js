"use strict";

var _this = void 0;

var btn_menu = document.querySelector("[data-menu-btn]"),
    coll = document.getElementsByClassName(" js-colapse"); // hamburger menu

btn_menu.onclick = function () {
  BODY.classList.toggle('open-menu');
}; // colapse menu


for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    var content = _this.nextElementSibling;

    if (content.clientHeight = "0px") {
      content.classList.toggle("active");
    }
  });
}