import Card from "../card/Card";
import "./Result.css";
import { MatchResult, MatchResultText } from "./ResultModel.ts";

const Result = props => {
    const { matchResult, playAgain } = props;
    const cardSize = { width: "100px", height: "125px"};

    return (
        <div className="Result">
            <div className="cards">
                <div className={matchResult.result === MatchResult.COMPUTER_WINNER ? 'wrapper winner' : 'wrapper'}>
                    <img className="icon" src={`${process.env.PUBLIC_URL}/robot.png`} alt=""/>
                    <Card width={cardSize.width} height={cardSize.height} selectable={false} card={matchResult.computerCard} />
                </div>
                <div className={matchResult.result === MatchResult.PLAYER_WINNER ? 'wrapper winner' : 'wrapper'}>
                    <img className="icon" src={`${process.env.PUBLIC_URL}/user.png`} alt=""/>
                    <Card width={cardSize.width} height={cardSize.height} selectable={false} card={matchResult.playerCard} />
                </div>
            </div>
            <p>{MatchResultText.get(matchResult.result)}</p>
            <button onClick={playAgain}>Play again</button>
        </div>
    );
}

export default Result;