// ==========================================
// Étoffe Éclairé — JavaScript
// ==========================================

// === 1. SCROLL PROGRESS BAR ===
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  const progressBar = document.getElementById('progressBar');
  if (progressBar) {
    progressBar.style.width = progress + '%';
  }
});

// === 2. FABRIC CARD TOGGLE ===
function toggleFabric(card) {
  // Close all other cards
  const allCards = document.querySelectorAll('.fabric-card');
  allCards.forEach(c => {
    if (c !== card) {
      c.classList.remove('open');
    }
  });
  // Toggle clicked card
  card.classList.toggle('open');
}

// === 3. QUIZ FUNCTIONALITY ===
const questions = [
  {
    question: "Which fabric is natural, highly breathable, and gets softer with every wash?",
    answers: ["Silk", "Cotton", "Polyester"],
    correct: 1,
    explanation: "✅ Correct! Cotton comes from plants — it's breathable, comfortable, and a wardrobe staple."
  },
  {
    question: "This fabric is luxurious, smooth, and should be hand-washed or dry-cleaned only:",
    answers: ["Linen", "Silk", "Rayon"],
    correct: 1,
    explanation: "✅ Nice job! Silk is delicate — always treat it gently and never wring it out."
  },
  {
    question: "Which fabric is synthetic, wrinkle-resistant, and great for travel?",
    answers: ["Polyester", "Linen", "Wool"],
    correct: 0,
    explanation: "✅ That's right! Polyester is durable, holds its shape, and dries quickly."
  },
  {
    question: "Linen is made from flax. What's its most famous quality?",
    answers: ["It's very warm", "It keeps you cool in heat", "It's waterproof"],
    correct: 1,
    explanation: "✅ Perfect! Linen is exceptionally breathable — it's the ultimate summer fabric."
  },
  {
    question: "What is the #1 rule before washing any garment?",
    answers: ["Check the care label", "Wash in hot water", "Wash it immediately after buying"],
    correct: 0,
    explanation: "✅ Exactly! The care label tells you exactly how to treat that specific item — always read it first."
  },
  {
    question: "Warm, naturally temperature-regulating, great for winter wear:",
    answers: ["Cotton", "Wool", "Rayon"],
    correct: 1,
    explanation: "✅ Correct! Wool keeps you warm even when damp — truly remarkable natural fiber."
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

// DOM Elements
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score-display');
const nextBtn = document.getElementById('next-button');
const restartBtn = document.getElementById('restart-button');

// Initialize Quiz
function showQuestion() {
  answered = false;
  feedbackEl.textContent = '';
  feedbackEl.className = '';
  nextBtn.style.display = 'none';
  restartBtn.style.display = 'none';
  
  const q = questions[currentQuestion];
  questionEl.innerHTML = `<strong>Question ${currentQuestion + 1} of ${questions.length}:</strong> ${q.question}`;
  
  answersEl.innerHTML = '';
  q.answers.forEach((answer, index) => {
    const btn = document.createElement('button');
    btn.className = 'answer-button';
    btn.textContent = answer;
    btn.addEventListener('click', () => selectAnswer(index, btn));
    answersEl.appendChild(btn);
  });
  
  updateScoreDisplay();
}

// Handle Answer Selection
function selectAnswer(selectedIndex, selectedBtn) {
  if (answered) return;
  answered = true;
  
  const q = questions[currentQuestion];
  const allButtons = document.querySelectorAll('.answer-button');
  
  // Disable all buttons
  allButtons.forEach(btn => btn.disabled = true);
  
  if (selectedIndex === q.correct) {
    score++;
    selectedBtn.classList.add('correct');
    feedbackEl.textContent = q.explanation;
    feedbackEl.className = 'correct';
  } else {
    selectedBtn.classList.add('wrong');
    allButtons[q.correct].classList.add('correct');
    feedbackEl.textContent = `❌ Not quite — ${q.explanation}`;
    feedbackEl.className = 'wrong';
  }
  
  updateScoreDisplay();
  
  // Show Next or Restart button
  if (currentQuestion < questions.length - 1) {
    nextBtn.textContent = 'Next Question →';
    nextBtn.style.display = 'inline-block';
  } else {
    nextBtn.style.display = 'none';
    restartBtn.style.display = 'inline-block';
    setTimeout(() => {
      feedbackEl.textContent = `🎉 Quiz Complete! You scored ${score} out of ${questions.length} — ${getScoreMessage()}`;
      feedbackEl.className = score >= questions.length * 0.7 ? 'correct' : 'wrong';
    }, 600);
  }
}

// Update Score Display
function updateScoreDisplay() {
  scoreEl.textContent = `Score: ${score}/${questions.length}`;
}

// Get Final Score Message
function getScoreMessage() {
  const percent = score / questions.length;
  if (percent === 1) return "Perfect! You're a fabric expert!";
  if (percent >= 0.7) return "Great job — you know your fabrics well!";
  return "Good start — review the cards and try again!";
}

// Next Question
nextBtn.addEventListener('click', () => {
  currentQuestion++;
  showQuestion();
});

// Restart Quiz
restartBtn.addEventListener('click', () => {
  currentQuestion = 0;
  score = 0;
  showQuestion();
});

// === 4. SMOOTH SCROLL FOR NAV LINKS ===
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Start the quiz when page loads
document.addEventListener('DOMContentLoaded', showQuestion);