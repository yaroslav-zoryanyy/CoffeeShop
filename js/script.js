 let myImageSlider = new Swiper('.mySwiper',{

    navigation: {
        nextEl: '.prev',
        prevEl: '.next',
    },
    pagination:{
        el: `.swiper-pagination`,
        type: 'progressbar',
        
    },
    slideToClickedSlide: true,
    slidesPerView: 2,
    spaceBetween: 30,
    initialSlide: 1,
    
    
});

let mySliderAllSlides = document.querySelector('.image-slider__total') ;
let mySliderCurrentSlide = document.querySelector('.image-slider__current');

// mySliderAllSlides.innerHTML =  myImageSlider.slides.lenght;

myImageSlider.on('slideChange', function () {
    let currentSlide = ++myImageSlider.realIndex;
    mySliderCurrentSlide.innerHTML = currentSlide
});
