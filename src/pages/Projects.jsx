import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  // Sample projects data
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-stack e-commerce platform with user authentication, product management, and responsive design.",
      image: "https://via.placeholder.com/400x250/FFE4E1/001C55?text=E-Commerce+Website",
      technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "#",
      demo: "#",
      category: "Full-stack Projects",
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with React.js and Tailwind CSS, showcasing my skills and projects.",
      image: "https://via.placeholder.com/400x250/FFE4E1/001C55?text=Portfolio+Website",
      technologies: ["React.js", "Tailwind CSS", "Vite"],
      github: "#",
      demo: "#",
      category: "Web Development",
    },
    {
      title: "Task Manager App",
      description: "A task management app with drag-and-drop functionality and real-time updates using Firebase.",
      image: "https://via.placeholder.com/400x250/FFE4E1/001C55?text=Task+Manager+App",
      technologies: ["React.js", "Firebase", "Tailwind CSS"],
      github: "#",
      demo: "#",
      category: "Mini Projects",
    },
    {
      title: "Weather App",
      description: "A weather app fetching real-time data from OpenWeather API, built with React.js and Tailwind CSS.",
      image: "https://via.placeholder.com/400x250/FFE4E1/001C55?text=Weather+App",
      technologies: ["React.js", "OpenWeather API", "Tailwind CSS"],
      github: "#",
      demo: "#",
      category: "Mini Projects",
    },
    {
      title: "Blog Platform",
      description: "A blog platform with CRUD functionality and user authentication, built with Next.js and Firebase.",
      image: "https://via.placeholder.com/400x250/FFE4E1/001C55?text=Blog+Platform",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
      github: "#",
      demo: "#",
      category: "Full-stack Projects",
    },
    {
      title: "Chat Application",
      description: "A real-time chat app supporting multiple users and rooms, built with React.js and Socket.io.",
      image: "https://via.placeholder.com/400x250/FFE4E1/001C55?text=Chat+Application",
      technologies: ["React.js", "Socket.io", "Node.js"],
      github: "#",
      demo: "#",
      category: "Full-stack Projects",
    },
  ];

  // Group projects by category
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {});

  return (
    <div className="bg-gradient-to-r from-pink-100 to-purple-100 text-gray-800 min-h-screen">
      {/* Page Header */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-xl text-gray-600">
          Here are some of the applications and websites I’ve built using modern tools and technologies.
        </p>
      </section>

      {/* Projects Grid by Category */}
      {Object.entries(groupedProjects).map(([category, projects]) => (
        <section key={category} className="py-12 px-4 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-pink-600">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex space-x-4">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-1 px-3 rounded text-sm"
                      >
                        View Live
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded text-sm"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Call-to-Action */}
      <section className="py-16 px-4 text-center bg-white rounded-lg mx-4 my-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Interested in collaborating or seeing more of my work?</h2>
        <p className="text-lg text-gray-700 mb-6">Let’s connect!</p>
        <Link
          to="/contact"
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
        >
          Contact Me
        </Link>
      </section>
    </div>
  );
};

export default Projects;
