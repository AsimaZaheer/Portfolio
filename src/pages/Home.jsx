import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // Sample skills data
  const skills = [
    { name: "React.js", icon: "fab fa-react" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "Tailwind CSS", icon: "" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
  ];

  // Sample projects data
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-stack e-commerce platform with React and Node.js.",
      link: "/projects",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with React and Tailwind CSS.",
      link: "/projects",
    },
    {
      title: "Task Manager App",
      description: "A task management app with drag-and-drop functionality.",
      link: "/projects",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="max-w-6xl mx-auto  gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-center">
            {/* Greeting */}
            <p className="text-xl text-gray-600 mb-4">👋 Hi, I’m Asima</p>
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
              I’m a <span className="text-pink-500">Frontend Developer</span> & <span className="text-pink-500">React Enthusiast</span>
            </h1>
            {/* Short Description */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              I design and develop clean, modern, and user-friendly websites using <span className="text-pink-500">React</span>, <span className="text-pink-500">Tailwind</span>, and <span className="text-pink-500">JavaScript</span>.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="bg-transparent hover:bg-pink-100 text-pink-500 font-bold py-3 px-6 border-2 border-pink-500 rounded-full transition duration-300"
              >
                Contact Me
              </Link>
            </div>
            {/* Quick Highlights - Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-3 max-w-xs mx-auto">
                <i className="fas fa-globe-americas text-pink-500 text-2xl"></i>
                <span className="text-gray-600">Based in Pakistan, Remote Friendly</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-3 max-w-xs mx-auto">
                <i className="fas fa-briefcase text-pink-500 text-2xl"></i>
                <span className="text-gray-600">1+ Years in Web Development</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-3 max-w-xs mx-auto">
                <i className="fas fa-project-diagram text-pink-500 text-2xl"></i>
                <span className="text-gray-600">10+ Completed Projects</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="https://github.com/AsimaZaheer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition duration-300"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/asima-zaheer-358266367"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition duration-300"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition duration-300"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 transition duration-300"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a
                href="mailto:asimazaheer2006@gmail.com"
                className="text-gray-600 hover:text-pink-500 transition duration-300"
              >
                <i className="fas fa-envelope fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
        </section>
        {/* What I Do Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            What I Do?
          </h2>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side: Icons and Skills */}
            <div className="space-y-8">
              {/* Skill 1: Frontend Development */}
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center mr-4">
                  <i className="fab fa-react text-3xl text-pink-500"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Frontend Development
                  </h3>
                  <p className="text-gray-600">
                    Building responsive, modern, and user-friendly websites using React, Tailwind, and JavaScript.
                  </p>
                </div>
              </div>

              {/* Skill 2: UI/UX Design */}
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center mr-4">
                  <i className="fas fa-paint-brush text-3xl text-pink-500"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    UI/UX Design
                  </h3>
                  <p className="text-gray-600">
                    Designing intuitive and visually appealing interfaces for seamless user experiences.
                  </p>
                </div>
              </div>

              {/* Skill 3: Web Performance Optimization */}
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center mr-4">
                  <i className="fas fa-bolt text-3xl text-pink-500"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Performance Optimization
                  </h3>
                  <p className="text-gray-600">
                    Optimizing web applications for speed, scalability, and smooth performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Illustration (Optional) */}
            <div className="flex justify-center">
              <img
                src="https://img.pikbest.com/origin/06/30/11/73zpIkbEsTcx8.jpg!w700wp"
                alt="Web Developer Illustration"
                className="w-full max-w-md rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
