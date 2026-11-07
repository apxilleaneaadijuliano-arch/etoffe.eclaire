// === Progress Bar ===
function updateProgressBar() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('progressBar').style.width = scrollPercent + '%';
}
window.addEventListener('scroll', updateProgressBar);

// === Fade-in Animation ===
function setupFadeIn() {
  const elements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

// === Image Carousel ===
let currentSlide = 0;
const totalSlides = 4;

function updateCarousel() {
  const track = document.getElementById('carouselTrack');
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');

  track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';

  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function setupCarousel() {
  const dotsContainer = document.getElementById('dotsContainer');
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => {
      currentSlide = i;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  }

  document.getElementById('prevSlide').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  document.getElementById('nextSlide').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  });

  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }, 5000);
}

// === Fabric Cards Toggle ===
function toggleCard(card) {
  const allCards = document.querySelectorAll('.fabric-card');
  allCards.forEach(c => {
    if (c !== card) c.classList.remove('open');
  });
  card.classList.toggle('open');
}

// === FAQ Toggle ===
function setupFAQ() {
  const faqButtons = document.querySelectorAll('.faq-q');
  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-a');
      const icon = btn.querySelector('span');

      item.classList.toggle('open');
      answer.style.maxHeight = item.classList.contains('open') ? answer.scrollHeight + 'px' : '0';
      icon.textContent = item.classList.contains('open') ? '−' : '+';
    });
  });
}

// === Mobile Menu ===
function setupMobileMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// === Initialize Everything ===
document.addEventListener('DOMContentLoaded', () => {
  setupFadeIn();
  setupCarousel();
  setupFAQ();
  setupMobileMenu();
});