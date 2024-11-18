// src/App.js
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UnderConstruction from './components/UnderConstruction';
import ProjectDetails from './components/ProjectDetails';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/" element={<>
            <Navbar />
            <Hero />
            <Skills />
            <About />
            <Work />
            <Contact />
            <Footer />
          </>} 

        />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/Site-under-construction" element={<UnderConstruction />} />
          <Route component={PageNotFound} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
