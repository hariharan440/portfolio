import React from "react";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/nexgen.png";
import proj4 from "../assets/proj4.png";
import proj5 from "../assets/proj5.png";
import proj6 from "../assets/roriri.png";
import proj7 from "../assets/infosmite.png";
import proj8 from "../assets/tarvelx.png";
import { Link } from "react-router-dom";

// Step 1: Create a project data array
const projects = [
  {
    id: 1,
    image: proj3,
    title: "Nexgen IT Academy",
    link: "/project/1",
    type: "external"
  },
  {
    id: 2,
    image: proj6,
    title: "Roriri Software",
    link: "/project/2",
    type: "external"
  },
  {
    id: 3,
    image: proj7,
    title: "InfoSmite",
    link: "/Site-under-construction",
    type: "internal"
  },
  {
    id: 4,
    image: proj1,
    title: "Food Recipe App",
    link: "project/4",
    type: "external"
  },
  {
    id: 5,
    image: proj2,
    title: "App Landing Page",
    link: "project/5",
    type: "external"
  },
  {
    id: 6,
    image: proj4,
    title: "Hotel Moon",
    link: "project/6",
    type: "external"
  },
  {
    id: 7,
    image: proj5,
    title: "Edie Homepage Challenge",
    link: "/Site-under-construction",
    type: "internal"
  },
  {
    id: 8,
    image: proj8,
    title: "Tavel Booking app",
    link: "/Site-under-construction",
    type: "internal"
  }
];

const Work = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto p-5 font-sans" id="work">
        <div className="pb-8">
          <p className="text-4xl mb-3 font-bold primary-color">Work</p>
          <p className="text-gray-400">Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Step 2: Map over projects array to render each project */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                h-[200px] bg-cover relative"
            >
              <img src={project.image} alt={project.title} />
              <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                <span className="text-2xl font-bold text-white tracking-wider">{project.title}</span>
                <div className="pt-8 text-center">
                  {project.type === "external" ? (
                    <a
                      href={project.link}
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        View
                      </button>
                    </a>
                  ) : (
                    <Link to={project.link}>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        View
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
