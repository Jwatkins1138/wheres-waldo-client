import Select from "./components/Select"
import Home from "./components/Home"
import LeaderBoard from "./components/LeaderBoard"
import Game from './components/Game'
import About from './components/About'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select" element={<Select />} />
        <Route path="/leader" element={<LeaderBoard />} />
        <Route path="/game" element={<Game />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
