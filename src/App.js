import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Game from './components/Game';
import Modal from './components/Modal';

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Game/>} />
        </Routes>
      </div> 
      <Modal />
    </BrowserRouter>
  );
}

export default App;
