"use strict";

var _this = void 0;

var emailInputs = document.querySelectorAll(".js-validation-input"),
    form_req = document.querySelectorAll("[required]"),
    form_el = document.querySelectorAll("form")[1],
    submitBtn = document.querySelectorAll(".js-submit-btn")[1]; //form submit

form_el.onsubmit = function (event) {
  event.preventDefault();
  form_el.classList.add("is-submitted");
  var isError = false;

  for (var i = 0; i < form_req.length; i++) {
    if (form_req[i].checkValidity() != true) {
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
}; // // submit btn color animation


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