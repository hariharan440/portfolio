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
    <div className='max-w-[1200px] mx-auto p-5 font-sans my-12' id='certificates'>
      <div className='pb-8'>
        <p className='text-4xl mb-3 font-bold primary-color'>Certificates</p>
        <p className='text-gray-400'>Workshops, seminars, and courses</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {certificates.map((cert) => (
          <div key={cert.id} className='group relative bg-gradient-to-br from-[#161616] to-[#0a0a0a] border border-gray-800/80 rounded-2xl p-6 hover:-translate-y-2 hover:border-[#3F2B96]/50 hover:shadow-[0_10px_30px_rgba(63,43,150,0.15)] transition-all duration-500 flex flex-col justify-between overflow-hidden'>
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#3F2B96] rounded-full opacity-0 group-hover:opacity-20 blur-[40px] transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 rounded-xl bg-[#1e1e1e] border border-gray-700/50 flex items-center justify-center mb-6 group-hover:border-[#3F2B96]/50 group-hover:bg-[#3F2B96]/10 transition-all duration-300 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 group-hover:text-[#3F2B96] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className='text-lg font-bold text-gray-200 group-hover:text-white transition-colors leading-snug mb-6 flex-grow'>{cert.title}</h3>
              
              <div className='flex items-center gap-2 pt-4 border-t border-gray-800/50'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#3F2B96]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className='text-gray-400 font-semibold text-sm tracking-wide'>{cert.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
