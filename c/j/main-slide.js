
      var swiper = new Swiper(".main-slide", {
        pagination: {
          el: ".main-slide .swiper-pagination",
          clickable: true,
        },
        navigation: {
         nextEl: ".main-slide .swiper-button-next",
          prevEl: ".main-slide .swiper-button-prev",
        },
        loop:true,
        lazy: true,
        autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        },
      });
   