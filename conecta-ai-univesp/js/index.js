var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
    loop: true,
    breakpoints: {
        50: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30
        },
    },
    pagination: {
      
      clickable: true, 
    },
  });
  
  var swiper2 = new Swiper(".categorias", {
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {
        50: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 6,
            spaceBetween: 10
        },
        992: {
            slidesPerView: 8,
            spaceBetween: 10
        },
        1200: {
            slidesPerView: 12,
            spaceBetween: 10
        },
    },
  });