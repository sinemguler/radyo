var swiper = new Swiper(".live-slider", {
    slidesPerView: 4,
    /* sliderdaki bölme sayısını belirler*/
    navigation: {
        nextEl: ".swiper-streaming .swiper-button-next",
        prevEl: ".swiper-streaming .swiper-button-prev",
    },
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4
        }
    }
});