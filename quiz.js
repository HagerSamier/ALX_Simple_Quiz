function chekerAnswer() {
    const correctAnswer = '4';
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = selectedAnswer.value;
    if(correctAnswer == userAnswer) {
        document.getElementById('feedback').textContent = 'Correct! Well Done';
    } else {
        document.getElementById('feedback').textContent = 'Wrong! Try Again';
    }
}

let subButm = document.getElementById('submit-answer').addEventListener('click', chekerAnswer);