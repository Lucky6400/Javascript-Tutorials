const sliderContainer = document.querySelector('.slider_container');
const slides = document.querySelectorAll('.slide');
const leftButton = document.querySelector('.slider__btn--left');
const rightButton = document.querySelector('.slider__btn--right');

console.log(slides.length);
let lastOrFirstSlideDetector = slides.length - 1;
let translate = 0;

leftButton.addEventListener('click', function(){
    if(translate === 0){
        translate = -70*lastOrFirstSlideDetector;
    } else {
        translate+=70;
    }
    
    sliderContainer.style.transform = `translateX(${translate}vw)`
})

rightButton.addEventListener('click', function(){
    if(translate === -70*lastOrFirstSlideDetector){
        translate = 0;
    } else {
        translate-=70;
    }
    
    sliderContainer.style.transform = `translateX(${translate}vw)`
})
