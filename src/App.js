import Select from "./components/Select"
import Home from "./components/Home"
import Space from "./components/Space"
import Factory from "./components/Factory"
import Hollywood from "./components/Hollywood"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Link to="/" ><h1>wheres the guy</h1></ Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select" element={<Select />} />
        <Route path="/space" element={<Space />} />
        <Route path="/factory" element={<Factory />} />
        <Route path="/hollywood" element={<Hollywood />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
