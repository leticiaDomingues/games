import Card from "../card/Card";
import "./Result.css";

const Result = props => {
    const { computerCard, playerCard, playAgain } = props;
    const isPlayerWinner = playerCard.beats(computerCard);

    return (
        <div className="Result">
            <div className="cards">
                <div className={!isPlayerWinner ? 'wrapper winner' : 'wrapper'}>
                    <img className="icon" src="./robot.png" alt=""/>
                    <Card selectable={false} card={computerCard} />
                </div>
                <div className={isPlayerWinner ? 'wrapper winner' : 'wrapper'}>
                    <img className="icon" src="./user.png" alt=""/>
                    <Card selectable={false} card={playerCard} />
                </div>
            </div>
            <p>You {isPlayerWinner ? 'won' : 'lost'}!</p>
            <button onClick={playAgain}>Play again</button>
        </div>
    );
}

export default Result;