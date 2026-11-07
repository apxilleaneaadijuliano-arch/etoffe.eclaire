// ==================================================
// ÉTOFFE ÉCLAIRÉ — JavaScript Interactive Features
// 5 Elements: Fabric Cards • FAQ • Scroll Animation • Progress Bar • Mobile Menu
// ==================================================

// 1️⃣ FABRIC CARDS — Click to Expand/Collapse
function toggleCard(card) {
  // Close all other cards
  const allCards = document.querySelectorAll('.fab-card');
  allCards.forEach(c => {
    if (c !== card) c.classList.remove('open');
  });
  // Toggle current card
  card.classList.toggle('open');
}

// 2️⃣ FAQ SECTION — Click to Show/Hide Answers
document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-q');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const icon = this.querySelector('span');
      
      // Close other FAQs
      faqQuestions.forEach(q => {
        if (q !== question) {
          q.classList.remove('active');
          q.nextElementSibling.style.maxHeight = null;
          const otherIcon = q.querySelector('span');
          if (otherIcon) otherIcon.textContent = '+';
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
});

// 3️⃣ SCROLL ANIMATIONS — Fade-in as you scroll down
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

// 4️⃣ SCROLL PROGRESS BAR — Top loading indicator
function updateProgressBar() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('scrollProgress').style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateProgressBar);

// 5️⃣ MOBILE NAVIGATION — Toggle menu on small screens
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
}