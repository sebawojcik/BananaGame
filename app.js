document.addEventListener("DOMContentLoaded", function () {
    startNewGame();
});

function startNewGame() {
    // Reset UI
    document.getElementById("resultLabel").textContent = "";
    document.getElementById("answerInput").value = "";

    // Disable the "Start New Game" button
    document.getElementById("startNewGameButton").disabled = true;

    // Make a request to the API
    fetch("https://marcconrad.com/uob/banana/api.php")
        .then(response => response.json())
        .then(data => {
            // Update the question image source
            document.getElementById("questionImage").src = data.question;

            // Save the correct answer for later comparison
            window.correctAnswer = data.solution;
        })
        .catch(error => console.error("Error fetching data:", error));
}

function checkAnswer() {
    // Get user's answer
    const userAnswer = parseInt(document.getElementById("answerInput").value);

    // Check if the answer is correct
    if (userAnswer === window.correctAnswer) {
        document.getElementById("resultLabel").textContent = "Correct!";
        // Enable the "Start New Game" button upon correct answer
        document.getElementById("startNewGameButton").disabled = false;
    } else {
        document.getElementById("resultLabel").textContent = "Wrong. Try again.";
    }
}

