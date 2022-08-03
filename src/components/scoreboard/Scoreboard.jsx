import "./Scoreboard.css";

const Scoreboard = props => {
    const { score } = props;
    return (
        <div className="Scoreboard">
            <div className="score">
                <img className="icon" src="/rock-paper-scissors/robot.png" alt=""/>
                Computer: {score?.computer || 0}
            </div>
            |
            <div className="score">
                Player: {score?.player || 0}
                <img className="icon" src="/rock-paper-scissors/user.png" alt=""/>
            </div>
        </div>
    );
};

export default Scoreboard;