import React, { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const mouseRef = useRef({ x: -1000, y: -1000, radius: 120, active: false });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Halftone / Dot-Matrix Interactive Canvas Wordmark
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const initParticles = () => {
            const width = canvas.parentElement.clientWidth;
            const height = 220; // Height allocated for the giant wordmark canvas
            canvas.width = width;
            canvas.height = height;

            // Create offscreen canvas to sample text pixels
            const offscreen = document.createElement('canvas');
            const offCtx = offscreen.getContext('2d');
            offscreen.width = width;
            offscreen.height = height;

            // Compute font size to fit width nicely
            const text = "HARIHARAN A";
            let fontSize = Math.min(Math.floor(width / 7.2), 140);
            if (width < 640) fontSize = Math.floor(width / 7.5);

            offCtx.fillStyle = '#ffffff';
            offCtx.font = `900 ${fontSize}px "Plus Jakarta Sans", system-ui, sans-serif`;
            offCtx.textAlign = 'center';
            offCtx.textBaseline = 'middle';
            offCtx.fillText(text, width / 2, height / 2);

            const imageData = offCtx.getImageData(0, 0, width, height);
            const data = imageData.data;

            particles = [];
            const step = width < 640 ? 6 : 7; // Density grid step

            for (let y = 0; y < height; y += step) {
                for (let x = 0; x < width; x += step) {
                    const index = (y * width + x) * 4;
                    const alpha = data[index + 3];

                    if (alpha > 128) {
                        const baseRadius = (alpha / 255) * (width < 640 ? 1.8 : 2.4);
                        particles.push({
                            x: x + (Math.random() - 0.5) * 40,
                            y: y + (Math.random() - 0.5) * 40,
                            originX: x,
                            originY: y,
                            vx: 0,
                            vy: 0,
                            radius: baseRadius,
                            alpha: Math.min(alpha / 255, 0.85),
                        });
                    }
                }
            }
        };

        initParticles();

        const handleResize = () => {
            initParticles();
        };

        window.addEventListener('resize', handleResize);

        // Physics animation loop
        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const mouse = mouseRef.current;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                if (mouse.active) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < mouse.radius && dist > 0) {
                        const force = (mouse.radius - dist) / mouse.radius;
                        const angle = Math.atan2(dy, dx);
                        p.vx += Math.cos(angle) * force * 5.5;
                        p.vy += Math.sin(angle) * force * 5.5;
                    }
                }

                // Spring back to origin
                p.vx += (p.originX - p.x) * 0.08;
                p.vy += (p.originY - p.y) * 0.08;
                p.vx *= 0.82; // Damping
                p.vy *= 0.82;

                p.x += p.vx;
                p.y += p.vy;

                // Draw halftone dot
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

                // Subtle emerald glow when disturbed, crisp zinc when settled
                const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                if (speed > 1.2) {
                    ctx.fillStyle = `rgba(52, 211, 153, ${Math.min(p.alpha + 0.2, 0.95)})`;
                } else {
                    ctx.fillStyle = `rgba(244, 244, 245, ${p.alpha * 0.45})`;
                }
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const handleMouseMove = (e) => {
        if (!canvasRef.current) return;
        const rect = canvasRef.current.getBoundingClientRect();
        mouseRef.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            radius: 130,
            active: true
        };
    };

    const handleMouseLeave = () => {
        mouseRef.current.active = false;
    };

    return (
        <footer
            id="footer"
            ref={containerRef}
            className="hwf-root relative bg-[#09090b] text-[#f4f4f6] overflow-hidden pt-16 sm:pt-20 pb-10 border-t border-white/[0.08]"
            style={{ fontFamily: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif' }}
        >
            {/* Inline styles for the animated link underline wipes and monospace spec */}
            <style>{`
                .hwf-link {
                    position: relative;
                    text-decoration: none;
                    background-image: linear-gradient(#34d399, #34d399);
                    background-position: 0% 100%;
                    background-repeat: no-repeat;
                    background-size: 0% 1px;
                    transition: background-size 0.35s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s ease;
                }
                .hwf-link:hover {
                    background-size: 100% 1px;
                    color: #ffffff;
                }
                .hwf-mono-title {
                    font-family: "JetBrains Mono", monospace;
                    font-size: 11px;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #71717a;
                    font-weight: 600;
                }
            `}</style>

            {/* Ambient Background Radial Glow (Obsidian + Emerald) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-emerald-500/[0.05] rounded-full blur-[140px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Top Monospace Information Grid (4-Column Layout from new.md) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/[0.08]">
                    {/* Column 1: Identity, Roles & Origin (5 cols on lg) */}
                    <div className="lg:col-span-5 flex flex-col">
                        <div className="flex items-center gap-2.5 mb-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-100">
                                Hariharan A
                            </span>
                        </div>

                        <p className="text-zinc-400 text-xs sm:text-sm font-medium mb-4">
                            Software Engineer · Full-Stack Developer · IT & Business Operations
                        </p>

                        {/* Location & Connection Badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <div className="inline-flex items-center gap-1.5 text-xs text-zinc-300 bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-full">
                                <span>🇮🇳 Originally from India</span>
                                <span className="text-red-500 text-xs select-none">❤️</span>
                                <span className="font-medium text-white">🇦🇪 Based in Deira, Dubai, UAE</span>
                            </div>
                            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                Open to UAE Opportunities
                            </span>
                        </div>

                        {/* Ambition Statement */}
                        <p className="text-zinc-400 text-xs leading-relaxed max-w-lg mb-4">
                            With a strong technical background and hands-on experience in software development, ERP/CRM systems, and business operations, I’m looking to grow my career in Dubai by contributing to Software Development and IT & Business Operations roles across the UAE.
                        </p>

                        {/* Note / Quote */}
                        <p className="text-xs italic text-zinc-500 font-mono">
                            "Thank you for taking the time to explore my portfolio."
                        </p>
                    </div>

                    {/* Column 2: Navigation Links (2 cols on lg) */}
                    <div className="lg:col-span-2 flex flex-col">
                        <h4 className="hwf-mono-title mb-4">{"// 01 NAVIGATION"}</h4>
                        <ul className="flex flex-col gap-2.5 font-mono text-xs">
                            <li>
                                <button onClick={() => scrollToSection('about')} className="hwf-link text-zinc-400 text-left">
                                    About
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('experience')} className="hwf-link text-zinc-400 text-left">
                                    Experience
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('work')} className="hwf-link text-zinc-400 text-left">
                                    Work
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('skills')} className="hwf-link text-zinc-400 text-left">
                                    Skills
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('certificates')} className="hwf-link text-zinc-400 text-left">
                                    Certificates
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('contact')} className="hwf-link text-zinc-400 text-left">
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Connect & Socials (2 cols on lg) */}
                    <div className="lg:col-span-2 flex flex-col">
                        <h4 className="hwf-mono-title mb-4">{"// 02 CONNECT"}</h4>
                        <ul className="flex flex-col gap-3 font-mono text-xs">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/hariharan-a-63848520a"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hwf-link inline-flex items-center gap-2 text-zinc-400"
                                >
                                    <FaLinkedin size={14} className="text-zinc-500" />
                                    <span>LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/hariharan440"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hwf-link inline-flex items-center gap-2 text-zinc-400"
                                >
                                    <FaGithub size={14} className="text-zinc-500" />
                                    <span>GitHub</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:hariharan02anantharaj@gmail.com"
                                    className="hwf-link inline-flex items-center gap-2 text-zinc-400"
                                >
                                    <FaEnvelope size={13} className="text-zinc-500" />
                                    <span>Email</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+9710554962086"
                                    className="hwf-link inline-flex items-center gap-2 text-zinc-400"
                                >
                                    <FaPhoneAlt size={12} className="text-zinc-500" />
                                    <span>Call / WhatsApp</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Status & Direct Dispatch (3 cols on lg) */}
                    <div className="lg:col-span-3 flex flex-col">
                        <h4 className="hwf-mono-title mb-4">{"// 03 DISPATCH & STATUS"}</h4>
                        <div className="flex flex-col gap-3 font-mono text-xs text-zinc-400">
                            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col gap-1.5">
                                <span className="text-[10px] text-zinc-500 uppercase">Availability Status</span>
                                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-bold">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                    AVAILABLE IMMEDIATELY
                                </span>
                            </div>

                            <div className="flex flex-col gap-1 text-[11px]">
                                <span className="text-zinc-500">DIRECT LINE</span>
                                <a href="tel:+9710554962086" className="text-zinc-200 hover:text-emerald-400 transition-colors">
                                    +971-554962086 (Deira, Dubai)
                                </a>
                            </div>

                            <div className="flex flex-col gap-1 text-[11px]">
                                <span className="text-zinc-500">INBOX</span>
                                <a href="mailto:hariharan02anantharaj@gmail.com" className="text-zinc-200 hover:text-emerald-400 transition-colors break-all">
                                    hariharan02anantharaj@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Halftone / Dot-Matrix Interactive Canvas Wordmark (from new.md) */}
                <div
                    className="relative w-full py-8 select-none overflow-hidden cursor-crosshair"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <canvas
                        ref={canvasRef}
                        className="w-full max-w-full block mx-auto"
                        style={{ height: '220px', maxWidth: '100%' }}
                    />
                    <div className="text-center mt-1">
                        <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-600">
                            [ INTERACTIVE DOT-MATRIX // HOVER TO DISPERSE ]
                        </span>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Back to Top (0.5px Rule from new.md) */}
                <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
                    <p>© {currentYear} Hariharan Anantharaj. All rights reserved.</p>

                    {/* Back to top smooth button */}
                    <button
                        onClick={scrollToTop}
                        className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all duration-200 cursor-pointer"
                        aria-label="Back to top"
                    >
                        <span>Back to top</span>
                        <FaArrowUp size={11} className="transform group-hover:-translate-y-0.5 transition-transform text-emerald-400" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
