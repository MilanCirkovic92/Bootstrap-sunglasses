$(document).ready(function () {
    //ANIMATION
    function animation() {
        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');

            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);

            }
        });
    }

    $(window).scroll(function () {
        animation();
    });
    animation();

    //COUNTER UP
    if ($('.counter').length > 0) {
        $('.counter').counterUp({
            time: 2000
        });
    }

    //product slider

    if ($('.product-slider').length > 0) {
        $('.product-slider').owlCarousel({

            autoplay: true,
            responsive: {
                0: {
                    items: 1,
                    slideBy: 1
                },
                550: {
                    items: 2,
                    margin: 30,
                    slideBy: 2
                },
                850: {
                    items: 3,
                    margin: 30,
                    slideBy: 1
                },
                1200: {
                    items: 4,
                    margin: 40,
                    slideBy: 1
                }
            }
        });
    }


    //VALIDATE FORM

    if ($('.contact-form').length > 0) {

        $('.contact-form').validate({

            highlight: function (element) {
                $(element).addClass('is-invalid').removeClass('is-valid');
            },
            unhighlight: function (element) {
                $(element).addClass('is-valid').removeClass('is-invalid');
            },
            rules: {
                name: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: 'The Name* field is required'
                },
                email: {
                    required: 'The Email* field is required',
                    email: 'Please provide a valid email address'
                },
                message: {
                    required: 'The Message* field is required'
                }
            },

            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo(element.closest(".form-group").find(".error-msg"));
            }




        });

    }

    //EASY SCROLL
    $('.navbar-nav a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate(
                {
                    scrollTop: $($(this).attr('href')).offset().top
                },
                1000,
                'linear'
                );
    });
});
