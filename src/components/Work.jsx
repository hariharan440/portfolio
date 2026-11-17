import React, { useState } from "react";
import SpeakerButton from "./SpeakerButton";
import images from "../assets/index.js";
import { Link } from "react-router-dom";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    image: images.repliq,
    title: "Repliq CRM",
    category: "CRM & ERP Platform",
    description: "Enterprise Customer Relationship Management platform designed to streamline sales pipelines, track interactions, and manage client data securely.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    link: "/project/1",
    type: "internal",
    narration: "Repliq CRM. A comprehensive Customer Relationship Management platform designed to streamline sales pipelines and manage client data securely."
  },
  {
    id: 2,
    image: images.tex,
    title: "Tex Master Pro",
    category: "Smart Manufacturing & IoT",
    description: "Intelligent manufacturing platform for apparel factories connecting IoT sewing machines, operators, and production lines with real-time analytics.",
    tags: ["IoT Integration", "Real-Time Monitoring", "Tailwind CSS", "Next.js"],
    link: "/project/2",
    type: "internal",
    narration: "Tex Master Pro. An intelligent manufacturing platform for apparel factories that connects sewing machines, operators, and production lines through IoT integration. Provides real-time production monitoring, operator management, automated data capture, factory dashboards, and analytics to improve productivity and operational efficiency, built with Next.js and Tailwind CSS."
  },
  {
    id: 3,
    image: images.proj7,
    title: "Terraze",
    category: "AI & Workflow Automation",
    description: "Intelligent AI-powered automation platform delivering workflow optimization, smart agent workflows, and CRM integrations.",
    tags: ["Next.js", "AI Agents", "API Integration", "Tailwind CSS"],
    link: "/project/3",
    type: "internal",
    narration: "Terraze. An AI-powered product and automation platform focused on intelligent workflows, API integration, and CRM experiences."
  },
  {
    id: 4,
    image: images.landing,
    title: "School Finance Platform",
    category: "FinTech & Education",
    description: "Dedicated financial tracking and management platform for educational institutions to handle tuitions, payroll, and reporting.",
    tags: ["React", "Tailwind CSS", "Data Analytics", "Financial Logic"],
    link: "/project/4",
    type: "internal",
    narration: "School Finance Platform. A dedicated financial tracking system tailored for educational institutions to manage tuitions, payroll, and reporting."
  },
  {
    id: 5,
    image: images.proj4,
    title: "Hotel Moon",
    category: "Hospitality & Booking",
    description: "Clean, responsive hospitality website showcasing hotel amenities, room booking workflows, and contemporary guest experiences.",
    tags: ["Responsive UI", "HTML5", "CSS3", "JavaScript"],
    link: "/project/5",
    type: "internal",
    narration: "Hotel Moon. A clean and modern website showcasing various hotel options, amenities, and room bookings."
  },
  {
    id: 6,
    image: images.proj8,
    title: "Travel Booking App",
    category: "Travel & Discovery",
    description: "Interactive travel booking and destination discovery application tailored for exploring flights, stays, and regional tours.",
    tags: ["React", "UI Components", "API Integration"],
    link: "/site-under-construction",
    type: "internal",
    narration: "Travel Booking App. An application for booking flights, hotels, and exploring destinations."
  },
  {
    id: 7,
    image: images.proj5,
    title: "Edie Homepage Challenge",
    category: "Frontend UI Challenge",
    description: "Responsive frontend challenge focusing on modern layout architecture, fluid typography, and clean design standards.",
    tags: ["UI/UX Design", "Responsive Layout", "CSS3", "JavaScript"],
    link: "/site-under-construction",
    type: "internal",
    narration: "Edie Homepage Challenge. A responsive frontend design challenge."
  },
];

const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 font-sans my-10 md:my-14" id="work">
      <div className="mb-6 sm:mb-8">
        <p className="text-3xl sm:text-4xl mb-2 font-bold primary-color">Work</p>
        <p className="text-gray-400 text-sm sm:text-base">Check out some of my recent work</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {displayedProjects.map((project) => (
          <div 
            key={project.id} 
            className='group relative bg-gradient-to-br from-[#141414] to-[#0c0c0c] border border-gray-800/80 rounded-2xl overflow-hidden hover:-translate-y-2 hover:border-[#3F2B96]/60 hover:shadow-[0_12px_35px_rgba(63,43,150,0.2)] transition-all duration-500 flex flex-col justify-between'
          >
            {/* Ambient Background Glow on hover */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#3F2B96] rounded-full opacity-0 group-hover:opacity-20 blur-[50px] transition-opacity duration-700 pointer-events-none z-0"></div>

            <div>
              {/* Image Container */}
              <div className="relative z-10 h-52 sm:h-48 overflow-hidden border-b border-gray-800/80 bg-[#0a0a0a]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>

                {/* Floating Category Pill */}
                {project.category && (
                  <span className="absolute top-3 left-3 z-20 text-[11px] font-semibold text-purple-300 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-purple-500/40 shadow-sm">
                    {project.category}
                  </span>
                )}

                {/* Floating Speaker Button */}
                {project.narration && (
                  <div className="absolute top-3 right-3 z-20">
                    <SpeakerButton text={project.narration} />
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="relative z-10 p-5 sm:p-6 flex flex-col">
                <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                {project.tags && (
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] font-mono text-gray-400 bg-[#1a1a1a] px-2 py-0.5 rounded border border-gray-800/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Action Footer */}
            <div className="relative z-10 px-5 pb-5 sm:px-6 sm:pb-6 pt-2">
              {project.type === "internal" ? (
                <Link to={project.link} className="block w-full">
                  <button className="w-full py-2.5 px-4 rounded-xl border border-gray-700/80 bg-[#1a1a1a] text-gray-200 font-semibold text-sm hover:bg-gradient-to-r hover:from-[#3F2B96] hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 shadow-sm group-hover:shadow-[0_4px_20px_rgba(168,85,247,0.25)]">
                    <span>View Project</span>
                    <FaArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              ) : (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <button className="w-full py-2.5 px-4 rounded-xl border border-gray-700/80 bg-[#1a1a1a] text-gray-200 font-semibold text-sm hover:bg-gradient-to-r hover:from-[#3F2B96] hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 shadow-sm group-hover:shadow-[0_4px_20px_rgba(168,85,247,0.25)]">
                    <span>Live Demo</span>
                    <FaExternalLinkAlt size={11} className="transform group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {projects.length > 6 && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all border border-gray-800 hover:border-[#3F2B96] bg-[#141414] px-6 py-3 rounded-full shadow-lg hover:shadow-purple-950/30"
          >
            <span className="font-semibold text-sm tracking-wide">
              {showAll ? 'Show Less' : 'View All Projects'}
            </span>
            {showAll ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-translate-y-0.5 transition-transform text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
