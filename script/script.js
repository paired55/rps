// Algorithm for Rock, Paper, Scissors
//
// Get user input and store it in a variable
// Make sure to turn the user's input into case insensitive form
// Make sure the user enters either Rock, Paper or Scissors, otherwise display an error and ask for input again
// Make the computer randomly choose either Rock, Paper or Scissors and store it in a variable
// Compare the two variables and display the winner
// Increment the score for either players and restart the game

/*
// Function that will get the player's selection at the start of every round
function getPlayerSelection() {
	// Get user input and store it in a variable
	let playerSelection = prompt("Rock, Paper or Scissors?");

	// Make sure to turn the user's input into case insensitive form
	playerSelection = playerSelection.toLowerCase();

	// Make sure the user enters either Rock, Paper or Scissors, otherwise display an error
	if (
		playerSelection == "rock" ||
		playerSelection == "paper" ||
		playerSelection == "scissors"
	) {
		return playerSelection;
	} else {
		console.log("Error! Please enter either Rock, Paper or Scissors!");
	}
}

// Function that will generate a random number between 1, 2 and 3
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

// Game logic, self explanitory
function playGame() {
	let computerScore = 0;
	let playerScore = 0;
	let keepGoing = true;

	while (keepGoing) {
		let player = getPlayerSelection();
		let computer = getComputerChoice();

		if (player == "rock" && computer == "scissors") {
			console.log("Player wins!");
			playerScore++;
			console.log("Player Score is: " + playerScore);
			console.log("Computer Score is: " + computerScore);
			if (playerScore == 3) {
				keepGoing = false;
				console.log("Player won the game! First to three!");
			} else if (computerScore == 3) {
				keepGoing = false;
				console.log("Computer won the game! First to three!");
			}
		} else if (player == "rock" && computer == "paper") {
			console.log("Computer wins!");
			computerScore++;
			console.log("Player Score is: " + playerScore);
			console.log("Computer Score is: " + computerScore);
			if (playerScore == 3) {
				keepGoing = false;
				console.log("Player won the game! First to three!");
			} else if (computerScore == 3) {
				keepGoing = false;
				console.log("Computer won the game! First to three!");
			}
		} else if (player == "rock" && computer == "rock") {
			console.log("Tie!");
			console.log("Player Score is: " + playerScore);
			console.log("Computer Score is: " + computerScore);
			if (playerScore == 3) {
				keepGoing = false;
				console.log("Player won the game! First to three!");
			} else if (computerScore == 3) {
				keepGoing = false;
				console.log("Computer won the game! First to three!");
			}
		} else if (player == "paper" && computer == "scissors") {
			console.log("Computer wins!");
			computerScore++;
			console.log("Player Score is: " + playerScore);
			console.log("Computer Score is: " + computerScore);
			if (playerScore == 3) {
				keepGoing = false;
				console.log("Player won the game! First to three!");
			} else if (computerScore == 3) {
				keepGoing = false;
				console.log("Computer won the game! First to three!");
			}
		} else if (player == "paper" && computer == "rock") {
			console.log("Player wins!");
			playerScore++;
			console.log("Player Score is: " + playerScore);
			console.log("Computer Score is: " + computerScore);
			if (playerScore == 3) {
				keepGoing = false;
				console.log("Player won the game! First to three!");
			} else if (computerScore == 3) {
				keepGoing = false;
				console.log("Computer won the game! First to three!");
			}
		} else if (player == "paper" && computer == "paper") {
			console.log("Tie");
			console.log("Player Score is: " + playerScore);
			console.log("Computer Score is: " + computerScore);
			if (playerScore == 3) {
				keepGoing = false;
				console.log("Player won the game! First to three!");
			} else if (computerScore == 3) {
				keepGoing = false;
				console.log("Computer won the game! First to three!");
			}
		} else if (player == "scissors" && computer == "paper") {
			console.log("Player wins!");
			playerScore++;
			console.log("Player Score is: " + playerScore);
			console.log("Computer Score is: " + computerScore);
			if (playerScore == 3) {
				keepGoing = false;
				console.log("Player won the game! First to three!");
			} else if (computerScore == 3) {
				keepGoing = false;
				console.log("Computer won the game! First to three!");
			}
		} else if (player == "scissors" && computer == "rock") {
			console.log("Computer wins!");
			computerScore++;
			console.log("Player Score is: " + playerScore);
			console.log("Computer Score is: " + computerScore);
			if (playerScore == 3) {
				keepGoing = false;
				console.log("Player won the game! First to three!");
			} else if (computerScore == 3) {
				keepGoing = false;
				console.log("Computer won the game! First to three!");
			}
		} else if (player == "scissors" && computer == "scissors") {
			console.log("Tie");
			console.log("Player Score is: " + playerScore);
			console.log("Computer Score is: " + computerScore);
			if (playerScore == 3) {
				keepGoing = false;
				console.log("Player won the game! First to three!");
			} else if (computerScore == 3) {
				keepGoing = false;
				console.log("Computer won the game! First to three!");
			}
		}
	}
}

// The start button, lol
playGame();
