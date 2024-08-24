import './App.css';
import Booking from './Components/Booking';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pooling from './Components/Pooling';
import Driver from './Components/Driver';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/pooling" element={<Pooling />} />
          <Route path="/driver" element={<Driver />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

