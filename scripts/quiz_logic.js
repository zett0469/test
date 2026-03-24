let currentQuestion = 0;
let answeredQuestions = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]; 

function prevQuestion(){
	if(currentQuestion > 0){
		currentQuestion -= 1;
		showQuestion(currentQuestion);
	}
}

function nextQuestion(){
	if(currentQuestion < 9){
		currentQuestion += 1;
		showQuestion(currentQuestion);
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
	
	// Zeige das bereits gewählte, wenn was bereits gewählt wurde.
	showFeedback();
}

function sendAnswer(){
	//TO DO:
	//- Antworten nur möglich machen, wenn noch keine gewählt wurde
	//- Richtige Antwort einfärben
	//- Falsche Antwort einfärben
	//- Ergebnisse zeigen wenn alles beantwortet wurde
	const selected = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
	
	if (!selected) {
		return;
	}
	
	const answer = parseInt(selected.value);
	const q = questions[currentQuestion];
	
	answeredQuestions[currentQuestion] = answer
	
	showFeedback();
}

function showFeedback(){
	const feedback_box = document.getElementById("feedback");
	
	if(answeredQuestions[currentQuestion] != -1){
		pickedOption = document.querySelector(`input[name="q${currentQuestion}"][value="${answeredQuestions[currentQuestion]}"]`);
		
		if(pickedOption != null){
			pickedOption.checked = true;
		}
		
		if(answeredQuestions[currentQuestion] == questions[currentQuestion].correct[0]){
			feedback_msg = `Die Antwort ist richtig:<br>`;
		}
		else{
			feedback_msg = `Die Antwort ist falsch:<br>`;
		}
		
		feedback_msg += `${questions[currentQuestion].explanation}`;
		
		feedback_box.innerHTML = feedback_msg;
	}
	else{
		feedback_box.innerHTML = ``;
	}
}

function randomizeQuestions(array){
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));

		// tauschen
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".step_result").classList.add(".hidden"); 
	randomizeQuestions(questions);
	showQuestion(0);
});