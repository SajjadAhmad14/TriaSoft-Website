"use client";

import Image from "next/image";
import { Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function FoundersSection() {
    const founders = [
        {
            name: "Sajjad Ahmed",
            role: "Co-Founder & Visionary",
            image: "/images/sajjad.jpg",
            linkedin: "https://www.linkedin.com/in/sajjadahmad14/overlay/contact-info/",
            github: "https://github.com/SajjadAhmad14",
            description: "Mastermind of strategy and digital innovation, shaping ideas into reality.",
        },
        {
            name: "Youcef Abdellani",
            role: "Co-Founder & Creative Lead",
            image: "/images/youcef.jpeg",
            linkedin: "https://www.linkedin.com/in/youcef-abdellani/",
            github: "https://github.com/ABDELLANI-Youcef",
            description: "Crafting visual experiences that elevate brands with creativity and elegance.",
        },
        {
            name: "Mkrtich Sargsyan",
            role: "Co-Founder & Tech Architect",
            image: "/images/mike.jpg",
            linkedin: "https://www.linkedin.com/in/mkrtich-sargsyan/",
            github: "https://github.com/example3",
            description: "Building scalable solutions with precision, turning vision into seamless technology.",
        },
    ];

    return (
        <section
            id="team"
            className="relative w-full py-32 md:py-48 overflow-visible text-white scroll-mt-18"
            style={{
                background: "radial-gradient(circle at top right, #0a0f24 0%, #01030a 100%)",
            }}
        >
            {/* Background abstract shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-10 right-0 w-[32rem] h-[32rem] bg-purple-600/10 rounded-full blur-3xl animate-float delay-2000"></div>
                <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 text-center">
                <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
                    Our <span className="text-blue-400">Visionaries</span>
                </h2>
                <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-24">
                    Meet the brilliant minds shaping the future of our company. Their expertise, creativity, and vision drive every innovation.
                </p>

                <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
                    {founders.map((founder, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx === 0 ? -100 : idx === 1 ? 0 : 100, y: 50, scale: 0.8 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, delay: idx * 0.3 }}
                            className="relative w-64 md:w-72 flex flex-col items-center rounded-full p-6"
                        >
                            {/* Glass blob */}
                            <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4 bg-gradient-to-tr from-white/10 to-blue-400/20 backdrop-blur-lg border border-white/10 shadow-lg animate-float">
                                <Image
                                    src={founder.image}
                                    alt={founder.name}
                                    fill
                                    className="object-cover rounded-full"
                                />
                            </div>

                            <h3 className="text-xl sm:text-2xl font-semibold mb-1">{founder.name}</h3>
                            <p className="text-blue-400 text-sm mb-2">{founder.role}</p>

                            {/* Description */}
                            <p className="text-gray-300 text-center text-sm mb-4 px-2">
                                {founder.description}
                            </p>

                            <div className="flex justify-center space-x-4">
                                <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href={founder.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                                    <Github className="w-6 h-6" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>




    <div className="absolute bottom-0 w-full pointer-events-none overflow-hidden h-40">
                {/* Layer 1: Large soft gradient orb */}
                <svg className="absolute -left-1/4 w-[120%] h-40 opacity-30" viewBox="0 0 1200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="600" cy="80" r="120" fill="url(#orb1)" />
                    <defs>
                        <radialGradient id="orb1" cx="600" cy="80" r="120" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#0a0f24" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#01030a" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>

                {/* Layer 2: Medium glowing ellipse cluster */}
                <svg className="absolute left-0 w-full h-40 opacity-25" viewBox="0 0 1200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="300" cy="80" rx="150" ry="40" fill="url(#ellipse1)" />
                    <ellipse cx="900" cy="80" rx="100" ry="25" fill="url(#ellipse2)" />
                    <defs>
                        <radialGradient id="ellipse1" cx="300" cy="80" r="150" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#1a1f3b" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#0a0f24" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="ellipse2" cx="900" cy="80" r="100" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#2a2c50" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#0a0f24" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>

                {/* Layer 3: Small floating orbs for sparkle effect */}
                <svg className="absolute w-full h-40" viewBox="0 0 1200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="60" r="5" fill="#3b3d63" opacity="0.5" />
                    <circle cx="400" cy="100" r="3" fill="#4f4f7f" opacity="0.4" />
                    <circle cx="600" cy="50" r="6" fill="#3b3d63" opacity="0.5" />
                    <circle cx="800" cy="90" r="4" fill="#4f4f7f" opacity="0.3" />
                    <circle cx="1000" cy="70" r="5" fill="#3b3d63" opacity="0.4" />
                </svg>

                {/* Layer 4: Wavy abstract line across full width */}
                <svg className="absolute w-full h-20 bottom-0 opacity-20" viewBox="0 0 1200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 20C150 10 300 30 450 20C600 10 750 30 900 20C1050 10 1200 30 1200 20" stroke="#3b3d63" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>
        </section>
    );
}
