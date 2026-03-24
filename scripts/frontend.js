const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

prevBtn.addEventListener("click", () => navigateQuestion(-1));
nextBtn.addEventListener("click", () => navigateQuestion(1));

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", submitAnswer);

let currentQuestion = 0;

// Funktion, um die Frage vom Server zu holen
function loadQuestion(index) {
  //TO DO: Frage holen
}

// Frage im HTML darstellen
function showQuestion(qData) {
  const box = document.getElementById("question-box");
  const letters = ["A. ", "B. ", "C. ", "D. "];

  let html = `<h3>Frage ${currentQuestion + 1} von 10</h3>`;
  html += `<p>${qData.question}</p>`;

  qData.options.forEach((opt, i) => {
    html += `
      <label>
        <input type="radio" name="q" value="${i}">
        <strong>${letters[i]}:</strong> ${opt}
      </label><br>
    `;
  });

  box.innerHTML = html;
}

// Antwort absenden
function submitAnswer() {
  //TO DO: Antwort absenden
}

// Frage navigieren (prev/next)
function navigateQuestion(direction) {
  //TO DO: Navigation
}

// Initial
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".step_result").classList.add("hidden");
  loadQuestion(currentQuestion);
});