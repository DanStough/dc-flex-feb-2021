"""
Implements the game of Rock-Paper-Scissors!

History:
This classic game dates back to the Han Dinesty, over 2200 years ago.
The First International Rock-Paper-Scissors Programming Competition 
was held in 1999 and was won by a team called "Iocaine Powder"

The Game:
Each player choses a move (simultaneously) from the choices:
rock, paper or scissors. 
If they chose the same move the game is a tie. Otherwise:
rock beats scissors
scissors beats paper
paper beats rock.

In this program a human plays against an AI. The AI choses randomly
(we promise). The game is repeated N_GAMES times and the human gets
a total score. Each win is worth +1 points, each loss is worth -1

https://arstechnica.com/science/2014/05/win-at-rock-paper-scissors-by-knowing-thy-opponent/
"""
import random
# import testmod for testing my function
from doctest import testmod

N_GAMES = 3

def main():
    print_welcome()
    total_score = 0
    last_round_winner = 0
    last_round_human_move = 0

    for i in range(N_GAMES):
        if (i == 0):
            # the very first time - get random
            ai_move = get_ai_move()
        else:
            ai_move = get_ai_move_win_strategy(last_round_winner, last_round_human_move)

        human_move = get_human_move()
        # ai stores last human move this helps with next ai_move
        last_round_human_move = human_move

        # 2. Logic to pick the winner
        winner = get_winner(ai_move, human_move)
        last_round_winner = winner

        total_score = update_score(winner, total_score)
        print('human move was', human_move)
        print('ai move was', ai_move)
        print('winner was', winner)
        print('current score for human:', total_score)
        print('')
    print('Total score for human:', total_score)

def get_ai_move_win_strategy (last_round_winner, last_round_human_move):
    """
    Best way to win at rock-paper-scissors:
    - WON: If you win, don't keep playing the same thing, but instead switch
      to the thing that would beat the thing that you just played.
      -- simply if you won, play the hand your losing opponent just played.

    - LOST: If you lose, switch to the thing that beats the hand that your opponent just played.
    """
    # ******** ai WON ************
    if (last_round_winner == 'ai'):
        # WON? play the hand your losing opponent just played
        return last_round_human_move

    # ******** ai LOST ************
    if (last_round_winner == 'human'):
        # LOST? switch to the hand that beats your opponent's last round's move
        if (last_round_human_move == 'rock'):
            # ai move: what would beat rock?
            return 'paper'
        if (last_round_human_move == 'paper'):
            # ai move: what would beat paper?
            return 'scissors'
        # only thing left scissors. ai move: Rock (rock beats sicssors)
        return 'rock'

    # ******** tie, no winner ************
    if (last_round_winner == 'tie'):
        # no strategy, just get random move
        return get_ai_move()

def update_score(winner, total_score):
    """
    returns updated total score for human
    for 3 scenarios: human | ai | tie
    """
    if (winner == 'human'):
        # add 1+
        total_score += 1
    if (winner == 'ai'):
        # subtr 1-
        total_score -= 1
    if (winner == 'tie'):
        # add 0
        total_score += 0
    return total_score

def get_winner(ai_move, human_move):
    """
    return: either 'ai' 'human' or 'tie'
    depending on who won
    >>> get_winner('rock', 'scissors')
    'ai'
    >>> get_winner('rock', 'rock')
    'tie'
    >>> get_winner('rock', 'paper')
    'human'
    >>> get_winner('scissors', 'rock')
    'human'
    >>> get_winner('scissors', 'scissors')
    'tie'
    >>> get_winner('scissors', 'paper')
    'ai'
    >>> get_winner('paper', 'paper')
    'tie'
    >>> get_winner('paper', 'rock')
    'ai'
    >>> get_winner('paper', 'scissors')
    'human'
    """
    if ai_move == human_move:
        return 'tie'
    if ai_move == 'rock':
        # if ai move is `rock` two options for 
        # human move can be paper | scissors
        if human_move == 'paper':
            return 'human'
        return 'ai'
    if ai_move == 'paper':
        if human_move == 'rock':
            return 'ai'
        return 'human'
    if ai_move == 'scissors':
        if human_move == 'paper':
            return 'ai'
        return 'human'
    print('you should not get here...')

def get_ai_move():
    """
    from random library random integer 1, 2, 3
    returns string representing what ai move (rock | paper | scissors)
    """
    value = random.randint(1, 3)
    if value == 1:
        return 'rock'
    if value == 2:
        return 'paper'
    return 'scissors'

def get_human_move():
    """
    returns a valid move from the human (rock, paper, or scissors)
    """
    while True:
        human_move = input('enter your move (rock | paper | scissors): ').lower()
        if is_valid_move(human_move):
            return human_move
        print('Invalid move! 🥓')

def is_valid_move(move):
    """
    parameter move: string representing what the user entered
    return: boolean True if move was valid
    >>> is_valid_move('rock')
    True
    >>> is_valid_move('kimchi')
    False
    """
    if move == 'rock':
        return True
    if move == 'paper':
        return True
    if move == 'scissors':
        return True
    return False

def print_welcome():
    print('Welcome to Rock 🪨 Paper 🖐 Scissors ✌')
    print('You will play '+str(N_GAMES)+' games against the AI')
    print('rock beats scissors')
    print('scissors beats paper')
    print('paper beats rock')
    print('----------------------------------------------')
    print('')

# call the testmod function
if __name__ == '__main__':
    main()
    # testmod(name='main', verbose = True)