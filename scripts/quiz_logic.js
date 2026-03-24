let currentQuestion = 0;

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

	const letters = ["A", "B", "C", "D"];

	let html = `
	<h3>Frage ${index + 1} von ${questions.length}</h3>
	<p>${q.question}</p>
	`;

	q.options.forEach((opt, i) => {
	html += `
	<label>
	<input type="radio" name="q${index}" value="${i}">
	<strong>${letters[i]}:</strong> ${opt}
	</label><br>
	`;
	});

	box.innerHTML = html;
}



document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".step_result").classList.add(".hidden"); 
	showQuestion(0)
});