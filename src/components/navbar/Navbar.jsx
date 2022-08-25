import "./Navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const items = [
        { path: '/', label: 'Home'},
        { path: '/list', label: 'Jogos'},
        { path: '/about', label: 'Sobre'}
    ]
    return (
        <nav className="navbar">
            <h2>Joguinhos</h2>
            <ul>
                {
                    items.map(i => 
                        <li key={i.path}>
                            <NavLink className={({ isActive }) => isActive ? 'active' : '' } to={i.path}>
                                {i.label}
                            </NavLink>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navbar