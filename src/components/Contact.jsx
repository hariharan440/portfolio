import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FiArrowUpRight, FiCheck, FiCopy } from 'react-icons/fi';

const contactMethods = [
  {
    id: 'phone',
    title: 'Phone / WhatsApp',
    detail: '+971-554962086',
    badge: 'Deira, Dubai, UAE',
    href: 'tel:+971554962086',
    icon: FaPhoneAlt,
    isPrimary: false
  },
  {
    id: 'email',
    title: 'Email Me',
    detail: 'hariharan02anantharaj@gmail.com',
    href: 'mailto:hariharan02anantharaj@gmail.com',
    icon: FaEnvelope,
    isPrimary: true
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    detail: 'Connect professionally',
    href: 'https://www.linkedin.com/in/hariharan-a-63848520a',
    icon: FaLinkedin,
    external: true,
    isPrimary: false
  },
  {
    id: 'github',
    title: 'GitHub',
    detail: 'Check out my repos',
    href: 'https://github.com/hariharan440',
    icon: FaGithub,
    external: true,
    isPrimary: false
  }
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e, email) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-[#f4f4f6]"
      style={{ fontFamily: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif' }}
    >
      {/* Ambient Background Radial Glows (Obsidian + Emerald Theme) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-500/[0.06] rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald-600/[0.03] rounded-full blur-[130px] pointer-events-none"></div>

      {/* Subtle Architectural Dot Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 70%, transparent 100%)'
        }}
      ></div>

      <div className="text-center mb-10 md:mb-14 relative z-10 flex flex-col items-center">
        {/* Eyebrow Pill */}
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono uppercase tracking-wider text-emerald-400 mb-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          {"// GET IN TOUCH"}
        </span>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.08] text-zinc-100 mb-4">
          Let's Build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
            Together
          </span>
        </h2>

        {/* Location & Immediate Availability Banner */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-zinc-300 bg-white/[0.03] border border-white/[0.08] px-4 py-1.5 rounded-full mb-3.5 shadow-sm backdrop-blur-md">
          <span className="flex items-center gap-1.5 font-medium text-zinc-200">
            <span className="text-emerald-400">📍</span> Deira, Dubai, UAE
          </span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="text-emerald-300 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs">
            Visit Visa
          </span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
            Available for Immediate Joining
          </span>
        </div>

        <p className="mt-1 text-zinc-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed px-2 font-normal">
          Ready for in-person interviews and employment visa transfer across the UAE.
        </p>
      </div>

      {/* 4 Contact Cards (Double-Bezel Glassmorphic Grid from new.md) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-[1200px] mx-auto relative z-10">
        {contactMethods.map((item) => {
          const Icon = item.icon;
          const isEmail = item.id === 'email';

          return (
            <div
              key={item.id}
              className={`p-1 rounded-[1.75rem] transition-all duration-300 hover:-translate-y-1.5 flex flex-col ${
                item.isPrimary
                  ? 'bg-gradient-to-b from-emerald-500/25 via-white/[0.04] to-white/[0.02] border border-emerald-500/35 shadow-[0_16px_40px_-10px_rgba(16,185,129,0.18)]'
                  : 'bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-white/[0.01] border border-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.5)]'
              }`}
            >
              <div className="rounded-[1.5rem] bg-[#111115] border border-white/[0.06] p-5 sm:p-6 flex flex-col justify-between h-full group relative overflow-hidden">
                {/* Ambient Top Glow on Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div>
                  {/* Top Header Row with Icon & Action Arrow */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        item.isPrimary
                          ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 group-hover:scale-105 shadow-[0_0_12px_rgba(16,185,129,0.25)]'
                          : 'bg-white/[0.04] border border-white/[0.08] text-zinc-300 group-hover:text-emerald-400 group-hover:border-emerald-500/30 group-hover:bg-white/[0.08]'
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.08] group-hover:bg-emerald-500 group-hover:text-zinc-950 text-zinc-400 flex items-center justify-center transition-all duration-200 cursor-pointer"
                      aria-label={item.title}
                    >
                      <FiArrowUpRight size={15} className="stroke-[2.5]" />
                    </a>
                  </div>

                  {/* Title & Badge */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-zinc-100 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded-full font-medium">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Detail */}
                  <p className="text-zinc-400 text-xs sm:text-sm font-mono break-all line-clamp-2">
                    {item.detail}
                  </p>
                </div>

                {/* Bottom Interactive Actions */}
                <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  {isEmail ? (
                    <button
                      onClick={(e) => handleCopyEmail(e, item.detail)}
                      className="w-full py-2 px-3 rounded-xl bg-white/[0.03] hover:bg-emerald-500/15 border border-white/[0.08] hover:border-emerald-500/30 text-zinc-300 hover:text-emerald-300 transition-all duration-200 flex items-center justify-center gap-1.5 font-mono text-[11px] cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <FiCheck size={13} className="text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">Address Copied!</span>
                        </>
                      ) : (
                        <>
                          <FiCopy size={13} />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="w-full py-2 px-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] text-zinc-400 hover:text-zinc-100 transition-all duration-200 flex items-center justify-center gap-1.5 font-mono text-[11px] cursor-pointer"
                    >
                      <span>Open Link</span>
                      <FiArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recruiter Quick Verification Card (from new.md System Card Architecture) */}
      <div className="mt-10 sm:mt-12 max-w-[1200px] mx-auto p-1 rounded-[1.75rem] bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent border border-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl relative z-10">
        <div className="rounded-[1.5rem] bg-[#111115] border border-white/[0.06] p-5 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-center sm:text-left pb-4 mb-4 border-b border-white/[0.06]">
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-zinc-100 uppercase font-mono tracking-wider flex items-center justify-center sm:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Recruiter & HR Verification Details
              </h4>
              <p className="text-[11px] sm:text-xs text-zinc-400 mt-1">
                Available for immediate visa transfer and in-person joining across the UAE
              </p>
            </div>
            <span className="self-center sm:self-auto inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.15)] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Ready to Join
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 sm:p-3.5">
              <span className="text-[10px] sm:text-[11px] text-zinc-500 uppercase font-mono font-medium block mb-1">
                Date of Birth
              </span>
              <span className="text-xs sm:text-sm font-bold text-zinc-100 font-mono">25/11/2002</span>
            </div>
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 sm:p-3.5">
              <span className="text-[10px] sm:text-[11px] text-zinc-500 uppercase font-mono font-medium block mb-1">
                Passport Number
              </span>
              <span className="text-xs sm:text-sm font-bold text-zinc-100 font-mono tracking-wider">BD690767</span>
            </div>
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 sm:p-3.5">
              <span className="text-[10px] sm:text-[11px] text-zinc-500 uppercase font-mono font-medium block mb-1">
                Passport Expiry
              </span>
              <span className="text-xs sm:text-sm font-bold text-zinc-300 font-mono">28/09/2036</span>
            </div>
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 sm:p-3.5">
              <span className="text-[10px] sm:text-[11px] text-zinc-500 uppercase font-mono font-medium block mb-1">
                Visa Status
              </span>
              <span className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">Visit Visa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
