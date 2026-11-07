// ==================================================
// ÉTOFFE ÉCLAIRÉ — JavaScript
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

// === 3. FABRIC CARDS — Expand/Collapse ===
function toggleFabCard(card) {
  const allCards = document.querySelectorAll('.fab-card');
  allCards.forEach(c => {
    if (c !== card) c.classList.remove('open');
  });
  card.classList.toggle('open');
}

// === 4. FAQ — Toggle Answers ===
function setupFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-q');
  
  faqQuestions.forEach(q => {
    q.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const icon = this.querySelector('span');
      
      // Close other FAQs
      faqQuestions.forEach(otherQ => {
        if (otherQ !== q) {
          otherQ.classList.remove('active');
          otherQ.nextElementSibling.style.maxHeight = null;
          otherQ.querySelector('span').textContent = '+';
        }
      });
      
      // Toggle current FAQ
      this.classList.toggle('active');
      if (this.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.textContent = '−';
      } else {
        answer.style.maxHeight = null;
        icon.textContent = '+';
      }
    });
  });
}

// === 5. MOBILE MENU ===
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

// === 6. INITIALIZE EVERYTHING ===
document.addEventListener('DOMContentLoaded', function() {
  checkScroll();
  setupFAQ();
  setupMobileMenu();
});