import React, { useState } from "react";
import SpeakerButton from "./SpeakerButton";
import images from "../assets/index.js";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 9,
    image: images.repliq,
    title: "Repliq CRM",
    link: "/project/9",
    type: "internal",
    narration: "Repliq CRM. A comprehensive Customer Relationship Management platform designed to streamline sales pipelines and manage client data securely."
  },
  // {
  //   id: 10,
  //   image: images.proj2,
  //   title: "School Finance Platform",
  //   link: "/project/10",
  //   type: "internal",
  //   narration: "School Finance Platform. A dedicated financial tracking system tailored for educational institutions to manage tuitions, payroll, and reporting."
  // },
  {
    id: 1,
    image: images.proj7,
    title: "Terraze",
    link: "/project/3",
    type: "internal",
    narration: "Terraze. An AI-powered product and automation platform focused on intelligent workflows, API integration, and CRM experiences."
  },
  // {
  //   id: 2,
  //   image: images.proj6,
  //   title: "Roriri Software",
  //   link: "/project/2",
  //   type: "internal",
  // },
  {
    id: 3,
    image: images.proj3,
    title: "Nexgen IT Academy",
    link: "/project/1",
    type: "internal",
    narration: "Nexgen IT Academy. An educational platform offering a wide range of IT courses and certifications with a focus on practical learning."
  },
  {
    id: 6,
    image: images.proj4,
    title: "Hotel Moon",
    link: "/project/6",
    type: "internal",
    narration: "Hotel Moon. A clean and modern website showcasing various hotel options, amenities, and room bookings."
  },
  {
    id: 7,
    image: images.proj5,
    title: "Edie Homepage Challenge",
    link: "/site-under-construction",
    type: "internal",
    narration: "Edie Homepage Challenge. A responsive frontend design challenge."
  },
  {
    id: 8,
    image: images.proj8,
    title: "Travel Booking App",
    link: "/site-under-construction",
    type: "internal",
    narration: "Travel Booking App. An application for booking flights, hotels, and exploring destinations."
  },
];

const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div className="max-w-[1200px] mx-auto p-5 font-sans" id="work">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Work</p>
        <p className="text-gray-400">Check out some of my recent work</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedProjects.map((project) => (
          <div key={project.id} className='group relative bg-gradient-to-br from-[#161616] to-[#0a0a0a] border border-gray-800/80 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-[#3F2B96]/50 hover:shadow-[0_10px_30px_rgba(63,43,150,0.15)] transition-all duration-500 flex flex-col'>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#3F2B96] rounded-full opacity-0 group-hover:opacity-20 blur-[50px] transition-opacity duration-700 pointer-events-none z-0"></div>

            <div className="relative z-10 h-48 overflow-hidden border-b border-gray-800/80">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-[#3F2B96]/0 group-hover:bg-[#3F2B96]/20 transition-colors duration-500"></div>
            </div>

            <div className="relative z-10 p-6 flex flex-col flex-grow justify-between">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors">{project.title}</h3>
                {project.narration && <SpeakerButton text={project.narration} />}
              </div>
              <div className="mt-4">
                {project.type === "internal" ? (
                  <Link to={project.link}>
                    <button className="px-5 py-2.5 rounded-xl border border-gray-700 bg-[#1e1e1e] text-gray-300 font-medium hover:bg-gradient-to-r hover:from-[#3F2B96] hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 w-full flex items-center justify-center gap-2 shadow-sm hover:shadow-lg hover:shadow-purple-600/20">
                      View Details
                    </button>
                  </Link>
                ) : (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="px-5 py-2.5 rounded-xl border border-gray-700 bg-[#1e1e1e] text-gray-300 font-medium hover:bg-gradient-to-r hover:from-[#3F2B96] hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 w-full flex items-center justify-center gap-2 shadow-sm hover:shadow-lg hover:shadow-purple-600/20">
                      Live Demo
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length > 6 && (
        <div className="mt-10 flex justify-end">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors border border-gray-800 hover:border-[#3F2B96] bg-[#161616] px-6 py-3 rounded-xl shadow-lg"
          >
            <span className="font-semibold tracking-wide">
              {showAll ? 'Show Less' : 'View All Projects'}
            </span>
            {showAll ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Work;
