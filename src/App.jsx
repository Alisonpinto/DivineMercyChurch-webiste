import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Novena from './pages/Novena';
import WayOfTheCross from './pages/WayOfTheCross';
import Hymns from './pages/Hymns';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novena" element={<Novena />} />
        <Route path="/way-of-the-cross" element={<WayOfTheCross />} />
        <Route path="/hymns" element={<Hymns />} />
      </Routes>
    </Router>
  );
}

export default App;
