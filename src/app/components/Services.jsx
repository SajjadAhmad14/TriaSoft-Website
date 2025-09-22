"use client";

import React from "react";
import { CodeBracketIcon, PencilSquareIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const services = [
    {
        icon: CodeBracketIcon,
        title: "SaaS MVP",
        description:
            "We turn early concepts into working SaaS products that impress investors and users alike.",
    },
    {
        icon: PencilSquareIcon,
        title: "Marketplaces",
        description:
            "We’ve got the core ready—onboarding, scheduling, payments, ratings, dashboards. Plug in your idea, and we’ll shape it fast.",
    },
    {
        icon: ChartBarIcon,
        title: "E-commerce",
        description:
            "We build fast, SEO-friendly storefronts. Custom product pages, headless CMS, and smooth checkouts—ready for brands that want to move fast and scale.",
    },
];

function Services() {
    return (
        <section
            id="services"
            className="w-full flex flex-col items-center text-center px-4 sm:px-6 lg:px-12 py-24 sm:py-32 lg:py-40 scroll-mt-24"
            style={{
                background: "linear-gradient(135deg, #0c1a33 0%, #0f2a5b 40%, #1e3a8a 90%)",
            }}
        >
            {/* Title */}
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-12 sm:mb-16 lg:mb-24 leading-snug text-white drop-shadow-lg">
                The Services We Offer{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                    For You
                </span>
            </h2>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-7xl w-full">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={service.title}
                            className="flex flex-col items-center justify-center text-center min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg cursor-pointer"
                            whileHover={{
                                scale: 1.07,
                                // rotateZ: [0, 1.5, -1.5, 0],
                                boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)",
                            }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-white/10 shadow-lg mb-6 sm:mb-8 backdrop-blur-sm hover:shadow-blue-500/50 transition-shadow duration-500">
                                <Icon className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-blue-400 drop-shadow-md" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                                {service.title}
                            </h3>
                            <p className="text-gray-300 text-base sm:text-lg">{service.description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

export default Services;
