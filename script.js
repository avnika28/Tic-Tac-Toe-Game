let cells = document.querySelectorAll(".cell");

let statusText = document.getElementById("status");

let restartBtn = document.getElementById("restartBtn");

let currentPlayer = "X";

let gameActive = true;

let board = ["","","","","","","","",""];

const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
];

cells.forEach((cell,index) => {
    cell.addEventListener("click",()=>{
        if(board[index]!==""||!gameActive){
            return;
        }
        board[index] = currentPlayer;
        cell.innerText = currentPlayer;
        checkWinner();
    });
});
function checkWinner(){
    let winnerFound = false;
    winningConditions.forEach((condition) => {

        let a = board[condition[0]];
        let b = board[condition[1]];
        let c = board[condition[2]];

        if(a === "" || b === "" || c === ""){
           return;
        }
        if(a === b && b === c){
            winnerFound = true;
        }
    });
    if(winnerFound){
        statusText.innerText = `player ${currentPlayer} Wins`;
        gameActive = false;
        return;
    }
    if(!board.includes("")){
        statusText.innerText = "Match Draw!";
        gameActive = false;
        return;
    }
    currentPlayer = currentPlayer === "X"?"O":"X";
    statusText.innerText = `Player ${currentPlayer} Turn`;
}
restartBtn.addEventListener("click",() =>{
    board = ["","","","","","","","",""];
    gameActive = true;
    currentPlayer = "X";
    statusText.innerText = "Player X Turn";
    cells.forEach((cell)=>{
        cell.innerText = "";
    });
});