import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
//import Navbar from './components/Navbar';
import Game from "./components/Game";
//import Modal from './components/Modal';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/waldo-game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
