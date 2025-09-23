"use client";
import Image from "next/image";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

function Project() {
    const [activeFilter, setActiveFilter] = useState(null);

    const filters = [
        "UX/UI Design",
        "Digital Marketing",
        "Sosmed Management",
        "Development",
    ];

    const projects = [
        {
            title: "Project Title One",
            description: "We are designed to help your business thrive in the online world.",
            image: "/images/p1.jpeg",
            link: "https://example.com/project1",
        },
        {
            title: "Project Title Two",
            description: "We are designed to help your business thrive in the online world.",
            image: "/images/p2.jpeg",
            link: "https://example.com/project2",
        },
    ];

    return (
        <section
            id="projects"
            className="relative w-full py-24 sm:py-32 lg:py-40 scroll-mt-18 overflow-visible"
            style={{
                background: "radial-gradient(circle at top right, #0a0f24 0%, #01030a 100%)",
            }}
        >
            {/* Floating abstract shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl animate-float"></div>
                <div className="absolute bottom-10 right-0 w-[32rem] h-[32rem] rounded-full bg-purple-600/10 blur-3xl animate-float delay-2000"></div>
                <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-pink-500/10 blur-3xl animate-float delay-1000"></div>
            </div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                {/* Intro Text */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed mb-16 sm:mb-20 md:mb-24 text-gray-300"
                >
                    We are passionate about helping businesses grow and succeed in the digital age.
                    Our work is crafted to exceed expectations and inspire trust.
                </motion.p>

                {/* Stats Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="rounded-3xl bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-md shadow-2xl p-8 sm:p-10 lg:p-12 mb-16 sm:mb-20"
                >
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
                        <div className="flex flex-col items-center">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">10+</h3>
                            <p className="text-base sm:text-lg mt-2 text-gray-200 text-center">Years of Experience</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">666+</h3>
                            <p className="text-base sm:text-lg mt-2 text-gray-200 text-center">Projects Completed</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">555+</h3>
                            <p className="text-base sm:text-lg mt-2 text-gray-200 text-center">Satisfied Clients</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">10+</h3>
                            <p className="text-base sm:text-lg mt-2 text-gray-200 text-center">Awards Achieved</p>
                        </div>
                    </div>
                </motion.div>

                {/* Heading under Stats */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug text-white"
                >
                    Our Projects Have Been{" "}
                    <span className="text-blue-400">Done</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.1 }}
                    className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 sm:mb-14 md:mb-16"
                >
                    Take a look at some of our recent projects and see how we've helped other businesses elevate their brand and drive growth.
                </motion.p>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16 sm:mb-20 md:mb-24"
                >
                    {filters.map((filter, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${activeFilter === filter
                                ? "bg-blue-500 text-white shadow-lg"
                                : "bg-white/10 text-gray-200 hover:bg-blue-500 hover:text-white"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </motion.div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
                    {projects.map((project, idx) => (
                        <Tilt
                            key={idx}
                            tiltEnable={true}
                            tiltMaxAngleX={3}
                            tiltMaxAngleY={3}
                            glareEnable={true}
                            glareMaxOpacity={0.05}
                            className="rounded-3xl shadow-xl p-3 sm:p-4 overflow-hidden bg-gradient-to-r from-[#0a0f1f]/95 to-[#1a0f2f]/95 transition-colors duration-300 hover:from-[#10132b]/95 hover:to-[#21133c]/95"
                        >
                            <div className="relative w-full h-64 sm:h-80 md:h-[28rem] lg:h-[30rem] rounded-3xl overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover rounded-3xl"
                                />
                                {/* Hover Overlay */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center rounded-3xl"
                                >
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 sm:p-4 bg-white/10 rounded-full hover:bg-white/20 transition"
                                    >
                                        <ExternalLink className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                                    </a>
                                </motion.div>
                            </div>
                            <div className="p-4 sm:p-6 text-left">
                                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                                <p className="text-gray-300 text-sm sm:text-base">{project.description}</p>
                            </div>
                        </Tilt>
                    ))}
                </div>

                {/* Extra Visual Element */}
                <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 w-2 h-24 rounded-full bg-gradient-to-b from-blue-400 to-purple-500 animate-bounce opacity-50" />
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                .delay-1000 { animation-delay: 1s; }
                .delay-2000 { animation-delay: 2s; }
            `}</style>
        </section>
    );
}

export default Project;
