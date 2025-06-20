
let currentSlide = 0;
const track = document.querySelector('.slider-trackimg');
const slides = document.querySelectorAll('.slideimg');
const totalSlides = slides.length;

function updateSlidePosition() {
  const offset = -currentSlide * 100;
  track.style.transform = `translateX(${offset}%)`;
}

// Optional: auto-slide every 5s
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlidePosition();
}, 5000);
