let currentQuestion = 0;
let answeredQuestions = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]; 


function prevQuestion(){
	if(currentQuestion > 0){
		currentQuestion -= 1;
		showQuestion(currentQuestion);
	}
}

function nextQuestion(){
	if(allAnswered()){
		max_scroll_val = 10;
	}
	else{
		max_scroll_val = 9;
	}
	
	if(currentQuestion < max_scroll_val){
		currentQuestion += 1;
		if(currentQuestion < 10){
			showQuestion(currentQuestion);
		}
		else{
			showResults();
		}
	}
}

function showQuestion(index){
	const box = document.getElementById("question-box");
	const q = questions[index];
	let feedback_msg = "";

	const letters = ["A. ", "B. ", "C. ", "D. "];

	let html = `
	<h3>Frage ${index + 1} von 10</h3>
	<p>${q.question}</p>
	`;

	q.options.forEach((opt, i) => {
	html += `
	<label>
	<input type="radio" name="q${index}" value="${i}">
	<strong>${letters[i]}</strong>&nbsp; ${opt}
	</label>
	`;
	});

	box.innerHTML = html;

	document.getElementById("feedback").classList.add("hidden");

	// Zeige das bereits gewählte, wenn was bereits gewählt wurde.
	showFeedback();
	updateProgressbar();
	updateButtonText()
}


function sendAnswer(){
	//TO DO:
	//- Ergebnisse zeigen wenn alles beantwortet wurde
	const selected = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
	
	if(currentQuestion == 10){
		location.reload();
	}
	else if(allAnswered()){
		currentQuestion = 10;
		showResults();
	}
	
	if (!selected) {
		return;
	}
	
	if(answeredQuestions[currentQuestion] != -1){
		return;
	}
	
	const answer = parseInt(selected.value);
	const q = questions[currentQuestion];
	
	answeredQuestions[currentQuestion] = answer
	
	showFeedback();
	updateProgressbar();
	updateButtonText()
}


function showFeedback(){
	const feedback_box = document.getElementById("feedback");
	let feedback_msg = "";

	const selectedValue = answeredQuestions[currentQuestion];
	if(selectedValue === -1){
		feedback_box.innerHTML = "";
		return;
	}
	else{
		document.querySelectorAll(`input[name="q${currentQuestion}"]`)
			.forEach(input => input.disabled = true);
	}

	const correctValue = questions[currentQuestion].correct[0];

	const selectedInput = document.querySelector(
		`input[name="q${currentQuestion}"][value="${selectedValue}"]`
	);

	const correctInput = document.querySelector(
		`input[name="q${currentQuestion}"][value="${correctValue}"]`
	);

	const selectedLabel = selectedInput?.parentElement;
	const correctLabel = correctInput?.parentElement;

	// Reset
	document.querySelectorAll(`input[name="q${currentQuestion}"]`).forEach(input => {
		input.parentElement.classList.remove("correct", "wrong", "solution");
	});

	// ⭐ richtige Antwort IMMER markieren
	if(selectedValue === correctValue){
		selectedLabel.classList.add("correct");
		feedback_msg = "Die Antwort ist richtig:<br>";
	} else {
		selectedLabel.classList.add("wrong");
		correctLabel.classList.add("solution");
		feedback_msg = "Die Antwort ist falsch:<br>";
	}

	feedback_msg += questions[currentQuestion].explanation;
	feedback_box.innerHTML = feedback_msg;
	
	document.getElementById("feedback").classList.remove("hidden");
}

function showResults(){
	const box = document.getElementById("question-box");
	var correct_ones = 0;
	
	for(i = 0; i < 10; i++){
		if(answeredQuestions[i] == questions[i].correct[0]){
			correct_ones += 1;
		}
	}
	

	let html = `
	<h3>Ergebnis</h3>
	<p>Du hast ${correct_ones} von 10 Fragen richtig</p>
	`;

	box.innerHTML = html;

	document.getElementById("feedback").classList.add("hidden");

	// Zeige das bereits gewählte, wenn was bereits gewählt wurde.
	showFeedback();
	updateProgressbar();
	updateButtonText();
}

function updateButtonText(){
	if(currentQuestion == 10){
		document.getElementById("submit-btn").innerText = "Neues Quiz erstellen";
	}
	else{
		if(allAnswered()){
			document.getElementById("submit-btn").innerText = "Ergebnisse anzeigen";
		}
	}
}

function updateProgressbar(){
	const steps = document.querySelectorAll(".quiz_progressbar span");

	steps.forEach((step, index) => {

		step.classList.remove("active", "correct-step", "wrong-step");

		if(index === currentQuestion){
			step.classList.add("active");
		}

		if(answeredQuestions[index] !== -1){
			if(answeredQuestions[index] === questions[index].correct[0]){
				step.classList.add("correct-step");
			} else {
				step.classList.add("wrong-step");
			}
		}
	});
}

function randomizeQuestions(array){
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));

		// tauschen
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

function allAnswered(){
	for(i = 0; i < 10; i++){
		if(answeredQuestions[i] == -1){
			return false;
		}
	}
	
	return true;
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".step_result").classList.add(".hidden"); 
	randomizeQuestions(questions);
	showQuestion(0);
	updateProgressbar();
});