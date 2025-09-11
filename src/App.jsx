import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Slidebar';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import './App.css';

// Placeholder components for other pages
const ResumePage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
    <h1 className="text-4xl font-bold">Resume Page Coming Soon</h1>
  </div>
);

const ContactPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
    <h1 className="text-4xl font-bold">Contact Page Coming Soon</h1>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Fixed Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="ml-64 flex-1">
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
        </div>
      </div>
    </Router>
  );
}

export default App;
