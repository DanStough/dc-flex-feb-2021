// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'
function rockPaperScissors (player1Move, player2Move) {
  let winner = getWinner(player1Move, player2Move);
  return winner;
}

function getWinner(player1Move, player2Move) {
  /**
   * return either 'player 1' or 'player 2' or 'tie'
   * depending on who won!
   */
  if (player1Move === player2Move) {
    return 'draw';
  }
  if (player1Move === 'rock') {
    // think about what 2 player2Moves: paper, scissors
    if (player2Move === 'paper') {
      return 'player 2';
    }
    // last opt is scissors
    return 'player 1';
  }
  if (player1Move === 'scissors') {
    // 2 options for player2 rock, paper
    if (player2Move === 'rock') {
      return 'player 2';
    }
    // last opt is paper
    return 'player 1';
  }
  if (player1Move === 'paper') {
    // 2 options for player2 rock, scissors
    if (player2Move === 'rock') {
      return 'player 1';
    }
    // last opt is scissors
    return 'player 2';
  }

}