import React from 'react';
import { FiAward, FiCalendar } from 'react-icons/fi';

const certificates = [
  {
    id: 1,
    title: "Full-Stack Web Development, Udemy",
    date: "Feb - 2026"
  },
  {
    id: 2,
    title: "Responsive Web Development",
    date: "Apr - 2023"
  },
  {
    id: 3,
    title: "Workshop on Cognitive computing",
    date: "Mar - 2023"
  },
  {
    id: 4,
    title: "Seminar on Data Forensics",
    date: "Mar - 2023"
  },
  {
    id: 5,
    title: "Seminar on Computer Vision",
    date: "Mar - 2023"
  },
  {
    id: 6,
    title: "Workshop on Cloud Security",
    date: "Apr - 2022"
  }
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 md:my-24 font-sans relative text-[#f4f4f6]"
      style={{ fontFamily: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif' }}
    >
      {/* Ambient Radial Glow */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-emerald-500/[0.04] rounded-full blur-[130px] pointer-events-none"></div>

      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          {"// CERTIFICATIONS"}
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 mb-2">
          Certificates
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base font-normal">
          Workshops, seminars, and courses
        </p>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {certificates.map((cert) => (
          <div 
            key={cert.id} 
            className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent border border-white/[0.08] hover:border-emerald-500/40 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] transition-all duration-300"
          >
            <div className="rounded-[0.875rem] bg-[#111115] border border-white/[0.06] p-4 sm:p-5 flex items-center justify-between gap-3 h-full overflow-hidden relative">
              {/* Subtle hover gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10 flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 text-zinc-300 group-hover:text-emerald-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-all duration-300 shadow-sm">
                  <FiAward size={18} />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors leading-snug">
                  {cert.title}
                </h3>
              </div>

              <div className="relative z-10 flex items-center gap-1.5 shrink-0 bg-white/[0.03] px-2.5 sm:px-3 py-1.5 rounded-lg border border-white/[0.08]">
                <FiCalendar size={12} className="text-emerald-400 shrink-0" />
                <span className="text-zinc-400 font-mono text-[11px] sm:text-xs font-medium tracking-tight whitespace-nowrap">
                  {cert.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
