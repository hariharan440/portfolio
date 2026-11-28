import React from 'react';
import SpeakerButton from './SpeakerButton';

const languages = [
  {
    id: 1,
    name: "Tamil",
    nativeName: "தமிழ்",
    level: "Mother Tongue",
    proficiency: "Native Proficiency",
    description: "Can speak, write, and read fluently.",
    skills: ["Speak", "Write", "Read"]
  },
  {
    id: 2,
    name: "English",
    nativeName: "English",
    level: "Intermediate",
    proficiency: "Professional Working",
    description: "Can speak, write, and read effectively in professional and technical environments.",
    skills: ["Speak", "Write", "Read"]
  },
  {
    id: 3,
    name: "Malayalam",
    nativeName: "മലയാളം",
    level: "Basic",
    proficiency: "Working Understanding",
    description: "Slightly able to understand spoken conversations and context.",
    skills: ["Understand"]
  }
];

const Languages = () => {
  return (
    <section
      id="languages"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 md:my-24 font-sans relative text-[#f4f4f6]"
      style={{ fontFamily: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif' }}
    >
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-emerald-500/[0.04] rounded-full blur-[130px] pointer-events-none"></div>

      {/* Header */}
      <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            {"// MULTILINGUAL PROFICIENCY"}
          </span>
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100">
              Languages
            </h2>
            <SpeakerButton text="Language proficiency: Tamil, my mother tongue, with full capability to speak, write, and read. English, at an intermediate level, able to speak, write, and read. Malayalam, with working ability to slightly understand." />
          </div>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 font-normal">
            Languages I speak, write, and understand
          </p>
        </div>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {languages.map((lang) => (
          <div 
            key={lang.id}
            className="group relative p-1 rounded-[1.75rem] bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-white/[0.01] border border-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="rounded-[1.5rem] bg-[#111115] border border-white/[0.06] p-5 sm:p-6 flex flex-col justify-between h-full overflow-hidden relative">
              {/* Ambient hover glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10">
                {/* Header: Name, Native script, Level badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                        {lang.name}
                      </h3>
                      <span className="text-xs font-mono text-zinc-500 font-medium">
                        ({lang.nativeName})
                      </span>
                    </div>
                    <p className="text-xs text-emerald-400 font-mono font-medium mt-1">
                      {lang.proficiency}
                    </p>
                  </div>

                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-300 shrink-0">
                    {lang.level}
                  </span>
                </div>

                {/* Description */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {lang.description}
                </p>
              </div>

              {/* Competency Tags */}
              <div className="relative z-10 flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                {lang.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-zinc-300 bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 rounded-md"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
