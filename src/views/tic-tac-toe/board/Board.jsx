import { useEffect, useState } from "react";
import "./Board.css"

const Board = props => {
    const {isGameOver, gameOver} = props
    const initialBoardState = [Array(3).fill(null), Array(3).fill(null), Array(3).fill(null)]
    const [board, setBoard] = useState(initialBoardState)
    const [currentUser, setCurrentUser] = useState('x')

    useEffect(() => {
        if (isGameOver) return
        setBoard([Array(3).fill(null), Array(3).fill(null), Array(3).fill(null)])
        setCurrentUser('x')
    }, [isGameOver])

    const selectCell = (x, y) => {
        if (isGameOver || !!board[x][y]) return

        const updatedBoard = board
        updatedBoard[x][y] = currentUser

        const isXWinner = isPlayerWinner('x')
        const isOWinner = isPlayerWinner('o')
        const isDraw = board.every(r => r.every(c => !!c))

        if (isXWinner || isOWinner || isDraw) {
            gameOver(isXWinner ? 'x' : (isOWinner ? 'o' : 'draw'))
        }

        setBoard(updatedBoard)
        setCurrentUser(currentUser === 'x' ? 'o' : 'x')
    }

    const isPlayerWinner = player => {
        const horizontalWinner = board.some(r => r.every(cell => cell === player))
        const verticalWinner = 
            (board[0][0] === player && board[1][0] === player && board[2][0] === player) ||
            (board[0][1] === player && board[1][1] === player && board[2][1] === player) ||
            (board[0][2] === player && board[1][2] === player && board[2][2] === player)
        const diagonalWinner = 
            (board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
            (board[0][2] === player && board[1][1] === player && board[2][0] === player)
        return horizontalWinner || verticalWinner || diagonalWinner
    }

    useEffect(() => {
        if (currentUser === 'x' || isGameOver) return
        let coordinates
        do {
            coordinates = [parseInt(Math.random() * 3), parseInt(Math.random() * 3)]
        } while (!!board[coordinates[0]][coordinates[1]])
        selectCell(coordinates[0], coordinates[1])
    }, [currentUser]);

    const getSelectedClass = (x, y) => {
        const cell = board[x][y]
        if (cell === 'x') return '-selected-x'
        if (cell === 'o') return '-selected-o'
        return ''
    }

    return (
        <section className="board">
            <div className={`cell cell-1 ${getSelectedClass(0,0)}`} onClick={_ => selectCell(0,0)}></div>
            <div className={`cell cell-2 ${getSelectedClass(0,1)}`} onClick={_ => selectCell(0,1)}></div>
            <div className={`cell cell-3 ${getSelectedClass(0,2)}`} onClick={_ => selectCell(0,2)}></div>
            <div className={`cell cell-4 ${getSelectedClass(1,0)}`} onClick={_ => selectCell(1,0)}></div>
            <div className={`cell cell-5 ${getSelectedClass(1,1)}`} onClick={_ => selectCell(1,1)}></div>
            <div className={`cell cell-6 ${getSelectedClass(1,2)}`} onClick={_ => selectCell(1,2)}></div>
            <div className={`cell cell-7 ${getSelectedClass(2,0)}`} onClick={_ => selectCell(2,0)}></div>
            <div className={`cell cell-8 ${getSelectedClass(2,1)}`} onClick={_ => selectCell(2,1)}></div>
            <div className={`cell cell-9 ${getSelectedClass(2,2)}`} onClick={_ => selectCell(2,2)}></div>
        </section>
    )
}

export default Board