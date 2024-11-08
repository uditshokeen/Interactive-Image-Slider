let currentSlide = 0;

const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    updateSliderPosition();
}

function updateSliderPosition() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(${-currentSlide * 100}%)`;
}
