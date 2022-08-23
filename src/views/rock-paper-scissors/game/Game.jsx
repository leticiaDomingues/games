import "./Game.css";
import Card from "../card/Card";
import { useState } from "react";

const Game = props => {
    const [selectedCard, setSelectedCard] = useState();
    const onCardSelected = (card) => {
        const newCard = selectedCard === card ? null : card;
        setSelectedCard(newCard);
    }

    const playCard = _ => {
        if (!!selectedCard) {
            props.playCard(selectedCard);
        }
    }

    return (
        <div className="Game">
            <div className="cards-wrapper">
                { props.cards.map(c =>
                    <Card card={c}
                        selectable={true}
                        onCardSelected={onCardSelected}
                        selected={selectedCard === c}
                        key={c.type} />)
                }
            </div>
            <button className={!selectedCard ? 'disabled' : ''} onClick={playCard}>Play</button>
        </div>
    );
};

export default Game;