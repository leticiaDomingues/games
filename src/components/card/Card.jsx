import "./Card.css";
import {CardModel} from "./CardModel.ts";

const Card = props => {
    const card = props.card || new CardModel();
    const selectable = props.selectable;

    const selectCard = () => {
        if (selectable) {
            props.onCardSelected(card);
        }
    }
    return  (
        <div onClick={selectCard} className={props.selected ? 'Card selected' : 'Card'}>
            <img src={card.imagePath} alt="" />
        </div>
    );
};

export default Card;

