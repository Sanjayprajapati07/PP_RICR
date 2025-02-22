import React from "react";
import { FaCar, FaPlane, FaCamera, FaMusic, FaHiking } from "react-icons/fa";

const hobbies = [
  { icon: <FaCar />, title: "Driving", desc: "I love long drives and exploring new places." },
  { icon: <FaPlane />, title: "Traveling", desc: "Traveling helps me experience different cultures and cuisines." },
  { icon: <FaCamera />, title: "Photography", desc: "Capturing moments and landscapes is my passion." },
  { icon: <FaMusic />, title: "Music", desc: "Listening to music and playing instruments relaxes me." },
  { icon: <FaHiking />, title: "Hiking", desc: "I enjoy trekking through mountains and forests." },
];

const Hobbies = () => {
  return (
    <div className=" flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-700 to-pink-600 text-white p-6">
      <h1 className="text-5xl font-bold mb-10 drop-shadow-lg">My Hobbies</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white text-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-6xl text-purple-600 mb-4">{hobby.icon}</div>
            <h2 className="text-2xl font-semibold">{hobby.title}</h2>
            <p className="text-gray-700 text-center mt-2">{hobby.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
