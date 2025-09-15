import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Globe2, DollarSign, Briefcase, Users } from "lucide-react";

function Home() {
    return (
        <section
            id="hero"
            className="w-full mt-32 md:mt-60 flex flex-col justify-center items-center text-center px-4"
        >
            {/* Big Text */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                    Smart Choices
                </span>
                <br />
                <span className="text-white">For Your Business Growth</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-8 px-2">
                We're a team of experienced designers and developers, passionate about
                delivering exceptional digital solutions.
            </p>

            {/* Contact Button */}
            <a href="#contact">
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-full text-base sm:text-lg transition">
                    Contact Us
                    <ArrowRightIcon className="w-5 h-5" />
                </button>
            </a>

            {/* Benefits Card */}
            <div className="relative w-full flex justify-center mt-20 sm:mt-28 mb-20 sm:mb-28 px-4">
                <div className="relative z-10 w-full sm:w-10/12 lg:w-8/12 rounded-3xl bg-blue-900 backdrop-blur-md shadow-lg p-6 sm:p-12 text-center overflow-visible">
                    {/* Decorative popped-up part */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-3/4 sm:w-2/3 h-10 sm:h-12 rounded-t-3xl bg-blue-900 z-0 pointer-events-none" />

                    <h3 className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-white z-10">
                        Benefit of improving your business
                    </h3>

                    <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 text-white">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-white/20 shadow-lg mb-4">
                                <Globe2 size={28} className="sm:size-36" />
                            </div>
                            <p className="text-sm sm:text-lg font-semibold text-center">
                                Expanding the Market
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-white/20 shadow-lg mb-4">
                                <DollarSign size={28} className="sm:size-36" />
                            </div>
                            <p className="text-sm sm:text-lg font-semibold text-center">
                                Cost Effective
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-white/20 shadow-lg mb-4">
                                <Briefcase size={28} className="sm:size-36" />
                            </div>
                            <p className="text-sm sm:text-lg font-semibold text-center">
                                More Professional
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-white/20 shadow-lg mb-4">
                                <Users size={28} className="sm:size-36" />
                            </div>
                            <p className="text-sm sm:text-lg font-semibold text-center">
                                Attract Client
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Partner Logos */}
            <div className="w-full bg-gray-950 py-8 sm:py-10 flex justify-center">
                <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 max-w-6xl w-full px-4">
                    <img
                        src="/logos/airbnb.svg"
                        alt="Airbnb"
                        className="h-10 sm:h-16 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition"
                    />
                    <img
                        src="/logos/badoo.svg"
                        alt="Badoo"
                        className="h-10 sm:h-16 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition"
                    />
                    <img
                        src="/logos/google.svg"
                        alt="Google"
                        className="h-10 sm:h-16 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition"
                    />
                    <img
                        src="/logos/microstation.svg"
                        alt="Microstation"
                        className="h-10 sm:h-16 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition"
                    />
                    <img
                        src="/logos/porsche.svg"
                        alt="Porsche"
                        className="h-10 sm:h-16 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition"
                    />
                    <img
                        src="/logos/slack.svg"
                        alt="Slack"
                        className="h-10 sm:h-16 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition"
                    />
                </div>
            </div>
        </section>
    );
}

export default Home;
