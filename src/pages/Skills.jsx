import React from "react";
import { Link } from "react-router-dom";

const Skills = () => {
  // Skills data with proficiency levels (0-100)
  const frontendSkills = [
    { name: "HTML5", icon: "fab fa-html5", description: "Semantic and accessible markup for modern web pages.", level: 95 },
    { name: "CSS3", icon: "fab fa-css3-alt", description: "Styling and animations for beautiful interfaces.", level: 90 },
    { name: "JavaScript (ES6+)", icon: "fab fa-js", description: "Building interactive and dynamic web applications.", level: 90 },
    { name: "React.js", icon: "fab fa-react", description: "Creating reusable components and interactive UIs.", level: 85 },
    { name: "Tailwind CSS", icon: "fas fa-wind", description: "Rapidly designing custom and responsive layouts.", level: 85 },
  ];

  const tools = [
    { name: "Git", icon: "fab fa-git-alt", description: "Version control for collaborative development.", level: 90 },
    { name: "GitHub", icon: "fab fa-github", description: "Hosting and managing code repositories.", level: 90 },
    { name: "VS Code", icon: "fas fa-code", description: "Code editing with powerful extensions.", level: 95 },
    { name: "Figma", icon: "fas fa-vector-square", description: "Designing UI/UX layouts and prototypes.", level: 75 },
    { name: "Vite", icon: "fas fa-bolt", description: "Fast and optimized frontend tooling.", level: 80 },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: "fas fa-lightbulb", level: 90 },
    { name: "Teamwork", icon: "fas fa-users", level: 85 },
    { name: "Communication", icon: "fas fa-comments", level: 80 },
  ];

  return (
    <div className="bg-gradient-to-r from-pink-100 to-purple-100 text-gray-800 min-h-screen">
      {/* Page Header */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Skills & Tools</h1>
        <p className="text-xl text-gray-600">
          Technologies I work with to build scalable and modern apps.
        </p>
      </section>

      {/* Frontend Development */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Frontend Development</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {frontendSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <i className={`${skill.icon} text-3xl text-pink-500 mr-3`}></i>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{skill.description}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-pink-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">{skill.level}% proficiency</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools & Platforms */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Tools & Platforms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <i className={`${tool.icon} text-3xl text-pink-500 mr-3`}></i>
                <h3 className="text-xl font-semibold">{tool.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-pink-500 h-2.5 rounded-full"
                  style={{ width: `${tool.level}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">{tool.level}% proficiency</p>
            </div>
          ))}
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">Soft Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <i className={`${skill.icon} text-3xl text-pink-500 mb-3`}></i>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className="bg-pink-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">{skill.level}% proficiency</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 px-4 text-center bg-white rounded-lg mx-4 my-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Want to see these skills in action?</h2>
        <p className="text-lg text-gray-700 mb-6">Check out my Projects.</p>
        <Link
          to="/projects"
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
        >
          View Projects
        </Link>
      </section>
    </div>
  );
};

export default Skills;
