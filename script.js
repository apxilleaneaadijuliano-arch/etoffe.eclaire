// ==================================================
// ÉTOFFE ÉCLAIRÉ — Complete JavaScript
// Features: Progress Bar • Fade Scroll • Carousel • Fabric Cards • FAQ • Mobile Menu
// ==================================================

// === 1. SCROLL PROGRESS BAR ===
function updateProgressBar() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  const progressBar = document.getElementById('scrollProgress');
  if (progressBar) progressBar.style.width = scrollPercent + '%';
}
window.addEventListener('scroll', updateProgressBar);

// === 2. FADE-IN ANIMATION ON SCROLL ===
const fadeElements = document.querySelectorAll('.fade-up');

function checkScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// === 3. IMAGE CAROUSEL ===
let currentSlide = 0;
const totalSlides = 4;

function updateCarousel() {
  const track = document.getElementById('carouselTrack');
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');

  if (track) {
    track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
  }

  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function setupCarousel() {
  const dotsContainer = document.getElementById('dotsContainer');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');

  // Create dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('span');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', () => {
        currentSlide = i;
        updateCarousel();
      });
      dotsContainer.appendChild(dot);
    }
  }

  // Previous button
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateCarousel();
    });
  }

  // Next button
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateCarousel();
    });
  }

  // Auto-slide every 5 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }, 5000);
}

// === 4. FABRIC CARDS — Toggle Expand/Collapse ===
function toggleCard(card) {
  const allCards = document.querySelectorAll('.fab-card');
  allCards.forEach(c => {
    if (c !== card) c.classList.remove('open');
  });
  card.classList.toggle('open');
}

// === 5. FAQ SECTION — Toggle Answers ===
function setupFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-q');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const icon = this.querySelector('span');
      
      // Close other FAQs
      faqQuestions.forEach(q => {
        if (q !== question) {
          q.classList.remove('active');
          if (q.nextElementSibling) q.nextElementSibling.style.maxHeight = null;
          const otherIcon = q.querySelector('span');
          if (otherIcon) otherIcon.textContent = '+';
        }
      });
      
      // Toggle current FAQ
      this.classList.toggle('active');
      if (this.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        if (icon) icon.textContent = '−';
      } else {
        answer.style.maxHeight = null;
        if (icon) icon.textContent = '+';
      }
    });
  });
}

// === 6. MOBILE NAVIGATION ===
function setupMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
      });
    });
  }
}

// === 7. INITIALIZE EVERYTHING ===
document.addEventListener('DOMContentLoaded', function() {
  checkScroll();
  setupCarousel();
  setupFAQ();
  setupMobileMenu();
});