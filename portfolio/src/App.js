import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Writeups from './pages/writeups';
import Projects from './pages/projects';
import Notes from './pages/notes';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writeups" element={<Writeups />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
      <Footer/>
    </Router>
    
  );

  
}

export default App;
