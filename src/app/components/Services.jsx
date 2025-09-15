import React from 'react'
import { CodeBracketIcon, PencilSquareIcon, ChartBarIcon } from "@heroicons/react/24/outline";

function Services() {
    return (
        <section
            id="services"
            className="w-full flex flex-col items-center text-center px-4 sm:px-6 lg:px-12 py-24 sm:py-32 lg:py-40 scroll-mt-24"
            style={{
                background: "linear-gradient(135deg, #0d1b2a 0%, #0f2a5b 40%, #1e40af 90%)",
            }}
        >
            {/* Title */}
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-12 sm:mb-16 lg:mb-24 leading-snug">
                <span className="text-white">The Services We Offer </span>
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    For You
                </span>
            </h2>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-7xl w-full">
                {/* Card 1 */}
                <div className="flex flex-col items-center justify-center text-center min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 hover:border-white/40">
                    <CodeBracketIcon className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-blue-400 mb-6 sm:mb-8" />
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">SaaS MVP</h3>
                    <p className="text-gray-300 text-base sm:text-lg">
                        We turn early concepts into working SaaS products that impress investors and users alike.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center justify-center text-center min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 hover:border-white/40">
                    <PencilSquareIcon className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-blue-400 mb-6 sm:mb-8" />
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Marketplaces</h3>
                    <p className="text-gray-300 text-base sm:text-lg">
                        We’ve got the core ready—onboarding, scheduling, payments, ratings, dashboards. Plug in your idea, and we’ll shape it fast.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col items-center justify-center text-center min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] p-6 sm:p-8 lg:p-10 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 hover:border-white/40">
                    <ChartBarIcon className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-blue-400 mb-6 sm:mb-8" />
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">E-commerce</h3>
                    <p className="text-gray-300 text-base sm:text-lg">
                        We build fast, SEO-friendly storefronts. Custom product pages, headless CMS, and smooth checkouts—ready for brands that want to move fast and scale.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services
