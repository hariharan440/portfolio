import React, { useState } from 'react';
import SpeakerButton from './SpeakerButton';

const experiences = [
  {
    id: 1,
    company: "Bhumaha Solutions Private Limited",
    role: "Software developer",
    timeline: "Apr 2026 - Present",
    overview: "Developed and architected full-stack modules for an ERP product, integrating APIs, optimizing scalability and performance, and implementing AI-powered business workflows.",
    details: [
      "Leveraged AI-assisted development and coding tools for architecture design, rapid implementation, unit testing, debugging, and optimization, reducing development time while maintaining code quality and reliability."
    ]
  },
  {
    id: 2,
    company: "Terraze",
    role: "Software developer",
    timeline: "May 2025 - Apr 2026",
    overview: "Developed AI applications and automation workflows, contributing to product architecture, frontend development, and CRM workflows for lead management, customer interactions, and business automation.",
    details: [
      "Worked on a voice agent using AI libraries, orchestration layers, and finite-state architecture for reliable conversational workflows.",
      "Engaged with clients through product demonstrations, presentations, and field operations, while supporting marketing and product adoption."
    ]
  },
  {
    id: 3,
    company: "Roriri Software Solutions",
    role: "MERN Stack Developer",
    timeline: "Apr - Sep 2024",
    overview: "Developed full-stack web applications using the MERN stack, building responsive user interfaces and RESTful APIs while collaborating in agile teams to deliver scalable, production-ready solutions.",
    details: []
  }
];

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleExpand = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <div className='max-w-[1200px] mx-auto p-5 font-sans my-12' id='experience'>
      <div className='pb-8'>
        <p className='text-3xl md:text-4xl mb-3 font-bold primary-color'>Experience</p>
        <p className='text-gray-400'>My professional journey</p>
      </div>
      <div className='flex flex-col gap-6'>
        {displayedExperiences.map((exp) => (
          <div key={exp.id} className='group bg-gradient-to-br from-[#161616] to-[#0a0a0a] border border-gray-800/80 rounded-2xl p-6 md:p-8 hover:border-[#3F2B96]/50 hover:shadow-[0_0_30px_rgba(63,43,150,0.15)] transition-all duration-500 relative overflow-hidden'>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3F2B96] rounded-full opacity-0 group-hover:opacity-[0.07] blur-[60px] transition-opacity duration-700 pointer-events-none"></div>

            <div className="relative z-10">
              <div
                className='flex flex-col md:flex-row md:justify-between md:items-start cursor-pointer'
                onClick={() => toggleExpand(exp.id)}
              >
                <div>
                  <div className="flex items-center gap-4">
                    <h3 className='text-xl md:text-3xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300 tracking-wide'>{exp.company}</h3>
                    <SpeakerButton text={`At ${exp.company}, working as ${exp.role}. ${exp.overview}`} />
                  </div>
                  <p className='text-lg text-gray-400 font-medium mt-1'>{exp.role}</p>
                </div>
                <div className='flex flex-row md:flex-col justify-between items-center md:items-end mt-4 md:mt-0 w-full md:w-auto'>
                  {exp.timeline && <span className='text-gray-500 font-semibold text-sm uppercase tracking-wider md:mb-3'>{exp.timeline}</span>}
                  <button className='w-10 h-10 rounded-full bg-[#1e1e1e] border border-gray-700/50 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-[#3F2B96]/50 group-hover:bg-[#3F2B96]/10 transition-all duration-300'>
                    {expandedId === exp.id ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedId === exp.id ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'}`}>
                <div className='pt-6 border-t border-gray-800/50'>
                  <p className='text-gray-300 mb-6 font-medium leading-relaxed text-lg'>{exp.overview}</p>
                  <ul className='space-y-4'>
                    {exp.details.map((detail, index) => (
                      <li key={index} className='flex items-start gap-4'>
                        <span className='mt-2 w-1.5 h-1.5 rounded-full bg-[#3F2B96] flex-shrink-0 shadow-[0_0_8px_rgba(63,43,150,0.8)]'></span>
                        <span className='text-gray-400 leading-relaxed'>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {experiences.length > 3 && (
        <div className='mt-8 flex justify-center'>
          <button
            onClick={() => setShowAll(!showAll)}
            className='px-6 py-2 border border-gray-600 rounded-lg text-gray-300 hover:text-white hover:border-[#3F2B96] transition-colors font-medium'
          >
            {showAll ? 'Show Less' : 'See All Experiences'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Experience;
