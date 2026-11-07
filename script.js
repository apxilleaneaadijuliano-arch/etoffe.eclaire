// ==================================================
// ÉTOFFE ÉCLAIRÉ — JavaScript Interactive Features
// 5 Elements: Cards • FAQ • Scroll Animations • Progress Bar • Quiz
// ==================================================

// ======================================
// 1️⃣ EXPANDING FABRIC CARDS
// ======================================
function toggleCard(card) {
  // Close all other cards first
  const allCards = document.querySelectorAll('.expand-card');
  allCards.forEach(c => {
    if (c !== card) c.classList.remove('open');
  });
  // Toggle clicked card
  card.classList.toggle('open');
}

// ======================================
// 2️⃣ FAQ COLLAPSE/EXPAND SECTIONS
// ======================================
document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const icon = this.querySelector('.faq-icon');
      
      // Close other FAQs
      faqQuestions.forEach(q => {
        if (q !== this) {
          q.classList.remove('active');
          q.nextElementSibling.style.maxHeight = null;
          const otherIcon = q.querySelector('.faq-icon');
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

// ======================================
// 3️⃣ SCROLL ANIMATIONS — Fade-in on Scroll
// ======================================
const fadeElements = document.querySelectorAll('.fade-up');

function checkScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top < windowHeight * 0.85) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// ======================================
// 4️⃣ SCROLL PROGRESS BAR
// ======================================
function updateProgressBar() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('scrollProgress').style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateProgressBar);

// ======================================
// BONUS: MOBILE NAVIGATION TOGGLE
// ======================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
}

// ======================================
// 5️⃣ INTERACTIVE QUIZ
// ======================================
let answered = false;

function selectAnswer(choice) {
  if (answered) return;
  answered = true;
  
  const feedback = document.getElementById('quizFeedback');
  const emoji = document.getElementById('feedbackEmoji');
  const text = document.getElementById('feedbackText');
  const buttons = document.querySelectorAll('.quiz-option');
  
  // Disable all buttons
  buttons.forEach(btn => btn.disabled = true);
  
  if (choice === 1) {
    buttons[1].classList.add('correct');
    emoji.textContent = '🎉';
    text.textContent = 'Absolutely right! Silk & Wool love cold water — hot water will shrink them! 💡';
    feedback.style.background = '#edf7f0';
  } else {
    buttons[choice].classList.add('wrong');
    buttons[1].classList.add('correct');
    emoji.textContent = '💡';
    text.textContent = 'Not quite! The answer is B — Silk & Wool. Always wash them in cold water to keep them safe! ✨';
    feedback.style.background = '#fff8e8';
  }
  
  feedback.classList.add('show');
}

function resetQuiz() {
  answered = false;
  document.getElementById('quizFeedback').classList.remove('show');
  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.disabled = false;
    btn.classList.remove('correct', 'wrong');
  });
}