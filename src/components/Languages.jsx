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
    <div className='max-w-[1200px] mx-auto px-4 sm:px-6 font-sans my-10 md:my-14' id='languages'>
      <div className='mb-6 sm:mb-8 flex items-center justify-between'>
        <div>
          <div className="flex items-center gap-3">
            <p className='text-3xl sm:text-4xl font-bold primary-color'>Languages</p>
            <SpeakerButton text="Language proficiency: Tamil, my mother tongue, with full capability to speak, write, and read. English, at an intermediate level, able to speak, write, and read. Malayalam, with working ability to slightly understand." />
          </div>
          <p className='text-gray-400 text-sm sm:text-base mt-1'>Languages I speak, write, and understand</p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6'>
        {languages.map((lang) => (
          <div 
            key={lang.id}
            className='group relative bg-gradient-to-br from-[#141414] to-[#0c0c0c] border border-gray-800/80 rounded-2xl p-5 sm:p-6 hover:-translate-y-1.5 hover:border-[#3F2B96]/60 hover:shadow-[0_10px_30px_rgba(63,43,150,0.15)] transition-all duration-300 flex flex-col justify-between overflow-hidden'
          >
            {/* Ambient hover glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3F2B96] rounded-full opacity-0 group-hover:opacity-15 blur-[40px] transition-opacity duration-500 pointer-events-none"></div>

            <div className='relative z-10'>
              {/* Header: Name, Native script, Level badge */}
              <div className='flex items-start justify-between gap-3 mb-3'>
                <div>
                  <div className='flex items-center gap-2'>
                    <h3 className='text-xl font-bold text-gray-100 group-hover:text-white transition-colors'>
                      {lang.name}
                    </h3>
                    <span className='text-xs font-medium text-gray-500 font-mono'>
                      ({lang.nativeName})
                    </span>
                  </div>
                  <p className='text-xs text-purple-400 font-medium mt-0.5'>
                    {lang.proficiency}
                  </p>
                </div>

                <span className='text-xs font-semibold px-2.5 py-1 rounded-full border border-purple-500/30 bg-purple-950/30 text-purple-300 shrink-0'>
                  {lang.level}
                </span>
              </div>

              {/* Description */}
              <p className='text-gray-400 text-xs sm:text-sm leading-relaxed mb-5'>
                {lang.description}
              </p>
            </div>

            {/* Competency Tags */}
            <div className='relative z-10 flex flex-wrap gap-1.5 pt-3.5 border-t border-gray-800/60'>
              {lang.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className='inline-flex items-center gap-1 text-[11px] font-medium text-gray-300 bg-[#181818] border border-gray-800/80 px-2.5 py-1 rounded-md'
                >
                  <span className='w-1 h-1 rounded-full bg-purple-400'></span>
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
