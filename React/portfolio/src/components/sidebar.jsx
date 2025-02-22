import React from "react";
import { NavLink } from "react-router-dom";
import pic from "../assets/profile pic.jpeg";

const Sidebar = () => {
  return (
    <>
      {/* Sidebar with Gradient & Shadow */}
      <div className="w-85 h-[100vh] bg-gradient-to-b from-blue-900 to-teal-700 text-white shadow-xl rounded-r-xl p-5 transition-all duration-500">
        
        {/* Profile Image with Shadow & Hover Glow */}
        <div className="flex justify-center">
          <img
            src={pic}
            alt="Sanjay"
            className="border-4 border-white rounded-full p-2 w-48 h-48  shadow-lg hover:shadow-2xl hover:shadow-cyan-400 transition duration-300"
          />
        </div>

        {/* Name with Shadow */}
        <span className="text-3xl font-bold flex justify-center p-3 drop-shadow-lg">
          Sanjay Kumar
        </span>

        {/* Navigation Links with Hover Shadow Effect */}
        <div className="flex flex-col items-center mt-5">
          <ol className="space-y-4">
            {[
              { path: "/", label: "Home" },
              { path: "/exp", label: "Experience" },
              { path: "/pro", label: "Projects" },
              { path: "/Qli", label: "Qualification" },
              { path: "/hob", label: "Hobbies" },
              { path: "/con", label: "Contact Me" },
            ].map((item, index) => (
              <li key={index} className="w-full text-center">
                <NavLink
                  to={item.path}
                  className="text-white text-xl font-semibold py-3 px-6 block rounded-md transition duration-300 bg-gray-800 hover:bg-cyan-500 hover:text-white hover:shadow-xl hover:shadow-cyan-400"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
