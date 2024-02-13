function generateNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function that will randomly select rock, paper or scissors based on the random number generated
function getComputerChoice() {
	let choice = generateNumber(1, 3);

	if (choice == 1) {
		return "rock";
	} else if (choice == 2) {
		return "paper";
	} else if (choice == 3) {
		return "scissors";
	}
}

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
	playGame("rock");
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
	playGame("paper");
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
	playGame("scissors");
});

const round = document.querySelector("#round");
const pScore = document.querySelector("#pScore");
const cScore = document.querySelector("#cScore");
const whoWins = document.querySelector("#whoWins");

let computerScore = 0;
let playerScore = 0;

// Game logic, self explanitory
function playGame(playerSelection) {
	let player = playerSelection;
	let computer = getComputerChoice();

	if (player == "rock" && computer == "scissors") {
		playerScore++;
		round.innerText = `You won this round!`;
		pScore.innerText = `Player score is ${playerScore} `;
		cScore.innerText = `Computer score is ${computerScore}`;
		if (playerScore == 5) {
			whoWins.innerText = `Player won the game! First to five! Resetting game`;
			computerScore = 0;
			playerScore = 0;
		} else if (computerScore == 5) {
			whoWins.innerText = `Computer won the game! First to five! Resetting game`;
			computerScore = 0;
			playerScore = 0;
		}
	} else if (player == "rock" && computer == "paper") {
		computerScore++;
		round.innerText = `Computer won this round!`;
		pScore.innerText = `Player score is ${playerScore} `;
		cScore.innerText = `Computer score is ${computerScore}`;
		if (playerScore == 5) {
			whoWins.innerText = `Player won the game! First to five! Resetting game`;
			computerScore = 0;
			playerScore = 0;
		} else if (computerScore == 5) {
			whoWins.innerText = `Computer won the game! First to five! Resetting game`;
			computerScore = 0;
			playerScore = 0;
		}
	} else if (player == "rock" && computer == "rock") {
		round.innerText = `Tie!`;
		pScore.innerText = `Player score is ${playerScore} `;
		cScore.innerText = `Computer score is ${computerScore}`;
		if (playerScore == 5) {
			whoWins.innerText = `Player won the game! First to five! Resetting game`;
			computerScore = 0;
			playerScore = 0;
		} else if (computerScore == 5) {
			whoWins.innerText = `Computer won the game! First to five! Resetting game`;
			computerScore = 0;
			playerScore = 0;
		}
	} else if (player == "paper" && computer == "scissors") {
		computerScore++;
		round.innerText = `Computer won this round!`;
		pScore.innerText = `Player score is ${playerScore} `;
		cScore.innerText = `Computer score is ${computerScore}`;
		if (playerScore == 5) {
			whoWins.innerText = `Player won the game! First to five! Resetting game`;
			computerScore = 0;
			playerScore = 0;
		} else if (computerScore == 5) {
			whoWins.innerText = `Computer won the game! First to five! Resetting game`;
			computerScore = 0;
			playerScore = 0;
		}
	} else if (player == "paper" && computer == "rock") {
		playerScore++;
		round.innerText = `You won this round!`;
		pScore.innerText = `Player score is ${playerScore} `;
		cScore.innerText = `Computer score is ${computerScore}`;
		if (playerScore == 5) {
			whoWins.innerText = `Player won the game! First to five! Resetting game`;
			computerScore = 0;
			playerScore = 0;
		} else if (computerScore == 5) {
			whoWins.innerText = `Computer won the game! First to five! Resetting game`;
			computerScore = 0;
			playerScore = 0;
		}
	} else if (player == "paper" && computer == "paper") {
		round.innerText = `Tie!`;
		pScore.innerText = `Player score is ${playerScore} `;
		cScore.innerText = `Computer score is ${computerScore}`;
		if (playerScore == 5) {
			whoWins.innerText = `Player won the game! First to five! Resetting game`;
			computerScore = 0;
			playerScore = 0;
		} else if (computerScore == 5) {
			whoWins.innerText = `Computer won the game! First to five! Resetting game`;
			computerScore = 0;
			playerScore = 0;
		}
	} else if (player == "scissors" && computer == "paper") {
		playerScore++;
		round.innerText = `You won this round!`;
		pScore.innerText = `Player score is ${playerScore} `;
		cScore.innerText = `Computer score is ${computerScore}`;
		if (playerScore == 5) {
			whoWins.innerText = `Player won the game! First to five! Resetting game`;
			computerScore = 0;
			playerScore = 0;
		} else if (computerScore == 5) {
			whoWins.innerText = `Computer won the game! First to five! Resetting game`;
			computerScore = 0;
			playerScore = 0;
		}
	} else if (player == "scissors" && computer == "rock") {
		computerScore++;
		round.innerText = `Computer won this round!`;
		pScore.innerText = `Player score is ${playerScore} `;
		cScore.innerText = `Computer score is ${computerScore}`;
		if (playerScore == 5) {
			whoWins.innerText = `Player won the game! First to five! Resetting game`;
			computerScore = 0;
			playerScore = 0;
		} else if (computerScore == 5) {
			whoWins.innerText = `Computer won the game! First to five! Resetting game`;
			computerScore = 0;
			playerScore = 0;
		}
	} else if (player == "scissors" && computer == "scissors") {
		round.innerText = `Tie!`;
		pScore.innerText = `Player score is ${playerScore} `;
		cScore.innerText = `Computer score is ${computerScore}`;
		if (playerScore == 5) {
			whoWins.innerText = `Player won the game! First to five! Resetting game`;
			computerScore = 0;
			playerScore = 0;
		} else if (computerScore == 5) {
			whoWins.innerText = `Computer won the game! First to five! Resetting game`;
			computerScore = 0;
			playerScore = 0;
		}
	}
}
