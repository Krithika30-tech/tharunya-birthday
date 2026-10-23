/*
  BIRTHDAY SCRAPBOOK CUSTOMIZATION
  1) Set friendName below.
  2) Change the roastLines and quizQuestions to your inside jokes.
  3) Add photos to the memory wall by following README.md.
*/
const friendName = "THARUNYA"; // Change this if you want to use a nickname.

const roastLines = [
  "You have two brain cells and both are fighting for Wi-Fi.",
  "Your screen time report needs a therapist and a witness.",
  "You bring main-character energy to a side quest.",
  "You are proof that chaos can, in fact, wear shoes.",
  "Your talent for being late deserves its own documentary.",
  "You are 10% common sense and 90% 'WAIT, LISTEN'.",
  "You are the human version of 37 browser tabs playing audio.",
  "You are a walking red flag, but unfortunately my favorite color is red."
];

const quizQuestions = [
  {
    question: "What is our friendship's official operating system?",
    answers: ["ChaosOS 3000", "Professional adults", "Silent mode forever", "A spreadsheet"],
    correct: 0,
    note: "Correct. It crashes daily, but somehow we keep going."
  },
  {
    question: "If we say 'we'll behave today', what happens?",
    answers: ["We behave perfectly", "Instant historical incident", "We take a nap", "We file paperwork"],
    correct: 1,
    note: "Exactly. The promise lasts about six minutes."
  },
  {
    question: "What is the correct response to 'I have tea'?",
    answers: ["Please email the details", "I am busy", "SIT. START FROM THE BEGINNING.", "Is it green tea?"],
    correct: 2,
    note: "A true scholar of gossip. Your degree is in yapology."
  },
  {
    question: "What is our biggest shared talent?",
    answers: ["Being normal", "Turning nothing into an entire episode", "Saving money", "Going to bed early"],
    correct: 1,
    note: "We can make a 12-season series out of one weird look."
  },
  {
    question: "What is the most important friendship rule?",
    answers: ["Never share snacks", "No embarrassing photos", "Roast each other, show up for each other", "Only communicate by fax"],
    correct: 2,
    note: "Roasting is the seasoning. Showing up is the actual meal. Aww. Disgusting."
  }
];

const $ = (selector) => document.querySelector(selector);
const heroName = $("#heroName");
if (heroName) heroName.textContent = friendName;
document.querySelectorAll(".friend-name").forEach((el) => el.textContent = friendName);
document.title = `HAPPY BIRTHDAY, ${friendName}!`;

let roastIndex = -1;
$("#roastBtn").addEventListener("click", () => {
  roastIndex = (roastIndex + 1) % roastLines.length;
  $("#roastOutput").textContent = roastLines[roastIndex];
  popConfetti(14);
});

let currentQuestion = 0;
let score = 0;
let answered = false;
const questionText = $("#questionText");
const answerOptions = $("#answerOptions");
const quizProgress = $("#quizProgress");
const progressFill = $("#progressFill");
const quizFeedback = $("#quizFeedback");
const nextQuestion = $("#nextQuestion");
const quizResult = $("#quizResult");

function renderQuestion() {
  answered = false;
  const item = quizQuestions[currentQuestion];
  quizProgress.textContent = `QUESTION ${currentQuestion + 1} / ${quizQuestions.length}`;
  progressFill.style.width = `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;
  questionText.textContent = item.question;
  quizFeedback.textContent = "";
  answerOptions.replaceChildren();
  nextQuestion.disabled = true;
  nextQuestion.textContent = currentQuestion === quizQuestions.length - 1 ? "See my score →" : "Next question →";
  item.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;
    button.addEventListener("click", () => chooseAnswer(index));
    answerOptions.appendChild(button);
  });
  quizResult.hidden = true;
}
function chooseAnswer(index) {
  if (answered) return;
  answered = true;
  const item = quizQuestions[currentQuestion];
  const buttons = [...answerOptions.querySelectorAll("button")];
  buttons.forEach((button, i) => {
    button.disabled = true;
    if (i === item.correct) button.classList.add("correct");
    else if (i === index) button.classList.add("wrong");
  });
  if (index === item.correct) {
    score++;
    quizFeedback.textContent = `✨ Correct! ${item.note}`;
  } else {
    quizFeedback.textContent = `💀 Not quite. ${item.note}`;
  }
  nextQuestion.disabled = false;
}
nextQuestion.addEventListener("click", () => {
  if (!answered) return;
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    renderQuestion();
    return;
  }
  questionText.textContent = "THE OFFICIAL RESULTS ARE IN.";
  answerOptions.replaceChildren();
  quizFeedback.textContent = "";
  nextQuestion.disabled = true;
  quizResult.hidden = false;
  const percent = Math.round((score / quizQuestions.length) * 100);
  let verdict = percent === 100 ? "Friendship soulmates. Concerning, honestly." :
    percent >= 60 ? "You know the lore. Touch grass together sometime." :
    "Who are you and what have you done with my bestie?";
  quizResult.textContent = `${score}/${quizQuestions.length} (${percent}%) — ${verdict}`;
  popConfetti(38);
});
$("#restartQuiz").addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  renderQuestion();
});
renderQuestion();

const letterPaper = $(".letter-paper");
$("#letterToggle").addEventListener("click", () => {
  const folded = letterPaper.classList.toggle("folded");
  $("#letterToggle").textContent = folded ? "Unfold the letter ↓" : "Fold the letter ↑";
  $("#letterToggle").setAttribute("aria-expanded", String(!folded));
});

$("#partyBtn").addEventListener("click", () => {
  const active = document.body.classList.toggle("party-mode");
  $("#partyBtn").textContent = active ? "🎉 Party mode: ON" : "🎉 Party mode: OFF";
  $("#partyBtn").setAttribute("aria-pressed", String(active));
  if (active) popConfetti(55);
});
$("#confettiBtn").addEventListener("click", () => popConfetti(65));
$("#finalBtn").addEventListener("click", () => {
  $("#finalMessage").textContent = `Happy birthday, ${friendName}! Your gift is that I will continue being iconic in your life. You're welcome. 🎂`;
  popConfetti(80);
});

function popConfetti(count = 40) {
  const layer = $("#confettiLayer");
  const colors = ["#f36c55", "#ffc6c8", "#f5c94f", "#b7d9e8", "#b6cba9", "#25231f"];
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    piece.style.animationDuration = `${1.6 + Math.random() * 1.8}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    layer.appendChild(piece);
    window.setTimeout(() => piece.remove(), 4200);
  }
}
