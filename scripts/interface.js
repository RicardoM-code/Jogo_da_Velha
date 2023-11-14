document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })

})

function handleClick(event) {


    let square = event.target;
    let postion = square.id;

    if (handleMove(postion)) {

        setTimeout(() => {
            alert(" O Jogo Acabou - O Vencedor foi " + playerTime);
        }, 10);

    };
    updateSquare(postion);
}

function updateSquare(position){
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class ='${symbol}'></div> `
}

