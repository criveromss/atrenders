
(function($) {
    "use strict";

    $(document).ready( function() {

        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        $('#mobile-menus').meanmenu({
            meanMenuContainer: '.mobile-menus',
            meanScreenWidth: "1920",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function() {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function() {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function() {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });

        //>> Sticky Header Js Start <<//

        $(window).scroll(function() {
            if ($(this).scrollTop() > 250) {
                $("#header-sticky").addClass("sticky");
            } else {
                $("#header-sticky").removeClass("sticky");
            }
        });

        //>> Video Popup Start <<//
        $(".img-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        $('.video-popup').magnificPopup({
            type: 'iframe',
            callbacks: {
            }
        });

        //>> Counterup Start <<//
        $(".count").counterUp({
            delay: 15,
            time: 4000,
        });

        //>> Wow Animation Start <<//
        new WOW().init();

        //>> Nice Select Start <<//
        $('select').niceSelect();

       // Scroll Fade area start here ***

        gsap.utils.toArray(".gsap__parallax").forEach(function (container) {
            let image = container.querySelector("img");

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    scrub: 0.5,
                },
            });
            tl.from(image, {
                yPercent: -30,
                ease: "none",
            }).to(image, {
                yPercent: 30,
                ease: "none",
            });
        });

        $("[data-background").each(function () {
            $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
        });

        if ($('.full-img-wrap').length > 0) {
            ScrollTrigger.create({
                trigger: ".full-img-wrap",
                start: "top 0",
                end: "bottom 0%",
                pin: ".full-img",
                pinSpacing: false,
            });
        }

        if ($('.full-img-wrap2').length > 0) {
            ScrollTrigger.create({
                trigger: ".full-img-wrap2",
                start: "top 0",
                end: "bottom 0%",
                pin: ".full-img2",
                pinSpacing: false,
            });
        }

        if ($('.full-img-wrap3').length > 0) {
            ScrollTrigger.create({
                trigger: ".full-img-wrap3",
                start: "top 0",
                end: "bottom 0%",
                pin: ".full-img3",
                pinSpacing: false,
            });
        }

        //>> Brand-slider Slider Start <<//
        if($('.brand-slider').length > 0) {
            const brandSlider = new Swiper(".brand-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },

                breakpoints: {
                    1399: {
                        slidesPerView: 6,
                    },
                    1199: {
                        slidesPerView: 5,
                    },
                    991: {
                        slidesPerView: 4,
                    },
                    767: {
                        slidesPerView: 3,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    400: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if($('.brand-slider-2').length > 0) {
            const brandSlider2 = new Swiper(".brand-slider-2", {
                slidesPerView: 'auto',
                spaceBetween: 80,
                freemode: true,
                centeredSlides: true,
                loop: true,
                speed: 4000,
                allowTouchMove: false,
                autoplay: {
                    delay: 1,
                    disableOnInteraction: true,
                },
            });
        }

        if($('.brand-slider-3').length > 0) {
            const brandSlider3 = new Swiper(".brand-slider-3", {
                slidesPerView: 'auto',
                spaceBetween: 80,
                freemode: true,
                centeredSlides: true,
                loop: true,
                speed: 4000,
                allowTouchMove: false,
                autoplay: {
                    delay: 1,
                    disableOnInteraction: true,
                },
            });
        }

        if($('.hero-brand-slider').length > 0) {
            const heroBrandSlider = new Swiper(".hero-brand-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    767: {
                        slidesPerView: 3,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    400: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if($('.marquee-text-slider').length > 0) {
            const marqueeTextSlider = new Swiper(".marquee-text-slider", {
                slidesPerView: 'auto',
                spaceBetween: 40,
                freemode: true,
                centeredSlides: true,
                loop: true,
                speed: 25000,
                allowTouchMove: false,
                autoplay: {
                    delay: 1,
                    disableOnInteraction: true,
                },
            });
        }

        if($('.marquee-text-slider-2').length > 0) {
            const marqueeTextSlider2 = new Swiper(".marquee-text-slider-2", {
                slidesPerView: 'auto',
                spaceBetween: 40,
                freemode: true,
                centeredSlides: true,
                loop: true,
                speed: 25000,
                allowTouchMove: false,
                autoplay: {
                    delay: 1,
                    disableOnInteraction: true,
                },
            });
        }

        if($('.hero-marquee-slider').length > 0) {
            const heroMarqueeSlider = new Swiper(".hero-marquee-slider", {
                slidesPerView: 'auto',
                spaceBetween: 20,
                freemode: true,
                centeredSlides: true,
                loop: true,
                speed: 4000,
                allowTouchMove: false,
                autoplay: {
                    delay: 1,
                    disableOnInteraction: true,
                },
            });
        }

        if($('.brand-text-slider-4').length > 0) {
            const brandTextSlider4 = new Swiper(".brand-text-slider-4", {
                slidesPerView: 'auto',
                spaceBetween: 20,
                freemode: true,
                centeredSlides: true,
                loop: true,
                speed: 9000,
                allowTouchMove: false,
                autoplay: {
                    delay: 1,
                    disableOnInteraction: true,
                },
            });
        }

        if($('.brand-text-slider-5').length > 0) {
            const brandTextSlider5 = new Swiper(".brand-text-slider-5", {
                slidesPerView: 'auto',
                spaceBetween: 20,
                freemode: true,
                centeredSlides: true,
                loop: true,
                speed: 9000,
                allowTouchMove: false,
                autoplay: {
                    delay: 1,
                    disableOnInteraction: true,
                },
            });
        }

        //>> Testimonial-slider Slider Start <<//
        if($('.testimonial-slider').length > 0) {
            const testimonialSlider = new Swiper(".testimonial-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                effect: "cards",
                grabCursor: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".dot",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".array-prevs",
                    prevEl: ".array-nexts",
                },
            });
        }

        if($('.testimonial-slider-2').length > 0) {
            const testimonialSlider2 = new Swiper(".testimonial-slider-2", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
            });
        }

        if($('.testimonial-slider-3').length > 0) {
            const testimonialSlider3 = new Swiper(".testimonial-slider-3", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prevs",
                    prevEl: ".array-nexts",
                },
            });
        }

        if($('.testimonial-slider-4').length > 0) {
            const testimonialSlider4 = new Swiper(".testimonial-slider-4", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },

                breakpoints: {
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if($('.testimonial-slider-5').length > 0) {
            const testimonialSlider5 = new Swiper(".testimonial-slider-5", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    reverseDirection: true,
                    disableOnInteraction: false,
                },

                breakpoints: {
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if($('.testimonial-slider-6').length > 0) {
            const testimonialSlider6 = new Swiper(".testimonial-slider-6", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: true,
                    reverseDirection: true,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 2,
                    },
                    991: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if($('.testimonial-content-slider').length > 0) {
            const testimonialContentSlider = new Swiper(".testimonial-content-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: true,
                    reverseDirection: true,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
            });
        }

        if($('.project-slider').length > 0) {
            const projectSlider = new Swiper(".project-slider", {
                spaceBetween: 30,
                speed: 2000,
                loop: true,
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        //>> Custom Accordion Tabs Start <<//
        $(".accordion-single .header-area").on("click", function () {
			if ($(this).closest(".accordion-single").hasClass("active")) {
				$(this).closest(".accordion-single").removeClass("active");
				$(this).next(".content-area").slideUp();
			} else {
				$(".accordion-single").removeClass("active");
				$(this).closest(".accordion-single").addClass("active");
				$(".content-area").not($(this).next(".content-area")).slideUp();
				$(this).next(".content-area").slideToggle();
			}
		});

        //>> Mouse Cursor Start <<//
        function mousecursor() {
            if ($("body")) {
                const e = document.querySelector(".cursor-inner"),
                    t = document.querySelector(".cursor-outer");
                let n,
                    i = 0,
                    o = !1;
                (window.onmousemove = function(s) {
                    o ||
                        (t.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (e.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (n = s.clientY),
                        (i = s.clientX);
                }),
                $("body").on("mouseenter", "a, .cursor-pointer", function() {
                        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                    }),
                    $("body").on("mouseleave", "a, .cursor-pointer", function() {
                        ($(this).is("a") && $(this).closest(".cursor-pointer").length) ||
                        (e.classList.remove("cursor-hover"),
                            t.classList.remove("cursor-hover"));
                    }),
                    (e.style.visibility = "visible"),
                    (t.style.visibility = "visible");
            }
        }
        $(function() {
            mousecursor();
        });


        //>> Back To Top Slider Start <<//
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 20) {
                $("#back-top").addClass("show");
            } else {
                $("#back-top").removeClass("show");
            }
        });

        $(document).on('click', '#back-top', function() {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });


    }); // End Document Ready Function



    // Type text area start here ***
    $(document).ready(function () {
        const words = ["Communication", "Stratégies", "Événementiel", "Influence", "Production", "Conciergerie"];
        let index = 0;
        let letterIndex = 0;
        let isErasing = false;

        // Fonction principale de gestion du texte
        function typeWriter() {
            const word = words[index];

            // Effacement du texte
            if (isErasing) {
                letterIndex--;
                updateText(word.substring(0, letterIndex));

                if (letterIndex === 0) {
                    isErasing = false;
                    index = (index + 1) % words.length;  // Passage au mot suivant
                    setTimeout(typeWriter, 500);         // Pause avant de réécrire
                    return;
                }
            }
            // Écriture du texte
            else {
                letterIndex++;
                updateText(word.substring(0, letterIndex));

                if (letterIndex === word.length) {
                    isErasing = true;
                    setTimeout(typeWriter, 1000);        // Pause avant d'effacer
                    return;
                }
            }

            // Boucle du processus avec un léger délai
            setTimeout(typeWriter, 150);
        }

        // Fonction pour mettre à jour le texte en s'assurant qu'il reste propre
        function updateText(content) {
            const textContainer = $("#typing-text");

            // Réinitialisation du conteneur à chaque mise à jour
            textContainer.text('');  // Assure qu'il n'y a pas de décalage ou de texte résiduel
            textContainer.append(content);
        }

        // Lancer le typewriter
        typeWriter();
    });

    // Type text area end here ***


    function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');
            $(".preloader").delay(600).fadeOut();
        });
    }

    loader();


})(jQuery); // End jQuery

