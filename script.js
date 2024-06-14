


let rushi = new Swiper(".myrushi", {
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
    },
    loop: true,
    mousewheel: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        425: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});