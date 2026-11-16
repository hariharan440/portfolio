//ProjectDetails
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import images from "../assets/index.js";
import PageNotFound from '../PageNotFound';
import { FaArrowLeft, FaExternalLinkAlt, FaTimes, FaSearchPlus } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: 'Nexgen IT Academy',
        category: 'EdTech Platform',
        description: 'Nexgen IT Academy offers a wide range of IT courses and certifications, focusing on skills like mobile app development, web development, and programming. The platform emphasizes practical learning, guided by experienced industry professionals. Courses are flexible and accessible online, making education more convenient. Nexgen also supports students with a friendly environment and campus events, aiming to empower learners to succeed despite challenges.',
        images: [images.nex1, images.nex2],
        technologies: [images.html, images.css, images.boot],
        demoLink: 'https://nexgenitacademy.com/',
    },
    {
        id: 2,
        title: 'Roriri Software Solutions',
        category: 'Software Solutions',
        description: 'Roriri Soft specializes in offering comprehensive software development services, focusing on customized solutions for businesses. They provide expertise in areas like web and mobile app development, cloud services, and IT consulting. The company aims to deliver innovative and efficient software solutions tailored to client needs, ensuring scalability and performance optimization. Additionally, they emphasize a collaborative approach, working closely with clients to meet their business objectives.',
        images: [images.roriri, images.roriri1],
        technologies: [images.html, images.css, images.boot],
        demoLink: 'https://roririsoft.com',
    },
    {
        id: 3,
        title: 'Terraze: Intelligent AI Agents & Workflow Automation',
        category: 'AI & Automation Platform',
        description: 'Terraze specializes in empowering businesses with next-generation AI-driven automation solutions. Their platform supports seamless workflow automation, intelligent call-handling, and lead-capture services, tailored for real-estate, sales and customer-support teams. With a focus on scalability, integration and productivity enhancement, Terraze collaborates closely with clients to understand their processes and deliver customised automation that drives efficiency and growth.',
        images: [images.terraze1, images.terraze2],
        technologies: [images.next, images.tailwind, images.api, images.js],
        demoLink: 'https://terraze.net',
    },
    {
        id: 9,
        title: 'Repliq CRM',
        category: 'Enterprise CRM Platform',
        description: (
            <div className="flex flex-col gap-4 text-gray-300">
                <div><span className="font-bold text-white">Overview:</span> A comprehensive Customer Relationship Management platform designed to streamline sales pipelines, track interactions, and manage client data securely.</div>
                <div><span className="font-bold text-white">My Contribution:</span> Developed scalable full-stack features, optimized database queries, and built an intuitive dashboard interface.</div>
                <div>
                    <span className="font-bold text-white">Key Work:</span>
                    <ul className="list-disc pl-6 mt-2 space-y-1.5 text-gray-400">
                        <li>Architected backend services and API endpoints</li>
                        <li>Implemented secure authentication and data handling</li>
                        <li>Designed dynamic and responsive frontend dashboards</li>
                        <li>Ensured real-time data updates and high availability</li>
                    </ul>
                </div>
                <div className="pt-2"><span className="font-bold text-white">Status:</span> <span className="text-emerald-400 font-medium">Active Development</span></div>
            </div>
        ),
        images: [images.repliq],
        technologies: [images.next, images.tailwind, images.api, images.typescript],
        demoLink: null,
    },
    {
        id: 10,
        title: 'School Finance Tracking and Management',
        category: 'FinTech / EdTech Platform',
        description: (
            <div className="flex flex-col gap-4 text-gray-300">
                <div><span className="font-bold text-white">Overview:</span> A dedicated financial platform tailored for educational institutions to track tuitions, manage payroll, and generate dynamic financial reports.</div>
                <div><span className="font-bold text-white">My Contribution:</span> Engineered complex financial logic, built interactive reporting modules, and ensured data integrity across the system.</div>
                <div>
                    <span className="font-bold text-white">Key Work:</span>
                    <ul className="list-disc pl-6 mt-2 space-y-1.5 text-gray-400">
                        <li>Developed secure transaction tracking and ledger views</li>
                        <li>Built data visualization components for financial metrics</li>
                        <li>Integrated role-based access for admins and accountants</li>
                        <li>Optimized large-scale data aggregation queries</li>
                    </ul>
                </div>
                <div className="pt-2"><span className="font-bold text-white">Status:</span> <span className="text-emerald-400 font-medium">Active Development</span></div>
            </div>
        ),
        images: [images.landing],
        technologies: [images.react, images.tailwind, images.api, images.js],
        demoLink: null,
    },
    {
        id: 6,
        title: 'Hotel Moon',
        category: 'Hospitality Website',
        description: "The Hotel Moon website features a clean and modern design that showcases various hotel options with appealing images. It includes sections for amenities, room types, and booking information, enhancing user experience. The layout is responsive, ensuring accessibility across devices, and emphasizes key details to attract potential guests.",
        images: [images.hotel1, images.hotel, images.hotel2],
        technologies: [images.html, images.css],
        demoLink: 'https://hariharan440.github.io/hotelmoon/',
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
        <div className="min-h-screen bg-black text-gray-200 font-sans py-10 md:py-16 px-4 sm:px-6 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#3F2B96] rounded-full mix-blend-screen filter blur-[150px] opacity-15 pointer-events-none"></div>

            <div className="max-w-[1200px] mx-auto relative z-10">
                {/* Back Button */}
                <Link 
                    to="/" 
                    className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors mb-8 group bg-[#141414] border border-gray-800 px-4 py-2 rounded-full shadow-sm hover:border-purple-500/50"
                >
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform text-purple-400" size={12} />
                    <span className="font-medium">Back to Portfolio</span>
                </Link>

                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-gray-800/80">
                    <div>
                        {project.category && (
                            <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-2 inline-block">
                                {project.category}
                            </span>
                        )}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                            {project.title}
                        </h1>
                    </div>

                    {project.demoLink ? (
                        <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#3F2B96] to-purple-600 text-white font-bold text-sm hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all shrink-0 w-fit"
                        >
                            <span>Live Demo</span>
                            <FaExternalLinkAlt size={12} />
                        </a>
                    ) : (
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#181818] border border-gray-800 text-purple-300 text-xs font-medium w-fit">
                            <span>Enterprise Solution</span>
                        </span>
                    )}
                </div>

                {/* Project Images Gallery */}
                <div className="mb-12">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-200 mb-4 flex items-center gap-2">
                        <span>Project Visuals</span>
                        <span className="text-xs font-normal text-gray-500 font-mono">(Click to expand)</span>
                    </h2>
                    <div className={`grid gap-6 ${project.images.length === 1 ? 'grid-cols-1 max-w-3xl' : 'grid-cols-1 md:grid-cols-2'}`}>
                        {project.images.map((image, index) => (
                            <div 
                                key={index} 
                                className="relative group cursor-pointer rounded-2xl overflow-hidden border border-gray-800/90 bg-[#121212] shadow-xl hover:border-purple-500/50 transition-all duration-300" 
                                onClick={() => openModal(image)}
                            >
                                <img
                                    src={image}
                                    alt={`${project.title} preview ${index + 1}`}
                                    className="w-full h-[250px] sm:h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-[#3F2B96]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="p-3 rounded-full bg-black/75 border border-purple-500/50 text-white shadow-xl backdrop-blur-sm transform group-hover:scale-110 transition-transform">
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
                    <div className="lg:col-span-2 bg-[#121212]/90 border border-gray-800/80 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#3F2B96] rounded-full opacity-10 blur-[40px] pointer-events-none"></div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4 primary-color">Overview & Highlights</h3>
                            <div className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                {typeof project.description === 'string' ? (
                                    <p className="leading-relaxed">{project.description}</p>
                                ) : (
                                    project.description
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Technologies Sidebar */}
                    <div className="bg-[#121212]/90 border border-gray-800/80 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-3 primary-color">Technologies Used</h3>
                            <p className="text-gray-400 text-xs sm:text-sm mb-6">
                                Tools, libraries, and frameworks integrated into this architecture:
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech, index) => (
                                    <div 
                                        key={index} 
                                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#181818] border border-gray-800 flex items-center justify-center p-3 hover:border-purple-500/50 hover:bg-purple-950/20 hover:scale-105 transition-all shadow-md group"
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
                            <div className="mt-8 pt-6 border-t border-gray-800/80">
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-3 px-4 rounded-xl border border-gray-700 bg-[#1a1a1a] text-gray-200 font-semibold text-sm hover:bg-gradient-to-r hover:from-[#3F2B96] hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2"
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
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in"
                        onClick={closeModal}
                    >
                        <div 
                            className="relative max-w-5xl max-h-[90vh] bg-[#121212] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl p-2"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Selected preview"
                                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                            />
                            <button
                                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/80 border border-gray-700 text-gray-300 hover:text-white hover:border-purple-500 flex items-center justify-center transition-all shadow-lg"
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
