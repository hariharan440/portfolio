import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='max-w-[1200px] mx-auto py-16 md:py-24 px-4 sm:px-6 font-sans relative overflow-hidden' id='contact'>
      
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#3F2B96] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className='text-center mb-12 md:mb-16 relative z-10'>
        <p className='text-xs sm:text-sm text-[#a855f7] uppercase tracking-widest font-bold mb-2 md:mb-3'>Get In Touch</p>
        <h2 className='text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white'>
          Let's Build <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#3F2B96] to-[#a855f7]'>Together</span>
        </h2>
        <p className="mt-4 md:mt-6 text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed px-2">
          Whether you have a question, a project idea, or just want to connect, I'm always open to discussing new opportunities and challenging architectures.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-[1000px] mx-auto relative z-10'>
        
        {/* Email Card */}
        <a 
          href="mailto:hariharan02anantharaj@gmail.com" 
          className="group relative bg-[#111] bg-opacity-80 backdrop-blur-lg border border-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 md:gap-6 hover:-translate-y-2 hover:border-[#3F2B96] hover:shadow-[0_10px_30px_rgba(63,43,150,0.15)] transition-all duration-500 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#3F2B96]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-[#1e1e1e] border border-gray-700 flex items-center justify-center group-hover:scale-110 group-hover:border-[#3F2B96] group-hover:bg-[#3F2B96]/20 transition-all duration-500 shadow-lg">
            <FaEnvelope className="text-2xl md:text-3xl text-gray-400 group-hover:text-white transition-colors" />
          </div>
          <div className="text-center relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Email Me</h3>
            <p className="text-gray-400 text-xs md:text-sm">hariharan02anantharaj<br/>@gmail.com</p>
          </div>
        </a>

        {/* LinkedIn Card */}
        <a 
          href="https://www.linkedin.com/in/hariharan-a-63848520a" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group relative bg-[#111] bg-opacity-80 backdrop-blur-lg border border-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 md:gap-6 hover:-translate-y-2 hover:border-[#3F2B96] hover:shadow-[0_10px_30px_rgba(63,43,150,0.15)] transition-all duration-500 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#3F2B96]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-[#1e1e1e] border border-gray-700 flex items-center justify-center group-hover:scale-110 group-hover:border-[#3F2B96] group-hover:bg-[#3F2B96]/20 transition-all duration-500 shadow-lg">
            <FaLinkedin className="text-2xl md:text-3xl text-gray-400 group-hover:text-white transition-colors" />
          </div>
          <div className="text-center relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">LinkedIn</h3>
            <p className="text-gray-400 text-xs md:text-sm">Connect professionally</p>
          </div>
        </a>

        {/* GitHub Card */}
        <a 
          href="https://github.com/hariharan440" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group relative bg-[#111] bg-opacity-80 backdrop-blur-lg border border-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center gap-4 md:gap-6 hover:-translate-y-2 hover:border-[#3F2B96] hover:shadow-[0_10px_30px_rgba(63,43,150,0.15)] transition-all duration-500 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#3F2B96]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-[#1e1e1e] border border-gray-700 flex items-center justify-center group-hover:scale-110 group-hover:border-[#3F2B96] group-hover:bg-[#3F2B96]/20 transition-all duration-500 shadow-lg">
            <FaGithub className="text-2xl md:text-3xl text-gray-400 group-hover:text-white transition-colors" />
          </div>
          <div className="text-center relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">GitHub</h3>
            <p className="text-gray-400 text-xs md:text-sm">Check out my repos</p>
          </div>
        </a>

      </div>
    </div>
  )
}

export default Contact;
