import Select from "./components/Select"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <h1>wheres the guy</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select" element={<Select />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
