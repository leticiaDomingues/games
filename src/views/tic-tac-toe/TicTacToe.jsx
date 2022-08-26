import "./TicTacToe.css"
import Logo from "../../components/logo/Logo"
import { TicTacToeSpecs as specs } from "../../model/GamesModel.ts"
import Board from "./board/Board"
import { useState } from "react"
import Scoreboard from "../../components/scoreboard/Scoreboard"

const TicTacToe = () => {
    const [score, setScore] = useState({computer: 0, player: 0})
    const [winner, setWinner] = useState()
    const [isGameOver, setIsGameOver] = useState(false)

    const gameOver = (winner) => {
        if (!winner) return

        if (winner === 'x' || winner === 'o') {
            const updatedScore = winner === 'x' ?
                {...score, player: score.player+1} :
                {...score, computer: score.computer+1}
            setScore(updatedScore)
        }
        setWinner(winner)
        setIsGameOver(true)
    }
    
    const playAgain = () => {
        setWinner(null)
        setIsGameOver(false)
    }

    const getMessage = () => {
        if (!winner) return ''
        return winner === 'x' ? <p class='winner'>You won!</p> : 
            (winner === 'o' ? <p class='loser'>You lost!</p> :
                <p class="draw">It's a draw!</p>)
    }

    return (
        <section className="tic-tac-toe">
            <Logo image={specs.logo}/>
            <Board isGameOver={isGameOver} gameOver={gameOver}/>
            {
                isGameOver ?
                    <div className="result">
                        <p>{getMessage()}</p>
                        <button onClick={playAgain}>Play again</button>
                    </div> :
                    <></>
            }
            <div className="scoreboard-wrapper">
                <Scoreboard score={score} />
            </div>
        </section>
    )
}

export default TicTacToe