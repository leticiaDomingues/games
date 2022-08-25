import "./Scoreboard.css";

const Scoreboard = props => {
    const { score } = props;
    const computerImg = props.computerImg || 'robot.png'
    const userImg = props.userImg || 'user.png'

    return (
        <div className="Scoreboard">
            <div className="score">
                <img className="icon" src={`${process.env.PUBLIC_URL}/${computerImg}`} alt=""/>
                Computer: {score?.computer || 0}
            </div>
            |
            <div className="score">
                Player: {score?.player || 0}
                <img className="icon" src={`${process.env.PUBLIC_URL}/${userImg}`} alt=""/>
            </div>
        </div>
    );
};

export default Scoreboard;