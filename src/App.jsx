import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Slidebar';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Hide sidebar on screens smaller than 1024px (laptop breakpoint)
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className="flex">
        {/* Sidebar (Desktop only) */}
        {!isMobile && <Sidebar />}

        {/* Main Content */}
        <div className={!isMobile ? "ml-64 flex-1" : "flex-1"}>
          <Navbar />
          <main className="min-h-screen bg-gray-900 text-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Footer (Mobile only) */}
          {isMobile && <Footer />}
        </div>
      </div>
    </Router>
  );
}

export default App;
