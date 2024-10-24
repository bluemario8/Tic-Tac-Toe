let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]
let currentPlayerTurn = "X";
const itemContainer = document.getElementsByClassName("itemContainer")[0];
const PlayerTurnElement = document.getElementsByClassName("player-turn")[0];
var player1score = 0
var player2score = 0
var tieScore = 0


function printBoard()
{
    console.log(board[0], "\n", board[1], "\n", board[2]);
}

function updateBoard() 
{
    for (let x = 0; x < board.length; x++)
    {
        for (let y = 0; y < board.length; y++)
        {
            itemContainer.children[y].children[x].children[0].innerText`` = board[y][x];
        }
    }

    PlayerTurnElement.innerText = `player ${currentPlayerTurn}'s turn`
}

function updateScores()
{
    let winner = findWinner()
    if(winner[3] == 'X'){
        player1score = player1score + 1
     document.getElementsByClassName('player1score')[0].innerText = player1score
    }
    else if(winner[3] == 'O'){
        player2score = player2score + 1
        document.getElementsByClassName('player2score')[0].innerText = player2score
    }
    else if(winner == 'Tie'){
        tieScore = tieScore + 1
        document.getElementsByClassName('tieScore')[0].innerText = tieScore
    }
}

function highlightWinner()
{
    let winner = findWinner();
    if (Array.isArray(winner))
    {
        for (let i = 0; i < board.length; i++)
        {
            itemContainer.children[winner[i][1]].children[winner[i][0]].children[0]
        }
    }
}

function boardAdd(x, y) 
{
    if (board[y][x] !== "")
    {
        console.log("Already a character there");
        return;
    }

    board[y][x] = currentPlayerTurn;

    if (currentPlayerTurn === "X")
        currentPlayerTurn = "O";
    else
        currentPlayerTurn = "X";

    updateBoard();
    updateScores(); 
}

function findWinner()
{
    for (let i = 0; i < board.length; i++)
    {
        // check horizontal win
        if (board[i][0] !== "" && 
            board[i][0] === board[i][1] && board[i][0] === board[i][2]
           )
            return [[i, 0], [i, 1], [i, 2], board[i][0]];
        // check verticle win
        if (board[0][i] !== "" &&
            board[0][i] === board[1][i] && board[0][i] === board[2][i]
           )
            return [[0, i], [1, i], [2, i], board[0][i]];
    }
    // ckech diagonal down-right win
    if (board[0][0] !== "" &&
        board[0][0] === board[1][1] && board[0][0] === board[2][2]
       )
       return [[0, 0], [1, 1], [2, 2], board[0][0]];
    // check diagonal down-left win
    if (board[0][2] !== "" &&
        board[0][2] === board[1][1] && board[0][2] === board[2][0]
    )
        return [[0, 2], [1, 1], [2, 0], board[0][2]];
    // check if the board is full
    let boardItems = "";
    for (let x = 0; x < board.length; x++)
    {
        for (let y = 0; y < board.length; y++)
        {
            boardItems += board[y][x];
        }
    }
    if (boardItems.length === 9)
        return "Tie";

    return ""; // if no one won yet
}
