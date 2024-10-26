// script.js
const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateSlider() {
  const cardWidth = slider.querySelector('.card').offsetWidth + 20; // 20px for margin
  slider.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < slider.children.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

// Optional: Swipe functionality for mobile
let startX = 0;

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50 && currentIndex < slider.children.length - 1) {
    currentIndex++;
    updateSlider();
  } else if (endX - startX > 50 && currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});
