function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "Good Job, you got 1 point.";
        result.style.color = 'green';
    } 
    else {
        result.textContent = "Oops! Think again";
        result.style.color = 'red';
    }
 }

