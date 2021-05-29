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
    console.log(`what is aiMove after the check first round or not: ${aiMove} `);

    var humanMove = getHumanMove();
    // store humanMove for the next round help for aiMove
    lastRoundHumanMove = humanMove;
    // 2. Who beat whom?
    var winner = getWinner(aiMove, humanMove);
    lastRoundWinner = winner;
    totalScore = updateScore(winner, totalScore);
    alert(`
    AI move was ${aiMove}
    Human move was ${humanMove}
    Winner is ${winner}

    current score for human: ${totalScore}
    `);
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
    // WON. play the hand your losing opponent just played
    return lastRoundHumanMove;
  }

  // ******** AI LOST ************
  if (lastRoundWinner === 'Human') {
    // LOST. switch to the hand that beats your opponent's last round's move
    if (lastRoundHumanMove === 'rock') {
      // ai move: what would beat rock?
      return 'paper';
    }
    if (lastRoundHumanMove === 'paper') {
      // ai move: what would beat paper?
      return 'scissors';
    }
    // only thing left scissors. ai move: Rock (rock beats scissors)
    return 'rock';
  }

  // ******** tie, no winner ************
  if (lastRoundWinner === 'Tie') {
    // no strategy, get random move
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
   * returns updated total score for human
   * there are 3 scenarios: human | ai | tie
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
  while (true) {
    var humanMove = prompt(`
      What do you play?
      (rock | paper | scissors)
    `);
    humanMove = humanMove.toLowerCase();
    if (isValidMove(humanMove)) {
      return humanMove;
    }
    alert('Invalid move! 🥓');
  }
}

function isValidMove (move) {
  /**
   * parameter is move: str representing what Human entered
   * return: boolean True if move was valid
   */
  if (move === 'rock') {
    return true;
  }
  if (move === 'paper') {
    return true;
  }
  if (move === 'scissors') {
    return true;
  }
  return false;
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