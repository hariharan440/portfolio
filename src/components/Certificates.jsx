import React from 'react';

const certificates = [
  {
    id: 1,
    title: "Full-Stack Web Development, Udemy",
    date: "Feb - 2026"
  },
  {
    id: 2,
    title: "Responsive Web Development",
    date: "Apr - 2023"
  },
  {
    id: 3,
    title: "Workshop on Cognitive computing",
    date: "Mar - 2023"
  },
  {
    id: 4,
    title: "Seminar on Data Forensics",
    date: "Mar - 2023"
  },
  {
    id: 5,
    title: "Seminar on Computer Vision",
    date: "Mar - 2023"
  },
  {
    id: 6,
    title: "Workshop on Cloud Security",
    date: "Apr - 2022"
  }
];

const Certificates = () => {
  return (
    <div className='max-w-[1200px] mx-auto px-4 sm:px-6 font-sans my-10 md:my-14' id='certificates'>
      <div className='mb-6 sm:mb-8'>
        <p className='text-3xl sm:text-4xl mb-2 font-bold primary-color'>Certificates</p>
        <p className='text-gray-400 text-sm sm:text-base'>Workshops, seminars, and courses</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4'>
        {certificates.map((cert) => (
          <div 
            key={cert.id} 
            className='group relative bg-gradient-to-r from-[#141414] to-[#0d0d0d] border border-gray-800/80 rounded-xl p-3.5 sm:p-4 hover:border-[#3F2B96]/60 hover:shadow-[0_4px_20px_rgba(63,43,150,0.12)] transition-all duration-300 flex items-center justify-between gap-3 overflow-hidden'
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#3F2B96] rounded-full opacity-0 group-hover:opacity-10 blur-[30px] transition-opacity duration-500 pointer-events-none"></div>

            <div className='relative z-10 flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1'>
              <div className='w-9 h-9 rounded-lg bg-[#1c1c1c] border border-gray-700/60 flex items-center justify-center shrink-0 text-gray-400 group-hover:text-purple-400 group-hover:border-purple-500/50 group-hover:bg-purple-950/20 transition-all shadow-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className='text-sm sm:text-base font-semibold text-gray-200 group-hover:text-white transition-colors leading-snug'>
                {cert.title}
              </h3>
            </div>

            <div className='relative z-10 flex items-center gap-1.5 shrink-0 bg-[#181818] px-2 sm:px-2.5 py-1 rounded-md border border-gray-800/80'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-purple-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className='text-gray-400 font-mono text-[11px] sm:text-xs font-medium tracking-tight whitespace-nowrap'>
                {cert.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
