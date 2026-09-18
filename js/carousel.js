// ===== HERO CAROUSEL =====
function initHeroCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length === 0) return;
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.querySelector('.hero-btn.prev');
  const nextBtn = document.querySelector('.hero-btn.next');
  let currentSlide = 0;
  let autoPlayInterval;

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { stopAutoPlay(); prevSlide(); startAutoPlay(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { stopAutoPlay(); nextSlide(); startAutoPlay(); });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      stopAutoPlay();
      goToSlide(i);
      startAutoPlay();
    });
  });

  startAutoPlay();
}

// ===== UMKM CAROUSEL =====
function initUMKMCarousel() {
  const track = document.querySelector('.umkm-track');
  if (!track) return;
  const slides = document.querySelectorAll('.umkm-slide');
  if (slides.length === 0) return;
  const prevBtn = document.querySelector('.umkm-btn.prev');
  const nextBtn = document.querySelector('.umkm-btn.next');
  let currentIndex = 0;

  function goTo(index) {
    currentIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

  // Auto slide
  setInterval(() => goTo(currentIndex + 1), 7000);
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  initHeroCarousel();
  initUMKMCarousel();
});
