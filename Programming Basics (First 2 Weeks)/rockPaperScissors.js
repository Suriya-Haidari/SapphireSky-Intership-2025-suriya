// Rock, Paper, Scissors Game
// The user inputs "rock", "paper", or "scissors".
// The computer randomly selects one.
// Use switch to determine the winner.


function rockPaperScissorsGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result;

    // Display computer's choice
    console.log("Computer's choice: " + computerChoice);

    // Determine the winner using switch statement
    switch (true) {
        case userChoice === computerChoice:
            result = "It's a tie!";
            break;
        case userChoice === "rock" && computerChoice === "scissors":
        case userChoice === "scissors" && computerChoice === "paper":
        case userChoice === "paper" && computerChoice === "rock":
            result = "You win!";
            break;
        case userChoice === "scissors" && computerChoice === "rock":
        case userChoice === "paper" && computerChoice === "scissors":
        case userChoice === "rock" && computerChoice === "paper":
            result = "Computer wins!";
            break;
        default:
            result = "Invalid input. Please choose 'rock', 'paper', or 'scissors'.";
            break;
    }

    return result;
}

console.log(rockPaperScissorsGame("rock")); 
console.log(rockPaperScissorsGame("paper"));
