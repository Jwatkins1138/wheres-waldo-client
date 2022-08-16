import Select from "./components/Select"
import Home from "./components/Home"
import Space from "./components/Space"
import Factory from "./components/Factory"
import Hollywood from "./components/Hollywood"
import LeaderBoard from "./components/LeaderBoard"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select" element={<Select />} />
        <Route path="/leader" element={<LeaderBoard />} />
        <Route path="/space" element={<Space />} />
        <Route path="/factory" element={<Factory />} />
        <Route path="/hollywood" element={<Hollywood />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;