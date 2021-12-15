import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
//import Navbar from './components/Navbar';
import Game from './components/Game';
//import Modal from './components/Modal';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route exact path='/' element={<Game/>} />
        </Routes>
      </main> 
    </BrowserRouter>
  );
}

export default App;
