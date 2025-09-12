import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Asima Zaheer</h3>
            <p className="text-gray-600">
              A passionate developer dedicated to creating beautiful, functional web experiences.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-pink-500 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-pink-500 transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-600 hover:text-pink-500 transition duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-pink-500 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">Connect With Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition duration-300"
              >
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition duration-300"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition duration-300"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition duration-300"
              >
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a
                href="mailto:asimazaheer2006@gmail.com"
                className="text-gray-600 hover:text-pink-500 transition duration-300"
              >
                <i className="fas fa-envelope fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Asima Zaheer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
