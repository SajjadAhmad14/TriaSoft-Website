"use client";
import React from "react";
import { CodeBracketIcon, PencilSquareIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

// Services data
const services = [
    {
        icon: CodeBracketIcon,
        title: "SaaS MVP",
        description:
            "We turn early concepts into working SaaS products that impress investors and users alike.",
        color: "from-blue-500 to-indigo-500",
    },
    {
        icon: PencilSquareIcon,
        title: "Marketplaces",
        description:
            "We’ve got the core ready—onboarding, scheduling, payments, ratings, dashboards. Plug in your idea, and we’ll shape it fast.",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: ChartBarIcon,
        title: "E-commerce",
        description:
            "We build fast, SEO-friendly storefronts. Custom product pages, headless CMS, and smooth checkouts—ready for brands that want to move fast and scale.",
        color: "from-green-400 to-teal-400",
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="relative w-full flex flex-col items-center text-center px-6 py-32 sm:py-40 lg:py-48 scroll-mt-24"
            style={{
                background: "radial-gradient(circle at top left, #0a0f24 0%, #01030a 100%)",
            }}
        >
            {/* Floating subtle orbs */}
            <div className="absolute top-16 left-16 w-48 h-48 rounded-full bg-blue-700/10 blur-[100px] animate-pulse" />
            <div className="absolute bottom-16 right-16 w-64 h-64 rounded-full bg-purple-700/10 blur-[120px] animate-pulse" />
            <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-pink-600/10 blur-[80px] animate-pulse" />
            <div className="absolute bottom-1/3 right-1/3 w-32 h-32 rounded-full bg-indigo-500/10 blur-[90px] animate-pulse" />

            {/* Section Title */}
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-2xl leading-tight mb-6"
            >
                Our Services{" "}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                    Tailored For You
                </span>
            </motion.h2>

            {/* Subtitle / Description */}
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-300 max-w-3xl mb-16 sm:mb-20 text-lg sm:text-xl leading-relaxed"
            >
                We create impactful digital solutions designed to grow your business, optimize your workflow, and delight your users. From early-stage MVPs to full-scale platforms, our team ensures every product is robust, scalable, and stunning.
            </motion.p>

            {/* Subtle divider */}
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="w-24 h-1 mb-12 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 rounded-full"
            />

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl w-full z-10 relative">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={service.title}
                            className="flex flex-col items-center justify-start text-center p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-3xl border border-white/20 shadow-2xl cursor-pointer relative overflow-hidden group"
                            whileHover={{ scale: 1.07 }}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.25 }}
                        >
                            {/* Neon glowing circles */}
                            <div
                                className={`absolute -top-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-r ${service.color} opacity-20 blur-3xl animate-pulse`}
                            />
                            <div
                                className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-r ${service.color} opacity-10 blur-3xl animate-pulse`}
                            />

                            <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-white/10 shadow-xl mb-6 sm:mb-8 backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
                                <Icon className="h-16 w-16 sm:h-20 sm:w-20 text-white drop-shadow-lg" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 drop-shadow-md">
                                {service.title}
                            </h3>
                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                {service.description}
                            </p>

                            {/* Gradient underline animation */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 group-hover:w-20 transition-all duration-500 rounded-full" />
                        </motion.div>
                    );
                })}
            </div>

            {/* Full-width bottom abstract decoration */}
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
