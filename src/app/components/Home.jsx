"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Globe2, DollarSign, Briefcase, Users } from "lucide-react";

function Home() {
    const benefits = [
        {
            icon: <Globe2 size={40} className="text-blue-400" />,
            label: "Global Reach",
        },
        {
            icon: <DollarSign size={40} className="text-green-400" />,
            label: "Cost Efficiency",
        },
        {
            icon: <Briefcase size={40} className="text-purple-400" />,
            label: "Expert Solutions",
        },
        {
            icon: <Users size={40} className="text-pink-400" />,
            label: "Client Attraction",
        },
    ];

    return (
        <section
            id="home"
            className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-32 overflow-hidden bg-gradient-to-b from-[#050510] via-[#0a0f24] to-[#01030a]"
        >
            {/* Glowing orbs background */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-700/30 rounded-full blur-[180px] animate-pulse" />
            <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-purple-700/20 rounded-full blur-[200px] animate-pulse" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white mb-8"
                >
                    <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                        Empowering Your Business
                    </span>
                    <br />
                    <span className="text-gray-200">
                        Through Innovative Solutions
                    </span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mb-12"
                >
                    We craft digital experiences that don’t just look stunning —
                    they fuel growth and set your brand apart.
                </motion.p>

                {/* CTA Button */}
                <motion.a
                    href="#contact"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <button className="flex items-center gap-3 px-10 py-4 rounded-full text-lg font-semibold text-white shadow-xl bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 transition-transform hover:scale-105">
                        Contact Us
                        <ArrowRightIcon className="w-6 h-6" />
                    </button>
                </motion.a>
            </div>

            {/* Benefits */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative z-10 w-full max-w-6xl mx-auto mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
            >
                {benefits.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center p-8 rounded-2xl bg-gray-900/60 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                    >
                        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/5 shadow-md mb-6">
                            {item.icon}
                        </div>
                        <p className="text-lg font-medium text-gray-200">
                            {item.label}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1.2 }}
                className="absolute bottom-10 flex flex-col items-center z-20"
            >
                <div className="w-1 h-14 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full animate-bounce" />
                <span className="text-gray-500 text-sm mt-2">Scroll Down</span>
            </motion.div>
        </section>
    );
}

export default Home;
