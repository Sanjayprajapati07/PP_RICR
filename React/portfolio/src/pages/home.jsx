import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import pic1 from "../assets/hero.png";
import { Link } from "react-router-dom";
import Contact from "./contact";

const Home = () => {
  const socialMedia = [
    { icon: <FaInstagram />, link: "https://instagram.com" },
    { icon: <FaFacebook />, link: "https://facebook.com" },
    { icon: <FaGithub />, link: "https://github.com/Sanjayprajapati07/Sanjayfullstack" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sanjay-kumar-prajapati-21764228b/" },
    
  ];

  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white"
    >
      {/* Profile Image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={pic1}
          alt="Profile"
          className="w-80 h-auto rounded-full shadow-lg border-4 border-white transition-transform transform hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 text-center md:text-left space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          <span className="text-yellow-300">Hello! 👋</span>
          <br />
          I'm <span className="text-cyan-300">Sanjay Kumar</span>
        </h1>
        <h4 className="text-xl md:text-2xl font-semibold drop-shadow-md">
          Fullstack Developer 🚀
        </h4>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
          <button
            href={Contact}
            className="px-6 py-3 bg-white text-gray-900 font-bold rounded-full shadow-md hover:bg-gray-200 transition"
          >
            Contact Me
          </button>

          <button
            to="/about"
            className="px-6 py-3 bg-white text-gray-900 font-bold rounded-full shadow-md hover:bg-gray-200 transition"
          >
            About Me
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center md:justify-start gap-5">
          {socialMedia.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-4xl transition-transform transform hover:scale-110 hover:text-yellow-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
