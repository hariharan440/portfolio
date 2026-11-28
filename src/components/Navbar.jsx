import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FiArrowUpRight } from 'react-icons/fi';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const handleNav = () => setNav(!nav);

    const scrollToSection = (sectionId) => {
        setNav(false);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Track active section on scroll
    useEffect(() => {
        const sections = ['about', 'experience', 'work', 'skills', 'certificates', 'contact'];

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    return;
                }
            }
            if (window.scrollY < 200) {
                setActiveSection('');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'work', label: 'Work' },
        { id: 'skills', label: 'Skills' },
        { id: 'certificates', label: 'Certificates' }
    ];

    return (
        <header
            className="sticky top-3 z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300"
            style={{ fontFamily: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif' }}
        >
            <nav className="pointer-events-auto bg-[#0e0e12]/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl py-2.5 px-3 sm:px-4 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] flex items-center justify-between relative transition-all duration-300">
                {/* Brand / Logo */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
                    aria-label="Home"
                >
                    <div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-emerald-500/40 group-hover:bg-white/[0.08] transition-all duration-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
                        <span className="absolute w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75"></span>
                    </div>
                    <span className="text-sm sm:text-base font-extrabold tracking-tight text-zinc-100 group-hover:text-white transition-colors duration-200">
                        Hariharan A
                    </span>
                </button>

                {/* Desktop Center Pill Dock */}
                <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1 shadow-inner">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer ${
                                    isActive
                                        ? 'bg-white/[0.08] text-white border border-white/[0.1] shadow-sm'
                                        : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05] border border-transparent'
                                }`}
                            >
                                {item.label}
                            </button>
                        );
                    })}
                </div>

                {/* Desktop Right CTA (Contact) */}
                <div className="hidden md:flex items-center">
                    <button
                        onClick={() => scrollToSection('contact')}
                        className={`group cursor-pointer rounded-full pl-3.5 pr-2 py-1.5 text-xs font-semibold transition-all duration-300 flex items-center gap-2 border shadow-sm ${
                            activeSection === 'contact'
                                ? 'bg-white/[0.09] border-emerald-500/50 text-white shadow-[0_0_24px_rgba(16,185,129,0.25)]'
                                : 'bg-white/[0.05] border-white/[0.1] text-zinc-100 hover:bg-white/[0.09] hover:border-emerald-500/40 hover:shadow-[0_0_24px_rgba(16,185,129,0.25)]'
                        }`}
                        style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)' }}
                    >
                        <span>Contact</span>
                        <span className="w-5 h-5 rounded-full bg-emerald-500 text-zinc-950 flex items-center justify-center text-xs group-hover:bg-emerald-400 transition-colors duration-200">
                            <FiArrowUpRight size={13} className="stroke-[2.5]" />
                        </span>
                    </button>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="flex md:hidden items-center">
                    <button
                        onClick={handleNav}
                        className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:text-white hover:bg-white/[0.08] active:scale-95 transition-all cursor-pointer focus:outline-none"
                        aria-label="Toggle navigation menu"
                    >
                        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {nav && (
                    <div className="absolute top-[calc(100%+0.5rem)] left-0 right-0 bg-[#0e0e12]/95 backdrop-blur-2xl border border-white/[0.1] rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col gap-1.5 md:hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {/* Mobile Header */}
                        <div className="flex items-center justify-between pb-3 mb-1 border-b border-white/[0.06] px-2">
                            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">Navigation</span>
                            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                Online
                            </span>
                        </div>

                        {navItems.map((item) => {
                            const isActive = activeSection === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 flex items-center justify-between cursor-pointer ${
                                        isActive
                                            ? 'bg-white/[0.08] text-white font-semibold border border-white/[0.1]'
                                            : 'text-zinc-300 hover:text-white hover:bg-white/[0.04] border border-transparent'
                                    }`}
                                >
                                    <span>{item.label}</span>
                                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>}
                                </button>
                            );
                        })}

                        {/* Mobile Contact Action */}
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="w-full text-left px-3.5 py-2.5 mt-1.5 rounded-xl text-sm font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 active:scale-[0.99] transition-all flex items-center justify-between cursor-pointer"
                        >
                            <span>Contact</span>
                            <span className="w-5 h-5 rounded-full bg-emerald-400 text-zinc-950 flex items-center justify-center text-xs">
                                <FiArrowUpRight size={13} className="stroke-[2.5]" />
                            </span>
                        </button>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
