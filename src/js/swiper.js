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