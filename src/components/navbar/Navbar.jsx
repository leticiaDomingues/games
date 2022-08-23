import "./Navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = props => {
    return (
        <nav className="navbar">
            <h2>Joguinhos</h2>
            <ul>
                <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : '' }>Home</NavLink></li>
                <li><NavLink to="/list" className={({ isActive }) => isActive ? 'active' : '' }>Jogos</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : '' }>Sobre</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar