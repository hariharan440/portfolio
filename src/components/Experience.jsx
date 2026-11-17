import React, { useState } from 'react';
import SpeakerButton from './SpeakerButton';
import { FaBriefcase, FaCalendarAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    company: "Bhumaha Solutions Private Limited",
    role: "Software Developer",
    timeline: "Apr 2026 - Nov 2026",
    overview: "Developed and architected full-stack modules for an ERP product, integrating APIs, optimizing scalability and performance, and implementing AI-powered business workflows.",
    details: [
      "Leveraged AI-assisted development and coding tools for architecture design, rapid implementation, unit testing, debugging, and optimization, reducing development time while maintaining code quality and reliability."
    ],
    tags: ["ERP Systems", "Full-Stack Development", "REST APIs", "AI Workflows", "System Scalability"]
  },
  {
    id: 2,
    company: "Terraze",
    role: "Software Developer",
    timeline: "May 2025 - Apr 2026",
    overview: "Developed AI applications and automation workflows, contributing to product architecture, frontend development, and CRM workflows for lead management, customer interactions, and business automation.",
    details: [
      "Worked on a voice agent using AI libraries, orchestration layers, and finite-state architecture for reliable conversational workflows.",
      "Engaged with clients through product demonstrations, presentations, and field operations, while supporting marketing and product adoption."
    ],
    tags: ["AI Agents", "Voice AI", "CRM Workflows", "Workflow Automation", "Client Presentations"]
  },
  {
    id: 3,
    company: "Roriri Software Solutions",
    role: "MERN Stack Developer",
    timeline: "Apr - Sep 2024",
    overview: "Developed full-stack web applications using the MERN stack, building responsive user interfaces and RESTful APIs while collaborating in agile teams to deliver scalable, production-ready solutions.",
    details: [
      "Built dynamic, responsive web interfaces with React and Tailwind CSS, integrating performant backend APIs.",
      "Collaborated in agile development cycles to deliver clean, maintainable code meeting client specifications."
    ],
    tags: ["MERN Stack", "React", "Node.js", "Express.js", "MongoDB", "Agile"]
  }
];

const Experience = () => {
  // State to manage individual expanded states
  const [expandedIds, setExpandedIds] = useState({ 1: true });

  const toggleExpand = (id) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const allExpanded = experiences.every((exp) => expandedIds[exp.id]);

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedIds({});
    } else {
      const all = {};
      experiences.forEach((exp) => {
        all[exp.id] = true;
      });
      setExpandedIds(all);
    }
  };

  return (
    <div className='max-w-[1200px] mx-auto px-4 sm:px-6 font-sans my-10 md:my-14' id='experience'>
      {/* Section Header with Total Experience & Global Toggle */}
      <div className='mb-6 sm:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4'>
        <div>
          <p className='text-3xl sm:text-4xl mb-2 font-bold primary-color'>Experience</p>
          <div className='flex flex-wrap items-center gap-2.5 sm:gap-3 text-sm sm:text-base'>
            <span className='text-gray-400'>Professional career journey & enterprise systems impact</span>
            <span className='text-gray-600 hidden sm:inline'>•</span>
            <span className='inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-purple-300 bg-purple-950/40 border border-purple-800/50 px-3 py-1 rounded-full shadow-sm'>
              <span className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse'></span>
              <span>Total Experience: 2+ Years</span>
            </span>
          </div>
        </div>

        {/* Global Expand / Collapse Toggle */}
        <button
          onClick={toggleAll}
          className='self-start md:self-auto inline-flex items-center gap-2 text-xs font-medium text-gray-300 hover:text-white bg-[#141414] hover:bg-[#1a1a1a] border border-gray-800 hover:border-purple-500/50 px-3.5 py-1.5 rounded-full transition-all shadow-sm'
        >
          <span>{allExpanded ? 'Collapse All Details' : 'Expand All Details'}</span>
          {allExpanded ? <FaChevronUp size={10} className="text-purple-400" /> : <FaChevronDown size={10} className="text-purple-400" />}
        </button>
      </div>

      {/* Experience Cards Stack */}
      <div className='space-y-5 sm:space-y-6'>
        {experiences.map((exp) => {
          const isExpanded = !!expandedIds[exp.id];
          return (
            <div 
              key={exp.id} 
              className='group relative bg-gradient-to-br from-[#141414] to-[#0c0c0c] border border-gray-800/80 rounded-2xl p-5 sm:p-7 hover:-translate-y-1 hover:border-[#3F2B96]/60 hover:shadow-[0_12px_35px_rgba(63,43,150,0.18)] transition-all duration-300 overflow-hidden'
            >
              {/* Ambient Purple Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#3F2B96] rounded-full opacity-0 group-hover:opacity-15 blur-[50px] transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10">
                {/* Header: Company, Role, Timeline chip & Actions */}
                <div 
                  className="flex flex-col sm:flex-row sm:items-start justify-between gap-3.5 mb-3.5 cursor-pointer"
                  onClick={() => toggleExpand(exp.id)}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#1e1e1e] border border-gray-700/60 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-105 group-hover:border-purple-500/50 group-hover:bg-purple-950/20 transition-all shadow-sm mt-0.5">
                      <FaBriefcase size={16} />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-xs sm:text-base text-gray-400 font-medium">
                        {exp.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-purple-300 bg-purple-950/40 border border-purple-800/50 px-3 py-1.5 rounded-full shadow-sm">
                      <FaCalendarAlt size={10} className="text-purple-400" />
                      <span>{exp.timeline}</span>
                    </span>
                    <SpeakerButton text={`At ${exp.company}, working as ${exp.role}. ${exp.overview}`} />
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(exp.id);
                      }}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#181818] border border-gray-700/60 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-950/20 transition-all shadow-sm"
                      aria-label={isExpanded ? "Collapse details" : "Expand details"}
                      title={isExpanded ? "Collapse details" : "Expand details"}
                    >
                      {isExpanded ? <FaChevronUp size={11} /> : <FaChevronDown size={11} />}
                    </button>
                  </div>
                </div>

                {/* Role Overview */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-3">
                  {exp.overview}
                </p>

                {/* Toggle Button for Details */}
                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="inline-flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                  >
                    <span>{isExpanded ? 'Hide Key Work & Tech Stack' : 'Show Key Work & Tech Stack'}</span>
                    {isExpanded ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
                  </button>
                </div>

                {/* Collapsible Details & Tags Area */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-[500px] opacity-100 mt-3 pt-3 border-t border-gray-800/60' : 'max-h-0 opacity-0 mt-0 pt-0'
                  }`}
                >
                  {/* Detailed Achievements */}
                  {exp.details && exp.details.length > 0 && (
                    <ul className="space-y-2 mb-3.5">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#3F2B96] to-purple-500 mt-2 shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technology & Domain Tags */}
                  {exp.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="text-[11px] font-mono text-gray-400 bg-[#1a1a1a] px-2.5 py-1 rounded-md border border-gray-800/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
