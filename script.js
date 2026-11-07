// === SCROLL PROGRESS BAR ===
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  document.getElementById('progressBar').style.width = progress + '%';
});

// === FABRIC CARD TOGGLE ===
function toggleFabric(card) {
  const allCards = document.querySelectorAll('.fabric-card');
  allCards.forEach(c => { if (c !== card) c.classList.remove('open'); });
  card.classList.toggle('open');
}

// === QUIZ LOGIC ===
const questions = [
  {
    question: "Which fabric is natural, breathable, and great for everyday wear?",
    answers: ["Silk", "Cotton", "Polyester"],
    correct: 