import { FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='bg-[#0a0a0a] text-gray-400 font-sans border-t border-gray-800/80'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center sm:flex-row sm:justify-between'>
                <div className='flex flex-col items-center sm:items-start text-center sm:text-left mb-8 sm:mb-0'>
                    <span className='text-2xl font-bold primary-color mb-3'>Hariharan A</span>
                    <p className='text-gray-400 text-sm italic max-w-sm'>
                        "Thank you for taking the time to explore my portfolio."
                    </p>
                </div>
                
                <div className='flex flex-col items-center sm:items-end mt-2 sm:mt-0'>
                    <p className='text-gray-500 mb-5 text-sm text-center sm:text-right'>hariharan02anantharaj@gmail.com <br/> Copyrights © {currentYear} Hariharan</p>
                    <div className='flex space-x-6 items-center'>
                        <a href='https://www.linkedin.com/in/hariharan-a-63848520a' target='_blank' rel='noopener noreferrer'>
                            <FaLinkedin className='text-gray-400 hover:text-[#3F2B96] transition-colors cursor-pointer' size={24} />
                        </a>
                        <a href='https://github.com/hariharan440' target='_blank' rel='noopener noreferrer'>
                            <FaGithub className='text-gray-400 hover:text-white transition-colors cursor-pointer' size={24} />
                        </a>
                        <button 
                            onClick={scrollToTop} 
                            className='ml-4 w-10 h-10 rounded-full bg-[#1e1e1e] border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#3F2B96] hover:bg-[#3F2B96]/20 transition-all duration-300 shadow-lg group'
                            aria-label="Back to Top"
                            title="Back to Top"
                        >
                            <FaArrowUp className="transform group-hover:-translate-y-1 transition-transform" size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
