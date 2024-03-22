import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Management from "./pages/Management";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute onlyLogged />}>
          <Route path="/home" element={<Home />} />
          <Route path="/management" element={<Management />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
