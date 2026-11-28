import React, { useState, useRef } from 'react';
import heroimage from '../assets/Professional-dp.png';
import { TypeAnimation } from 'react-type-animation';
import { FiDownload, FiArrowUpRight } from 'react-icons/fi';

// Tech stack icons for the infinite marquee
import reactIcon from '../assets/react.png';
import nextIcon from '../assets/next.png';
import tailwindIcon from '../assets/tailwind.png';
import tsIcon from '../assets/typescript.png';
import jsIcon from '../assets/javascript.png';
import pythonIcon from '../assets/Python.png';
import nodeIcon from '../assets/nodejs.png';
import mysqlIcon from '../assets/mysql1.png';
import gitIcon from '../assets/git.png';
import apiIcon from '../assets/api.png';
import supabaseIcon from '../assets/supabase.png';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';

const techLogos = [
    { name: 'React', icon: reactIcon },
    { name: 'Next.js', icon: nextIcon },
    { name: 'TypeScript', icon: tsIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'Tailwind CSS', icon: tailwindIcon },
    { name: 'Node.js', icon: nodeIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'Git', icon: gitIcon },
    { name: 'Supabase', icon: supabaseIcon },
    { name: 'REST APIs', icon: apiIcon },
    { name: 'HTML5', icon: htmlIcon },
    { name: 'CSS3', icon: cssIcon },
];

