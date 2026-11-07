// ==========================================
// ÉTOFFE ÉCLAIRÉ — ELEGANT JAVASCRIPT
// Smooth • Chic • Refined
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

// === 2. ACTIVE NAVIGATION HIGHLIGHT ON SCROLL ===
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 200) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});

// === 3. ELEGANT FADE-IN ANIMATION ON SCROLL ===
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -30px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fabric-card, .care-card').forEach(el => {
  fadeObserver.observe(el);
});

// === 4. LUXURY SCROLL PROGRESS INDICATOR ===
const progressBar = document.createElement('div');
progressBar.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #E8D08C, #C8A951, #B8922F);
  z-index: 9999;
  width: 0%;
  transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + '%';
});

// === 5. ELEGANT WELCOME MESSAGE ===
console.log(`
╔══════════════════════════════════════════════════╗
║     ✨  ÉTOFFE ÉCLAIRÉ — Enlightened Fabric  ✨     ║
║                                                    ║
║     Where elegance meets understanding            ║
║     Thank you for visiting!                       ║
╚══════════════════════════════════════════════════╝
`);