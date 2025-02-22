import React from "react";
import { FaUniversity, FaLaptopCode } from "react-icons/fa";

const qualifications = [
  {
    icon: <FaUniversity />,
    title: "B.Tech in Computer Science",
    institution: "Radharaman Engineering College, Bhopal",
    year: "2021 - 2025",
    desc: "Currently pursuing a degree in Computer Science with a focus on software development and problem-solving.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Full-Stack Developer",
    institution: "RICR, Bhopal",
    year: "2025 - Present",
    desc: "Training as a full-stack developer with hands-on experience in modern web technologies.",
  },
];

const Qualification = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-700 to-pink-600 text-white p-6">
      <h1 className="text-5xl font-bold mb-10 drop-shadow-lg animate-fade-in">My Qualifications</h1>

      <div className="space-y-8 w-full max-w-3xl">
        {qualifications.map((qual, index) => (
          <div
            key={index}
            className="flex items-center bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
          >
            <div className="text-5xl text-blue-700 mr-6">{qual.icon}</div>
            <div>
              <h2 className="text-2xl font-semibold">{qual.title}</h2>
              <h3 className="text-lg font-medium text-gray-600">{qual.institution}</h3>
              <p className="text-gray-700">{qual.year}</p>
              <p className="text-gray-800 mt-2">{qual.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qualification;
