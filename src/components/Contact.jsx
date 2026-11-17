import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';

const contactMethods = [
  {
    id: 'phone',
    title: 'Phone / WhatsApp',
    detail: '+971-0554962086',
    badge: 'Deira, Dubai, UAE',
    href: 'tel:+9710554962086',
    icon: FaPhoneAlt,
    iconColor: 'text-emerald-400 group-hover:text-emerald-300'
  },
  {
    id: 'email',
    title: 'Email Me',
    detail: 'hariharan02anantharaj@gmail.com',
    href: 'mailto:hariharan02anantharaj@gmail.com',
    icon: FaEnvelope,
    iconColor: 'text-purple-400 group-hover:text-purple-300'
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    detail: 'Connect professionally',
    href: 'https://www.linkedin.com/in/hariharan-a-63848520a',
    icon: FaLinkedin,
    iconColor: 'text-[#38bdf8] group-hover:text-sky-300',
    external: true
  },
  {
    id: 'github',
    title: 'GitHub',
    detail: 'Check out my repos',
    href: 'https://github.com/hariharan440',
    icon: FaGithub,
    iconColor: 'text-gray-300 group-hover:text-white',
    external: true
  }
];

const Contact = () => {
  return (
    <div className='max-w-[1200px] mx-auto py-12 md:py-20 px-4 sm:px-6 font-sans relative overflow-hidden' id='contact'>
      
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#3F2B96] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className='text-center mb-8 md:mb-12 relative z-10'>
        <p className='text-xs sm:text-sm text-[#a855f7] uppercase tracking-widest font-bold mb-1.5 md:mb-2'>Get In Touch</p>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white mb-3'>
          Let's Build <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#3F2B96] to-[#a855f7]'>Together</span>
        </h2>

        {/* Location & Immediate Availability Banner */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-gray-300 bg-[#161616] border border-gray-800 px-4 py-2 rounded-full mb-4 shadow-sm">
          <span className="flex items-center gap-1.5 font-medium text-white">
            <span className="text-emerald-400">📍</span> Deira, Dubai, UAE
          </span>
          <span className="text-gray-600 hidden xs:inline">•</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Open to Immediate Joining & In-Person Interviews
          </span>
        </div>

        <p className="mt-1 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-2">
          Currently based in Deira, Dubai. Whether you have an immediate opening, a project idea, or would like to connect, I'm always open to discussing new opportunities across the UAE.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-[1100px] mx-auto relative z-10'>
        {contactMethods.map((item) => {
          const Icon = item.icon;
          return (
            <a 
              key={item.id}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group relative bg-[#111]/90 backdrop-blur-lg border border-gray-800 rounded-xl sm:rounded-2xl lg:rounded-3xl p-3.5 sm:p-5 lg:p-6 flex flex-row sm:flex-col items-center sm:justify-center gap-3.5 sm:gap-4 hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-[#3F2B96] hover:shadow-[0_10px_30px_rgba(63,43,150,0.15)] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#3F2B96]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Icon Container */}
              <div className="w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-[#1e1e1e] border border-gray-700/70 flex items-center justify-center shrink-0 group-hover:scale-105 sm:group-hover:scale-110 group-hover:border-[#3F2B96] group-hover:bg-[#3F2B96]/20 transition-all duration-300 shadow-md">
                <Icon className={`text-xl sm:text-2xl lg:text-3xl ${item.iconColor} transition-colors`} />
              </div>

              {/* Text content */}
              <div className="flex-1 sm:flex-initial text-left sm:text-center relative z-10 min-w-0">
                <div className="flex items-center gap-1.5 sm:justify-center mb-0.5 sm:mb-1">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white group-hover:text-purple-300 transition-colors truncate">
                    {item.title}
                  </h3>
                  {item.badge && (
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-1.5 py-0.5 rounded font-medium">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-xs sm:text-xs lg:text-sm truncate sm:whitespace-normal">
                  {item.detail}
                </p>
              </div>

              {/* Mobile Right Arrow */}
              <div className="sm:hidden text-gray-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all shrink-0 pr-1">
                <FaArrowRight size={13} />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
