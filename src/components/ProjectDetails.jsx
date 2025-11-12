//ProjectDetails
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import nex1 from "../assets/nexgen.png"; 
import nex2 from "../assets/nex.png"; 
import roriri from "../assets/roriri.png";
import roriri1 from "../assets/rorori1.png" 
import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import landing from "../assets/proj2.png";
import hotel from "../assets/hotel.png";
import hotel1 from "../assets/proj4.png";
import hotel2 from "../assets/hotel2.png";
import react from "../assets/react.png"; 
import next from '../assets/next3.webp' 
import tailwind from "../assets/tailwind.png";
// import nodeIcon from "../assets/nodejs.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import boot from "../assets/bootstp.png";
import js from "../assets/javascript.png";
// import mongoIcon from "../assets/mongo.webp";
import api from "../assets/api.png";
import terraze1 from "../assets/terraze1.png"
import terraze2 from "../assets/terraze2.png"
import PageNotFound from '../PageNotFound';

const projects = [
    {
        id: 1,
        title: 'Nexgen IT Academy',
        description: 'Nexgen IT Academy offers a wide range of IT courses and certifications, focusing on skills like mobile app development, web development, and programming. The platform emphasizes practical learning, guided by experienced industry professionals. Courses are flexible and accessible online, making education more convenient. Nexgen also supports students with a friendly environment and campus events, aiming to empower learners to succeed despite challenges.',
        images: [nex1, nex2], 
        technologies: [html, css, boot],
        demoLink: 'https://nexgenitacademy.com/', 
    },
    {
        id: 2,
        title: 'Roriri Software Solutions',
        description: 'Roriri Soft specializes in offering comprehensive software development services, focusing on customized solutions for businesses. They provide expertise in areas like web and mobile app development, cloud services, and IT consulting. The company aims to deliver innovative and efficient software solutions tailored to client needs, ensuring scalability and performance optimization. Additionally, they emphasize a collaborative approach, working closely with clients to meet their business objectives.',
        images: [roriri, roriri1],  
        technologies: [html, css, boot],
        demoLink: 'https://roririsoft.com', 
    },
    {
        id: 3,
        title: 'Terraze: Intelligent AI Agents & Workflow Automation',
        description: 'Terraze specializes in empowering businesses with next-generation AI-driven automation solutions. Their platform supports seamless workflow automation, intelligent call-handling, and lead-capture services, tailored for real-estate, sales and customer-support teams. With a focus on scalability, integration and productivity enhancement, Terraze collaborates closely with clients to understand their processes and deliver customised automation that drives efficiency and growth.',
        images: [terraze1, terraze2],  
        technologies: [next, tailwind, api, js],
        demoLink: 'https://terraze.net',  
    },
    {
        id: 4,
        title: 'Food Recipe website',
        description: 'The Food Recipe website is a visually appealing platform that offers a variety of recipes, complete with images and detailed instructions. It leverages an API to fetch recipe data, providing users with a dynamic and up-to-date selection of dishes. The site features a user-friendly interface that allows visitors to easily browse through different categories of recipes, ensuring a seamless experience on both desktop and mobile devices. Overall, it serves as a convenient resource for cooking enthusiasts looking to explore new dishes.',
        images: [food1, food2],  
        technologies: [react, tailwind, api, js],
        demoLink: 'https://foodrecipe-react.netlify.app/', 
    },
    {
        id: 5,
        title: 'App-landing-page',
        description: "The landing page presents a sleek design that highlights the application's features and benefits, with a strong hero section, engaging visuals, and clear calls-to-action. It offers a user-friendly experience across devices, aiming to convert visitors into users.",
        images: [landing],  
        technologies: [html, css],
        demoLink: 'https://app-landing-page-hari.netlify.app/', 
    },

    {
        id: 6,
        title: 'Hotelmoon',
        description: "The Hotel Moon website features a clean and modern design that showcases various hotel options with appealing images. It includes sections for amenities, room types, and booking information, enhancing user experience. The layout is responsive, ensuring accessibility across devices, and emphasizes key details to attract potential guests.",
        images: [hotel1 ,hotel, hotel2],  
        technologies: [html, css],
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
