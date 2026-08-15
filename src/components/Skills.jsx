//Skills
import React from 'react'

const skillCategories = [
  {
    title: "Frontend",
    skills: ["Angular", "React", "React Native", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "PrimeNG"]
  },
  {
    title: "Backend & Data",
    skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB", "MySQL", "Prisma"]
  },
  {
    title: "AI & Automation",
    skills: ["Gemini", "AI Agents", "AI Automation", "Tool Calling"]
  },
  {
    title: "AI-Powered Dev Tools",
    skills: ["Claude", "Antigravity", "Cursor"]
  },
  {
    title: "Voice AI",
    skills: ["LiveKit", "Soniox", "ElevenLabs", "SIP / Telephony"]
  },
  {
    title: "Infrastructure / Tools",
    skills: ["Docker", "Supabase", "Git", "GitHub", "Postman", "Swagger"]
  }
];

const Skills = () => {
  return (
    <div className="bg-black font-sans text-gray-300 py-16" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-gray-700 text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="primary-color">Tech</span> Stack
        </h2>

        <div className="space-y-10">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold mb-4 primary-color border-b border-gray-800 pb-2">{category.title}</h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, index) => (
                  <div key={index} className="px-4 py-2 bg-[#161616] border border-gray-800 rounded-lg text-sm md:text-base font-medium hover:border-[#3F2B96] transition-colors">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
