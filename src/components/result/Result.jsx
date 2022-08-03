import Card from "../card/Card";
import "./Result.css";

const Result = props => {
    const { computerCard, playerCard, playAgain } = props;
    const isPlayerWinner = playerCard.beats(computerCard);
    const cardSize = { width: "100px", height: "125px"};

    return (
        <div className="Result">
            <div className="cards">
                <div className={!isPlayerWinner ? 'wrapper winner' : 'wrapper'}>
                    <img className="icon" src="/rock-paper-scissors/robot.png" alt=""/>
                    <Card width={cardSize.width} height={cardSize.height} selectable={false} card={computerCard} />
                </div>
                <div className={isPlayerWinner ? 'wrapper winner' : 'wrapper'}>
                    <img className="icon" src="/rock-paper-scissors/user.png" alt=""/>
                    <Card width={cardSize.width} height={cardSize.height} selectable={false} card={playerCard} />
                </div>
            </div>
            <p>You {isPlayerWinner ? 'won' : 'lost'}!</p>
            <button onClick={playAgain}>Play again</button>
        </div>
    );
}

export default Result;