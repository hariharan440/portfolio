//Skills
import React from 'react';
import { FaCode, FaServer, FaRobot, FaMicrophoneAlt, FaTasks, FaTools } from 'react-icons/fa';

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: FaCode,
    skills: ["Angular", "React", "React Native", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "PrimeNG"]
  },
  {
    title: "Backend & Databases",
    icon: FaServer,
    skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB", "MySQL", "Prisma"]
  },
  {
    title: "AI & Automation",
    icon: FaRobot,
    skills: ["LangChain", "LangGraph", "CrewAI", "n8n", "AI Agents", "AI Automation", "Prompt Engineering", "Tool Calling", "Gemini"]
  },
  {
    title: "Voice AI & AI Dev Tools",
    icon: FaMicrophoneAlt,
    skills: ["Claude", "Antigravity", "CodeX", "LiveKit", "Soniox", "ElevenLabs", "SIP / Telephony"]
  },
  {
    title: "IT & Business Operations",
    icon: FaTasks,
    skills: ["ERP & CRM Systems", "Business Process Management", "Application Support", "Data Management", "Data Validation", "Report Generation", "Ticket Management", "Documentation", "Client & Vendor Coordination"]
  },
  {
    title: "Infrastructure & Productivity",
    icon: FaTools,
    skills: ["Docker", "Supabase", "Git", "GitHub", "Postman", "Swagger", "Microsoft Word", "Microsoft Excel", "Notion", "Canva"]
  }
];

const Skills = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 font-sans my-10 md:my-14" id="skills">
      <div className="mb-6 sm:mb-8">
        <p className="text-3xl sm:text-4xl mb-2 font-bold primary-color">Skills & Competencies</p>
        <p className="text-gray-400 text-sm sm:text-base">Technical stack, AI engineering, and enterprise operations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <div 
              key={idx}
              className="group relative bg-gradient-to-br from-[#141414] to-[#0c0c0c] border border-gray-800/80 rounded-2xl p-5 sm:p-6 hover:border-[#3F2B96]/60 hover:shadow-[0_8px_30px_rgba(63,43,150,0.15)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3F2B96] rounded-full opacity-0 group-hover:opacity-10 blur-[40px] transition-opacity duration-500 pointer-events-none"></div>

              <div>
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-gray-800/60">
                  <div className="w-8 h-8 rounded-lg bg-[#1c1c1c] border border-gray-700/60 flex items-center justify-center text-purple-400 shrink-0">
                    <Icon size={14} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-200 group-hover:text-white transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-2.5 py-1 bg-[#181818] border border-gray-800/80 rounded-lg text-xs sm:text-[13px] font-medium text-gray-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-950/20 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;