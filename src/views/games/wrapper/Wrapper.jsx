import { Link } from "react-router-dom"
import "./Wrapper.css"
import Logo from "../../../components/logo/Logo"

const Wrapper = props => {
    const {routerPath, logo} = props.game
    return (
        <Link to={routerPath}>
            <div className="game-wrapper">
                <Logo image={logo}/>
            </div>
        </Link>
    )
}

export default Wrapper