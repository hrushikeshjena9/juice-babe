const slider = document.getElementById('slider');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;
const totalSlides = slider.children.length;

function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSliderPosition();
});

next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSliderPosition();
});
