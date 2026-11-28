import React from "react";
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

const ProjectCard = ({ project }) => (
  <div className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 group relative bg-[#111115] border border-white/[0.08] rounded-2xl overflow-hidden hover:border-emerald-500/40 hover:shadow-[0_12px_32px_rgba(0,0,0,0.6)] transition-all duration-300 flex flex-col justify-between">
    {/* Ambient Glow */}
    <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full opacity-0 group-hover:opacity-100 blur-[40px] transition-opacity duration-500 pointer-events-none z-0"></div>

    <div>
      {/* Image Container */}
      <div className="relative z-10 h-36 sm:h-40 overflow-hidden border-b border-white/[0.06] bg-[#0a0a0d]">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111115] via-transparent to-black/20 pointer-events-none"></div>

        {/* Floating Category Pill */}
        {project.category && (
          <span className="absolute top-2.5 left-2.5 z-20 text-[10px] font-mono font-medium text-emerald-300 bg-black/85 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-emerald-500/30 shadow-sm">
            {project.category}
          </span>
        )}

        {/* Floating Speaker Button */}
        {project.narration && (
          <div className="absolute top-2.5 right-2.5 z-20">
            <SpeakerButton text={project.narration} />
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="relative z-10 p-4 sm:p-4.5 flex flex-col">
        <h3 className="text-base sm:text-lg font-bold text-zinc-100 group-hover:text-white transition-colors mb-1.5 truncate">
          {project.title}
        </h3>

        <p className="text-zinc-400 text-xs leading-relaxed mb-3 line-clamp-2 font-normal">
          {project.description}
        </p>

        {/* Tags */}
        {project.tags && (
          <div className="flex flex-wrap gap-1 mb-1">
            {project.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="text-[10px] font-mono text-zinc-300 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.08]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>

    {/* Action Footer */}
    <div className="relative z-10 px-4 pb-4 sm:px-4.5 sm:pb-4.5 pt-1.5">
      {project.type === "internal" ? (
        <Link to={project.link} className="block w-full">
          <button className="w-full py-2 px-3.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-200 font-semibold text-xs hover:bg-emerald-500 hover:text-zinc-950 hover:border-emerald-500 transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm group-hover:shadow-[0_4px_16px_rgba(16,185,129,0.25)] cursor-pointer">
            <span>View Project</span>
            <FaArrowRight size={10} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
      ) : (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full">
          <button className="w-full py-2 px-3.5 rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-200 font-semibold text-xs hover:bg-emerald-500 hover:text-zinc-950 hover:border-emerald-500 transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm group-hover:shadow-[0_4px_16px_rgba(16,185,129,0.25)] cursor-pointer">
            <span>Live Demo</span>
            <FaExternalLinkAlt size={10} className="transform group-hover:translate-x-0.5 transition-transform" />
          </button>
        </a>
      )}
    </div>
  </div>
);

const Work = () => {
  return (
    <section
      id="work"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 font-sans relative overflow-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif' }}
    >
      {/* Inline styles for continuous single-row marquee and hover pause */}
      <style>{`
        @keyframes singleRowMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-work-marquee-single {
          animation: singleRowMarquee 38s linear infinite;
        }
        .marquee-single-container:hover .animate-work-marquee-single {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ambient Radial Glow */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-emerald-500/[0.04] rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-emerald-600/[0.03] rounded-full blur-[130px] pointer-events-none"></div>

      {/* Header Container */}
      <div className="mb-8 sm:mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {"// SELECTED WORK & PRODUCTION BUILDS"}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 mb-2">
              Work
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-normal">
              Check out some of my recent work across enterprise CRM, smart manufacturing, and AI systems
            </p>
          </div>

          <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline-block">
            [ HOVER TO PAUSE & EXPLORE ]
          </span>
        </div>
      </div>

      {/* Single Continuous Moving Horizontal Row (Within Container-Width Layout) */}
      <div 
        className="w-full overflow-hidden select-none marquee-single-container"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 3%, black 97%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 3%, black 97%, transparent)',
        }}
      >
        <div className="flex items-stretch gap-5 w-max animate-work-marquee-single py-2">
          {/* Render double array for a seamless infinite loop */}
          {[...projects, ...projects].map((project, index) => (
            <ProjectCard key={`project-${project.id}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
