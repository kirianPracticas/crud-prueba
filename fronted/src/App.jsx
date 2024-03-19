import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Management from "./pages/Management";

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/management" element={<Management />} />
      </Routes>
    </Router>
  )
}

export default App
