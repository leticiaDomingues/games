import "./Games.css"
import Wrapper from "./wrapper/Wrapper"
import { RockPaperScissorsSpecs, TicTacToeSpecs } from "../../model/GamesModel.ts";

const Games = () => (
    <section className="games">
        <div>
            <Wrapper game={RockPaperScissorsSpecs} />
            <Wrapper game={TicTacToeSpecs} />
        </div>
    </section>
)

export default Games