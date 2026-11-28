import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import images from "../assets/index.js";
import PageNotFound from '../PageNotFound';
import { FaArrowLeft, FaExternalLinkAlt, FaTimes, FaSearchPlus } from 'react-icons/fa';
import SpeakerButton from './SpeakerButton';

const projects = [
    {
        id: 1,
        title: 'Repliq CRM',
        category: 'Enterprise CRM Platform',
        description: (
            <div className="flex flex-col gap-4 text-zinc-300">
                <div><span className="font-bold text-zinc-100">Overview:</span> A comprehensive Customer Relationship Management platform designed to streamline sales pipelines, track interactions, and manage client data securely.</div>
                <div><span className="font-bold text-zinc-100">My Contribution:</span> Developed scalable full-stack features, optimized database queries, and built an intuitive dashboard interface.</div>
                <div>
                    <span className="font-bold text-zinc-100">Key Work:</span>
                    <ul className="list-disc pl-6 mt-2 space-y-1.5 text-zinc-400">
                        <li>Architected backend services and API endpoints</li>
                        <li>Implemented secure authentication and data handling</li>
                        <li>Designed dynamic and responsive frontend dashboards</li>
                        <li>Ensured real-time data updates and high availability</li>
                    </ul>
                </div>
                <div className="pt-2"><span className="font-bold text-zinc-100">Status:</span> <span className="text-emerald-400 font-mono font-medium">Active Development</span></div>
            </div>
        ),
        images: [images.repliq],
        technologies: [images.next, images.tailwind, images.api, images.typescript],
        demoLink: null,
        narration: 'Repliq CRM. A comprehensive Customer Relationship Management platform designed to streamline sales pipelines, track interactions, and manage client data securely.',
    },
    {
        id: 2,
        title: 'Tex Master Pro',
        category: 'Smart Manufacturing & IoT',
        description: 'An intelligent manufacturing platform for apparel factories that connects sewing machines, operators, and production lines through IoT integration. Provides real-time production monitoring, operator management, automated data capture, factory dashboards, and analytics to improve productivity and operational efficiency.',
        images: [images.texmasterpro, images.texmasterpro1],
        technologies: [images.next, images.tailwind],
        demoLink: 'https://texmasterpro.com',
        narration: 'Tex Master Pro. An intelligent manufacturing platform for apparel factories that connects sewing machines, operators, and production lines through IoT integration. Provides real-time production monitoring, operator management, automated data capture, factory dashboards, and analytics to improve productivity and operational efficiency, built with Next.js and Tailwind CSS.',
    },
    {
        id: 3,
        title: 'Terraze: Intelligent AI Agents & Workflow Automation',
        category: 'AI & Automation Platform',
        description: 'Terraze specializes in empowering businesses with next-generation AI-driven automation solutions. Their platform supports seamless workflow automation, intelligent call-handling, and lead-capture services, tailored for real-estate, sales and customer-support teams. With a focus on scalability, integration and productivity enhancement, Terraze collaborates closely with clients to understand their processes and deliver customised automation that drives efficiency and growth.',
        images: [images.terraze1, images.terraze2],
        technologies: [images.next, images.tailwind, images.api, images.js],
        demoLink: 'https://terraze.net',
        narration: 'Terraze. An intelligent AI-powered product and automation platform focused on workflow optimization, smart agent workflows, and CRM integrations.',
    },
    {
        id: 4,
        title: 'School Finance Tracking and Management',
        category: 'FinTech / EdTech Platform',
        description: (
            <div className="flex flex-col gap-4 text-zinc-300">
                <div><span className="font-bold text-zinc-100">Overview:</span> A dedicated financial platform tailored for educational institutions to track tuitions, manage payroll, and generate dynamic financial reports.</div>
                <div><span className="font-bold text-zinc-100">My Contribution:</span> Engineered complex financial logic, built interactive reporting modules, and ensured data integrity across the system.</div>
                <div>
                    <span className="font-bold text-zinc-100">Key Work:</span>
                    <ul className="list-disc pl-6 mt-2 space-y-1.5 text-zinc-400">
                        <li>Architected backend services and API endpoints</li>
                        <li>Implemented secure authentication and data handling</li>
                        <li>Designed dynamic and responsive frontend dashboards</li>
                        <li>Ensured real-time data updates and high availability</li>
                    </ul>
                </div>
                <div className="pt-2"><span className="font-bold text-zinc-100">Status:</span> <span className="text-emerald-400 font-mono font-medium">Active Development</span></div>
            </div>
        ),
        images: [images.landing],
        technologies: [images.react, images.tailwind, images.api, images.js],
        demoLink: null,
        narration: 'School Finance Tracking and Management. A dedicated financial platform tailored for educational institutions to track tuitions, manage payroll, and generate dynamic financial reports.',
    },
    {
        id: 5,
        title: 'Hotel Moon',
        category: 'Hospitality Website',
        description: "The Hotel Moon website features a clean and modern design that showcases various hotel options with appealing images. It includes sections for amenities, room types, and booking information, enhancing user experience. The layout is responsive, ensuring accessibility across devices, and emphasizes key details to attract potential guests.",
        images: [images.hotel1, images.hotel, images.hotel2],
        technologies: [images.html, images.css],
        demoLink: 'https://hariharan440.github.io/hotelmoon/',
        narration: 'Hotel Moon. A clean and modern website showcasing various hotel options, amenities, and room bookings.',
    },
];

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    // State to manage the popup modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    if (!project) {
        return <PageNotFound />
    }

    return (
        <div 
            className="min-h-screen bg-[#09090b] text-[#f4f4f6] font-sans py-10 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
            style={{ fontFamily: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif' }}
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/[0.05] rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-600/[0.03] rounded-full blur-[140px] pointer-events-none"></div>

            {/* Subtle Architectural Dot Grid Overlay */}
            <div
                className="absolute inset-0 opacity-[0.12] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 70%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black 70%, transparent 100%)'
                }}
            ></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2.5 text-xs font-mono text-zinc-300 hover:text-white transition-all mb-8 group bg-white/[0.03] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-white/[0.06] px-4 py-2 rounded-full shadow-sm"
                >
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform text-emerald-400" size={11} />
                    <span className="font-medium">Back to Portfolio</span>
                </Link>

                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 mb-10 border-b border-white/[0.08]">
                    <div>
                        {project.category && (
                            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mb-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                {project.category}
                            </span>
                        )}
                        <div className="flex items-center gap-3.5 flex-wrap">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-100 tracking-tight">
                                {project.title}
                            </h1>
                            {project.narration && (
                                <SpeakerButton text={project.narration} />
                            )}
                        </div>
                    </div>

                    {project.demoLink ? (
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-100 text-zinc-950 font-semibold text-sm hover:bg-white hover:shadow-[0_0_24px_rgba(255,255,255,0.25)] transition-all shrink-0 w-fit cursor-pointer"
                        >
                            <span>Live Demo</span>
                            <FaExternalLinkAlt size={11} />
                        </a>
                    ) : (
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-emerald-400 font-mono text-xs font-medium w-fit">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            <span>Enterprise Solution</span>
                        </span>
                    )}
                </div>

                {/* Project Images Gallery */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                            {"// PROJECT VISUALS (CLICK TO EXPAND)"}
                        </span>
                    </div>
                    <div className={`grid gap-6 ${project.images.length === 1 ? 'grid-cols-1 max-w-3xl' : 'grid-cols-1 md:grid-cols-2'}`}>
                        {project.images.map((image, index) => (
                            <div
                                key={index}
                                className="relative group cursor-pointer rounded-2xl overflow-hidden border border-white/[0.08] bg-[#111115] shadow-xl hover:border-emerald-500/40 transition-all duration-300"
                                onClick={() => openModal(image)}
                            >
                                <img
                                    src={image}
                                    alt={`${project.title} preview ${index + 1}`}
                                    className="w-full h-[250px] sm:h-[320px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                                    <span className="p-3.5 rounded-full bg-zinc-950/80 border border-emerald-500/40 text-emerald-400 shadow-xl transform group-hover:scale-110 transition-transform">
                                        <FaSearchPlus size={16} />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Project Content & Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Description */}
                    <div className="lg:col-span-2 bg-[#111115] border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                        <div className="relative z-10">
                            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                                ARCHITECTURE & SPECIFICATION
                            </span>
                            <h3 className="text-xl font-bold text-zinc-100 mb-4 tracking-tight">
                                Overview & Highlights
                            </h3>
                            <div className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                                {typeof project.description === 'string' ? (
                                    <p className="leading-relaxed">{project.description}</p>
                                ) : (
                                    project.description
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Technologies Sidebar */}
                    <div className="bg-[#111115] border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                        <div>
                            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                                INTEGRATED STACK
                            </span>
                            <h3 className="text-xl font-bold text-zinc-100 mb-3 tracking-tight">
                                Technologies Used
                            </h3>
                            <p className="text-zinc-400 text-xs sm:text-sm mb-6 font-normal">
                                Tools, libraries, and frameworks integrated into this architecture:
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center p-3 hover:border-emerald-500/40 hover:bg-white/[0.06] hover:scale-105 transition-all shadow-md group"
                                    >
                                        <img
                                            src={tech}
                                            alt={`Tech icon ${index + 1}`}
                                            className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {project.demoLink && (
                            <div className="mt-8 pt-6 border-t border-white/[0.06]">
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 px-4 rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-200 font-semibold text-sm hover:bg-emerald-500 hover:text-zinc-950 hover:border-emerald-500 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                                >
                                    <span>Visit Live Project</span>
                                    <FaExternalLinkAlt size={11} />
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Modal for Fullscreen Image Preview */}
                {isModalOpen && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
                        onClick={closeModal}
                    >
                        <div
                            className="relative max-w-5xl max-h-[90vh] bg-[#0e0e12] border border-white/[0.1] rounded-2xl overflow-hidden shadow-2xl p-2"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Selected preview"
                                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                            />
                            <button
                                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-zinc-900/80 border border-white/[0.15] text-zinc-300 hover:text-white hover:border-emerald-500 flex items-center justify-center transition-all shadow-lg cursor-pointer"
                                onClick={closeModal}
                                aria-label="Close Preview"
                            >
                                <FaTimes size={16} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectDetails;
