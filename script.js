// ==========================================
// Étoffe Éclairé — JavaScript
// Elegant & Chic Functionality
// ==========================================

// === 1. SMOOTH SCROLLING FOR NAVIGATION ===
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// === 2. FABRIC CARD TOGGLE — Click to Expand ===
function toggleFabric(card) {
  // Close all other cards
  const allCards = document.querySelectorAll('.fabric-card');
  allCards.forEach(c => {
    if (c !== card) {
      c.classList.remove('open');
    }
  });
  // Toggle the clicked card
  card.classList.toggle('open');
}

// === 3. ACTIVE NAVIGATION HIGHLIGHT ON SCROLL ===
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// === 4. FADE-IN ANIMATION ON SCROLL ===
const fadeElements = document.querySelectorAll('.fabric-card, .care-card');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  fadeObserver.observe(el);
});

// === 5. WELCOME MESSAGE ===
console.log(`
✨ Étoffe Éclairé — Enlightened Fabric ✨
Where elegance meets knowledge.
Welcome, and thank you for visiting!
`);