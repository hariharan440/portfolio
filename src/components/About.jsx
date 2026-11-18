//About
import React from 'react';
import aboutImg from '../assets/about1.png';
import SpeakerButton from './SpeakerButton';

const About = () => {
  const highlights = [
    {
      title: "Full-Stack Development",
      description: "Strong system design fundamentals with experience architecting and building scalable applications and real-time architectures."
    },
    {
      title: "IT & Business Operations",
      description: "Practical understanding of ERP & CRM systems, business processes, data validation, report generation, and application support, with the ability to apply this knowledge to support day-to-day business operations."
    },
    // {
    //   title: "IT & Business Operations",
    //   description: "Hands-on experience working with ERP & CRM systems, business process management, data validation, report generation, and reliable application support."
    // },
    {
      title: "AI-Powered Engineering",
      description: "Leveraging cutting-edge AI tools including Claude, Codex, and Antigravity throughout the development lifecycle for rapid problem-solving, debugging, and workflow automation."
    },
    // {
    //   title: "Location & Immediate Availability",
    //   description: "Currently based in Deira, Dubai, UAE on a Visit Visa, readily available for in-person interviews, employment visa transfer, and immediate onboarding across the UAE."
    // }
  ];

  const speechText = `About Me. ${highlights
    .map((item) => `${item.title}: ${item.description}`)
    .join(' ')}`;

  return (
    <div className='text-white max-w-[1200px] mx-auto my-12 px-4 sm:px-6 font-sans' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center sm:py-8'>
        <div className='text-left'>
          <div className="flex items-center gap-4 mb-5">
            <h2 className='text-3xl sm:text-4xl font-bold primary-color'>About Me</h2>
            <SpeakerButton text={speechText} />
          </div>

          {/* Bullet points */}
          <ul className="space-y-3.5 text-sm sm:text-base text-gray-300 leading-relaxed">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#3F2B96] to-purple-500 mt-2 shrink-0"></span>
                <div>
                  <span className="font-bold text-white">{item.title}:</span>{" "}
                  <span>{item.description}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className='mt-6 pt-5 border-t border-gray-800/60'>
            <h3 className='text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2'>Currently Exploring</h3>
            <p className='text-xs sm:text-sm text-gray-300'>
              AI Agents &middot; Voice AI &middot; Real-time Systems &middot; Reliable Tool Calling &middot; Multilingual Conversations
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8 md:mt-0">
          <img
            className='rounded-3xl shadow-2xl border border-gray-800/80 w-[260px] sm:w-[300px] object-cover'
            src={aboutImg}
            alt='Hariharan Anantharaj'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
