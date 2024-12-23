import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./components/Dashboard";
import BottomNavBar from "./components/BottomNavBar";

const App = () => (
  <Router>
    <div style={{ paddingBottom: "56px" }}>
      <Dashboard />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>

    <BottomNavBar />
  </Router>
);

export default App;