const Hero = () => {
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, sheenX: 50, sheenY: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // 3D physics tilt and holographic sheen tracker
    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;
        const sheenX = (x / rect.width) * 100;
        const sheenY = (y / rect.height) * 100;

        setTilt({ rotateX, rotateY, sheenX, sheenY });
    };

    const handleMouseEnter = () => setIsHovered(true);

    const handleMouseLeave = () => {
        setIsHovered(false);
        setTilt({ rotateX: 0, rotateY: 0, sheenX: 50, sheenY: 50 });
    };

    return (
        <section
            id="home"
            className="relative min-h-[calc(100vh-4.5rem)] flex flex-col justify-between overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16"
            style={{ fontFamily: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif' }}
        >
            {/* Inline keyframe animation for the marquee and lanyard sway */}
            <style>{`
                @keyframes heroMarquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-hero-marquee {
                    animation: heroMarquee 28s linear infinite;
                }
                .animate-hero-marquee:hover {
                    animation-play-state: paused;
                }
                @keyframes lanyardFloat {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-4px) rotate(0.6deg); }
                }
                .animate-lanyard-float {
                    animation: lanyardFloat 6s ease-in-out infinite;
                }
            `}</style>

            {/* Ambient Background Radial Glows (Obsidian + Emerald Theme) */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-500/[0.08] rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute top-1/3 -left-36 w-[450px] h-[450px] bg-emerald-600/[0.04] rounded-full blur-[130px] pointer-events-none"></div>
            <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none"></div>

            {/* Subtle Architectural Grid Overlay */}
            <div
                className="absolute inset-0 opacity-[0.14] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.22) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    maskImage: 'radial-gradient(ellipse 65% 55% at 50% 40%, black 70%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 65% 55% at 50% 40%, black 70%, transparent 100%)'
                }}
            ></div>

            {/* Main Hero Content (12-Column Grid) */}
            <div className="relative z-10 max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Column (Content, Headlines & CTAs) */}
                    <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start">
                        {/* Recruiter Location, Visa & Availability Pill Badge */}
                        <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-zinc-300 bg-white/[0.03] border border-white/[0.08] px-4 py-1.5 rounded-full mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md">
                            <span className="flex items-center gap-1.5 font-medium text-zinc-200">
                                <span className="text-emerald-400">📍</span>
                                <span>Deira, Dubai, UAE</span>
                            </span>
                            <span className="text-zinc-600 hidden sm:inline">•</span>
                            <span className="inline-flex items-center gap-1 text-emerald-300 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs">
                                Visit Visa
                            </span>
                            <span className="text-zinc-600 hidden sm:inline">•</span>
                            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                                Available Immediately
                            </span>
                        </div>

                        {/* Greeting Subheading */}
                        <p className="text-emerald-400 text-base sm:text-lg lg:text-xl font-semibold tracking-tight mb-3">
                            👋 Hello, I'm <span className="text-zinc-100 font-bold">Hariharan A</span>
                        </p>

                        {/* Main Headline */}
                        <h1 className="text-zinc-100 text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6">
                            <span className="text-zinc-100">
                                I work across
                            </span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                                <TypeAnimation
                                    sequence={[
                                        "Application Support",
                                        1500,
                                        "Software Development",
                                        1500,
                                        "Enterprise ERP & CRM",
                                        1500,
                                        "IT Operations & Automation",
                                        1500,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </span>
                        </h1>

                        {/* Bio Paragraph */}
                        <p className="text-zinc-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-8 font-normal">
                            IT and Software Professional with 2+ years of experience across enterprise applications, full-stack software development, client-facing product support, and AI-driven workflow automation.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
                            {/* Primary CTA (Download Resume) */}
                            <a
                                href="https://drive.google.com/file/d/127axHqmMJ3R-_Vai_w0x4DjwCgUKKyr6/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                className="group relative w-full sm:w-auto px-7 py-3.5 rounded-full bg-zinc-100 text-zinc-950 font-semibold text-sm sm:text-base hover:bg-white transition-all duration-300 hover:shadow-[0_0_28px_rgba(255,255,255,0.25)] active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer"
                            >
                                <span>Download Resume</span>
                                <span className="w-7 h-7 rounded-full bg-zinc-950 text-white flex items-center justify-center text-xs group-hover:scale-110 transition-transform duration-200">
                                    <FiDownload size={14} className="stroke-[2.5]" />
                                </span>
                            </a>

                            {/* Secondary CTA (Let's Talk) */}
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="group w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-zinc-100 font-semibold text-sm sm:text-base hover:bg-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_0_24px_rgba(16,185,129,0.15)] transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                                style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)' }}
                            >
                                <span>Let's Talk</span>
                                <span className="text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                                    <FiArrowUpRight size={16} className="stroke-[2.5]" />
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column (Interactive 3D Lanyard ID Card) */}
                    <div className="lg:col-span-5 flex flex-col items-center justify-center relative pt-8 lg:pt-0">
                        {/* Ambient Emerald Halo Glow Behind Card */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>

                        {/* Hanging Physical Lanyard Assembly */}
                        <div
                            className={`flex flex-col items-center transition-transform duration-300 ${!isHovered ? 'animate-lanyard-float' : ''}`}
                            style={{ perspective: '1200px' }}
                        >
                            {/* Lanyard Fabric Strap (Hangs down from top) */}
                            <div className="w-8 sm:w-10 h-24 sm:h-28 bg-gradient-to-b from-[#18181b] via-[#222226] to-[#141418] rounded-t-sm shadow-xl border-x border-white/[0.1] relative mx-auto flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-y-0 left-1 w-[1px] border-l border-dashed border-white/[0.15]"></div>
                                <div className="absolute inset-y-0 right-1 w-[1px] border-r border-dashed border-white/[0.15]"></div>
                                <span className="rotate-90 text-[8px] font-mono tracking-widest text-zinc-500 uppercase font-semibold whitespace-nowrap">
                                    DEV.SYS // HA
                                </span>
                            </div>

                            {/* Metallic Clasp & Swivel Hook */}
                            <div className="relative -mt-1 flex flex-col items-center z-20">
                                <div className="w-7 h-5 bg-gradient-to-r from-zinc-400 via-zinc-100 to-zinc-400 rounded-sm shadow-md border border-white/40 flex items-center justify-center">
                                    <div className="w-4 h-1.5 bg-zinc-600 rounded-xs"></div>
                                </div>
                                <div className="-mt-1 w-5 h-6 rounded-full border-[3px] border-zinc-300 shadow-md"></div>
                            </div>

                            {/* 3D Tilt Card Shell */}
                            <div
                                ref={cardRef}
                                onMouseMove={handleMouseMove}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                className="-mt-2 cursor-grab active:cursor-grabbing select-none"
                                style={{
                                    transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                                    transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                                    transformStyle: 'preserve-3d',
                                }}
                            >
                                {/* Outer Double-Bezel Glassmorphic Shell */}
                                <div className="relative w-[280px] sm:w-[310px] md:w-[330px] p-1.5 rounded-[2rem] bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-white/[0.02] border border-white/[0.12] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
                                    {/* Inner Elevated Card Surface */}
                                    <div className="relative rounded-[1.75rem] overflow-hidden bg-[#0e0e12] border border-white/[0.06] p-4 sm:p-5 flex flex-col">
                                        {/* Dynamic Holographic Specular Sheen Overlay */}
                                        <div
                                            className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-30"
                                            style={{
                                                opacity: isHovered ? 0.6 : 0.25,
                                                background: `radial-gradient(circle at ${tilt.sheenX}% ${tilt.sheenY}%, rgba(52, 211, 153, 0.35), rgba(255, 255, 255, 0.18) 35%, transparent 65%)`,
                                                mixBlendMode: 'screen',
                                            }}
                                        ></div>

                                        {/* Card Slot Punch Hole (Where Lanyard Ring passes) */}
                                        <div className="w-12 h-2.5 mx-auto rounded-full bg-zinc-950 border border-white/[0.15] shadow-inner mb-3.5"></div>

                                        {/* Card Header (Microchip + Status Tag) */}
                                        <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
                                            {/* Golden Microchip Graphic */}
                                            <div className="w-10 h-7 rounded bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 p-0.5 shadow-sm border border-amber-300/60 relative overflow-hidden flex flex-col justify-between">
                                                <div className="w-full h-[1px] bg-amber-800/60 my-auto"></div>
                                                <div className="w-full h-[1px] bg-amber-800/60 my-auto"></div>
                                                <div className="absolute inset-y-0 left-1/2 w-[1px] bg-amber-800/60"></div>
                                            </div>

                                            {/* System Status Badge */}
                                            <div className="flex flex-col items-end">
                                                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                                                    ID // HA-2026
                                                </span>
                                                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full mt-0.5">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                                    ACTIVE
                                                </span>
                                            </div>
                                        </div>

                                        {/* Profile Photo Container */}
                                        <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-white/[0.1] bg-zinc-900/60 shadow-inner group">
                                            <img
                                                src={heroimage}
                                                alt="Hariharan"
                                                className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                                            />
                                            {/* Subtle vignette shadow */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-transparent to-transparent opacity-40 pointer-events-none"></div>

                                            {/* Corner Holographic Watermark */}
                                            <div className="absolute top-2.5 right-2.5 text-[9px] font-mono tracking-widest text-white/50 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
                                                HA // DXB
                                            </div>
                                        </div>

                                        {/* Identity Info */}
                                        <div className="mt-4 text-left">
                                            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-zinc-100">
                                                Hariharan A
                                            </h2>
                                            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mt-0.5">
                                                IT & Software Professional
                                            </p>
                                            <p className="text-[11px] text-zinc-500 mt-0.5">
                                                Deira, Dubai, UAE
                                            </p>
                                        </div>

                                        {/* Bottom Barcode Strip & Serial Number */}
                                        <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                                            <span className="text-[9px] font-mono text-zinc-500 tracking-wider">
                                                SYS // 9482-2026
                                            </span>
                                            {/* Simulated Barcode Lines */}
                                            <div className="flex items-center gap-[2px] h-4 opacity-70">
                                                <span className="w-[1px] h-full bg-zinc-300"></span>
                                                <span className="w-[2px] h-full bg-zinc-300"></span>
                                                <span className="w-[1px] h-full bg-zinc-300"></span>
                                                <span className="w-[3px] h-full bg-zinc-300"></span>
                                                <span className="w-[1.5px] h-full bg-zinc-300"></span>
                                                <span className="w-[1px] h-full bg-zinc-300"></span>
                                                <span className="w-[2.5px] h-full bg-zinc-300"></span>
                                                <span className="w-[1px] h-full bg-zinc-300"></span>
                                                <span className="w-[3px] h-full bg-zinc-300"></span>
                                                <span className="w-[1px] h-full bg-zinc-300"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seamless Infinite Horizontal Tech Stack Marquee (from view.md) */}
            <div className="relative z-10 w-full mt-12 sm:mt-16 pt-8 border-t border-white/[0.06] overflow-hidden">
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                    }}
                >
                    <div className="flex items-center gap-6 sm:gap-8 w-max animate-hero-marquee">
                        {/* Render double array for a seamless loop */}
                        {[...techLogos, ...techLogos].map((tech, index) => (
                            <div
                                key={`${tech.name}-${index}`}
                                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-200 select-none"
                            >
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-5 h-5 object-contain filter grayscale group-hover:grayscale-0 transition-all opacity-80"
                                />
                                <span className="text-xs sm:text-sm font-medium text-zinc-400 tracking-tight whitespace-nowrap">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
