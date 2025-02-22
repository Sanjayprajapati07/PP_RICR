import React from "react";
import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";

const experiences = [
  {
    icon: <FaGraduationCap />,
    title: "Fresher",
    year: "2025 (Expected)",
    desc: "I am a passionate fresher looking for opportunities to apply my skills in web development and software engineering.",
  },
  {
    icon: <FaCode />,
    title: "Full-Stack Development Training",
    institution: "RICR, Bhopal",
    year: "2024 - Present",
    desc: "Undergoing hands-on training in MERN stack, JavaScript, and modern web technologies.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Project Work & Internships",
    year: "Ongoing",
    desc: "Building real-world projects to gain practical experience in problem-solving, UI/UX design, and backend development.",
  },
];

const Experience = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-800 to-purple-600 text-white p-6">
      <h1 className="text-5xl font-bold mb-10 drop-shadow-lg">My Experience</h1>

      <div className="space-y-8 w-full max-w-3xl">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex items-center bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
          >
            <div className="text-5xl text-blue-700 mr-6">{exp.icon}</div>
            <div>
              <h2 className="text-2xl font-semibold">{exp.title}</h2>
              {exp.institution && <h3 className="text-lg font-medium text-gray-600">{exp.institution}</h3>}
              <p className="text-gray-700">{exp.year}</p>
              <p className="text-gray-800 mt-2">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

