const nGames = 3;

function rockPaperScissors() {
  var totalScore = 0;
  var lastRoundWinner, lastRoundHumanMove = '';
  alertWelcome();
  for (let i = 0; i < nGames; i++) {
    if (i === 0) {
      // 1st time - get the random AIMove()
      console.log(`this is first round i = ${i}`);
      var aiMove = getAIMove();
    } else {
      // 2nd, 3rd times - get strategy
      console.log(`I am inside of second | third round else block i = ${i}`);
      console.log(`last round winner: ${lastRoundWinner} and last round human move: ${lastRoundHumanMove}`);
      var aiMove = getAiMoveWinningStrategy(lastRoundWinner, lastRoundHumanMove);
    }
    var humanMove = getHumanMove();
    // store humanMove for the next round help for aiMove
    lastRoundHumanMove = humanMove;
    // 2. Who beat whom?
    var winner = getWinner(aiMove, humanMove);
    lastRoundWinner = winner;
    alert(`
    AI move was ${aiMove}
    Human move was ${humanMove}
    Winner is ${winner}
    `);
    totalScore = updateScore(winner, totalScore);
  }
  alert(`Total Score: ${totalScore}`);
}

function getAiMoveWinningStrategy(lastRoundWinner, lastRoundHumanMove) {
  /**
   *Best way to win at rock-paper-scissors:
    - WON: If you win, don't keep playing the same thing, but instead switch
      to the thing that would beat the thing that you just played.
      -- simply if you won, play the hand your losing opponent just played.

    - LOST: If you lose, switch to the thing that beats the hand that your opponent just played.
  */

  // ******** AI WON ************
  if (lastRoundWinner === 'AI') {
    console.log(`I am inside of winner AI if block since ${lastRoundWinner} was winner!`)
    // if you won, play the hand your losing opponent just played
    return lastRoundHumanMove;
  }

  // ******** AI LOST ************
  if (lastRoundWinner === 'Human') {
    console.log(`I am inside of Lost AI if block since ${lastRoundWinner} was winner!`)
    // switch to the thing that beats the hand that your opponent just played.
    if (lastRoundHumanMove === 'rock') {
      return 'paper';
    }
    if (lastRoundHumanMove === 'paper') {
      return 'scissors';
    }
    return 'rock';
  }

  if (lastRoundWinner === 'Tie') {
    return getAIMove();
  }
}

function getAIMove() {
  // random 0, 1, or 2
  var randomInt = Math.floor(Math.random() * 3)
  if (randomInt === 0) {
    return 'scissors';
  }
  if (randomInt === 1) {
    return 'paper';
  }
  return 'rock';
}

function updateScore(winner, totalScore) {
  /**
   * return totalScore for human
   * there are 3 paths:
   * 1. if current winner is Human increment
   * 2. if current winner is AI decrement
   * 3. if tie then do nothing
   */
  if (winner === 'Human') {
    totalScore++;
  }
  // bummer ai wins!! reduce -1!
  if (winner === 'AI') {
    totalScore--;
  }
  if (winner === 'Tie') {
    totalScore += 0;
  }
  return totalScore;
}

function getHumanMove() {
  var getHumanMove = prompt(`
    What do you play?
    (rock | paper | scissors)
  `);
  getHumanMove = getHumanMove.toLowerCase();
  return getHumanMove;
}


function getWinner(aiMove, humanMove) {
  /**
   * return either 'AI' or 'Human' or 'Tie'
   * depending on who won!
   */
  if (aiMove === humanMove) {
    return 'Tie';
  }
  if (aiMove === 'rock') {
    // think about what 2 humanMoves: paper, scissors
    if (humanMove === 'paper') {
      return 'Human';
    }
    // last opt is scissors
    return 'AI';
  }
  if (aiMove === 'scissors') {
    // 2 options for humanMove rock, paper
    if (humanMove === 'rock') {
      return 'Human';
    }
    // last opt is paper
    return 'AI';
  }
  if (aiMove === 'paper') {
    // 2 options for humanMove rock, scissors
    if (humanMove === 'rock') {
      return 'AI';
    }
    // last opt is scissors
    return 'Human';
  }
}

function alertWelcome() {
  alert(`Welcome to Rock 🪨 Paper 🖐 Scissors ✌!
  ----------------------------------------------
  You will play ${nGames} games against the AI.
  Rock beats scissors.
  Scissors beats paper.
  Paper beats rock
  ----------------------------------------------
`);
}

rockPaperScissors();