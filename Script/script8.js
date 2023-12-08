let playerName;
let playerWins = 0;
let opponentWins = 0;

function startGame() {
    playerName = document.getElementById('playerName').value;
    if (playerName === "") {
        alert("Будь ласка, введіть ваше ім'я.");
        return;
    }
    document.getElementById('playerName').disabled = true;
    playRound();
}

function playRound() {
    const playerScore = Math.floor(Math.random() * 6) + 1;
    const opponentScore = Math.floor(Math.random() * 6) + 1;

    const roundResult = playerName + ": " + playerScore + " vs. Комп'ютер: " + opponentScore;

    if (playerScore > opponentScore) {
        playerWins++;
        document.getElementById('roundResult').textContent = roundResult + " - Ви виграли!";
    } else if (playerScore < opponentScore) {
        opponentWins++;
        document.getElementById('roundResult').textContent = roundResult + " - Комп'ютер виграв.";
    } else {
        document.getElementById('roundResult').textContent = roundResult + " - Нічия.";
    }

    document.getElementById('playerWins').textContent = playerWins;
    document.getElementById('opponentWins').textContent = opponentWins;

    if (playerWins < 3 && opponentWins < 3) {
        setTimeout(playRound, 1000);
    } else {
        endGame();
    }
}

function endGame() {
    if (playerWins >= 3) {
        alert(playerName + " виграв гру з рахунком " + playerWins + " до " + opponentWins + "!");
    } else {
        alert("Комп'ютер виграв гру з рахунком " + opponentWins + " до " + playerWins + ".");
    }
    location.reload();
}