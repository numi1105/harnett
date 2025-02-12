$(function () {
    const $window = $(window);
    const $header = $("header");
    const $subMenu = $(".submenu");
    const $menu = $(".gnb > li");
    const duration = 250; // 0.25초
    // console.log($menu);

    // 메뉴영역에 마우스가 들어오면 (event:mouseenter)
    $menu.on("mouseenter", function () {
        // 그 영역 하위 요소 중에서 submenu 찾아서 슬라이드 다운
        $(this).find($subMenu).stop().slideDown(duration);
        $(this).addClass("on");
    });

    // 메뉴 영역에 마우스가 나가면
    $menu.on("mouseleave", function () {
        // submenu 찾아서 슬라이드 업
        $subMenu.stop().slideUp(duration);
        $menu.removeClass("on");
    });

    const visualSlider = new Swiper(".visual-slider", {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 3000,
        },
        speed: 1000,

        // navigation: false,

        pagination: {
            el: ".visual-slider .swiper-pagination",
            type: "bullets",
        },

        breakpoints: {
            800: {
                // Navigation arrows
                navigation: {
                    nextEl: ".visual-slider .btn-next",
                    prevEl: ".visual-slider .btn-prev",
                },
            },
        },
    });

    const bestList = new Swiper(".best-list", {
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
            nextEl: ".best-pro  .best-next",
        },
    });

    const newList = new Swiper(".new-list", {
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
            nextEl: ".new-pro  .new-next",
        },
    });
    function initSwipers() {
        if (window.innerWidth > 800) {
            bestList.init();
            newList.init();
        } else {
            bestList.destroy(true, true);
            newList.destroy(true, true);
        }
    }

    window.addEventListener("resize", initSwipers);
    window.addEventListener("load", initSwipers);

    const reviewList = new Swiper(".review-list", {
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
            nextEl: ".review .btn-next",
            prevEl: ".review .btn-prev",
        },

        pagination: {
            el: ".review .swiper-pagination",
            type: "bullets",
        },

        pagination: {
            el: ".review .swiper-pagination",
            type: "bullets",
        },

        breakpoints: {
            // 최소 800 이상일 때
            800: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
    });

    //AOS.init();
});
