
import React, { useState } from 'react'
import Board from './board'
import Message from './message'
import Refresh from './refresh'

function gameWon(board) {
    // list of postion that is winning
    const matches = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i=0; i< matches.length; i++) {
        let [a, b, c] = matches[i];
        
        if (board[a] !== "" && Board[a] === Board[b] && Board[a] === Board[c]) {
            return true;
        }
    } 
    return false;
}

function game() {
    const [grid, setGrid] = useState(Array(9).fill("")); 
    const [isPlayer, setIsPlayer] = useState("X");
    const [message, setMessage] = useState("Click to start");
  
    const refresh  = () => {
        setBoard(Array(9).fill("")); 
        setMessage("Click to start");
        setIsPlayer("X");  
    }
 
    function handleInput(pos) {    
        if (isPlayer === "" || Board[pos] !== "") {

            return;
        }
       
        const boardCopy = [...Board];
        boardCopy[pos] = isPlayer;
        setGrid(boardCopy); 
        

        if (gameWon(boardCopy)){

            setMessage(`WON: ${isPlayer}`)
            setIsPlayer("");
            return;
        }

        if (boardCopy.indexOf("")=== -1){
            setMessage("DRAW")
            setIsPlayer("");
        } else {
            let nextPlayer = (isPlayer === "X") ? "O" : "X"
            setIsPlayer(nextPlayer); 
            setMessage(`TURN: ${nextPlayer}`)
        }
    }

    return (<div>
             <Message value={message} />
            <Board onClick={handleInput} value={Board} /> 
            <Refresh onClick={refresh} value={'Refresh'} />
        </div>)
}

export default game