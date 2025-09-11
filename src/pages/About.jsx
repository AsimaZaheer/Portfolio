import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  // Sample skills data (short version for About page)
  const skills = [
    { name: "React.js", icon: "fab fa-react" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "Tailwind CSS", icon: "fas fa-wind" },
    { name: "Git", icon: "fab fa-git-alt" },
  ];

  return (
    <div className="bg-gradient-to-r from-pink-100 to-purple-100 text-gray-800 min-h-screen">
      {/* Page Header */}
      <section className="py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">About Me</h1>
        <p className="text-xl text-gray-600">A passionate developer who loves turning ideas into reality.</p>
      </section>

      {/* Profile Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Info (Left on Desktop) */}
          <div className="text-center md:text-left md:order-1">
            <h2 className="text-2xl font-bold mb-1">I’m Asima Zaheer, a Frontend Developer & Web Designer.</h2>
            <p className="text-lg text-gray-600">Based in Pakistan, open to remote opportunities.</p>
          </div>
          {/* Animated Placeholder Image (Right on Desktop) */}
          <div className="w-90 h-44 overflow-hidden flex items-center justify-center md:order-2">
            <img
              src="https://c8.alamy.com/comp/2PWKFF5/personal-portfolio-with-profile-data-resume-or-self-improvement-to-attract-clients-and-employers-in-flat-cartoon-hand-drawn-templates-illustration-2PWKFF5.jpg"
              alt="Animated Developer Placeholder"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/192/FFE4E1/001C55?text=Dev";
              }}
            />
          </div>
        </div>
      </section>

      {/* Introduction Paragraph */}
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          I’m a frontend developer with a strong background in React, JavaScript, and Tailwind. I enjoy building clean and modern user interfaces that deliver great user experiences. My journey started from curiosity about design and coding, and over the years I’ve developed skills that help me create projects from scratch.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          I believe in continuous learning and always strive to improve my skills and stay updated with the latest industry trends.
        </p>
      </section>

      {/* Education & Background */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Education & Background</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold flex items-center mb-2">
              <i className="fas fa-graduation-cap text-pink-500 mr-3"></i>
              BS Computer Science – XYZ University (2021–2025)
            </h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold flex items-center mb-2">
              <i className="fas fa-certificate text-pink-500 mr-3"></i>
              Certificates – React JS Bootcamp, Frontend Mentor Challenges
            </h3>
          </div>
        </div>
      </section>

      {/* Work / Experience Summary */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Experience</h2>
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            <i className="fas fa-briefcase text-pink-500 mr-2"></i>
            Interned as a Frontend Developer at ABC Software House.
          </p>
          <p className="text-lg text-gray-700">
            <i className="fas fa-laptop-code text-pink-500 mr-2"></i>
            Worked on freelance projects including e-commerce websites and portfolios.
          </p>
        </div>
      </section>

      {/* Skills Snapshot */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Skills Snapshot</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center hover:shadow-md transition-shadow"
            >
              <i className={`${skill.icon} text-2xl text-pink-500 mb-2`}></i>
              <p className="text-gray-700 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Personality / Hobbies */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Beyond Coding</h2>
        <div className="space-y-3">
          <p className="text-lg text-gray-700 flex items-center">
            <i className="fas fa-plane text-pink-500 mr-2"></i>
            Love exploring new technologies.
          </p>
          <p className="text-lg text-gray-700 flex items-center">
            <i className="fas fa-paint-brush text-pink-500 mr-2"></i>
            Enjoy designing UI layouts.
          </p>
          <p className="text-lg text-gray-700 flex items-center">
            <i className="fas fa-book text-pink-500 mr-2"></i>
            Passionate about continuous learning.
          </p>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 px-4 text-center bg-white rounded-lg mx-4 mb-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Want to know more?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Check out my Projects or Contact Me.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/projects"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="bg-transparent hover:bg-pink-100 text-pink-500 font-bold py-2 px-6 border-2 border-pink-500 rounded-full transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
