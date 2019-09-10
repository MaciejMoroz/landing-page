const emailInputs = document.querySelectorAll(".js-validation-input"),
    form_req = document.querySelectorAll("[required]"),
    form_el = document.querySelectorAll("form")[1],
    submitBtn = document.querySelectorAll(".js-submit-btn")[1];

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