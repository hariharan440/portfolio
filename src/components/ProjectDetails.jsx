//ProjectDetails
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import images from "../assets/index.js";
import PageNotFound from '../PageNotFound';

const projects = [
    {
        id: 1,
        title: 'Nexgen IT Academy',
        description: 'Nexgen IT Academy offers a wide range of IT courses and certifications, focusing on skills like mobile app development, web development, and programming. The platform emphasizes practical learning, guided by experienced industry professionals. Courses are flexible and accessible online, making education more convenient. Nexgen also supports students with a friendly environment and campus events, aiming to empower learners to succeed despite challenges.',
        images: [images.nex1, images.nex2],
        technologies: [images.html, images.css, images.boot],
        demoLink: 'https://nexgenitacademy.com/',
    },
    {
        id: 2,
        title: 'Roriri Software Solutions',
        description: 'Roriri Soft specializes in offering comprehensive software development services, focusing on customized solutions for businesses. They provide expertise in areas like web and mobile app development, cloud services, and IT consulting. The company aims to deliver innovative and efficient software solutions tailored to client needs, ensuring scalability and performance optimization. Additionally, they emphasize a collaborative approach, working closely with clients to meet their business objectives.',
        images: [images.roriri, images.roriri1],
        technologies: [images.html, images.css, images.boot],
        demoLink: 'https://roririsoft.com',
    },
    {
        id: 3,
        title: 'Terraze: Intelligent AI Agents & Workflow Automation',
        description: 'Terraze specializes in empowering businesses with next-generation AI-driven automation solutions. Their platform supports seamless workflow automation, intelligent call-handling, and lead-capture services, tailored for real-estate, sales and customer-support teams. With a focus on scalability, integration and productivity enhancement, Terraze collaborates closely with clients to understand their processes and deliver customised automation that drives efficiency and growth.',
        images: [images.terraze1, images.terraze2],
        technologies: [images.next, images.tailwind, images.api, images.js],
        demoLink: 'https://terraze.net',
    },
    {
        id: 9,
        title: 'Repliq CRM',
        description: (
            <div className="flex flex-col gap-4">
                <div><span className="font-bold primary-color">Overview:</span> A comprehensive Customer Relationship Management platform designed to streamline sales pipelines, track interactions, and manage client data securely.</div>
                <div><span className="font-bold primary-color">My Contribution:</span> Developed scalable full-stack features, optimized database queries, and built an intuitive dashboard interface.</div>
                <div>
                    <span className="font-bold primary-color">Key Work:</span>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Architected backend services and API endpoints</li>
                        <li>Implemented secure authentication and data handling</li>
                        <li>Designed dynamic and responsive frontend dashboards</li>
                        <li>Ensured real-time data updates and high availability</li>
                    </ul>
                </div>
                <div><span className="font-bold primary-color">Status:</span> <span className="text-gray-400">Active Development</span></div>
            </div>
        ),
        images: [images.repliq],
        technologies: [images.next, images.tailwind, images.api, images.typescript],
        demoLink: null,
    },
    {
        id: 10,
        title: 'School Finance Tracking and Management',
        description: (
            <div className="flex flex-col gap-4">
                <div><span className="font-bold primary-color">Overview:</span> A dedicated financial platform tailored for educational institutions to track tuitions, manage payroll, and generate dynamic financial reports.</div>
                <div><span className="font-bold primary-color">My Contribution:</span> Engineered complex financial logic, built interactive reporting modules, and ensured data integrity across the system.</div>
                <div>
                    <span className="font-bold primary-color">Key Work:</span>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Developed secure transaction tracking and ledger views</li>
                        <li>Built data visualization components for financial metrics</li>
                        <li>Integrated role-based access for admins and accountants</li>
                        <li>Optimized large-scale data aggregation queries</li>
                    </ul>
                </div>
                <div><span className="font-bold primary-color">Status:</span> <span className="text-gray-400">Active Development</span></div>
            </div>
        ),
        images: [images.landing],
        technologies: [images.react, images.tailwind, images.api, images.js],
        demoLink: null,
    },

    {
        id: 6,
        title: 'Hotelmoon',
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
        <div className="max-w-[1200px] mx-auto p-5 font-sans">
            <h2 className="text-4xl mb-3 font-bold p-5 primary-color">{project.title}</h2>

            {/* Improved Image Showcase (Grid Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                {project.images.map((image, index) => (
                    <div key={index} className="relative group cursor-pointer" onClick={() => openModal(image)}>
                        <img
                            src={image}
                            alt={project.title}
                            className="w-full h-[250px] object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                        />
                        {/* Optional overlay with hover effect */}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg"></div>
                    </div>
                ))}
            </div>

            {/* Project Description */}
            <p className="mt-6 text-lg text-white">{project.description}</p>

            {/* Live Demo Button */}
            {project.demoLink && (
                <div className="mt-8">
                    <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-primary-color text-white font-semibold rounded-md shadow hover:bg-primary-dark transition-colors"
                    >
                        View Live Demo
                    </a>
                </div>
            )}

            {/* Technologies Section */}
            <h3 className="text-2xl mt-8 mb-3 font-semibold primary-color">Technologies Used:</h3>
            <div className="flex space-x-8 mt-4">
                {project.technologies.map((tech, index) => (
                    <img
                        key={index}
                        src={tech}
                        alt={`Tech icon ${index}`}
                        className="w-[80px] h-[80px] object-cover"
                    />
                ))}
            </div>

            {/* Modal for Pop-up Image */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <div className="relative">
                        {/* The selected image */}
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="max-w-[90vw] max-h-[90vh] object-cover rounded-lg"
                        />
                        {/* X button */}
                        <button
                            className="absolute top-4 right-6 text-black text-3xl font-bold hover:text-red-500 transition-colors"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetails;
