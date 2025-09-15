import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  // Projects data
  const projects = [
    {
      title: "Shopping Hub",
      description: "A fully responsive e-commerce website with product listings, cart functionality, and user authentication.",
      image: "ShoppingHub.png",
      technologies: ["React.js", "Tailwind CSS", "Firebase"],
      github: "https://github.com/AsimaZaheer/Shopping-Hub",
      demo: "https://shopping-hub-dusky.vercel.app/",
    },
    {
      title: "Adventure Awaits",
      description: "A travel website showcasing destinations with interactive maps and booking features.",
      image: "AdventureAwaits.png",
      technologies: ["React.js", "Tailwind CSS", "Leaflet.js"],
      github: "https://github.com/AsimaZaheer/AdventureAwaits",
      demo: "https://adventure-awaits-eight.vercel.app/",
    },
    {
      title: "Art Spark",
      description: "A creative portfolio website for artists to showcase their work with galleries and contact forms.",
      image: "ArtSpark.png",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/AsimaZaheer/ArtSpark",
      demo: "https://art-spark.vercel.app/",
    },
    {
      title: "Pakistan Independence Day",
      description: "A celebratory website featuring historical information, events, and interactive elements for Pakistan's Independence Day.",
      image: "PakistanIndepandanceDay.png",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/AsimaZaheer/Independence-Day",
      demo: "https://independence-day-ruby.vercel.app/",
    },
    {
      title: "Sparx",
      description: "A modern landing page for a fictional energy drink brand with animations and responsive design.",
      image: "Sparx.png",
      technologies: ["React.js", "Tailwind CSS", "GSAP"],
      github: "https://github.com/AsimaZaheer/Figma-Design-to-Web-Development",
      demo: "http://sparx-figma-design-to-web.vercel.app/",
    },
    {
      title: "Scientific Calculator",
      description: "A fully functional scientific calculator with history tracking and responsive layout.",
      image: "ScientificCalculator.png",
      technologies: ["React.js", "Tailwind CSS", "Math.js"],
      github: "https://github.com/AsimaZaheer/ScientificCalculator",
      demo: "https://scientific-calculator-omega-two.vercel.app/",
    },
    {
      title: "Gaming Den",
      description: "A gaming community website with forums, game reviews, and user profiles.",
      image: "GammingDen.png",
      technologies: ["React.js", "Tailwind CSS", "Firebase"],
      github: "https://github.com/AsimaZaheer/GamingDen",
      demo: "https://gaming-den.vercel.app/",
    },
    {
      title: "LifeTrack",
      description: "A task management application with note-taking features and cloud synchronization.",
      image: "LifeTrack.png",
      technologies: ["React.js", "Tailwind CSS", "LocalStorage"],
      github: "https://github.com/AsimaZaheer/LifeTrack",
      demo: "https://life-track-weld.vercel.app/",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-pink-100 to-purple-100 text-gray-800 min-h-screen">
      {/* Page Header */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-xl text-gray-600">
          Here are some of the applications and websites I've built using modern tools and technologies.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
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

      {/* Call-to-Action */}
      <section className="py-16 px-4 text-center bg-white rounded-lg mx-4 my-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Interested in collaborating or seeing more of my work?</h2>
        <p className="text-lg text-gray-700 mb-6">Let's connect!</p>
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
