
const btn_menu = document.querySelector("[data-menu-btn]"),
    coll = document.getElementsByClassName(" js-colapse");

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