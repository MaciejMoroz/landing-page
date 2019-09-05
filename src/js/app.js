const BODY = document.querySelector("body"),
  btn_menu = document.querySelector("[data-menu-btn]"),
  coll = document.getElementsByClassName(" js-colapse"),
  emailInputs = document.querySelectorAll(".js-validation-input"),
  form_req = document.querySelectorAll("[required]"),
  form_el = document.querySelectorAll("form")[1],
  submitBtn = document.querySelectorAll(".js-submit-btn")[1];

// hamburger menu
btn_menu.onclick = () => {
  BODY.classList.toggle('open-menu')
}
// colapse menu
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", () => {
    const content = this.nextElementSibling;
    if (content.clientHeight = "0px") {
      content.classList.toggle("active");
    }
  });

}

// swiper 
window.onload = () => {
  let swipers = [".news-swiper", ".trending-swiper", ".cards-swiper"];

  for (let i = 0; i < swipers.length; i++) {
    new Swiper(swipers[i], {
      direction: "horizontal",
      loop: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: swipers[i] + "-next",
        prevEl: swipers[i] + "-prev"
      }
    });
  }
}


//form submit
form_el.onsubmit = (event) => {
  event.preventDefault();
  form_el.classList.add("is-submitted");
  let isError = false;

  for (let i = 0; i < form_req.length; i++) {
    if (form_req[i].checkValidity() != true) {
      isError = true;
    }
  }
  if (!isError) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (this.readyState == 4 && this.status == 200) {
        let data = {
          email: emailInputs[1].value
        };
        form_el.classList.remove("is-submitted");
        form_el.reset();
      }
    };
    xhttp.open("POST", "https://httpstat.us/200", true);
    xhttp.send(new FormData(form_el));
  }
};

// // fill hidden input for validation
emailInputs[1].addEventListener('change', () => {
  emailInputs[0].value = emailInputs[1].value;
})

// // submit btn color animation
emailInputs.forEach((e) => {
  return e.addEventListener('focus', () => {
    submitBtn.style.fill = "#000";
  });
});
emailInputs.forEach((e) => {
  return e.addEventListener('blur', () => {
    submitBtn.style.fill = "";
  });
});

