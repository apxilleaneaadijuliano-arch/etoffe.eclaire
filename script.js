// ==========================================
// 4 JAVASCRIPT INTERACTIVE FEATURES
// ==========================================

// === 1. SCROLL ANIMATIONS — Sections fade in as you scroll ===
const revealSections = document.querySelectorAll('.reveal-section');

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

revealSections.forEach(section => {
  scrollObserver.observe(section);
});

// === 2. EXPANDING CARDS — Click to see fabric details ===
function toggleCard(card) {
  // Close any other open card (optional — keeps it clean)
  const allCards = document.querySelectorAll('.expandable-card');
  allCards.forEach(c => {
    if (c !== card) c.classList.remove('expanded');
  });
  // Toggle current card
  card.classList.toggle('expanded');
}

// === 3. FAQ COLLAPSE SECTIONS — Click to open/close answers ===
function toggleFAQ(button) {
  const faqItem = button.parentElement;
  // Close other FAQs
  const allFAQs = document.querySelectorAll('.faq-item');
  allFAQs.forEach(item => {
    if (item !== faqItem) item.classList.remove('expanded');
  });
  // Toggle current FAQ
  faqItem.classList.toggle('expanded');
}

// === 4. ACTIVE NAVIGATION HIGHLIGHT — Shows which section you're on ===
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  // Navbar style change on scroll
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Update active link
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
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

// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

console.log('✨ Étoffe Éclairé — Thread of Knowledge, Style for Life ✨');