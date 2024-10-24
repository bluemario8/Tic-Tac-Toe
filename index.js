let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]
let currentPlayerTurn = "X";

function printBoard()
{
    console.log(board[0], "\n", board[1], "\n", board[2]);
}

function boardAdd(x, y) 
{
    if (board[x][y] !== "")
    {
        console.log("Already a character there");
        return;
    }

    board[x][y] = currentPlayerTurn;

    if (currentPlayerTurn === "X")
        currentPlayerTurn = "O";
    else
        currentPlayerTurn = "X";
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
}

boardAdd(0, 2);
boardAdd(1, 1);
boardAdd(2, 0);
boardAdd(0, 0);
boardAdd(1, 0);
boardAdd(2, 2);

printBoard();
console.log(findWinner());
console.log(`The winner is ${findWinner()}`);