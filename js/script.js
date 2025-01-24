const visualSlider = new Swiper('.visual-slider', {
    // Optional parameters
    loop: true,
    // autoplay: {
    //   delay: 3000,
    // },
    speed: 1000,

    // Navigation arrows
    navigation: {
        nextEl: '.visual-slider .btn-next',
        prevEl: '.visual-slider .btn-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    breakpoints: {
        800: {
            navigation: false,
        },
    },
});

const bestList = new Swiper('.best-list', {
    // Optional parameters
    loop: true,
    //autoplay: {
    //   delay: 3000,
    //},
    speed: 500,
    slidesPerView: 3,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
        nextEl: '.best-pro  .best-next',
    },
});

const newList = new Swiper('.new-list', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 3000,
    },
    speed: 500,
    slidesPerView: 3,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
        nextEl: '.new-pro  .new-next',
    },
});
function initSwipers() {
    if (window.innerWidth > 800) {
        visualSlider.init();
        bestList.init();
        newList.init();
    } else {
        visualSlider.destroy(true, true);
        bestList.destroy(true, true);
        newList.destroy(true, true);
    }
}

window.addEventListener('resize', initSwipers);
window.addEventListener('load', initSwipers);

const reviewList = new Swiper('.review-list', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 3000,
    },
    speed: 500,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 10,

    // Navigation arrows
    navigation: {
        nextEl: '.review .btn-next',
        prevEl: '.review .btn-prev',
    },

    breakpoints: {
        // 최소 800 이상일 때
        800: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});

// AOS.init();
