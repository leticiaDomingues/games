import "./Games.css"
import Wrapper from "./wrapper/Wrapper"
import { GamesEnum } from "../../model/GamesModel.ts";

const Games = () => (
    <section className="games">
        <div>
            <Wrapper game={GamesEnum.ROCK_PAPER_SCISSORS} link="/rock-paper-scissors" logo="rock-paper-scissors.png"/>
            <Wrapper game={GamesEnum.TIC_TAC_TOE} />
            <Wrapper />
        </div>
    </section>
)

export default Games