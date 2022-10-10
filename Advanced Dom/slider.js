const sliderContainer = document.querySelector('.slider_container');
const slides = document.querySelectorAll('.slide');
const leftButton = document.querySelector('.slider__btn--left');
const rightButton = document.querySelector('.slider__btn--right');
const slider = document.querySelector('.slider');

console.log(slides.length);

console.log(getComputedStyle(sliderContainer).width);
const translateBy = parseFloat(getComputedStyle(slider).width);
console.log(translateBy);
slides.forEach(slide => { slide.style.width = getComputedStyle(slider).width })
let lastOrFirstSlideDetector = slides.length - 1;
let translate = 0;

leftButton.addEventListener('click', function(){
    if(translate === 0){
        translate = -translateBy*lastOrFirstSlideDetector;
    } else {
        translate+=translateBy;
    }
    
    sliderContainer.style.transform = `translateX(${translate}px)`
})

rightButton.addEventListener('click', function(){
    if(translate === -translateBy*lastOrFirstSlideDetector){
        translate = 0;
    } else {
        translate-=translateBy;
    }
    
    sliderContainer.style.transform = `translateX(${translate}px)`
})
