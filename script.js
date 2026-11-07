// ==========================================
// ÉTOFFE ÉCLAIRÉ — Elegant & Light Script
// ==========================================

// 1. Smooth Scrolling ✨
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// 2. Active Nav Highlight ✨
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop;
    if (window.pageYOffset >= top - 180) {
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

// 3. Fade-in Cards on Scroll ✨
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fabric-card, .care-card').forEach(card => {
  observer.observe(card);
});

// 4. Golden Scroll Progress Bar ✨
const progress = document.createElement('div');
progress.style.cssText = `
  position: fixed; top: 0; left: 0; height: 2px;
  background: linear-gradient(90deg, #E8D08C, #D4AF37, #B8922F);
  z-index: 9999; width: 0%;
`;
document.body.appendChild(progress);

window.addEventListener('scroll', () => {
  const percent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progress.style.width = percent + '%';
});

// 5. Welcome ✨
console.log('✨ Étoffe Éclairé — Enlightened Fabric ✨');