function guessingGame() {
    // Generate a random secret number between 0 and 99
    const secretNumber = Math.floor(Math.random() * 100);
    let count = 0;
    let won = false;
  
    return function guess(playerGuess) {
      // Convert the guessed value to a number for comparison
      const guessNumber = Number(playerGuess); 
      count++;

      if(won) return "The game is over, you already won!"

      if (guessNumber === secretNumber) {
        won = true
        return `You win! You found ${secretNumber} in ${count} guesses.`;
      } else if (guessNumber < secretNumber) {
        return `${playerGuess} is too low!`;
      } else {
        return `${playerGuess} is too high!`;
      }
    };
}
  
module.exports = { guessingGame };