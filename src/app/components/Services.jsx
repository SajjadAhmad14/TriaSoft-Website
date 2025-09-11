import React from 'react'

import { CodeBracketIcon, PencilSquareIcon, ChartBarIcon } from "@heroicons/react/24/outline";

function Services() {
    return (
        <section
            id="services"
            className="w-full flex flex-col items-center text-center px-6 py-40 scroll-mt-24"
            style={{
                background: "linear-gradient(135deg, #0d1b2a 0%, #0f2a5b 40%, #1e40af 90%)",
            }}
        >
            {/* Title */}
            <h2 className="text-4xl md:text-7xl font-bold mb-24">
                <span className="text-white">The Services We Offer </span>
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    For You
                </span>
            </h2>

            {/* Placeholder for services grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl w-full">
                {/* Card 1 */}
                <div className="flex flex-col items-center justify-center text-center min-h-[400px] max-w-[300px] mx-auto p-10 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 hover:border-white/40">
                    <CodeBracketIcon className="h-20 w-20 text-blue-400 mb-8" />
                    <h3 className="text-3xl font-bold text-white mb-6">Web Development</h3>
                    <p className="text-gray-300 text-lg">
                        Modern and scalable websites tailored to your business needs.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center justify-center text-center min-h-[400px] max-w-[300px] mx-auto p-10 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 hover:border-white/40">
                    <PencilSquareIcon className="h-20 w-20 text-blue-400 mb-8" />
                    <h3 className="text-3xl font-bold text-white mb-6">UI/UX Design</h3>
                    <p className="text-gray-300 text-lg">
                        Beautiful, user-friendly interfaces that enhance customer experience.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center justify-center text-center min-h-[400px] max-w-[300px] mx-auto p-10 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 hover:border-white/40">
                    <ChartBarIcon className="h-20 w-20 text-blue-400 mb-8" />
                    <h3 className="text-3xl font-bold text-white mb-6">Digital Marketing</h3>
                    <p className="text-gray-300 text-lg">
                        Strategies to grow your online presence and boost conversions.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Services