import React, { useState } from 'react';
import SpeakerButton from './SpeakerButton';
import { FaBriefcase, FaCalendarAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    company: "Bhumaha Solutions Private Limited",
    role: "Software Developer",
    timeline: "Apr 2026 – Nov 2026",
    overview: "Contributed to two core ERP modules: Customer Relationship Management (CRM) and Human Resource Management System (HRMS), developing full-stack module functionality and integrating APIs for enterprise workflows.",
    details: [
      "Contributed to two ERP modules: Customer Relationship Management (CRM) and Human Resource Management System (HRMS).",
      "Developed full-stack module functionality and integrated APIs to support enterprise application workflows.",
      "Used AI-assisted tools for coding, testing, debugging, and optimization."
    ],
    tags: ["ERP Systems", "CRM", "HRMS", "Full-Stack Development", "REST APIs", "AI-Assisted Dev"]
  },
  {
    id: 2,
    company: "Terraze",
    role: "Software Developer",
    timeline: "May 2025 – Apr 2026",
    overview: "Contributed to an AI-first CRM product across technical research, frontend development, and API integrations, while managing functional testing, client onboarding, and database management.",
    details: [
      "Contributed to an AI-first CRM product across technical research, frontend development, API integrations, and occasional backend service development.",
      "Performed functional, application workflow and API testing; investigated reported issues, documented bugs, and implemented fixes to improve product stability and functionality.",
      "Supported client onboarding and product delivery through in-person discussions and online meetings; guided clients through product features, clarified technical concerns, explained solutions, and coordinated fixes.",
      "Handled database-level client requests, including updating or removing records when required.",
      "Built a voice agent using AI libraries, orchestration layers, and finite-state architecture."
    ],
    tags: ["AI-First CRM", "Frontend Development", "API Testing & Debugging", "Client Onboarding", "Database Management", "Voice AI Agents"]
  },
  {
    id: 3,
    company: "Roriri Software Solutions",
    role: "MERN Stack Developer",
    timeline: "Apr 2024 – Sep 2024",
    overview: "Developed full-stack web applications using the MERN stack, building responsive user interfaces and RESTful APIs while collaborating in Agile teams to deliver production-ready solutions.",
    details: [
      "Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Built responsive user interfaces and RESTful APIs, collaborating with Agile teams to deliver production-ready solutions."
    ],
    tags: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Agile"]
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
    <section 
      id="experience"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 md:my-24 font-sans relative text-[#f4f4f6] overflow-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif' }}
    >
      {/* Ambient Background Radial Glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none"></div>

      {/* Section Header with Total Experience & Global Toggle */}
      <div className="mb-8 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            {"// CAREER & INDUSTRY TRACK RECORD"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 mb-2">
            Experience
          </h2>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-sm sm:text-base">
            <span className="text-zinc-400 font-normal">
              Professional career journey & enterprise systems impact
            </span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 rounded-full shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Total Experience: 2+ Years</span>
            </span>
          </div>
        </div>

        {/* Global Expand / Collapse Toggle */}
        <button
          onClick={toggleAll}
          className="self-start md:self-auto inline-flex items-center gap-2 text-xs font-mono font-medium text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-emerald-500/40 px-4 py-2 rounded-full transition-all shadow-sm cursor-pointer"
        >
          <span>{allExpanded ? 'Collapse All Details' : 'Expand All Details'}</span>
          {allExpanded ? (
            <FaChevronUp size={10} className="text-emerald-400" />
          ) : (
            <FaChevronDown size={10} className="text-emerald-400" />
          )}
        </button>
      </div>

      {/* Experience Cards Stack (Double-Bezel Glassmorphism) */}
      <div className="space-y-5 sm:space-y-6">
        {experiences.map((exp) => {
          const isExpanded = !!expandedIds[exp.id];
          return (
            <div 
              key={exp.id} 
              className="group relative p-1 rounded-[1.75rem] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent border border-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-all duration-300 overflow-hidden"
            >
              <div className="rounded-[1.5rem] bg-[#111115] border border-white/[0.06] p-5 sm:p-7 relative overflow-hidden">
                {/* Ambient Emerald Glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full opacity-0 group-hover:opacity-100 blur-[50px] transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10">
                  {/* Header: Company, Role, Timeline chip & Actions */}
                  <div 
                    className="flex flex-col sm:flex-row sm:items-start justify-between gap-3.5 mb-3.5 cursor-pointer"
                    onClick={() => toggleExpand(exp.id)}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all duration-300 shadow-sm mt-0.5">
                        <FaBriefcase size={16} />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                          {exp.company}
                        </h3>
                        <p className="text-xs sm:text-sm text-emerald-400 font-mono font-medium mt-0.5">
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-300 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full shadow-sm">
                        <FaCalendarAlt size={11} className="text-emerald-400" />
                        <span>{exp.timeline}</span>
                      </span>
                      <SpeakerButton text={`At ${exp.company}, working as ${exp.role}. ${exp.overview}`} />
                    </div>
                  </div>

                  {/* Role Overview */}
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-3.5 font-normal">
                    {exp.overview}
                  </p>

                  {/* Toggle Button for Details */}
                  <div className="flex items-center justify-between pt-1">
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 font-semibold transition-colors group/btn cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Key Work & Tech Stack' : 'Show Key Work & Tech Stack'}</span>
                      {isExpanded ? (
                        <FaChevronUp size={10} className="transform group-hover/btn:-translate-y-0.5 transition-transform" />
                      ) : (
                        <FaChevronDown size={10} className="transform group-hover/btn:translate-y-0.5 transition-transform" />
                      )}
                    </button>
                  </div>

                  {/* Collapsible Details & Tags Area */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? 'max-h-[500px] opacity-100 mt-3 pt-3.5 border-t border-white/[0.06]' : 'max-h-0 opacity-0 mt-0 pt-0'
                    }`}
                  >
                    {/* Detailed Achievements */}
                    {exp.details && exp.details.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {exp.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
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
                            className="text-[11px] font-mono text-zinc-300 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.08]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
