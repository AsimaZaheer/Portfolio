import React from "react";
import { Link } from "react-router-dom";

const Resume = () => {
  // Summary
  const summary = (
    <p className="text-gray-700 mb-6">
      I’m a passionate <strong>Frontend Developer</strong> with expertise in building responsive and interactive web applications using <strong>React.js</strong>, <strong>Tailwind CSS</strong>, and modern <strong>JavaScript</strong>. I love turning ideas into reality through clean, efficient code and user-friendly designs.
    </p>
  );

  // Education
  const education = [
    {
      degree: "BS in Computer Science",
      institution: "HITEC University, Taxila",
      period: "2021 – Present",
      description: "Focused on web development, algorithms, and software engineering.",
    },
    {
      degree: "Intermediate (Pre-Engineering)",
      institution: "[Your College Name], Taxila",
      period: "2019 – 2021",
      description: "Completed with a strong foundation in mathematics and physics.",
    },
  ];

  // Experience
  const experience = [
    {
      role: "Frontend Developer Intern",
      company: "ABC Software House",
      period: "Summer 2023",
      description: [
        "Developed responsive web pages using React.js and Tailwind CSS.",
        "Collaborated with senior developers to implement new features.",
        "Debugged and optimized existing code for better performance.",
      ],
    },
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2022 – Present",
      description: [
        "Built and deployed multiple client projects, including e-commerce websites and portfolios.",
        "Worked directly with clients to gather requirements and deliver solutions.",
        "Used Git and GitHub for version control and collaboration.",
      ],
    },
  ];

  // Skills
  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Vite"],
    softSkills: ["Problem Solving", "Teamwork", "Communication"],
  };

  // Projects
  const projects = [
    {
      name: "Adventure Awaits – Travel Website",
      description: "Built with React, Tailwind, and LocalStorage for wishlist functionality.",
    },
    {
      name: "ShopHub – E-commerce Website",
      description: "React + Tailwind + Cart & Wishlist features.",
    },
  ];

  // Certifications
  const certifications = [
    { name: "React JS Bootcamp", provider: "Udemy", year: "2023" },
    { name: "Frontend Development Specialization", provider: "Coursera", year: "2024" },
  ];

  return (
    <div className="bg-gradient-to-r from-pink-100 to-purple-100 text-gray-800 min-h-screen">
      {/* Page Header */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">My Resume</h1>
        <p className="text-xl text-gray-600 mb-8">
          Here’s a summary of my education, experience, and skills.
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
        >
          <i className="fas fa-download mr-2"></i> Download Resume
        </a>
      </section>

      {/* Main Resume Content (Two-Column Layout) */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Education & Experience */}
          <div className="space-y-8">
            {/* Summary */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-pink-600">Summary</h2>
              {summary}
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-pink-600">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                    <p className="text-gray-600 mb-1">{edu.institution}</p>
                    <p className="text-gray-500 text-sm mb-3">{edu.period}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-pink-600">Experience</h2>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                    <p className="text-gray-600 mb-1">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 pl-4">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Skills, Projects, Certifications */}
          <div className="space-y-8">
            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-pink-600">Skills</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-pink-600">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill, index) => (
                      <span key={index} className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-pink-600">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((tool, index) => (
                      <span key={index} className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-pink-600">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.softSkills.map((skill, index) => (
                      <span key={index} className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-pink-600">Projects</h2>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-2xl font-bold mb-6 text-pink-600">Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-start">
                      <div className="w-12 h-12 flex items-center justify-center mr-4">
                        {cert.provider === "Udemy" ? (
                          <i className="fab fa-udemy text-2xl text-pink-500"></i>
                        ) : (
                          <i className="fas fa-graduation-cap text-2xl text-pink-500"></i>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{cert.name}</h3>
                        <p className="text-gray-600 mb-1">{cert.provider}</p>
                        <p className="text-gray-500 text-sm">{cert.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <section className="py-16 px-4 text-center bg-white rounded-lg mx-4 my-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Want the detailed version of my career journey?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Download my full resume below.
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
        >
          <i className="fas fa-download mr-2"></i> Download Resume
        </a>
      </section>
    </div>
  );
};

export default Resume;
