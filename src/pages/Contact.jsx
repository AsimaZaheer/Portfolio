import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your form submission logic (e.g., EmailJS, Formspree, or backend API)
    alert("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-gradient-to-r from-pink-100 to-purple-100 text-gray-800 min-h-screen">
      {/* Page Header */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
        <p className="text-xl text-gray-600">
          I’d love to hear from you. Whether it’s a project, job opportunity, or just a hello – my inbox is always open.
        </p>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-pink-600">Send Me a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-pink-600">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-envelope text-pink-500 mr-3"></i>
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-700 hover:text-pink-500 transition duration-300"
                >
                  your.email@example.com
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-pink-500 mr-3"></i>
                <a
                  href="tel:+1234567890"
                  className="text-gray-700 hover:text-pink-500 transition duration-300"
                >
                  +123 456 7890
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-pink-500 mr-3"></i>
                <span className="text-gray-700">Taxila, Pakistan</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-pink-600">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/asima-zaheer-358266367"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-pink-500 transition duration-300"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a
                  href="https://github.com/AsimaZaheer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-pink-500 transition duration-300"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a
                  href="https://instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-pink-500 transition duration-300"
                >
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a
                  href="https://facebook.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-pink-500 transition duration-300"
                >
                  <i className="fab fa-facebook text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section (Updated to Taxila) */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center text-pink-600">Based in Taxila, Pakistan</h2>
        <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13003.589703992048!2d72.823167!3d33.7502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd0783f7777%3A0x4bc37d3888b6!2sTaxila%2C%20Pakistan!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Taxila, Pakistan"
          ></iframe>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 px-4 text-center bg-white rounded-lg mx-4 my-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Let’s build something amazing together!</h2>
        <p className="text-lg text-gray-700 mb-6">
          Whether you have a project in mind or just want to connect, feel free to reach out.
        </p>
        <Link
          to="/contact"
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
        >
          Send Message
        </Link>
      </section>
    </div>
  );
};

export default Contact;
