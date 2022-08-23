import { Link } from "react-router-dom"
import "./Wrapper.css"
import Logo from "../../../components/logo/Logo"

const Wrapper = props => {
    return (
        <Link to={`/${props.game}`}>
            <div className="game-wrapper">
                <Logo image={`${props.game}.png`}/>
            </div>
        </Link>
    )
}

export default Wrapper