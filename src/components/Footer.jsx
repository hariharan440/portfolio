import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className='bg-black text-gray-400 font-sans'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between'>
                <div className='flex items-center'>
                    <span className='text-2xl font-bold primary-color'>Hariharan A</span>
                </div>
                <div className='flex items-center mt-4 sm:mt-0'>
                    <p className='text-gray-600 mr-8'>hariharan02anantharaj@gmail.com <br/> Copyrights © {currentYear} Hariharan</p>
                    <div className='flex space-x-4'>
                        <a href='https://www.linkedin.com/in/hariharan-a-63848520a' target='_blank' rel='noopener noreferrer'>
                            <FaLinkedin className='text-gray-400 hover:text-gray-200 cursor-pointer' size={24} />
                        </a>
                        <a href='https://github.com/hariharan440' target='_blank' rel='noopener noreferrer'>
                            <FaGithub className='text-gray-400 hover:text-gray-200 cursor-pointer' size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
