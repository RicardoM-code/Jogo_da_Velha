let board = ['', '', '', '', '', '', '', '', '']
let playerTime = 0
let symbols = ['o', 'x']
let gameOver = false
let playerWins = [0, 0];

let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function handleMove(position) {

    if (gameOver) {
        return
    }
    if (board[position] == '') {
        board[position] = symbols[playerTime];

        gameOver = isWin()


        if (gameOver == false) {
            playerTime = (playerTime == 0) ? 1 : 0
        }
        else{
            playerWins[playerTime]++;
            updateScore()
        }
    }
    return gameOver
}


function isWin() {


    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i]

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != '') {
            return true
        }


    }
    return false
}

function clearGame() {
    playerTime = 0;
    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;

    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.innerHTML = '';
    });


}

function updateScore(){
    let scorePlayer0 = document.getElementById('scorePlayer0')
    let scorePlayer1 = document.getElementById('scorePlayer1')

    scorePlayer0.textContent = `Jogador 1 tem ${playerWins[0]} vitórias!`
    scorePlayer1.textContent = `Jogador 2 tem ${playerWins[1]} vitórias!`
}