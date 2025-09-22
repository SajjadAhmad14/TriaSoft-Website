import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Globe2, DollarSign, Briefcase, Users } from "lucide-react";

function Home() {
    return (
        <section
            id="home"
            className="w-full flex flex-col justify-center items-center text-center px-4 py-32 scroll-mt-24"
            style={{
                background: "radial-gradient(circle at top left, #1e3a8a 0%, #0f172a 60%, #1e40af 100%)",
            }}
        >
            {/* Big Text */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-white drop-shadow-lg">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                    Empowering Your Business
                </span>
                <br />
                <span className="text-white">Through Innovative Solutions</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mb-8 px-2 drop-shadow-md">
                We design and develop digital products that drive results and elevate your brand.
            </p>

            {/* Contact Button */}
            <a href="#contact">
                <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 text-white font-semibold px-6 py-3 rounded-full text-base sm:text-lg shadow-lg transition-transform hover:scale-105">
                    Contact Us
                    <ArrowRightIcon className="w-5 h-5" />
                </button>
            </a>

            {/* Benefits Card */}
            <div className="relative w-full flex justify-center mt-20 sm:mt-28 mb-20 sm:mb-28 px-4">
                <div className="relative z-10 w-full sm:w-10/12 lg:w-8/12 rounded-3xl  bg-blue-950 backdrop-blur-md shadow-2xl p-6 sm:p-12 text-center overflow-visible">
                    {/* Decorative popped-up part */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-3/4 sm:w-2/3 h-10 sm:h-12 rounded-t-3xl bg-blue-950 z-0 pointer-events-none" />

                    <h3 className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-white z-10 drop-shadow-md">
                        Benefits of Partnering With Us
                    </h3>

                    <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 text-white">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-white/10 shadow-lg mb-4 backdrop-blur-sm">
                                <Globe2 size={28} className="sm:size-36 text-blue-300 drop-shadow-md" />
                            </div>
                            <p className="text-sm sm:text-lg font-semibold text-center">
                                Expanding Market Reach
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-white/10 shadow-lg mb-4 backdrop-blur-sm">
                                <DollarSign size={28} className="sm:size-36 text-green-300 drop-shadow-md" />
                            </div>
                            <p className="text-sm sm:text-lg font-semibold text-center">
                                Cost Effective
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-white/10 shadow-lg mb-4 backdrop-blur-sm">
                                <Briefcase size={28} className="sm:size-36 text-purple-300 drop-shadow-md" />
                            </div>
                            <p className="text-sm sm:text-lg font-semibold text-center">
                                Professional Solutions
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-white/10 shadow-lg mb-4 backdrop-blur-sm">
                                <Users size={28} className="sm:size-36 text-pink-300 drop-shadow-md" />
                            </div>
                            <p className="text-sm sm:text-lg font-semibold text-center">
                                Attract Clients
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
