import { BrowserRouter, Route, Routes} from 'react-router-dom'
import "./App.css"
import RockPaperScissors from "./rock-paper-scissors/RockPaperScissors"
import Home from "./home/Home"
import Navbar from '../components/navbar/Navbar'
import About from './about/About'
import Games from './games/Games'
import TicTacToe from './tic-tac-toe/TicTacToe'

const App = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <main className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<Games />} />
                <Route path="/about" element={<About />} />
                <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
                <Route path="/tic-tac-toe" element={<TicTacToe />} />
                <Route path="*" element={<Home />} />
            </Routes>    
        </main>
    </BrowserRouter>
)

export default App