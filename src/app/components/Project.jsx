import Image from "next/image";
import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

function Project() {
    const [activeFilter, setActiveFilter] = useState(null);

    const filters = [
        "UX/UI Design",
        "Digital Marketing",
        "Sosmed Management",
        "Development",
    ];

    return (
        <section className="w-full py-40 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Intro Text */}
                <p className="text-xl md:text-2xl font-medium leading-relaxed mb-24">
                    We are passionate about helping businesses grow and succeed in the digital age.
                    We take pride in our work and strive to exceed your expectations every time.
                </p>

                {/* Stats Area in Card */}
                <div className="rounded-3xl bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-md shadow-xl p-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        <div className="flex flex-col items-center">
                            <h3 className="text-4xl md:text-5xl font-bold text-white">10+</h3>
                            <p className="text-lg mt-2 text-gray-200">Years of Experience</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-4xl md:text-5xl font-bold text-white">666+</h3>
                            <p className="text-lg mt-2 text-gray-200">Projects Completed</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-4xl md:text-5xl font-bold text-white">555+</h3>
                            <p className="text-lg mt-2 text-gray-200">Satisfied Clients</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-4xl md:text-5xl font-bold text-white">10+</h3>
                            <p className="text-lg mt-2 text-gray-200">Awards Achieved</p>
                        </div>
                    </div>
                </div>

                {/* Heading under Stats */}
                <h2 className="text-4xl md:text-5xl font-bold mt-24 mb-6">
                    Our Project Have Been{" "}
                    <span className="text-blue-400">Done</span>
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-16">
                    Take a look at some of our recent projects and see how we've helped
                    other businesses elevate their brand and drive business growth.
                </p>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-24">
                    {filters.map((filter, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === filter
                                ? "bg-blue-500 text-white"
                                : "bg-white/10 text-gray-200 hover:bg-blue-500 hover:text-white"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Project Cards */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Card 1 */}
                    <div className="rounded-2xl bg-gray-800 shadow-lg p-4 group relative overflow-hidden">
                        <div className="relative w-full h-[30rem]">
                            <Image
                                src="/images/p1.jpeg"
                                alt="Project 1"
                                fill
                                className="object-cover rounded-xl"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                <a
                                    href="https://example.com/project1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-white/20 rounded-full hover:bg-white/40 transition"
                                >
                                    <ExternalLink className="w-8 h-8 text-white" />
                                </a>
                            </div>
                        </div>
                        <div className="p-6 text-left">
                            <h3 className="text-2xl font-semibold mb-2">Project Title One</h3>
                            <p className="text-gray-300">
                                We are designed to help your business thrive in the online world.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-2xl bg-gray-800 shadow-lg p-4 group relative overflow-hidden">
                        <div className="relative w-full h-[30rem]">
                            <Image
                                src="/images/p2.jpeg"
                                alt="Project 2"
                                fill
                                className="object-cover rounded-xl"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                <a
                                    href="https://example.com/project2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-white/20 rounded-full hover:bg-white/40 transition"
                                >
                                    <ExternalLink className="w-8 h-8 text-white" />
                                </a>
                            </div>
                        </div>
                        <div className="p-6 text-left">
                            <h3 className="text-2xl font-semibold mb-2">Project Title Two</h3>
                            <p className="text-gray-300">
                                We are designed to help your business thrive in the online world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;
