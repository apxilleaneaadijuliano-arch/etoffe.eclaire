// === SCROLL PROGRESS BAR ===
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  document.getElementById('scrollProgress').style.width = progress + '%';
});

// === SCROLL REVEAL ANIMATION ===
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal-element');
  const windowHeight = window.innerHeight;
  
  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;
    
    if (elementTop < windowHeight - revealPoint) {
      element.classList.add('revealed');
    }
  });
}

window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);
setTimeout(revealOnScroll, 100);

// === FABRIC CARD TOGGLE ===
function toggleFabCard(card) {
  const allCards = document.querySelectorAll('.fab-card');
  allCards.forEach(c => {
    if (c !== card) c.classList.remove('open');
  });
  card.classList.toggle('open');
}

// === FAQ ACCORDION ===
const faqButtons = document.querySelectorAll('.faq-q');
faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem) item.classList.remove('open');
    });
    
    faqItem.classList.toggle('open');
  });
});

// === MOBILE NAVIGATION ===
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

const navLinks = navMenu.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight - 30;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});