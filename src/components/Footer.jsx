import React from 'react';
import { FaLinkedin, FaGithub, FaArrowUp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className='bg-[#0a0a0a] text-gray-400 font-sans border-t border-gray-800/80'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8'>
                    {/* Profile & Cross-cultural Connection */}
                    <div className='flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl'>
                        <span className='text-2xl sm:text-3xl font-bold primary-color tracking-tight'>
                            Hariharan A
                        </span>
                        <p className='text-gray-400 text-sm sm:text-base font-medium mt-1 mb-4'>
                            Software Engineer · Full-Stack Developer · IT & Business Operations
                        </p>

                        {/* Location & Connection Badges */}
                        <div className='flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-4'>
                            <div className='inline-flex items-center gap-2 text-xs sm:text-sm text-gray-300 bg-[#141414] border border-gray-800/90 px-3.5 py-1.5 rounded-full shadow-sm'>
                                <span className='flex items-center gap-1.5'>
                                    <span className='text-base leading-none'>🇮🇳</span>
                                    <span>Originally from India</span>
                                </span>
                                <span className='text-red-500/90 text-xs select-none' title="Appreciation & Connection">❤️</span>
                                <span className='flex items-center gap-1.5 font-medium text-white'>
                                    <span className='text-base leading-none'>🇦🇪</span>
                                    <span>Currently based in Deira, Dubai, UAE</span>
                                </span>
                            </div>
                            <span className='inline-flex items-center gap-1.5 text-xs text-purple-300 bg-purple-950/40 border border-purple-800/50 px-3 py-1.5 rounded-full font-medium'>
                                <span>Visit Visa</span>
                            </span>
                            <span className='inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-3 py-1.5 rounded-full font-medium'>
                                <span className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse'></span>
                                Open to Opportunities in UAE
                            </span>
                        </div>

                        {/* Appreciation & Ambition Statement */}
                        <p className='text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xl'>
                            With a strong technical background and hands-on experience in software development, ERP/CRM systems, and business operations, I’m looking to grow my career in Dubai by contributing to Software Development and IT & Business Operations roles across the UAE.
                        </p>
                    </div>

                    {/* Contact, Socials & Back to Top */}
                    <div className='flex flex-col items-center lg:items-end text-center lg:text-right'>
                        <div className='flex flex-col sm:flex-row lg:flex-col items-center lg:items-end gap-2.5 sm:gap-4 lg:gap-2 mb-5'>
                            <a
                                href='tel:+9710554962086'
                                className='inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm group'
                            >
                                <FaPhoneAlt className='text-emerald-400 group-hover:scale-110 transition-transform' size={13} />
                                <span className='font-medium'>+971-554962086</span>
                                <span className='text-[10px] text-gray-400 bg-[#161616] px-1.5 py-0.5 rounded border border-gray-800'>Deira, Dubai</span>
                            </a>
                            <a
                                href='mailto:hariharan02anantharaj@gmail.com'
                                className='inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm group'
                            >
                                <FaEnvelope className='text-gray-500 group-hover:text-purple-400 transition-colors' size={13} />
                                <span>hariharan02anantharaj@gmail.com</span>
                            </a>
                        </div>

                        <div className='flex items-center gap-5'>
                            <a
                                href='https://www.linkedin.com/in/hariharan-a-63848520a'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='w-10 h-10 rounded-full bg-[#141414] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-[#a855f7] hover:border-purple-500/50 hover:bg-purple-950/20 transition-all duration-300'
                                aria-label="LinkedIn Profile"
                            >
                                <FaLinkedin size={18} />
                            </a>
                            <a
                                href='https://github.com/hariharan440'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='w-10 h-10 rounded-full bg-[#141414] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 hover:bg-white/5 transition-all duration-300'
                                aria-label="GitHub Profile"
                            >
                                <FaGithub size={18} />
                            </a>
                            <button
                                onClick={scrollToTop}
                                className='w-10 h-10 rounded-full bg-[#1e1e1e] border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#3F2B96] hover:bg-[#3F2B96]/20 transition-all duration-300 shadow-lg group'
                                aria-label="Back to Top"
                                title="Back to Top"
                            >
                                <FaArrowUp className="transform group-hover:-translate-y-1 transition-transform" size={14} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Note */}
                <div className='border-t border-gray-800/60 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3'>
                    <p>© {currentYear} Hariharan Anantharaj. All rights reserved.</p>
                    <p className='italic text-gray-400'>"Thank you for taking the time to explore my portfolio."</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
