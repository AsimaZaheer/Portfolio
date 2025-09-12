import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 w-68 bg-pink-50 text-gray-800 p-6 flex flex-col items-center shadow-lg">
      {/* Profile Image */}
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-pink-500">
        <img
          src="profile.png"
          alt="Asima Zaheer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name and Designation */}
      <h2 className="text-2xl font-bold mb-1 text-gray-800">Asima Zaheer</h2>
      <p className="text-gray-600 mb-6">Web Developer</p>

      {/* Contact Information */}
      <div className="w-full mb-6">
        <div className="flex items-center mb-3">
          <i className="fas fa-envelope text-pink-500 mr-3"></i>
          <a
            href="mailto:your.email@example.com"
            className="text-gray-600 hover:text-pink-500 transition duration-300"
          >
            asimazaheer2006@gmail.com
          </a>
        </div>
        <div className="flex items-center mb-3">
          <i className="fas fa-phone text-pink-500 mr-3"></i>
          <a
            href="tel:+1234567890"
            className="text-gray-600 hover:text-pink-500 transition duration-300"
          >
            +123 456 7890
          </a>
        </div>
        <div className="flex items-center">
          <i className="fas fa-map-marker-alt text-pink-500 mr-3"></i>
          <span className="text-gray-600">Taxila, Punjab, Pakistan</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="w-full">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Connect With Me</h3>
        <div className="flex flex-col space-y-3">
          <a
            href="https://github.com/AsimaZaheer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-pink-500 transition duration-300"
          >
            <i className="fab fa-github mr-2"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/asima-zaheer-358266367"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-pink-500 transition duration-300"
          >
            <i className="fab fa-linkedin mr-2"></i> LinkedIn
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-pink-500 transition duration-300"
          >
            <i className="fab fa-instagram mr-2"></i> Instagram
          </a>
          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-pink-500 transition duration-300"
          >
            <i className="fab fa-facebook mr-2"></i> Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
