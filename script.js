const sliderContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next_btn');
const prevBtn = document.getElementById('prev_btn');
const interval = 3000;


let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;


const startSlide = () =>{
  slideId = setInterval(() =>{
        index++;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        slide.style.transition = `1s all cubic-bezier(0.67, 0.01, 0, 0.99)`;
    }, interval);
}

slide.addEventListener('transitionend', () =>{
    slides = document.querySelectorAll('.slide');
    if(slides[index].id === firstClone.id) {
        slide.style.transition = `none`;
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
    if(slides[index].id === lastClone.id) {
        slide.style.transition = `none`;
        index = slides.length - 2;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
});

const moveToNextSlide = () =>{
    slides = document.querySelectorAll('.slide');
    if(index >= slides.length - 1) return;
        index++;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        slide.style.transition = `1s all cubic-bezier(0.67, 0.01, 0, 0.99)`;
}

const moveToprevSlide = () =>{
    if(index <= 0) return;
        index--;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        slide.style.transition = `1s all cubic-bezier(0.67, 0.01, 0, 0.99)`;
}
    

sliderContainer.addEventListener('mouseenter', ()=>{
    clearInterval(slideId);
});

sliderContainer.addEventListener('mouseleave', startSlide);

nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToprevSlide);


startSlide();
