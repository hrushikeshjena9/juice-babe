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


// Toggle the mobile menu modal
const menuToggle = document.getElementById('menu-toggle');
const menuModal = document.getElementById('menu-modal');
const menuClose = document.getElementById('menu-close');

menuToggle.addEventListener('click', () => {
  menuModal.classList.remove('hidden');
});

menuClose.addEventListener('click', () => {
  menuModal.classList.add('hidden');
});

// Optional: Close modal when clicking outside
menuModal.addEventListener('click', (event) => {
  if (event.target === menuModal) {
    menuModal.classList.add('hidden');
  }
});
