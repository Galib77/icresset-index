jQuery(function ($) {
    'use strict';
    
    // Mean Menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

    // Navbar JS
    $(window).on('scroll',function() {
        if ($(this).scrollTop()>150){  
            $('.navbar-area').addClass("is-sticky");
        }
        else{
            $('.navbar-area').removeClass("is-sticky");
        }
    });
    


    // Back To Top
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
                $('.top-btn').addClass('active');
            }
        else {
            $('.top-btn').removeClass('active');
        }
    });

    $('.top-btn').on('click',function(){
        $("html, body").animate({ scrollTop: 0 }, 2500);
        return false;
    });

     // Tastimonial Slider JS
    // $('.testimonial-slider').owlCarousel({
    //     loop:true,
    //     margin:30,
    //     nav:true,
    //     dots:false,
    //     items:1,
    //     smartSpeed:2500,
    //     autoplay:false,
    //     autoplayTimeout:4000,
    //     navText:[
    //         "<i class='bx bx-chevrons-left'></i>",
    //         "<i class='bx bx-chevrons-right bx-tada'></i>"
    //     ]
    // })

    // Nice Select
    // $('select').niceSelect();


    // Tastimonial Two Slider JS
    // $('.testimonial-slider-two').owlCarousel({
    //     loop:true,
    //     margin:30,
    //     nav:true,
    //     dots:false,
    //     smartSpeed:2500,
    //     autoplay:false,
    //     autoplayTimeout:4000,
    //     navText:[
    //         "<i class='bx bx-chevrons-left bx-tada'></i>",
    //         "<i class='bx bx-chevrons-right bx-tada'></i>"
    //     ],
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         768:{
    //             items:2
    //         }
    //     }
    // })
   
       // Tastimonial Slider JS
    // $('.testimonial-slider').owlCarousel({
    //     loop:true,
    //     margin:30,
    //     nav:true,
    //     dots:false,
    //     items:1,
    //     smartSpeed:2500,
    //     autoplay:false,
    //     autoplayTimeout:4000,
    //     navText:[
    //         "<i class='bx bx-chevrons-left'></i>",
    //         "<i class='bx bx-chevrons-right bx-tada'></i>"
    //     ]
    // });

        $('#carouselExampleCaptions').on('slide.bs.carousel', function (event) {
            setTimeout(function(){
                $('.carousel-inner .typewritter').toggleClass('typewritter1 typewritter');
            }, 200);
        });

        $([0,1,2,3]).each(function(index){
            var idx = index;
            $('.slide'+ idx +'-banner-text .dot').on('animationend', function(){
                $('.slide'+ idx +'-banner-text .typewritter1').toggleClass('typewritter1 typewritter');
    
            });
        });
        

    setTimeout(function(){
        $('#carouselExampleCaptions .carousel-item.active img').css({transform: 'scale(1.3)'});
        setTimeout(function(){
            $('#carouselExampleCaptions .carousel-item.active img').css({transform: ''});
        }, 5000);
    }, 500);
    
}(jQuery));