const BODY = this.document.querySelector("body"),
  btn_menu = this.document.querySelector("[data-menu-btn]"),
  coll = document.getElementsByClassName("colapse");

// hamburger menu
btn_menu.onclick = () => {
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
