"use strict";

var _this = void 0;

var BODY = document.querySelector("body"),
    btn_menu = document.querySelector("[data-menu-btn]"),
    coll = document.getElementsByClassName(" js-colapse"),
    emailInputs = document.querySelectorAll(".js-validation-input"),
    form_req = document.querySelectorAll("[required]"),
    form_el = document.querySelectorAll("form")[1],
    submitBtn = document.querySelectorAll(".js-submit-btn")[1]; // hamburger menu

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
} // swiper 


window.onload = function () {
  var swipers = [".news-swiper", ".trending-swiper", ".cards-swiper"];

  for (var _i = 0; _i < swipers.length; _i++) {
    new Swiper(swipers[_i], {
      direction: "horizontal",
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: swipers[_i] + "-next",
        prevEl: swipers[_i] + "-prev"
      }
    });
  }
}; //form submit


form_el.onsubmit = function (event) {
  event.preventDefault();
  form_el.classList.add("is-submitted");
  var isError = false;

  for (var _i2 = 0; _i2 < form_req.length; _i2++) {
    if (form_req[_i2].checkValidity() != true) {
      isError = true;
    }
  }

  if (!isError) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (_this.readyState == 4 && _this.status == 200) {
        var data = {
          email: emailInputs[1].value
        };
        form_el.classList.remove("is-submitted");
        form_el.reset();
      }
    };

    xhttp.open("POST", "https://httpstat.us/200", true);
    xhttp.send(new FormData(form_el));
  }
}; // // fill hidden input for validation


emailInputs[1].addEventListener('change', function () {
  emailInputs[0].value = emailInputs[1].value;
}); // // submit btn color animation

emailInputs.forEach(function (e) {
  return e.addEventListener('focus', function () {
    submitBtn.style.fill = "#000";
  });
});
emailInputs.forEach(function (e) {
  return e.addEventListener('blur', function () {
    submitBtn.style.fill = "";
  });
});