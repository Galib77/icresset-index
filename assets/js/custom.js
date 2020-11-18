jQuery(function ($) {
    'use strict';

    // Mean Menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

    // Navbar JS
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 150) {
            $('.navbar-area').addClass("is-sticky");
        }
        else {
            $('.navbar-area').removeClass("is-sticky");
        }
    });

    $(document).ready(function(){
        document.getElementById('copyright-year').appendChild(
            document.createTextNode(
                new Date().getFullYear()
            )
        );
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

    $('.top-btn').on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, 2500);
        return false;
    });



    $('#carouselExampleCaptions').on('slide.bs.carousel', function (event) {
        setTimeout(function () {
            $('.carousel-inner .typewritter').toggleClass('typewritter1 typewritter');
        }, 200);
    });

    $([0, 1, 2, 3]).each(function (index) {
        var idx = index;
        $('.slide' + idx + '-banner-text .dot').on('animationend', function () {
            $('.slide' + idx + '-banner-text .typewritter1').toggleClass('typewritter1 typewritter');

        });
    });


    setTimeout(function () {
        $('#carouselExampleCaptions .carousel-item.active img').css({ transform: 'scale(1.3)' });
        setTimeout(function () {
            $('#carouselExampleCaptions .carousel-item.active img').css({ transform: '' });
        }, 5000);
    }, 500);

    // var $this = $('#ten-steps-to-hire');

    // var position = $this.position();
    // $('#ten-steps-to-hire').scrollspy({
    //     min: position.top,
    //     max: position.top + $this.height(),
    //     onEnter: function onEnter(element/*, position*/) {
    //         // $('body').css('background-color', element.id);
    //         window.console.log('Entering ' + element.id);
    //     },
    //     onLeave: function onLeave(element/*, position*/) {
    //         window.console.log('Leaving ' + element.id);
    //     }
    // });
}(jQuery));

// Animate the ten steps on acquisition page
(function($){
    var timers = [];
    var $this = $('#ten-steps-to-hire');

    $('.col-md-4.main-grid', $this).css({visibility: 'hidden'});
    $('.description-box div', $this).css({visibility: 'hidden'});

    function removeAnimation() {
        $($this).scrollspy({}, 'destroy');
        
        $('.col-md-4.main-grid', $this).each(function(){
            $(this).removeClass('animate__animated animate__slideInLeft');
            $('.description-box div', this).removeClass('animate__animated animate__fadeInUp animate__slow');
        });

        $('.col-md-4.main-grid', $this).css({visibility: 'hidden'});
        $('.description-box div', $this).css({visibility: 'hidden'});
        $(timers).each(function(){
            clearInterval(this);        
        });
    }
    $('#collapseExecutive').on('hidden.bs.collapse', removeAnimation);

    $('#collapseExecutive').on('shown.bs.collapse', function () {
        setTimeout(function(){

        
    var position = $this.position();
    $($this).scrollspy({
        min: position.top,
        max: position.top + $this.height() * 1.5,
        onEnter: function onEnter(element/*, position*/) {
            console.log('enter');
            $('.col-md-4.main-grid', element).each(function(idx){
                var elem = this;

                timers.push(setTimeout(function(){
                    $(elem).css({visibility: 'visible'});
                    $(elem).addClass('animate__animated animate__slideInLeft');

                    if(idx===2){
                        timers.push(setTimeout(function(){
                            $('.description-box div', element).each(function(id1){
                                var txt = this;
                                timers.push(setTimeout(function(){
                                    $(txt).css({visibility: 'visible'});
                                    $(txt).addClass('animate__animated animate__fadeInUp animate__slow');
                                }, 300 * id1));
                            });
                        }, 1000));
                        
                    }
                }, 1000 * idx));
            });
        },
        onLeave: function onLeave(element/*, position*/) {
            console.log('leave');
            $('.col-md-4.main-grid', element).each(function(){
                $(this).removeClass('animate__animated animate__slideInLeft');
                $('.description-box div', this).removeClass('animate__animated animate__fadeInUp animate__slow');
            });
            $($this).scrollspy({}, 'destroy');
        }
    });
}, 200);
    });
})(jQuery);