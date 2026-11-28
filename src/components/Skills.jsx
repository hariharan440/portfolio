import React, { useState } from 'react';
import n8nIcon from '../assets/n8n.png';

// Official brand vector icons from react-icons/si
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPrisma,
  SiDocker,
  SiSupabase,
  SiGit,
  SiGithub,
  SiPostman,
  SiSwagger,
  SiNotion,
  SiCanva,
  SiGoogle,
  SiOpenai
} from 'react-icons/si';

// Domain & specialized icons from react-icons/fa
import {
  FaCode,
  FaServer,
  FaRobot,
  FaMicrophoneAlt,
  FaTasks,
  FaTools,
  FaProjectDiagram,
  FaUsersCog,
  FaBrain,
  FaRocket,
  FaBroadcastTower,
  FaWaveSquare,
  FaMicrophone,
  FaPhoneSquareAlt,
  FaCogs,
  FaSitemap,
  FaHeadset,
  FaDatabase,
  FaCheckDouble,
  FaFileInvoice,
  FaTicketAlt,
  FaBook,
  FaHandshake,
  FaFileWord,
  FaFileExcel,
  FaLightbulb
} from 'react-icons/fa';

// Helper to render exact colorful brand icons with their authentic colors
const renderSkillIcon = (name, size = 14) => {
  switch (name) {
    // Frontend
    case "React":
    case "React Native":
      return <SiReact className="text-[#61DAFB] shrink-0" size={size} />;
    case "Next.js":
      return <SiNextdotjs className="text-white shrink-0" size={size} />;
    case "Angular":
      return <SiAngular className="text-[#DD0031] shrink-0" size={size} />;
    case "TypeScript":
      return <SiTypescript className="text-[#3178C6] shrink-0" size={size} />;
    case "JavaScript":
      return <SiJavascript className="text-[#F7DF1E] shrink-0" size={size} />;
    case "HTML":
    case "HTML5":
      return <SiHtml5 className="text-[#E34F26] shrink-0" size={size} />;
    case "CSS":
    case "CSS3":
      return <SiCss3 className="text-[#1572B6] shrink-0" size={size} />;
    case "Tailwind CSS":
      return <SiTailwindcss className="text-[#06B6D4] shrink-0" size={size} />;
    case "Bootstrap":
      return <SiBootstrap className="text-[#7952B3] shrink-0" size={size} />;
    case "PrimeNG":
      return <span className="text-[#E23237] font-extrabold text-[12px] leading-none shrink-0">◆</span>;

    // Backend & Databases
    case "Node.js":
      return <SiNodedotjs className="text-[#5FA04E] shrink-0" size={size} />;
    case "Express.js":
      return <SiExpress className="text-zinc-200 shrink-0" size={size} />;
    case "REST APIs":
      return <FaServer className="text-[#10B981] shrink-0" size={size - 1} />;
    case "PostgreSQL":
      return <SiPostgresql className="text-[#4169E1] shrink-0" size={size} />;
    case "MongoDB":
      return <SiMongodb className="text-[#47A248] shrink-0" size={size} />;
    case "MySQL":
      return <SiMysql className="text-[#4479A1] shrink-0" size={size} />;
    case "Prisma":
      return <SiPrisma className="text-white shrink-0" size={size} />;

    // AI & Automation
    case "LLM":
      return <SiOpenai className="text-[#10A37F] shrink-0" size={size} />;
    case "RAG":
      return <FaDatabase className="text-[#06B6D4] shrink-0" size={size - 1} />;
    case "LangChain":
      return <FaRobot className="text-[#10B981] shrink-0" size={size - 1} />;
    case "LangGraph":
      return <FaProjectDiagram className="text-[#3B82F6] shrink-0" size={size - 1} />;
    case "CrewAI":
      return <FaUsersCog className="text-[#EC4899] shrink-0" size={size - 1} />;
    case "n8n":
    case "n8n Automation":
      return <img src={n8nIcon} className="w-3.5 h-3.5 object-contain shrink-0" alt="n8n" />;
    case "AI Agents":
      return <FaRobot className="text-[#A855F7] shrink-0" size={size - 1} />;
    case "AI Automation":
      return <FaCogs className="text-[#10B981] shrink-0" size={size - 1} />;
    case "Prompt Engineering":
      return <FaLightbulb className="text-[#F59E0B] shrink-0" size={size - 1} />;
    case "Tool Calling":
      return <FaTools className="text-[#EAB308] shrink-0" size={size - 1} />;
    case "Gemini":
      return <SiGoogle className="text-[#4285F4] shrink-0" size={size} />;

    // Voice AI & Dev Tools
    case "Claude":
      return <FaBrain className="text-[#D97706] shrink-0" size={size - 1} />;
    case "Antigravity":
      return <FaRocket className="text-[#8B5CF6] shrink-0" size={size - 1} />;
    case "CodeX":
      return <FaCode className="text-[#10B981] shrink-0" size={size - 1} />;
    case "LiveKit":
    case "Voice AI & LiveKit":
      return <FaBroadcastTower className="text-[#06B6D4] shrink-0" size={size - 1} />;
    case "Soniox":
      return <FaWaveSquare className="text-[#3B82F6] shrink-0" size={size - 1} />;
    case "ElevenLabs":
      return <FaMicrophone className="text-[#F43F5E] shrink-0" size={size - 1} />;
    case "SIP / Telephony":
      return <FaPhoneSquareAlt className="text-[#10B981] shrink-0" size={size - 1} />;

    // IT & Operations
    case "ERP & CRM Systems":
      return <FaCogs className="text-[#F59E0B] shrink-0" size={size - 1} />;
    case "Business Process Management":
    case "Business Process Mgmt":
      return <FaSitemap className="text-[#6366F1] shrink-0" size={size - 1} />;
    case "Application Support":
      return <FaHeadset className="text-[#3B82F6] shrink-0" size={size - 1} />;
    case "Data Management":
      return <FaDatabase className="text-[#06B6D4] shrink-0" size={size - 1} />;
    case "Data Validation":
      return <FaCheckDouble className="text-[#10B981] shrink-0" size={size - 1} />;
    case "Report Generation":
      return <FaFileInvoice className="text-[#8B5CF6] shrink-0" size={size - 1} />;
    case "Ticket Management":
      return <FaTicketAlt className="text-[#EC4899] shrink-0" size={size - 1} />;
    case "Documentation":
      return <FaBook className="text-[#F97316] shrink-0" size={size - 1} />;
    case "Client & Vendor Coordination":
      return <FaHandshake className="text-[#14B8A6] shrink-0" size={size - 1} />;

    // Infrastructure & Productivity
    case "Docker":
      return <SiDocker className="text-[#2496ED] shrink-0" size={size} />;
    case "Supabase":
      return <SiSupabase className="text-[#3ECF8E] shrink-0" size={size} />;
    case "Git":
    case "Git & GitHub":
      return <SiGit className="text-[#F05032] shrink-0" size={size} />;
    case "GitHub":
      return <SiGithub className="text-white shrink-0" size={size} />;
    case "Postman":
      return <SiPostman className="text-[#FF6C37] shrink-0" size={size} />;
    case "Swagger":
      return <SiSwagger className="text-[#85EA2D] shrink-0" size={size} />;
    case "Microsoft Word":
      return <FaFileWord className="text-[#2B579A] shrink-0" size={size - 1} />;
    case "Microsoft Excel":
      return <FaFileExcel className="text-[#217346] shrink-0" size={size - 1} />;
    case "Notion":
      return <SiNotion className="text-white shrink-0" size={size} />;
    case "Canva":
      return <SiCanva className="text-[#00C4CC] shrink-0" size={size} />;

    default:
      return <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>;
  }
};

