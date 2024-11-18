import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const scrollToSection = (sectionId) => {
        setNav(false);

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const menuStyles = {
        open: 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500',
        closed: 'fixed left-[-100%]'
    };

    return (
        <div className="bg-black text-gray-400 h-20 max-w-7xl mx-auto flex justify-between items-center font-sans relative">
            <h1 className="text-3xl font-bold primary-color ml-4">Hariharan A</h1>
            <ul className="hidden md:flex">
                <li className="p-5"><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
                <li className="p-5"><a href="#work" onClick={() => scrollToSection('work')}>Work</a></li>
                <li className="p-5"><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
            <div onClick={handleNav} className="block md:hidden mr-6">
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
            <div className={nav ? menuStyles.open : menuStyles.closed}>
                <h1 className="text-3xl primary-color m-4">Hariharan A</h1>
                <ul className="p-8 text-2xl">
                    <li className="p-2"><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
                    <li className="p-2"><a href="#work" onClick={() => scrollToSection('work')}>Work</a></li>
                    <li className="p-2"><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
