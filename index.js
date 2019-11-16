$('.owl-carousel').owlCarousel({
    center: true,
    autoplay: true,
    items:2,
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
