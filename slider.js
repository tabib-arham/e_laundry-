const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let counter = 0; // Starting counter from 0
const slideWidth = slider.firstElementChild.clientWidth;
const totalSlides = slider.children.length;

function nextSlide() {
    counter++;
    if (counter >= totalSlides) {
        counter = 0; // Reset counter to loop back to the first slide
    }
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${slideWidth * counter}px)`;
}

function prevSlide() {
    counter--;
    if (counter < 0) {
        counter = totalSlides - 1; // Set counter to last slide index for loop
    }
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${slideWidth * counter}px)`;
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

setInterval(nextSlide, 2000); // Auto slide every 2 seconds
