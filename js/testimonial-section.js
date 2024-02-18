var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 50,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // dynamicBullets: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        750: {
            slidesPerView: 2
        }
    }
});
