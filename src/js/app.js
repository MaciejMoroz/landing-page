const BODY = this.document.querySelector("body"),
  btn_menu = this.document.querySelector("[data-menu-btn]");


// hamburger menu
btn_menu.onclick = () => {
  BODY.classList.toggle('open-menu')
}
