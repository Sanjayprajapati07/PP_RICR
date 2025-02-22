import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* Full Screen Flex Container with Gradient Background */}
      <div className=" w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-800 to-blue-700 text-white p-6">
        
        {/* Contact Section with Flexbox */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl">
          
          {/* Left Side - Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <h1 className="text-5xl font-bold tracking-wide drop-shadow-lg">Let's Connect</h1>
            <p className="text-lg text-gray-300 max-w-md">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat!
            </p>
            
            {/* Contact Details */}
            <div className="space-y-4 text-lg">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-2xl text-yellow-400" />
                <span>Sanjaycse0077@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-2xl text-green-400" />
                <span>+919608631007</span>
              </div>
            </div>

            {/* Social Icons with Hover Effects */}
            <div className="flex space-x-6 mt-4">
              {[
                { icon: <FaGithub />, link: "https://github.com/Sanjayprajapati07/Sanjayfullstack", color: "hover:text-gray-400" },
                { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sanjay-kumar-prajapati-21764228b/", color: "hover:text-blue-300" },
                { icon: <FaTwitter />, link: "https://twitter.com", color: "hover:text-blue-400" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-3xl transition transform hover:scale-110 ${item.color}`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full animate-fadeIn">
            <h2 className="text-2xl font-semibold mb-4 text-center text-purple-700">Send Me a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows="4"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 hover:shadow-md transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

        {/* Back to Home Button */}
        <div className="mt-12">
          <a
            href="/#home"
            className="bg-white text-purple-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 hover:shadow-lg transition duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
