import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-pink-50 text-gray-800 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo with Dancing Script Font */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold flex items-center space-x-1 hover:text-pink-500 transition duration-300"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              <span style={{ color: "rgb(0, 28, 85)" }}>&lt;</span>
              <span className="logo-name" style={{ color: "rgb(0, 28, 85)" }}>AsimaZaheer</span>
              <span style={{ color: "rgb(0, 28, 85)" }}> /&gt;</span>
            </Link>
          </div>

          {/* Rest of the Navbar Code (unchanged) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="py-2 px-3 text-gray-600 hover:text-pink-500 transition duration-300">Home</Link>
            <Link to="/about" className="py-2 px-3 text-gray-600 hover:text-pink-500 transition duration-300">About</Link>
            <Link to="/skills" className="py-2 px-3 text-gray-600 hover:text-pink-500 transition duration-300">Skills</Link>
            <Link to="/projects" className="py-2 px-3 text-gray-600 hover:text-pink-500 transition duration-300">Projects</Link>
            <Link to="/resume" className="py-2 px-3 text-gray-600 hover:text-pink-500 transition duration-300">Resume</Link>
            <Link to="/contact" className="py-2 px-3 text-gray-600 hover:text-pink-500 transition duration-300">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="p-2 focus:outline-none">
              {isOpen ? (
                <svg className="w-6 h-6 text-gray-800" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-800" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-pink-50`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link to="/" onClick={toggleMenu} className="block px-3 py-2 text-gray-600 hover:text-pink-500 hover:bg-pink-100 rounded transition duration-300">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="block px-3 py-2 text-gray-600 hover:text-pink-500 hover:bg-pink-100 rounded transition duration-300">About</Link>
          <Link to="/skills" onClick={toggleMenu} className="block px-3 py-2 text-gray-600 hover:text-pink-500 hover:bg-pink-100 rounded transition duration-300">Skills</Link>
          <Link to="/projects" onClick={toggleMenu} className="block px-3 py-2 text-gray-600 hover:text-pink-500 hover:bg-pink-100 rounded transition duration-300">Projects</Link>
          <Link to="/resume" onClick={toggleMenu} className="block px-3 py-2 text-gray-600 hover:text-pink-500 hover:bg-pink-100 rounded transition duration-300">Resume</Link>
          <Link to="/contact" onClick={toggleMenu} className="block px-3 py-2 text-gray-600 hover:text-pink-500 hover:bg-pink-100 rounded transition duration-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
