const BODY = this.document.querySelector("body"),
  btn_menu = this.document.querySelector("[data-menu-btn]"),
  coll = this.document.getElementsByClassName("colapse"),
  emailInputs = document.querySelectorAll(".subscription__email")
form_req = document.querySelectorAll("[required]"),
  form_el = document.querySelectorAll("form")[1],
  submitBtn = document.querySelectorAll(".subscription__submit-btn")[1]



// hamburger menu
btn_menu.onclick = function () {
  BODY.classList.toggle('open-menu')
}
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    const content = this.nextElementSibling;
    if (content.clientHeight = "0px") {
      content.classList.toggle("active");
    }
  });

}
window.onload = function () {
  var newsSwiper = new Swiper(".news-swiper", {
    direction: "horizontal",
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".news-btn-next",
      prevEl: ".news-btn-prev"
    }
  });
  var trendingSwiper = new Swiper(".trending-swiper", {
    direction: "horizontal",
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".trending-btn-next",
      prevEl: ".trending-btn-prev"
    }
  });
  var cards = new Swiper(".cards-swiper", {
    direction: "horizontal",
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".cards-btn-next",
      prevEl: ".cards-btn-prev"
    }
  });
};


//form submit
form_el.onsubmit = function (event) {
  console.log();

  event.preventDefault();
  form_el.classList.add("is-submitted");
  let isError = false;

  for (i = 0; i < form_req.length; i++) {
    if (form_req[i].checkValidity() != true) {
      isError = true;
    }
  }
  if (!isError) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let data = {
          email: emailInputs[1].value
        };
        console.log(data);
        form_el.classList.remove("is-submitted");
        form_el.reset();
      }
    };
    xhttp.open("POST", "https://httpstat.us/200", true);
    xhttp.send(new FormData(form_el));
  } else {
    console.log("valid err");
  }
};
// fill hidden input for validation
emailInputs[1].addEventListener('change', function () {
  emailInputs[0].value = emailInputs[1].value;
})


// submit btn color animation
emailInputs.forEach(e => e.addEventListener('focus', function () {
  submitBtn.style.fill = "#000"
}));

emailInputs.forEach(e => e.addEventListener('blur', function () {
  submitBtn.style.fill = ""
}));

// emailInput.addEventListener('focus', function () {
//   submitBtn.style.fill = "#000"
// })

// emailInput.addEventListener('blur', function () {
//   submitBtn.style.fill = ""

// })