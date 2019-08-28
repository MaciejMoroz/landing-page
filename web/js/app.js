const BODY = this.document.querySelector("body"),
  btn_menu = this.document.querySelector("[data-menu-btn]"),
  coll = this.document.getElementsByClassName("colapse"),
  emailInput = this.document.querySelector('input[type="email"]'),
  emailInput2 = this.document.getElementById("email");


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

emailInput2.addEventListener('click', function () {
  console.log("SAdsad");

});
