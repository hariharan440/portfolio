import React, { useState } from 'react';
import aboutImg from '../assets/about1.png';
import SpeakerButton from './SpeakerButton';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FiTerminal, FiLayers, FiCpu } from 'react-icons/fi';

const About = () => {
    const [activeTab, setActiveTab] = useState('systems');

    // Speech summary for accessibility
    const speechText = `About Hariharan Anantharaj. My journey in Computer Science began with a curiosity about how technology works beneath the surface. With a Bachelor's degree in Computer Science and Engineering from SRM Valliammai Engineering College with 81 percent, and over 2 years of professional experience across full-stack development, ERP and CRM platforms, and AI-driven automation, I engineer practical and scalable technology solutions.`;

    const pillars = {
        systems: {
            title: "Full-Stack Development & Architecture",
            subtitle: "Frontend & Backend Engineering",
            icon: FiLayers,
            description: "Strong system design fundamentals with hands-on experience building responsive web applications, integrating RESTful APIs, and developing robust backend services. Experienced in database record management, API testing, and scalable application workflows.",
            skills: ["React.js", "Node.js", "Express.js", "JavaScript (ES6+)", "TypeScript", "MySQL", "MongoDB", "RESTful APIs", "HTML5 & CSS3", "Tailwind CSS"]
        },
        enterprise: {
            title: "Enterprise ERP, CRM & IT Operations",
            subtitle: "Business Solutions & Support",
            icon: FiTerminal,
            description: "Practical understanding and contribution to ERP modules including CRM and HRMS. Proficient in application troubleshooting, debugging, bug investigation and resolution, client onboarding, data validation, and basic networking (IP, DNS, ports, LAN/Wi-Fi).",
            skills: ["ERP Systems", "CRM & HRMS", "Application Support", "System Troubleshooting", "Bug Investigation", "Client Onboarding", "Data Management", "Functional Testing", "Basic Networking"]
        },
        ai: {
            title: "AI-Powered Engineering & Automation",
            subtitle: "Intelligent Workflows & Agents",
            icon: FiCpu,
            description: "Leveraging modern AI orchestration layers and automation tools to build intelligent agents, voice workflows, and rapid development pipelines. Experienced in tool calling, finite-state architecture, and prompt engineering to streamline complex operations.",
            skills: ["LLM", "RAG", "AI Agents", "Tool Calling", "Prompt Engineering", "Voice AI", "LangChain", "CrewAI", "n8n Automation", "Docker", "Git & GitHub", "Workflow Optimization"]
        }
    };

    const currentPillar = pillars[activeTab];
    const PillarIcon = currentPillar.icon;

    return (
        <section
            id="about"
            className="py-20 sm:py-28 relative text-[#f4f4f6] overflow-hidden"
            style={{ fontFamily: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif' }}
        >
            {/* Ambient Background Radial Glows (Obsidian + Emerald) */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/[0.05] rounded-full blur-[140px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 -left-32 w-[450px] h-[450px] bg-emerald-600/[0.03] rounded-full blur-[130px] pointer-events-none"></div>

            <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-start mb-12 sm:mb-16">
                    {/* Eyebrow Tag */}
                    <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono uppercase tracking-wider text-emerald-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            {"// ABOUT & PHILOSOPHY"}
                        </span>
                        <SpeakerButton text={speechText} />
                    </div>

                    {/* Main Section Headline */}
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.08] text-zinc-100 max-w-4xl">
                        Driven by curiosity, engineered with precision.
                    </h2>
                </div>

                {/* Asymmetric 12-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Identity Terminal & Core Pillars (7 Columns) */}
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        {/* 1. Identity Terminal Card (sys://identity/hariharan_anantharaj.md) */}
                        <div className="p-1 rounded-[2rem] bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-white/[0.01] border border-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                            <div className="rounded-[1.75rem] bg-[#111115] border border-white/[0.06] p-6 sm:p-8 flex flex-col">
                                {/* Terminal Title Bar */}
                                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06] text-xs font-mono">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1.5 mr-2">
                                            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                                            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                                            <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                                        </div>
                                        <span className="text-zinc-400 font-medium">
                                            sys://identity/hariharan_anantharaj.md
                                        </span>
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                        STATUS: ONLINE
                                    </span>
                                </div>

                                {/* Narrative Body (Directly from about.md) */}
                                <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
                                    <p>
                                        My journey in Computer Science began with a curiosity about how technology works beneath the surface — how applications communicate through APIs, how databases manage complex information, and how thoughtful architecture turns ideas into reliable software.
                                    </p>
                                    <p>
                                        With a Bachelor's degree in Computer Science and Engineering and over 2 years of professional experience, I have worked across frontend and full-stack development, building responsive applications, integrating backend services, and developing business solutions.
                                    </p>
                                    <p className="text-zinc-400">
                                        Today, my experience extends beyond writing code — from working with ERP and CRM platforms to troubleshooting application issues, supporting clients, and exploring AI-powered systems and workflow automation. I enjoy understanding real-world problems and transforming them into practical, scalable technology solutions.
                                    </p>
                                </div>

                                {/* Institution & Location Verified Strip (from about.md) */}
                                <div className="mt-8 pt-5 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                                    <div className="flex items-center gap-2 text-zinc-300">
                                        <span className="text-emerald-400">🎓</span>
                                        <span>
                                            <strong className="text-zinc-100 font-semibold">SRM Valliammai Engineering College, Chennai</strong>
                                            <span className="text-zinc-500 ml-1.5">· B.E. in CSE (81% · 2020 — 2024)</span>
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-zinc-400 font-mono text-[11px]">
                                        <span>📍 Tirunelveli, India → Deira, Dubai, UAE</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Core Engineering Pillars (Interactive Tabbed Showcase) */}
                        <div className="p-1 rounded-[2rem] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent border border-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl">
                            <div className="rounded-[1.75rem] bg-[#111115] border border-white/[0.06] p-6 sm:p-8 flex flex-col">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                    <div>
                                        <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 block mb-1">
                                            CORE ENGINEERING PILLARS
                                        </span>
                                        <h3 className="text-lg sm:text-xl font-bold text-zinc-100 tracking-tight">
                                            Architectural Specialties & Domains
                                        </h3>
                                    </div>

                                    {/* Tabs */}
                                    <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.06] p-1 rounded-xl w-fit">
                                        <button
                                            onClick={() => setActiveTab('systems')}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-tight transition-all cursor-pointer ${
                                                activeTab === 'systems'
                                                    ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                                                    : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
                                            }`}
                                        >
                                            Systems
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('enterprise')}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-tight transition-all cursor-pointer ${
                                                activeTab === 'enterprise'
                                                    ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                                                    : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
                                            }`}
                                        >
                                            Enterprise
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('ai')}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-tight transition-all cursor-pointer ${
                                                activeTab === 'ai'
                                                    ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                                                    : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
                                            }`}
                                        >
                                            AI & Cloud
                                        </button>
                                    </div>
                                </div>

                                {/* Active Tab Content */}
                                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] transition-all duration-300">
                                    <div className="flex items-center gap-3 mb-2.5">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                                            <PillarIcon size={16} />
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-zinc-100">{currentPillar.title}</h4>
                                            <span className="text-[11px] font-mono text-zinc-500">{currentPillar.subtitle}</span>
                                        </div>
                                    </div>
                                    <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                                        {currentPillar.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                                        {currentPillar.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: ID Card & Impact Metrics (5 Columns) */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        {/* 1. ID_CARD // HA-2026 Identity Card */}
                        <div className="p-1 rounded-[2rem] bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-white/[0.01] border border-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl group">
                            <div className="rounded-[1.75rem] bg-[#111115] border border-white/[0.06] p-6 flex flex-col">
                                {/* Card Header */}
                                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.06] text-xs font-mono">
                                    <span className="text-zinc-500 tracking-wider">ID_CARD // HA-2026</span>
                                    <span className="inline-flex items-center gap-1.5 text-[10px] text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                        AVAILABLE
                                    </span>
                                </div>

                                {/* Portrait Container */}
                                <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/[0.08] bg-zinc-900/60 shadow-inner mb-4">
                                    <img
                                        src={aboutImg}
                                        alt="Hariharan Anantharaj"
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111115] via-transparent to-transparent opacity-40 pointer-events-none"></div>
                                    <div className="absolute top-3 right-3 text-[10px] font-mono tracking-widest text-white/60 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                                        B.E. CSE
                                    </div>
                                </div>

                                {/* Identity Labels */}
                                <h3 className="text-xl font-extrabold text-zinc-100 tracking-tight">
                                    Hariharan Anantharaj
                                </h3>
                                <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mt-0.5">
                                    Software Engineer · Full-Stack Developer
                                </p>
                                <p className="text-xs text-zinc-400 mt-1">
                                    Deira, Dubai, UAE (Visit Visa)
                                </p>

                                {/* Direct Action Connect Buttons */}
                                <div className="grid grid-cols-4 gap-2 mt-5 pt-4 border-t border-white/[0.06]">
                                    <a
                                        href="https://github.com/hariharan440"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center justify-center py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.15] text-zinc-400 hover:text-white transition-all text-xs"
                                        aria-label="GitHub Profile"
                                    >
                                        <FaGithub size={16} />
                                        <span className="text-[10px] font-mono mt-1">Git</span>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/hariharan-a-63848520a"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-center justify-center py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.15] text-zinc-400 hover:text-white transition-all text-xs"
                                        aria-label="LinkedIn Profile"
                                    >
                                        <FaLinkedin size={16} />
                                        <span className="text-[10px] font-mono mt-1">In</span>
                                    </a>
                                    <a
                                        href="mailto:hariharan02anantharaj@gmail.com"
                                        className="flex flex-col items-center justify-center py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.15] text-zinc-400 hover:text-white transition-all text-xs"
                                        aria-label="Send Email"
                                    >
                                        <FaEnvelope size={15} />
                                        <span className="text-[10px] font-mono mt-1">Mail</span>
                                    </a>
                                    <a
                                        href="tel:+9710554962086"
                                        className="flex flex-col items-center justify-center py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.15] text-zinc-400 hover:text-white transition-all text-xs"
                                        aria-label="Phone Call"
                                    >
                                        <FaPhoneAlt size={14} />
                                        <span className="text-[10px] font-mono mt-1">Call</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 2. Verified Impact Metrics (2×2 Bento Grid) */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all">
                                <span className="text-2xl sm:text-3xl font-extrabold text-zinc-100 block mb-1">
                                    2+
                                </span>
                                <span className="text-xs font-semibold text-emerald-400 block mb-0.5">
                                    Years Experience
                                </span>
                                <span className="text-[11px] text-zinc-500 leading-tight block">
                                    Enterprise apps & full-stack software development
                                </span>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all">
                                <span className="text-2xl sm:text-3xl font-extrabold text-zinc-100 block mb-1">
                                    3+
                                </span>
                                <span className="text-xs font-semibold text-emerald-400 block mb-0.5">
                                    Industry Roles
                                </span>
                                <span className="text-[11px] text-zinc-500 leading-tight block">
                                    Bhumaha Solutions, Terraze & Roriri Solutions
                                </span>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all">
                                <span className="text-2xl sm:text-3xl font-extrabold text-zinc-100 block mb-1">
                                    81%
                                </span>
                                <span className="text-xs font-semibold text-emerald-400 block mb-0.5">
                                    Academic Rigor
                                </span>
                                <span className="text-[11px] text-zinc-500 leading-tight block">
                                    B.E. Computer Science & Engineering (SRM)
                                </span>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all">
                                <span className="text-2xl sm:text-3xl font-extrabold text-zinc-100 block mb-1">
                                    100%
                                </span>
                                <span className="text-xs font-semibold text-emerald-400 block mb-0.5">
                                    Ready to Onboard
                                </span>
                                <span className="text-[11px] text-zinc-500 leading-tight block">
                                    Visit Visa in Dubai, immediate start availability
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom 4-Column Timeline Strip ("Engineering Trajectory — 2020 to Present & Beyond") */}
                <div className="mt-14 pt-10 border-t border-white/[0.08]">
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                            {"// ENGINEERING TRAJECTORY · 2020 — PRESENT & BEYOND"}
                        </span>
                        <span className="text-[11px] font-mono text-emerald-400 hidden sm:inline-flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            CHRONOLOGICAL ROADMAP
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Phase 01 */}
                        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-mono text-zinc-500">2020 — 2024</span>
                                    <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                                        VERIFIED
                                    </span>
                                </div>
                                <h4 className="text-sm font-bold text-zinc-100 mb-1">PHASE 01: Academic Rigor</h4>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    B.E. Computer Science & Engineering (81%) at SRM Valliammai Engineering College. Foundations in data structures, algorithms, databases, and networking.
                                </p>
                            </div>
                        </div>

                        {/* Phase 02 */}
                        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-mono text-zinc-500">2024</span>
                                    <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                                        VERIFIED
                                    </span>
                                </div>
                                <h4 className="text-sm font-bold text-zinc-100 mb-1">PHASE 02: Full-Stack Foundations</h4>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    MERN Stack Developer at Roriri Software Solutions. Built responsive user interfaces and RESTful APIs, collaborating in Agile teams to deliver production web applications.
                                </p>
                            </div>
                        </div>

                        {/* Phase 03 */}
                        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-mono text-zinc-500">2025 — 2026</span>
                                    <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                                        VERIFIED
                                    </span>
                                </div>
                                <h4 className="text-sm font-bold text-zinc-100 mb-1">PHASE 03: Enterprise & AI Systems</h4>
                                <p className="text-xs text-zinc-400 leading-relaxed">
                                    Software Developer at Terraze & Bhumaha Solutions. Built AI-first CRM, voice agents, ERP modules (CRM & HRMS), client onboarding, and application troubleshooting.
                                </p>
                            </div>
                        </div>

                        {/* Phase 04 */}
                        <div className="p-5 rounded-2xl bg-white/[0.02] border border-emerald-500/20 hover:border-emerald-500/40 transition-all flex flex-col justify-between shadow-[0_0_20px_rgba(16,185,129,0.06)]">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px] font-mono text-emerald-400">PRESENT & BEYOND</span>
                                    <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded animate-pulse">
                                        ACTIVE
                                    </span>
                                </div>
                                <h4 className="text-sm font-bold text-zinc-100 mb-1">PHASE 04: UAE Horizon & Frontier</h4>
                                <p className="text-xs text-zinc-300 leading-relaxed">
                                    Based in Deira, Dubai on Visit Visa. Driving scalable software development, enterprise application operations, and AI automation solutions across the UAE market.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
