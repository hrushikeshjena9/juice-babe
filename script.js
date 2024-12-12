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


// typing 

document.addEventListener("DOMContentLoaded", function () {
  const text = `Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
        therefore always free from repetition, injected humour, or
        non-characteristic words, etc.
        therefore always free from repetition, injected humour, or
        non-characteristic words, etc.`;

  let index = 0;
  const typingElement = document.getElementById('typing-effect');
  const typingSpeed = 100; // Speed of typing in ms

  function typeWriter() {
    if (index < text.length) {
      typingElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, typingSpeed);
    }
  }

  typeWriter();
});



// menu toggle  
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
});