import React from 'react';
import heroimage from '../assets/profile.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='relative flex flex-col-reverse md:flex-row items-center justify-between max-w-[1200px] min-h-[85vh] mx-auto px-4 sm:px-6 py-16 md:py-0 font-sans overflow-hidden'>
            {/* Background Glows */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#3F2B96] rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none"></div>

            <div className='flex flex-col z-10 text-center md:text-left mt-8 md:mt-0 w-full md:w-3/5'>
                <p className='text-gray-400 text-base md:text-xl font-medium tracking-wide mb-2 md:mb-3 uppercase'>
                    Hello, I'm <span className="text-white font-bold">Hariharan A</span>
                </p>
                <h1 className='text-white text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-4'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#3F2B96] to-[#a855f7]'>I build</span> <br />
                    <TypeAnimation
                        sequence={[
                            "Full-Stack Systems",
                            1500,
                            "AI-Powered Tools",
                            1500,
                            "Real-Time Architectures",
                            1500,
                            "Scalable Products",
                            1500,
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                        className="text-gray-100"
                    />
                </h1>

                <p className='text-gray-400 text-sm sm:text-lg lg:text-xl max-w-xl mx-auto md:mx-0 my-4 md:my-6 leading-relaxed'>
                    Full-Stack Developer specializing in robust system design and deeply integrating AI to accelerate workflows and deliver high-performance applications.
                </p>

                <div className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6 md:mt-4'>
                    <a
                        href='https://drive.google.com/file/d/1M7sAunQEvtekWPTzb1x_-elFlNRWUPlZ/view?usp=sharing'
                        target="_blank"
                        rel="noreferrer"
                        className='group relative px-6 py-3 md:px-8 md:py-4 w-full sm:w-auto rounded-full bg-gradient-to-r from-[#3F2B96] to-purple-600 text-white font-bold text-base md:text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]'
                    >
                        <span className="relative z-10">Download Resume</span>
                        <div className="absolute inset-0 h-full w-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </a>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className='px-6 py-3 md:px-8 md:py-4 w-full sm:w-auto rounded-full border border-gray-600 bg-[#161616]/50 backdrop-blur-sm text-gray-300 font-bold text-base md:text-lg hover:border-purple-500 hover:text-white transition-all duration-300 hover:scale-105'
                    >
                        Let's Talk
                    </button>
                </div>
            </div>

            <div className='w-full md:w-2/5 flex justify-center z-10 mb-8 md:mb-0'>
                <div className="relative group w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[400px] md:h-[400px]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#3F2B96] to-purple-500 rounded-full blur-[40px] md:blur-[50px] opacity-40 group-hover:opacity-70 transition-opacity duration-700 animate-pulse"></div>
                    <img
                        src={heroimage}
                        alt='Hariharan'
                        className='relative z-10 w-full h-full object-cover rounded-full border-[3px] md:border-[4px] border-[#161616] shadow-2xl transform transition-transform duration-700 group-hover:scale-105'
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
