// ==================================================
// ÉTOFFE ÉCLAIRÉ — JavaScript Interactive Features
// ==================================================

// 1️⃣ EXPANDING FABRIC CARDS
function toggleCard(card) {
  const allCards = document.querySelectorAll('.expand-card');
  allCards.forEach(c => {
    if (c !== card) c.classList.remove('open');
  });
  card.classList.toggle('open');
}

// 2️⃣ FAQ COLLAPSE/EXPAND
document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const icon = this.querySelector('.faq-icon');
      
      faqQuestions.forEach(q => {
        if (q !== this) {
          q.classList.remove('active');
          q.nextElementSibling.style.maxHeight = null;
          const otherIcon = q.querySelector('.faq-icon');
          if (otherIcon) otherIcon.textContent = '+';
        }
      });
      
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
});

// 3️⃣ SCROLL ANIMATIONS
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

// 4️⃣ SCROLL PROGRESS BAR
function updateProgressBar() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('scrollProgress').style.width = scrollPercent + '%';
}
window.addEventListener('scroll', updateProgressBar);

// 5️⃣ MOBILE NAV TOGGLE
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
if (menuToggle) {
  menu