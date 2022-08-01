import "./App.css";
import Logo from "./logo/Logo";
import Game from "./game/Game";
import Scoreboard from "./scoreboard/Scoreboard";
import { useState } from "react";
import { CardModel, CardType } from "./card/CardModel.ts";
import { Page } from "./PageModel.ts";
import Result from "./result/Result";

const App = () => {
    const [score, setScore] = useState({ computer: 0, player: 0});
    const [page, setPage] = useState(Page.GAME);
    const [computerCard, setComputerCard] = useState();
    const [playerCard, setPlayerCard] = useState();

    const cards = [ 
        new CardModel(CardType.ROCK),
        new CardModel(CardType.PAPER),
        new CardModel(CardType.SCISSORS)
    ];

    const generateComputerCard = () => cards[parseInt(Math.random() * 3)];

    const playCard = playerCard => {
        const computerCard = generateComputerCard();
        if (playerCard.beats(computerCard)) {
            setScore({...score, player: score.player+1});
        } else {
            setScore({...score, computer: score.computer+1});
        }
        setComputerCard(computerCard);
        setPlayerCard(playerCard);
        setPage(Page.RESULT);
    };

    const playAgain = () => setPage(Page.GAME);
    
   return (
    <div className="App">
        <Logo />
        { page === Page.GAME ?
            <Game cards={cards} playCard={playCard} /> :
            <Result playAgain={playAgain} computerCard={computerCard} playerCard={playerCard}/>}
        <Scoreboard score={score} />
    </div>
   );
};

export default App;