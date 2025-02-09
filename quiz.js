let subimtAnswer = document.getElementById('submit-answer');
submitAnswer.addEventListener("click", checkAnswer);

function checkAnswer() {
    const correctAnswer = "4";
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = selectedAnswer.value;

    if( userAnswer == correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well Done";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
  
}