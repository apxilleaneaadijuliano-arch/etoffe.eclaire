// ==========================================
// Étoffe Éclairé — JavaScript
// ==========================================

// === 1. SMOOTH SCROLLING FOR NAVIGATION ===
document.querySelectorAll('nav a').forEach(link => {
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

// === 2. ACTIVE NAVIGATION HIGHLIGHT ===
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 150) {
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

// === 3. FADE-IN ANIMATION ON SCROLL ===
const fadeElements = document.querySelectorAll('.fabric-card, .care-box');

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

fadeElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  fadeObserver.observe(el);
});

// === 4. HERO BUTTON ANIMATION ===
const heroBtn = document.querySelector('.btn');
if (heroBtn) {
  heroBtn.addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = 'translateY(-2px)';
    }, 150);
  });
}

// === 5. CONSOLE GREETING ===
console.log(`
╔══════════════════════════════════════╗
║  Étoffe Éclairé — Enlightened Fabric  ║
║  Thank you for visiting! ✨           ║
╚══════════════════════════════════════╝
`);