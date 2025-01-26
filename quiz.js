function checkAnswer() {
    const correctAnswer = "4";
    let selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = selectedAnswer.value;
    if ( userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well Done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
    const checkButton = document.getElementById("submit-answer");
    checkButton . addEventListener("click", checkAnswer);
}