const marqueeRow1 = [
  { name: "React", level: "Advanced", category: "Frontend" },
  { name: "Next.js", level: "Advanced", category: "Frontend" },
  { name: "Node.js", level: "Advanced", category: "Backend" },
  { name: "LLM", level: "Advanced", category: "AI & Automation" },
  { name: "TypeScript", level: "Advanced", category: "Frontend" },
  { name: "RAG", level: "Proficient", category: "AI & Automation" },
  { name: "REST APIs", level: "Proficient", category: "Backend" },
  { name: "ERP & CRM Systems", level: "Advanced", category: "Enterprise" },
  { name: "AI Agents", level: "Proficient", category: "AI & Automation" },
  { name: "Tailwind CSS", level: "Advanced", category: "Frontend" },
  { name: "MySQL", level: "Proficient", category: "Backend" },
  { name: "LangChain", level: "Proficient", category: "AI & Automation" },
  { name: "Application Support", level: "Advanced", category: "Enterprise" },
  { name: "Docker", level: "Solid", category: "DevOps" }
];

const marqueeRow2 = [
  { name: "Angular", level: "Proficient", category: "Frontend" },
  { name: "Express.js", level: "Advanced", category: "Backend" },
  { name: "MongoDB", level: "Proficient", category: "Database" },
  { name: "CrewAI", level: "Proficient", category: "AI & Automation" },
  { name: "Voice AI & LiveKit", level: "Proficient", category: "Voice AI" },
  { name: "PostgreSQL", level: "Solid", category: "Database" },
  { name: "n8n Automation", level: "Proficient", category: "Automation" },
  { name: "Git & GitHub", level: "Advanced", category: "Tooling" },
  { name: "Business Process Management", level: "Advanced", category: "Enterprise" },
  { name: "React Native", level: "Proficient", category: "Mobile" },
  { name: "Prompt Engineering", level: "Proficient", category: "AI & Automation" },
  { name: "Supabase", level: "Solid", category: "Backend" }
];

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    domain: "Primary Specialty",
    icon: FaCode,
    description: "Architecting responsive, high-performance web applications and fluid client-side interfaces.",
    skills: ["Angular", "React", "React Native", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "PrimeNG"]
  },
  {
    id: "backend",
    title: "Backend & Databases",
    domain: "Core Architecture",
    icon: FaServer,
    description: "Developing robust server-side APIs, database schemas, and microservice business logic.",
    skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB", "MySQL", "Prisma"]
  },
  {
    id: "ai",
    title: "AI & Automation",
    domain: "Intelligent Systems",
    icon: FaRobot,
    description: "Building autonomous agentic workflows, LLM orchestration layers, and workflow automations.",
    skills: ["LLM", "RAG", "LangChain", "LangGraph", "CrewAI", "n8n", "AI Agents", "AI Automation", "Prompt Engineering", "Tool Calling", "Gemini"]
  },
  {
    id: "voice",
    title: "Voice AI & AI Dev Tools",
    domain: "Next Frontier",
    icon: FaMicrophoneAlt,
    description: "Real-time conversational agents, audio streaming pipelines, and AI engineering harnesses.",
    skills: ["Claude", "Antigravity", "CodeX", "LiveKit", "Soniox", "ElevenLabs", "SIP / Telephony"]
  },
  {
    id: "operations",
    title: "IT & Business Operations",
    domain: "Enterprise Systems",
    icon: FaTasks,
    description: "Enterprise ERP/CRM platform workflows, ticket troubleshooting, data validation, and client support.",
    skills: ["ERP & CRM Systems", "Business Process Management", "Application Support", "Data Management", "Data Validation", "Report Generation", "Ticket Management", "Documentation", "Client & Vendor Coordination"]
  },
  {
    id: "infra",
    title: "Infrastructure & Productivity",
    domain: "Tooling & DevOps",
    icon: FaTools,
    description: "Containerization, version control, API testing suites, and team collaboration tooling.",
    skills: ["Docker", "Supabase", "Git", "GitHub", "Postman", "Swagger", "Microsoft Word", "Microsoft Excel", "Notion", "Canva"]
  }
];

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCategories = activeFilter === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeFilter);

  return (
    <section 
      id="skills"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 font-sans relative text-[#f4f4f6] overflow-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif' }}
    >
      {/* Inline styles for the dual counter-scrolling marquees and hover pauses */}
      <style>{`
        @keyframes skillsMarqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes skillsMarqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-skills-left {
          animation: skillsMarqueeLeft 32s linear infinite;
        }
        .animate-skills-right {
          animation: skillsMarqueeRight 36s linear infinite;
        }
        .skills-marquee-container:hover .animate-skills-left,
        .skills-marquee-container:hover .animate-skills-right {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ambient Background Radial Glows (Obsidian + Emerald) */}
      <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-emerald-500/[0.05] rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-emerald-600/[0.03] rounded-full blur-[140px] pointer-events-none"></div>

      {/* Section Header */}
      <div className="mb-10 sm:mb-14">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          {"// TECHNOLOGY & EXPERTISE"}
        </span>
        {/* Uppercase Display Heading from new.md */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.08] text-zinc-100 uppercase mb-3">
          BEYOND THE CODE .
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-2xl leading-relaxed">
          Technical stack, AI engineering, enterprise ERP/CRM systems, and scalable full-stack architectures.
        </p>
      </div>

      {/* Dual Counter-Scrolling Marquees with Colorful Brand Icons */}
      <div className="mb-14 sm:mb-16 skills-marquee-container flex flex-col gap-3.5 overflow-hidden select-none">
        {/* Top Track (Moves Left: 32s linear infinite) */}
        <div 
          className="w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}
        >
          <div className="flex items-center gap-3 w-max animate-skills-left py-1">
            {[...marqueeRow1, ...marqueeRow1].map((tech, index) => (
              <div
                key={`row1-${tech.name}-${index}`}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all duration-200 shadow-2xs group"
              >
                {/* Authentic Brand Icon */}
                <span className="transform group-hover:scale-110 transition-transform duration-200">
                  {renderSkillIcon(tech.name, 16)}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-200 tracking-tight whitespace-nowrap">
                  {tech.name}
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                  tech.level === 'Advanced' 
                    ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300' 
                    : 'bg-white/[0.04] border-white/[0.08] text-zinc-400'
                }`}>
                  {tech.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Track (Moves Right: 36s linear infinite) */}
        <div 
          className="w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          }}
        >
          <div className="flex items-center gap-3 w-max animate-skills-right py-1">
            {[...marqueeRow2, ...marqueeRow2].map((tech, index) => (
              <div
                key={`row2-${tech.name}-${index}`}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all duration-200 shadow-2xs group"
              >
                {/* Authentic Brand Icon */}
                <span className="transform group-hover:scale-110 transition-transform duration-200">
                  {renderSkillIcon(tech.name, 16)}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-zinc-200 tracking-tight whitespace-nowrap">
                  {tech.name}
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                  tech.level === 'Advanced' 
                    ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300' 
                    : 'bg-white/[0.04] border-white/[0.08] text-zinc-400'
                }`}>
                  {tech.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Technology Ecosystem & Asymmetric Stack Breakdown */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
            {"// LIVE TECHNOLOGY ECOSYSTEM"}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 tracking-tight">
            Specialized Engineering Domains & Competencies
          </h3>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.08] p-1 rounded-xl w-fit flex-wrap">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
            }`}
          >
            All (6)
          </button>
          <button
            onClick={() => setActiveFilter('frontend')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              activeFilter === 'frontend'
                ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveFilter('backend')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              activeFilter === 'backend'
                ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setActiveFilter('ai')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              activeFilter === 'ai'
                ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
            }`}
          >
            AI & Automation
          </button>
        </div>
      </div>

      {/* Asymmetric Stack Breakdown Cards with Colorful Icons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div 
              key={category.id}
              className="group relative p-1 rounded-[1.75rem] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent border border-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="rounded-[1.5rem] bg-[#111115] border border-white/[0.06] p-5 sm:p-6 flex flex-col justify-between h-full overflow-hidden relative">
                {/* Ambient Emerald Glow on Hover */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-start justify-between gap-3 mb-3 pb-3.5 border-b border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all duration-300 shadow-sm">
                        <Icon size={16} />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-zinc-100 group-hover:text-white transition-colors tracking-tight">
                          {category.title}
                        </h4>
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                          {category.domain}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Category Description */}
                  <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed mb-4 font-normal">
                    {category.description}
                  </p>

                  {/* All Original Skills Chips with Colorful Brand Icons */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
                    {category.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.06] text-zinc-200 rounded-lg text-xs font-mono transition-all duration-200 cursor-default select-none group/chip shadow-2xs"
                      >
                        <span className="transform group-hover/chip:scale-110 transition-transform duration-200">
                          {renderSkillIcon(skill, 13)}
                        </span>
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Simulated Live Terminal Strip (from new.md Section 5) */}
      <div className="mt-10 sm:mt-12 p-1 rounded-2xl bg-gradient-to-b from-white/[0.04] via-white/[0.01] to-transparent border border-white/[0.08]">
        <div className="rounded-[0.875rem] bg-[#0e0e12] px-5 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2.5 text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-emerald-400">sys://pipeline:</span>
            <span>git push origin main → vercel deploy: ready</span>
          </div>
          <span className="text-zinc-500 text-[11px] uppercase tracking-wider">
            STATUS: 0 ERRORS · STABLE BUILD
          </span>
        </div>
      </div>

      {/* Closing Tagline from new.md */}
      <div className="mt-8 text-center">
        <p className="text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase">
          Always learning . Always building . Always evolving .
        </p>
        <p className="text-xs italic text-zinc-500 mt-1 font-sans">
          "Technology keeps evolving, and so do I."
        </p>
      </div>
    </section>
  );
};

export default Skills;
