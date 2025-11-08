const questions = [
  {
    question: "Kết quả của typeof null là gì?",
    questions: ["null", "object", "undefined", "boolean"],
    correct: 1,
  },
  {
    question: "Phương thức nào để thêm phần tử vào cuối mảng?",
    questions: ["push()", "pop()", "shift()", "unshift()"],
    correct: 0,
  },
  {
    question: "Từ khoá nào dùng để khai báo biến có thể thay đổi giá trị?",
    questions: ["const", "let", "var", "Cả let và var"],
    correct: 3,
  },
];

let state = {
  currentQuestion: 0,
  score: 0,
  answered: false,
};

const el = {
  startScreen: document.getElementById("start-screen"),
  quizScreen: document.getElementById("quiz-screen"),
  resultScreen: document.getElementById("result-screen"),
  startBtn: document.getElementById("start-btn"),
  questionText: document.getElementById("question-text"),
  questionNumber: document.getElementById("question-number"),
  optionsContainer: document.getElementById("options-container"),
  nextBtn: document.getElementById("next-btn"),
  progressFill: document.getElementById("progress-fill"),
  scoreText: document.getElementById("score-text"),
  totalQuestions: document.getElementById("total-questions"),
  scorePercentage: document.getElementById("score-percentage"),
  resetBtn: document.getElementById("restart-btn"),
};

console.log(el);

function showScreen(screen) {
  el.startScreen.classList.add("hidden");
  el.quizScreen.classList.add("hidden");
  el.resultScreen.classList.add("hidden");

  screen.classList.remove("hidden");
}

function renderOption() {
  const question = questions[state.currentQuestion];
  el.questionText.textContent = question.question;
  el.questionNumber.textContent = `Câu ${state.currentQuestion + 1} / ${
    questions.length
  }`;

  const progress = ((state.currentQuestion + 1) / questions.length) * 100;
  el.progressFill.style.width = `${progress}%`;

  el.optionsContainer.innerHTML = "";

  question.questions.forEach((option, index) => {
    const optionLi = document.createElement("li");
    optionLi.className = "option";
    optionLi.textContent = option;

    if (!state.answered) {
      optionLi.addEventListener("click", () => handleOptionClick(index));
    }
 
    el.optionsContainer.appendChild(optionLi);
  });
}

function renderResult() {
  const percentage = Math.round((state.score / questions.length) * 100);
  el.scoreText.textContent = state.score;
  el.totalQuestions.textContent = questions.length;
  el.scorePercentage.textContent = `${percentage}%`;
}

function handleOptionClick(selectedIndex) {
  if (state.answered) return;

  state.answered = true;
  const question = questions[state.currentQuestion];
  const options = el.optionsContainer.querySelectorAll(".option");
  const isCorrect = selectedIndex === question.correct;

  if (isCorrect) {
    state.score++;
  }

  options.forEach((option, index) => {
    if (index === question.correct) {
      option.classList.add("correct");
    } else if (index === selectedIndex) {
      option.classList.add("incorrect");
    }

    option.classList.add("selected");
  });

  el.nextBtn.classList.remove("hidden");
}

function handleNext() {
  if (state.currentQuestion < questions.length - 1) {
    state.currentQuestion++;
    state.answered = false;

    renderOption();
    el.nextBtn.classList.add("hidden");
  } else {
    showScreen(el.resultScreen);
    renderResult();
  }
}

function startQuiz() {
  state = {
    currentQuestion: 0,
    score: 0,
    answered: false,
  };

  showScreen(el.quizScreen);
  renderOption();
}

el.startBtn.addEventListener("click", startQuiz);
el.nextBtn.addEventListener("click", handleNext);
el.resetBtn.addEventListener("click", startQuiz);
