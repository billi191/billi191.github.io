$(document).ready(function(){

    $('.slider-main').slick({
    //   setting-name: setting-value
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000
    });

    $('.slider-poductrs').slick({ 
        slidesToShow: 3,
        slidesToScroll: 1,
        responsiv :[
            {

                breakpoint: 600,
                setting:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    arrows: false
                }

            }
        ]
    });

  });