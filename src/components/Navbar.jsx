import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => setNav(!nav);

    const scrollToSection = (sectionId) => {
        setNav(false); // Close mobile menu
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
            {/* Logo */}
            <h1 className="text-3xl font-bold primary-color ml-4">Hariharan A</h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex">
                <li className="p-5">
                    <button onClick={() => scrollToSection('about')}>About</button>
                </li>
                <li className="p-5">
                    <button onClick={() => scrollToSection('work')}>Work</button>
                </li>
                <li className="p-5">
                    <button onClick={() => scrollToSection('contact')}>Contact</button>
                </li>
            </ul>

            {/* Mobile Menu Toggle */}
            <div onClick={handleNav} className="block md:hidden mr-6">
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>

            {/* Mobile Menu */}
            <div className={nav ? menuStyles.open : menuStyles.closed}>
                <h1 className="text-3xl primary-color m-4">Hariharan A</h1>
                <ul className="p-8 text-2xl">
                    <li className="p-2">
                        <button onClick={() => scrollToSection('about')}>About</button>
                    </li>
                    <li className="p-2">
                        <button onClick={() => scrollToSection('work')}>Work</button>
                    </li>
                    <li className="p-2">
                        <button onClick={() => scrollToSection('contact')}>Contact</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
