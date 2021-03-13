// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'
function rockPaperScissors(play1, play2){
    if(play1 === play2){
        return 'draw';
    }
    else if(play1 ==='rock' && play2 === 'scissors'){
        return 'player 1';
    }
    else if(play1 ==='scissors' && play2 === 'rock'){
        return 'player 2';
    }
    else if(play1 ==='rock' && play2 === 'paper'){
        return 'player 2';
    }
    else if(play1 ==='paper' && play2 === 'rock'){
        return 'player 1';
    }
    else if(play1 ==='scissors' && play2 === 'paper'){
        return 'player 1';
    }
    else if(play1 ==='paper' && play2 === 'scissors'){
        return 'player 2';
    }
    else{
        return null;
    }
}

//  console.log(rockPaperScissors('paper','rock'));
//  console.log(rockPaperScissors('paper','scissors'));
//  console.log(rockPaperScissors('paper','paper'));
//  console.log(rockPaperScissors('rock','scissors'));
//  console.log(rockPaperScissors('rock','paper'));