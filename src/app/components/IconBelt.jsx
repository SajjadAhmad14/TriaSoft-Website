"use client";
import React from "react";

const icons = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", label: "Node.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", label: "TypeScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", label: "Java" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", label: "C++" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg", label: "Rust" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", label: "Go" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", label: "Angular" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", label: "Vue.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", label: "Docker" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", label: "Git" },
];

export default function IconBelt() {
    return (
        <section className="relative w-full  ">

            <div className="text-center mb-16 px-6">
                <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
                    <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                        Technologies We Work With
                    </span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
                    A showcase of the programming languages and frameworks powering our solutions.
                </p>
            </div>

            {/* Infinite scrolling row */}
            <div className="relative w-full overflow-hidden">
                <div className="flex animate-marquee space-x-12 sm:space-x-20">
                    {[...icons, ...icons, ...icons].map((icon, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-white/5 border border-white/10 shadow-md hover:shadow-blue-500/60 transition-all duration-300"
                        >
                            <img
                                src={icon.src}
                                alt={icon.label}
                                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                            />
                            <span className="text-gray-300 text-sm mt-2">{icon.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
