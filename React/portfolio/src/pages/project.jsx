// import React from "react";
// import { FaCode, FaLaptopCode, FaUserGraduate } from "react-icons/fa";
// import profilePic from "../assets/profile pic.jpeg"; // Add your profile picture here

// const Project = () => {
//   return (
//     <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-800 to-purple-700 text-white p-6">
//       <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">About Me</h1>

//       <div className="flex flex-col md:flex-row items-center bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 max-w-4xl">
//         {/* Profile Image */}
//         <img
//           src={profilePic}
//           alt="Profile"
//           className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg mb-6 md:mb-0"
//         />

//         {/* About Details */}
//         <div className="md:ml-6 text-center md:text-left">
//           <h2 className="text-3xl font-semibold text-blue-700">Sanjay Kumar</h2>
//           <h3 className="text-lg text-gray-600 font-medium">Full-Stack Developer | Fresher</h3>
//           <p className="text-gray-800 mt-4">
//             I'm a passionate **Full-Stack Developer** currently pursuing my **B.Tech in Computer Science** 
//             at **Radharaman Engineering College, Bhopal (Batch 2021-2025)**. I love building web applications 
//             and learning new technologies to solve real-world problems.
//           </p>

//           {/* Skills Section */}
//           <div className="mt-4 flex justify-center md:justify-start gap-4">
//             <div className="flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-lg shadow-md">
//               <FaCode className="mr-2" /> Web Development
//             </div>
//             <div className="flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-lg shadow-md">
//               <FaLaptopCode className="mr-2" /> MERN Stack
//             </div>
//             <div className="flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-lg shadow-md">
//               <FaUserGraduate className="mr-2" /> Learning & Growing
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;



import React from "react";
import { FaGamepad, FaComments, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion for better animation

const projects = [
  {
    icon: <FaGamepad />,
    title: "Ludo Game 🎲",
    desc: "A multiplayer online Ludo game with real-time interaction.",
    link: "#",
    bg: "bg-blue-500",
  },
  {
    icon: <FaComments />,
    title: "Chat App 💬",
    desc: "A real-time chat application with mongodb backend.",
    link: "#",
    bg: "bg-green-500",
  },
  {
    icon: <FaShoppingCart />,
    title: "E-Commerce Website 🛒",
    desc: "An online shopping platform with secure payment integration.",
    link: "#",
    bg: "bg-purple-500",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-700 to-pink-600 text-white p-6">
      <h1 className="text-5xl font-bold mb-10 drop-shadow-lg">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center ${project.bg} text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div className="text-6xl mb-4" animate={{ y: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              {project.icon}
            </motion.div>
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="text-center mt-2">{project.desc}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
