import "./Card.css";
import {CardModel} from "./CardModel.ts";

const Card = props => {
    const card = props.card || new CardModel();
    const selectable = props.selectable;
    const width = props.width || '180px';
    const height = props.height || '250px';

    const selectCard = () => {
        if (selectable) {
            props.onCardSelected(card);
        }
    }
    return  (
        <div className={props.selected ? 'Card selected' : 'Card'}
            onClick={selectCard}
            style={{width, height}}
        >
            <img src={`${process.env.PUBLIC_URL}/${card.imagePath}`} alt="" />
        </div>
    );
};

export default Card;

