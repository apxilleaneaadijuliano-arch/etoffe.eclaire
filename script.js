// ==========================================
// Étoffe Éclairé — JavaScript
// 5 Features: Progress Bar, Fade-in, Carousel, Fabric Cards, Mobile Menu
// ==========================================

// =========== 1. Progress Bar ===========
function updateProgressBar() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('progressBar').style.width = scrollPercent + '%';
}
window.addEventListener('scroll', updateProgressBar);

// =========== 2. Fade-in Animation on Scroll ===========
function setupFadeIn() {
  const fadeElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));
}

// =========== 3. Image Carousel ===========
let currentSlide = 0;
const totalSlides = 4;

function updateCarousel() {
  const track = document.getElementById('carouselTrack');
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');

  // Move track
  track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';

  // Update active slide
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });

  // Update dots
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function setupCarousel() {
  // Create dots
  const dotsContainer = document.getElementById('carouselDots');
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => {
      currentSlide = i;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  }

  // Arrow buttons
  document.getElementById('prevBtn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }, 5000);
}

// =========== 4. Fabric Cards Toggle ===========
function toggleFabric(card) {
  // Close all other cards
  const allCards = document.querySelectorAll('.fabric-card');
  allCards.forEach(c => {
    if (c !== card) c.classList.remove('open');
  });
  // Toggle current card
  card.classList.toggle('open');
}

// FAQ Toggle
document.addEventListener('DOMContentLoaded', () => {
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const content = btn.nextElementSibling;
      const icon = btn.querySelector('span');

      // Close others
      document.querySelectorAll('.faq-item').forEach(i => {
        if (i !== item) {
          i.classList.remove('open');
          i.querySelector('.faq-content').style.maxHeight = null;
          i.querySelector('span').textContent = '+';
        }
      });

      // Toggle current
      item.classList.toggle('open');
      if (item.classList.contains('open')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.textContent = '−';
      } else {
        content.style.maxHeight = null;
        icon.textContent = '+';
      }
    });
  });
});

// =========== 5. Mobile Menu Toggle ===========
function setupMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking a link
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}

// =========== Initialize Everything ===========
document.addEventListener('DOMContentLoaded', () => {
  setupFadeIn();
  setupCarousel();
  setupMobileMenu();
});