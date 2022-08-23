import { BrowserRouter, Route, Routes} from 'react-router-dom';
import "./App.css";
import RockPaperScissors from "./rock-paper-scissors/RockPaperScissors";
import Home from "./home/Home";
import Navbar from '../components/navbar/Navbar';
import About from './about/About';
import Games from './games/Games';

const App = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<Games />} />
                <Route path="/about" element={<About />} />
                <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
                <Route path="*" element={<Home />} />
            </Routes>    
        </div>
    </BrowserRouter>
);

export default App;