import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Globe2, DollarSign, Briefcase, Users } from "lucide-react";

function Home() {
    return (
        <section
            id="hero"
            className="w-full mt-60 flex flex-col justify-center items-center text-center text-text-light"
        >
            {/* Big Text */}
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
                <span
                    className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
                >
                    Smart Choices
                </span>
                <br />
                <span className="text-white">
                    For Your Business Growth
                </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-8">
                We're a team of experienced designers, developers, and marketers,
                passionate about delivering exceptional digital solutions.
            </p>

            {/* Contact Button */}
            <a href="#contact">
                <button className="flex items-center gap-2 bg-accent bg-blue-600 hover:bg-blue-400 text-white font-semibold px-5 py-2 rounded-4xl">
                    Contact Us
                    <ArrowRightIcon className="w-5 h-5" />
                </button>
            </a>

            <div className="relative w-full flex justify-center mt-36 mb-36">
                <div className="relative z-10 w-8/12 rounded-3xl bg-blue-900 backdrop-blur-md shadow-lg p-12 text-center overflow-visible">

                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-3/4 h-12 rounded-t-3xl bg-blue-900 z-0 pointer-events-none" />

                    <h3 className="relative text-3xl md:text-4xl font-bold text-white z-10">
                        Benefit of improving your business
                    </h3>

                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-10 text-white">
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/20 shadow-lg mb-4">
                                <Globe2 size={36} />
                            </div>
                            <p className="text-lg font-semibold text-center">Expanding the Market</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/20 shadow-lg mb-4">
                                <DollarSign size={36} />
                            </div>
                            <p className="text-lg font-semibold text-center">Cost Effective</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/20 shadow-lg mb-4">
                                <Briefcase size={36} />
                            </div>
                            <p className="text-lg font-semibold text-center">More Professional</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/20 shadow-lg mb-4">
                                <Users size={36} />
                            </div>
                            <p className="text-lg font-semibold text-center">Attract Client</p>
                        </div>
                    </div>



                </div>
            </div>


            <div className="left-0 w-full bg-gray-950 py-8 h-44 flex justify-around right-0">
                <div className="flex items-center w-full px-12 gap-8">
                    <div className="flex-1 flex justify-center">
                        <img src="/logos/airbnb.svg" alt="Airbnb" className="h-16 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition" />
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img src="/logos/badoo.svg" alt="Badoo" className="h-16 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition" />
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img src="/logos/google.svg" alt="Google" className="h-16 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition" />
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img src="/logos/microstation.svg" alt="Microstation" className="h-16 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition" />
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img src="/logos/porsche.svg" alt="Porsche" className="h-16 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition" />
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img src="/logos/slack.svg" alt="Slack" className="h-16 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition" />
                    </div>
                </div>
            </div>



        </section>
    )
}

export default Home